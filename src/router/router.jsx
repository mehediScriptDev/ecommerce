import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import UserDashboardLayout from "../layout/UserDashboardLayout";
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
import AdminOverview from "../pages/admin/overview/AdminOverview";
import UserOrders from "../pages/user/UserOrders";
import Listings from "../pages/admin/listings/Listings";
import Addlisting from "../pages/admin/addlisting/Addlisting";
import Order from "../pages/admin/order/Order";
import CellPhoneMange from "../pages/admin/cellphoneMange/CellPhoneMange";
import PromoCode from "../pages/admin/promoCode/PromoCode";
import CreatePromo from "../pages/admin/createPromo/CreatePromo";
import UserManagement from "../pages/admin/userManagement/UserManagement";
import AdminProfile from "../pages/admin/adminProfile/AdminProfile";
import Settings from "../pages/admin/settings/Settings";
import Cart from "../pages/public/cart/Cart";

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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  // admin dashboard routes
  {
    path: "/dashboard/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminOverview /> },
      { path: "listing", element: <Listings /> },
      {
        path:"add-listing", element:<Addlisting/>
      },
      { path: "order", element: <Order /> },
      { path: "cell-phone", element: <CellPhoneMange /> },
      { path: "promo-code", element: <PromoCode /> },
      { path: "create-promo", element: <CreatePromo /> },
      { path: "user-management", element: <UserManagement /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <AdminProfile /> },
    ],
  },

  // user dashboard routes
  {
    path: "/dashboard/user",
    element: <UserDashboardLayout />,
    children: [
      { index: true, element: <UserOrders /> },
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
