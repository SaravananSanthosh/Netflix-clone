import { useState } from "react";
import { useUserContext } from "../utils/hooks/userContext";
import { NavLink, useNavigate } from "react-router-dom";
import image from "../asset/images/netflix.png";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import { BiKey, BiLogOut } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const bars = ["home", "tv Shows", "movies", "recently added", "mylist"];

const NavBar = () => {
  const { user, logout, searching } = useUserContext();
  const [search, setSearch] = useState(false);
  const [navsearch, setNavsearch] = useState("");
  const navigator = useNavigate();

  return (
    <>
      <nav className="flex h-14 items-center  bg-black text-white text-lg relative font-bold">
        <img
          src={image}
          alt=""
          className="h-[8vh] w-[100px] hover:rotate-180 delay-500"
        />
        {bars.map((bar) => (
          <NavLink
            className="flex capitalize p-6  hover:bg-white hover:text-black rounded-full"
            key={bar}
            to={bar === "home" ? "/browse" : `/${bar}`}
          >
            {bar}
          </NavLink>
        ))}
        <FaSearch
          className="h-20 w-10 absolute right-32"
          onClick={() => setSearch(!search)}
        />
        {search ? (
          <input
            autoFocus
            type="search"
            className="absolute top-4 right-[170px] text-blue-900 "
            placeholder="Enter your movies"
            onChange={(e) => {
              setNavsearch(e.target.value);
              searching(e.target.value);
            }}
          />
        ) : (
          ""
        )}
        <FaUserCircle className="h-20 w-10 absolute right-10 imghov" />
        <div className="profile z-10">
          <div className=" bg-black absolute top-14 h-40 w-60 grid justify-center items-center right-0 text-white border rounded-lg">
            <SlUserFollowing className="h-20 w-10 ml-16" />

            <h1>{user.email}</h1>

            <div className="flex">
              <BiKey className=" flex-1" />
              <MdOutlineLocationOn className=" flex-1" />
              <button
                className="flex-1"
                onClick={() => {
                  logout();
                  navigator("/login");
                }}
              >
                <BiLogOut />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
