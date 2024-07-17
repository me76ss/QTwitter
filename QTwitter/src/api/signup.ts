import { useMutation } from "@tanstack/react-query";
import { Axios } from "../configs/axios";

export const useSignup = () => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (body) => {
      const response = await Axios.post("/api/signup",body);
      return response;
    },
  });
};