import { Link } from "react-router-dom";

export const login = () => {
  return (
    <div className="flex flex-col w-96 items-start border-2 rounded-2xl px-10 py-4 bg-black text-white m-auto">
      <div className="border-2 rounded-xl m-auto p-1.5 mb-10 bg-secondary">
        Login
      </div>

      <label className="border-1 rounded-2xl p-2 bg-secondary">Username</label>
      <input
        className="border-2 w-full rounded-2xl p-2 mb-6 mt-2 bg-gray-200"
        type="text"
        placeholder="username"
      />

      <label className="border-1 rounded-2xl p-2 bg-secondary">password</label>
      <input
        className="border-2 w-full rounded-2xl p-2 mb-6 mt-2 bg-gray-200"
        type="password"
        placeholder="password"
      />
      <button className="bg-primary text-white p-2 rounded-2xl self-end hover:opacity-90">
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

// function Login() {

// }
// export default Login;
