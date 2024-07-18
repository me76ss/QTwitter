import { useMutation } from "@tanstack/react-query";
import { Axios } from "../configs/axios";

export const useLoginAPI = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (body) => {
      const response = await Axios.post("/api/login/",body);
      return response.data;
    },
  });
};