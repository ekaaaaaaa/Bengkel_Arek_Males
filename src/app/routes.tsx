import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import About from "./pages/About";
import Promotions from "./pages/Promotions";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerDashboard from "./pages/CustomerDashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";
import AdminDashboard from "./pages/AdminDashboard";
import ManageProducts from "./pages/ManageProducts";
import ManagePromos from "./pages/ManagePromos";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/menu",
    Component: Menu,
  },
  {
    path: "/menu/:id",
    Component: MenuDetail,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/promos",
    Component: Promotions,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/account",
    Component: CustomerDashboard,
  },
  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/orders",
    Component: OrderStatus,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/products",
    Component: ManageProducts,
  },
  {
    path: "/admin/promos",
    Component: ManagePromos,
  },
]);
