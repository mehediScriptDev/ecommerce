import {
  createContext,
  useCallback,
  useContext,
  useRef,
} from "react";
import { useNavigate } from "react-router";
import PageTransition from "./PageTransition";

const PageTransitionContext = createContext(null);

/**
 * Hook for triggering an animated route change.
 *
 * Usage:
 *   const { transitionTo } = usePageTransition();
 *   transitionTo("/product-details");
 */
export const usePageTransition = () => {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error(
      "usePageTransition must be used within a <PageTransitionProvider>"
    );
  }
  return ctx;
};

// Wait for the browser to paint before kicking off the reveal so the
// destination page is on screen behind the curtain.
const nextFrame = () =>
  new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve))
  );

export default function PageTransitionProvider({ children }) {
  const transitionRef = useRef(null);
  const isAnimating = useRef(false);
  const navigate = useNavigate();

  const transitionTo = useCallback(
    async (to, options) => {
      // Prevent overlapping transitions; just navigate as a fallback.
      if (isAnimating.current || !transitionRef.current) {
        navigate(to, options);
        return;
      }

      isAnimating.current = true;
      try {
        await transitionRef.current.cover();
        navigate(to, options);
        await nextFrame();
        await transitionRef.current.reveal();
      } finally {
        isAnimating.current = false;
      }
    },
    [navigate]
  );

  return (
    <PageTransitionContext.Provider value={{ transitionTo }}>
      {children}
      <PageTransition ref={transitionRef} />
    </PageTransitionContext.Provider>
  );
}
