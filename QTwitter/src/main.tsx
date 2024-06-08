import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layouts";
import { HomePage, LoginPage, SignUpPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children:[{
      path:"/",
      element: <HomePage></HomePage>
    }]
  },
  {
    path:"/login",
    element: <LoginPage></LoginPage>
  },
  {
    path:"signup",
    element: <SignUpPage></SignUpPage>
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
