import { SignUpComponent } from "../../components";

export const SignUp = () => {
  return (
    <div className="bg-gray-800 flex m-auto h-screen items-center justify-center content-center">
    <div className="flex flex-col justify-center">
      <p className="flex justify-center text-white text-2xl p-2">
        Hi! Welcome to Qtwitter
      </p>
      <div>
        <SignUpComponent></SignUpComponent>
      </div>
    </div>
  </div>
  )
};
