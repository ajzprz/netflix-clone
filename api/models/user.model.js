import { timeStamp } from "console";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      requird: true,
      unique: true,
    },
    email: {
      type: string,
      requird: true,
      unique: true,
    },
    passwod: {
      type: string,
      requird: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
