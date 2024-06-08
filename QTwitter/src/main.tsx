import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { ROUTER_CONFIG } from "./configs/router";
import { RouterProvider } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER_CONFIG}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
