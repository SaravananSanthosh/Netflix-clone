import { useEffect, useRef } from "react";
import image1 from "../asset/images/netflix.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div className="h-screen w-full bg-black  items-center justify-center">
      <nav className="flex">
        <img src={image1} className="h-[20vh] absolute left-10 top-10" alt="" />
        <div className="absolute right-20 top-20">
          <select className=" m-2 p-2" name="" id="">
            <option value="">ENGLISH</option>
            <option value="">HINDI</option>
          </select>
          <Link to={"/login"} className="text-white bg-[#e50914] m-2 p-2">
            Sign In
          </Link>
        </div>
      </nav>
      <div className="body text-white flex h-[100vh] flex-col justify-center items-center p-2 mt-10">
        <h1 className="text-5xl p-2">Unlimited movies, Tv shows and more.</h1>
        <h6 className="text-center p-2 text-lg">
          Watch anywhere.cancel anytime.
        </h6>
        <h5 className="text-lg p-2">
          Ready to watch? Enter your email to create or reset yor membership.
        </h5>
        <div className="text-center p-2 relative">
          <input
            ref={inputRef}
            className=" border border-violet-500 p-2 bg-[#3e3d3d] text-white inputHome"
            type="email"
            placeholder=" "
          />

          <label htmlFor="" className="absolute left-4 top-4">
            Email Address
          </label>
          <input
            className=" bg-[#e50914] p-2 ml-4"
            type="submit"
            value={"Get Started >"}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
