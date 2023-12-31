import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

export default function OAuth() {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photoUrl: result.user.photoURL,
        }),
      });

      const data = await res.json();
      console.log(data);
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log("google sign in error`", error);
    }
  };
  return (
    <div>
      <button
        onClick={handleGoogleClick}
        type="button"
        className="bg-red-500 p-4  text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80 w-full "
      >
        {" "}
        Continue With Google{" "}
      </button>
    </div>
  );
}
