import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "../pages";
import { AppLayout } from "../layouts";
import NotFound from "../pages/Error/NotFound";
import { AuthProvider } from "../provider/AuthProvider";

export const ROUTER_CONFIG = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <AppLayout></AppLayout>
      </AuthProvider>
    ),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/home",
        element: (
          <AuthProvider>
            <HomePage />
          </AuthProvider>
        ),
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
