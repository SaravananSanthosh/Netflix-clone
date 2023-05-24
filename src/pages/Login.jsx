import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/hooks/userContext";

const initial = { email: "saravana@gmail.com", password: "123456789" };
const Login = () => {
  const [value, setValue] = useState(initial);

  const { login } = useUserContext();
  const navigate = useNavigate();

  return (
    <div className=" h-screen w-full grid justify-center items-center bg-[url(' https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg')] ">
      <div className="mt-[100px] p-2  h-[660px] w-[450px] bg-black text-white">
        <form
          action=""
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            if (value.email.length > 7 && value.password.length > 5) {
              login(value);
              navigate("/browse");
            }
          }}
        >
          <h1 className="text-[40px] ml-[40px]">Sign In</h1>
          <div className="mt-5">
            <div className="">
              <input
                className=" bg-[#3e3d3d] relative p-2 ml-[40px] w-[75%] inptSign"
                type="email"
                onChange={(e) => setValue({ ...value, email: e.target.value })}
                value={value.email}
                name=""
                id=""
                placeholder=" "
              />
              <label htmlFor="" className="absolute left-[500px] top-[198px] ">
                Email or Phone number
              </label>

              <input
                className=" bg-[#3e3d3d] relative p-2  ml-[40px] w-[75%] mt-1 inptSignn"
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
                type="password"
                value={value.password}
                name=""
                id=""
                placeholder=" "
              />
              <label htmlFor="" className="absolute left-[500px] top-[235px] ">
                password
              </label>
            </div>
            <input
              type="submit"
              value={"Sign In"}
              className="bg-[#e50914] p-2 mt-1  ml-[40px] w-[75%]"
            />{" "}
            <div className="mt-2 ml-10">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
              <label className="float-right mr-16" htmlFor="">
                Need help?
              </label>{" "}
            </div>
            <div>
              <div className="flex ml-[40px]">
                <h1>New to Netflix?</h1>{" "}
                <Link className="text-white text-lg" to={"/"}>
                  Sign up now
                </Link>{" "}
              </div>
              <h1 className="ml-[40px]">
                This page is protected by Google in CAPTCHA to ensure <br />
                you're not a bot.{" "}
                <Link className="text-blue-700 font-bold">Learn more</Link>
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
