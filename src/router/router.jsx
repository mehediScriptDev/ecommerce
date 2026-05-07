import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/404/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgetPass from "../pages/auth/ForgetPass";
import Otp from "../pages/auth/Otp";
import ResetPass from "../pages/auth/ResetPass";
import Home from "../pages/public/home/Home";
import Products from "../pages/public/products/Products";
import Contact from "../pages/public/contact/Contact";
import ProductDetails from "../pages/public/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  // auth routes
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forget-password", element: <ForgetPass /> },
  { path: "/reset-password", element: <ResetPass /> },
  { path: "/otp-verification", element: <Otp /> },

  // not found route
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
