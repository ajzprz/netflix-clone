import React, { useState } from "react";

export default function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    passowrd: "",
  });
  const handleSubmit = () => {};
  return (
    <div>
      <h1 className="font-semibold text-center text-3xl text-red-500 my-7">
        Sign In To Begin
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="bg-slate-100 p-3 rounded"
          type="text"
          id="usename"
          placeholder="Username"
        />
        <input
          className="bg-slate-100 p-3 rounded"
          type="text"
          id="email"
          placeholder="Email"
        />
        <input
          className="bg-slate-100 p-3 rounded"
          type="text"
          id="password"
          placeholder="Passowrd"
        />
        <button className=""> Login</button>
      </form>
    </div>
  );
}
