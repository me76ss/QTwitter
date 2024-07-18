/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom";
import { useLoginAPI } from "../../api";
import { loginSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


export const login = () => {
  const { mutate } = useLoginAPI();
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitHandler = (formData: any) => {
    mutate(formData, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        navigate("/home");
      },
    });
  };

  return (
    <div className="flex flex-col w-96 items-start border-2 rounded-2xl px-10 py-4 bg-black text-white m-auto">
      <div className="border-2 rounded-xl m-auto p-1.5 mb-10 bg-secondary">
        Login
      </div>

      <label className="border-1 rounded-2xl p-2 bg-secondary">Username</label>
      <input
        className="border-2 w-full rounded-2xl p-2 mb-3 mt-2 bg-gray-200"
        type="text"
        placeholder="username"
        {...register("username")}
      />
      {errors.username ? (
        <p className="text-error mb-3">{errors.username.message}</p>
      ) : null}
      <label className="border-1 rounded-2xl p-2 bg-secondary">password</label>
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
        <Link to={"/signup"}>
          <p className="border-2 rounded-2xl p-2 mt-4 bg-slate-600 hover:opacity-85 hover:border-emerald-500">
            go to signup page
          </p>
        </Link>
      </div>
    </div>
  );
};
