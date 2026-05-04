
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/404/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },

  // not found route
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default router;