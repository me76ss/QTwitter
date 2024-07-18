import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { ROUTER_CONFIG } from "./configs/router";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient}>
    <RouterProvider router={ROUTER_CONFIG}></RouterProvider>
    <ToastContainer />
    </QueryClientProvider>
    {/* <App /> */}
  </React.StrictMode>
);
