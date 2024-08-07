/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signupSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignupAPI } from "../../api/signup";
import { toast } from "react-toastify";

export const signup: React.FC = () => {
  const { mutate } = useSignupAPI();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: yupResolver(signupSchema),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitHandler = (formData: any) => {
    mutate(formData, {
      onSuccess: () => {
        toast.success("signup is successful");
        navigate("/login");
      },
      onError: () => {
        toast.error("Error, try again!!!");
      },
    });
  };

  return (
    <div className="flex flex-col w-96 items-start border-2 rounded-2xl px-10 py-4 bg-black text-black m-auto">
      <div className="border-2 rounded-xl m-auto p-1.5 mb-10 text-white bg-secondary">
        SignUp
      </div>

      <label className="border-1 rounded-2xl p-2 bg-secondary text-white">
        Email
      </label>
      <input
        className="border-2 w-full rounded-2xl p-2 mb-3 mt-2 bg-gray-200"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      {errors.email ? (
        <p className="text-error mb-3">{errors.email.message}</p>
      ) : null}
      <label className="border-1 rounded-2xl p-2  text-white bg-secondary">
        Username
      </label>
      <input
        className="border-2  w-full rounded-2xl p-2 mb-3 mt-2 bg-gray-200"
        type="text"
        placeholder="username"
        {...register("username")}
      />
      {errors.username ? (
        <p className="text-error mb-3">{errors.username.message}</p>
      ) : null}
      <label className="border-1 rounded-2xl p-2 bg-secondary text-white">
        password
      </label>
      <input
        className="border-2 w-full rounded-2xl p-2 mb-3 mt-2 bg-gray-200"
        type="password"
        placeholder="password"
        {...register("password")}
      />
      {errors.password ? (
        <p className="text-error mb-3">{errors.password.message}</p>
      ) : null}

      <button
        className="bg-primary text-white p-2 rounded-2xl self-end hover:opacity-90"
        onClick={handleSubmit(onSubmitHandler)}
      >
        submit
      </button>
      <div className="flex justify-center w-full">
        <Link to={"/login"}>
          <p className="border-2 rounded-2xl p-2 mt-4 text-white bg-slate-600 hover:opacity-85 hover:border-emerald-500">
            go to login page
          </p>
        </Link>
      </div>
    </div>
  );
};

// function SignUp() {

// }
// export default SignUp;

// import React, { useState } from 'react';
// const Register: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event: React.SyntheticEvent) => {
//     event.preventDefault();
//     // در اینجا می‌توانید منطق ثبت نام خود را با استفاده از ایمیل و رمز عبور وارد شده پیاده‌سازی کنید
//     console.log(`ایمیل: ${email}، رمز عبور: ${password}`);
//   };

//   return (
//     <div className="flex flex-col items-start border-2 rounded-2xl px-10 py-2 bg-gray-900 text-white">
//       <div className="border-2 rounded-xl m-auto p-1.5 mb-10 bg-primary text-white">
//         ثبت نام
//       </div>

//       <label className="border-2 rounded-2xl p-2 bg-gray-800 text-white">ایمیل</label>
//       <input
//         className="border-2 rounded-2xl p-2 mb-6 mt-2 bg-gray-700 text-white"
//         type="email"
//         placeholder="ایمیل خود را وارد کنید"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label className="border-2 rounded-2xl p-2 bg-gray-800 text-white">نام کاربری</label>
//       <input
//         className="border-2 rounded-2xl p-2 mb-6 mt-2 bg-gray-700 text-white"
//         type="text"
//         placeholder="نام کاربری خود را وارد کنید"
//       />

//       <label className="border-2 rounded-2xl p-2 bg-gray-800 text-white">رمز عبور</label>
//       <input
//         className="border-2 rounded-2xl p-2 mb-6 mt-2 bg-gray-700 text-white"
//         type="password"
//         placeholder="رمز عبور خود را وارد کنید"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button className="bg-primary text-white p-2 rounded-2xl" onClick={handleSubmit}>
//         ثبت نام
//       </button>
//     </div>
//   );
// };

// export default Register;
