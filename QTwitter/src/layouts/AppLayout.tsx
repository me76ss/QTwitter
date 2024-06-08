import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/navBar";

export const AppLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};
