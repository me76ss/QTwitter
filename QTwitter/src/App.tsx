// import Login from "./components/login/login";
// import MyComponent from './components/component/component';
// import Register from './components/signup/signup';
import Feed from './components/feed/feed';
export default function App() {
  return (
    <div className="flex flex-col justify-center items-center">

      <h1 className="text-4xl font-bold underline p-4">Hello world!</h1>

      <div className="my-20 flex flex-col space-y-4 ">
        {/* <Login></Login> */}
        {/* <Register></Register> */}
        <Feed></Feed>
        {/* <MyComponent></MyComponent> */}
      </div>

    </div >
  );
}
