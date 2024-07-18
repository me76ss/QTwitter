import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCheckAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);
};
