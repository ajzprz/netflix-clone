import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" max-w-6xl mx-auto flex flex-col justify-evenly sm:max-w-[95%] sm:flex-row sm:justify-between sm:gap-10 p-4 flex-wrap gap-4">
      <Link to={"/"}>
        {" "}
        <h1 className="text-3xl font-semibold text-center">
          Movies<span className="text-red-800">Hub</span>
        </h1>{" "}
      </Link>
      <ul className="flex flex-row items-center gap-8 font-light justify-center text-2xl">
        <Link
          to={"/"}
          className="transition ease-in-out  hover:text-gray-300 hover:underline hover:scale-105 duration-300"
        >
          <li>Home</li>
        </Link>
        <Link
          to={"/tvshows"}
          className="transition ease-in-out  hover:text-gray-300 hover:underline hover:scale-105 duration-300"
        >
          <li>Tv Shows</li>
        </Link>
        <Link
          to={"/originals"}
          className="transition ease-in-out hover:text-gray-300 hover:underline hover:scale-105 duration-300"
        >
          <li>Originals</li>
        </Link>
        <Link
          to={"/movies"}
          className="transition ease-in-out  hover:text-gray-300 hover:underline hover:scale-105 duration-300"
        >
          <li>Movies</li>
        </Link>
        <Link
          to={"/mylists"}
          className="transition ease-in-out  hover:text-gray-300 hover:underline hover:scale-105 duration-300"
        >
          <li>My List</li>
        </Link>
      </ul>
      <div className="flex flex-row gap-2 items-center justify-center text-xl ">
        <Link to={"/"} className="hover:underline hover:text-gray-300">
          <FaSearch />
        </Link>
        <Link to={"/"} className="hover:underline hover:text-gray-300">
          <FaBell />
        </Link>

        <Link to={"/profile"} className="hover:underline hover:text-gray-300">
          {currentUser ? (
            <div className="flex flex-row gap-2">
              <img
                src={currentUser.photoUrl}
                className="h-8 w-8 rounded-lg object-cover border border-red-500 p-1 "
                alt="profilePic"
              />
              <span> {currentUser.username}</span>
            </div>
          ) : (
            <FaUser />
          )}
        </Link>
      </div>
    </div>
  );
}
