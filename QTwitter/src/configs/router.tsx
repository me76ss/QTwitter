import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "../pages";
import { AppLayout } from "../layouts";

export const ROUTER_CONFIG = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
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
      path:"/signUp",
      element: <SignUpPage></SignUpPage> 
    }
  ]);