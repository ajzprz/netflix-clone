import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("sdad");
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //   console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(await response.json());

      if (response.status === 201) {
        // User successfully signed up
        setError(true);
        navigate("/signin");
        setMessage("Sign-up successful!");
      } else if (response.status === 409) {
        // User already exists
        setError(true);
        setMessage("User already exists. Please choose a different email.");
      } else if (response.status === 400) {
        // Invalid request (e.g., empty fields)
        setError(true);
        setMessage("Please fill out all fields.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center text-3xl text-red-500 my-7">
        Register To Begin
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
          type="email"
          id="email"
          onChange={handleChange}
          placeholder="Email"
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
          {loading ? "Loading..." : "SignUp"}
        </button>
      </form>
      {error && <p className="text-red-400 text-center mt-2">{message}</p>}{" "}
      <div className="flex gap-2 mt-5">
        <p>Already Signed Up?</p>
        <Link to={"/signin"}>
          <span className="text-indigo-200"> Log In </span>
        </Link>
      </div>
    </div>
  );
}
