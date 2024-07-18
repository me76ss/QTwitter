import { Navigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({children}:any) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};
