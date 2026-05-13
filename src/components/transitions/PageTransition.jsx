import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

/**
 * Curtain page transition built with GSAP.
 *
 * The curtain is a single SVG path whose `d` attribute is parameterised by
 * two numbers — `v` (the vertical position of the flat edges, 0 = top,
 * 100 = bottom) and `q` (the y-position of the bezier control point that
 * shapes the curve). By tweening these two numbers we get a smooth,
 * morph-like animation without needing GSAP's premium MorphSVG plugin.
 *
 *   hidden  → v=100, q=100   (flat line sitting at the bottom, off-screen)
 *   peak    → v=50,  q=0     (curve sweeping upward)
 *   covered → v=0,   q=0     (flat line at the top, fully covering screen)
 *   sag     → v=50,  q=100   (curve sagging downward as it leaves)
 *
 * Imperative API (exposed via ref):
 *   cover()  → returns a Promise that resolves once the screen is covered.
 *   reveal() → returns a Promise that resolves once the curtain has left.
 */

const VIEW_BOX = "0 0 100 100";

const buildPath = (v, q) => `M 0 100 V ${v} Q 50 ${q} 100 ${v} V 100 z`;

const KEYFRAMES = {
  hidden: { v: 100, q: 100 },
  peak: { v: 50, q: 0 },
  covered: { v: 0, q: 0 },
  sag: { v: 50, q: 100 },
};

const DURATION = {
  in: 0.32,
  out: 0.28,
};

const PageTransition = forwardRef(function PageTransition(_, ref) {
  const pathRef = useRef(null);
  const overlayRef = useRef(null);
  const activeTl = useRef(null);

  const animate = (from, mid, to, easeIn, easeOut) =>
    new Promise((resolve) => {
      activeTl.current?.kill();
      const proxy = { ...from };
      const apply = () => {
        pathRef.current?.setAttribute("d", buildPath(proxy.v, proxy.q));
      };
      apply();

      activeTl.current = gsap
        .timeline({ onComplete: resolve })
        .to(proxy, {
          ...mid,
          duration: DURATION.in,
          ease: easeIn,
          onUpdate: apply,
        })
        .to(proxy, {
          ...to,
          duration: DURATION.out,
          ease: easeOut,
          onUpdate: apply,
        });
    });

  useImperativeHandle(ref, () => ({
    cover: () => {
      gsap.set(overlayRef.current, { pointerEvents: "auto" });
      return animate(
        KEYFRAMES.hidden,
        KEYFRAMES.peak,
        KEYFRAMES.covered,
        "power2.in",
        "power2.out"
      );
    },
    reveal: async () => {
      await animate(
        KEYFRAMES.covered,
        KEYFRAMES.sag,
        KEYFRAMES.hidden,
        "power2.in",
        "power2.out"
      );
      gsap.set(overlayRef.current, { pointerEvents: "none" });
    },
  }));

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{ pointerEvents: "none", zIndex: 9999 }}
      className="fixed inset-0 overflow-hidden"
    >
      <svg
        viewBox={VIEW_BOX}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient
            id="page-transition-grad"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--color-custom)" />
            <stop offset="1" stopColor="var(--color-custom)" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={buildPath(KEYFRAMES.hidden.v, KEYFRAMES.hidden.q)}
          fill="url(#page-transition-grad)"
          stroke="url(#page-transition-grad)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
});

export default PageTransition;
