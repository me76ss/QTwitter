function Login() {

    return (
        <div className="flex flex-col items-start border-2 rounded-2xl px-10 py-4 bg-black text-white m-auto">
            <div className="border-2 rounded-xl m-auto p-1.5 mb-10 bg-secondary">
                Login
            </div>

            <label className="border-1 rounded-2xl p-2 bg-secondary"  >Username</label>
            <input className="border-2 rounded-2xl p-2 mb-6 mt-2 bg-gray-200" type="text" placeholder="username" />

            <label className="border-1 rounded-2xl p-2 bg-secondary" >password</label>
            <input className="border-2 rounded-2xl p-2 mb-6 mt-2 bg-gray-200" type="password" placeholder="password" />
            <button className="bg-primary text-white p-2 rounded-2xl self-end">login</button>

        </div>
   
    );
}
export default Login;
