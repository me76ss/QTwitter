import * as yup from "yup";
export const signupSchema = yup.object({
  username: yup.string().required("UserName is required"),
  email: yup.string().email("Email in not valid").required("Email is required"),
  password: yup.string().min(8,"Password must have at least 8 character").max(32,"Password must have less than 32 character").required("Password is required"),
});

export const loginSchema = yup.object({
  username: yup.string().required("UserName is required"),
  password: yup.string().min(8,"Password must have at least 8 character").max(32,"Password must have less than 32 character").required("Password is required"),
});
