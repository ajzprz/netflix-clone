import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart);
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
  return (
    <div className="text-center p-4 max-w-lg mx-auto">
      <h1 className="font-semibold text-3xl my-4"> Update Your Profile</h1>
      <form className="flex flex-col gap-4 text-black " onSubmit={handleSubmit}>
        <img
          className="h-24 w-24 rounded-full self-center cursor-pointer border border-red-800"
          src={currentUser.photoUrl}
          alt=""
        />
        <input
          className="p-3 text bg-slate-100 rounded-lg"
          onChange={handleChange}
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
        />
        <input
          className="p-3 text bg-slate-100 rounded-lg"
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Email"
          defaultValue={currentUser.email}
        />
        <input
          onChange={handleChange}
          id="password"
          className="p-3 text bg-slate-100 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-200 p-3 rounded-lg text-black hover:opacity-90 disabled:opacity-80">
          {" "}
          Update
        </button>
        <div className="flex justify-between">
          <button className="bg-orange-400 p-3 rounded-lg text-black hover:opacity-90 disabled:opacity-80">
            {" "}
            Sign Out
          </button>
          <button className="bg-red-500 p-3 rounded-lg text-black hover:opacity-90 disabled:opacity-80">
            {" "}
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
