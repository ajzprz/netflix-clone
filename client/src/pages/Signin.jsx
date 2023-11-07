import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //   console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center text-3xl text-red-500 my-7">
        Welcome Back, Let's Sign In
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-orange-950"
      >
        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="text"
          onChange={handleChange}
          id="username"
          placeholder="Username"
        />
        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button
          disabled={loading}
          className="bg-red-500 p-4  text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80 "
        >
          {" "}
          {loading ? "Loading..." : "Sign In"}
        </button>

        
      </form>
      <p className="text-red-400 text-center mt-2">
        {error ? error.message || "Something went wrong" : ""}
      </p>
      <div className="flex gap-2 mt-5">
        <p>Not Registered?</p>
        <Link to={"/signin"}>
          <span className="text-indigo-200"> Sign Up Now ! </span>
        </Link>
      </div>
    </div>
  );
}
