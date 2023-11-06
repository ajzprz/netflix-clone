import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" max-w-6xl mx-auto flex flex-col justify-evenly sm:flex-row sm:justify-evenly first-letter: p-4 flex-wrap gap-4">
      <Link to={"/"}>
        {" "}
        <h1 className="text-3xl font-semibold text-center">
          Movies<span className="text-red-800">Hub</span>
        </h1>{" "}
      </Link>
      <ul className="flex flex-row items-center gap-3 font-light justify-center ">
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
      <div className="flex flex-row gap-2 items-center justify-center ">
        <Link to={"/"} className="hover:underline hover:text-gray-300">
          <FaSearch />
        </Link>
        <Link to={"/"} className="hover:underline hover:text-gray-300">
          <FaBell />
        </Link>
        <Link to={"/"} className="hover:underline hover:text-gray-300">
          <FaUser />
        </Link>
      </div>
    </div>
  );
}
