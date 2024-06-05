
import Feed from './components/feed/feed';
import Profile from './components/profile/profile';
import Tweet from './components/tweet/tweet';
import Navbar from './layout/navBar/navBar';
import Login from './components/login/login';
import Register from './components/signup/signup';
export default function App() {
  return (
    <div className="flex flex-col justify-center items-center">

      <h1 className="text-4xl font-bold underline p-4">Hello world!</h1>

      <div className="my-20 flex flex-col space-y-4 ">
        <Login></Login>
        <Register></Register>
        <Navbar></Navbar>
        <Feed></Feed>
        <Tweet></Tweet>
        <Profile></Profile>
        {/* <MyComponent></MyComponent> */}
      </div>

    </div >
  );
}
