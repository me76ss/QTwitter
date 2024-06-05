function Signup() {

    return (
        <div className="flex flex-col items-start border-2 rounded-2xl px-10 py-4 bg-black text-white m-auto">
            <div className="border-2 rounded-xl m-auto p-1.5 mb-10 bg-secondary">
                Signup
            </div>

            <label className="border-1 rounded-2xl p-2 bg-secondary text-white">Email</label>
            <input className="border-2 rounded-2xl p-2 mb-6 mt-2 bg-gray-200 text-white" type="email" placeholder="Email"/>
            <label className="border-1 rounded-2xl p-2 bg-secondary"  >Username</label>
            <input className="border-2 rounded-2xl p-2 mb-6 mt-2 bg-gray-200" type="text" placeholder="username" />

            <label className="border-1 rounded-2xl p-2 bg-secondary" >password</label>
            <input className="border-2 rounded-2xl p-2 mb-6 mt-2 bg-gray-200" type="password" placeholder="password" />
            <button className="bg-primary text-white p-2 rounded-2xl self-end">signup</button>

        </div>

    );
}
export default Signup;



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
