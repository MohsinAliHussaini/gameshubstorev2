import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewArrivals from "./NewArrivals/NewArrivals";
import PS5Product from "./PS5Product/PS5Product";
import PS4Product from "./PS4Product/PS4Product";
import XboxProduct from "./XboxProduct/XboxProduct";
import NintendoProduct from "./NintendoProduct/NintendoProduct";
import OtherProduct from "./OtherProduct/OtherProduct";
import { utils } from "./Utils";
import SingleProduct from "./SingleProduct/SingleProduct";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import AdminProducts from "./Admin/AdminProducts/AdminProducts";
import AdminOrder from "./Admin/AdminOrder/AdminOrder";
import AddProduct from "./Admin/AdminProducts/AddProduct";
import AdminHeader from "./Admin/AdminHeader/AdminHeader";
console.log("Uitls", utils);
const router = createBrowserRouter([
  {
    path: utils.routesName.home,
    element: <App />,
  },
  {
    path: utils.routesName.newArrivals,
    element: <NewArrivals />,
  },
  {
    path: utils.routesName.ps5Link,
    element: <PS5Product />,
  },
  {
    path: utils.routesName.ps4Link,
    element: <PS4Product />,
  },
  {
    path: utils.routesName.xboxLink,
    element: <XboxProduct />,
  },
  {
    path: utils.routesName.nintendoLink,
    element: <NintendoProduct />,
  },
  {
    path: utils.routesName.accessories,
    element: <OtherProduct />,
  },
  {
    path: utils.routesName.singleProduct,
    element: <SingleProduct />,
  },
  {
    path: utils.routesName.cart,
    element: <ShoppingCart />,
  },
  {
    path: utils.routesName.SingleProduct,
    element: <SingleProduct />,
  },
  {
    path: utils.routesName.adminProducts,
    element: <AdminProducts />,
  },
  {
    path: utils.routesName.adminOrder,
    element: <AdminOrder />,
  },
  {
    path: utils.routesName.addProduct,
    element: <AddProduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
