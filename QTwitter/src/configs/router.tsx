import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "../pages";
import { AppLayout } from "../layouts";
import NotFound from "../pages/Error/NotFound";
// import { SignUp } from "../pages/SignUp/SignUp";

export const ROUTER_CONFIG = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      // {
      //   path:"/sign",
      //   element:<SignUp></SignUp>,
      // },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signUp",
    element: <SignUpPage></SignUpPage>,
  },
]);
