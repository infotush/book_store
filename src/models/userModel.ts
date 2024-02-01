import mongoose, { Schema } from "mongoose";

export interface IUser {
  fullName: Schema.Types.String;
  emailId: Schema.Types.String;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const user = new Schema<IUser>({
  fullName: { type: Schema.Types.String, required: true },
  emailId: { type: Schema.Types.String, required: true },
  createdAt: { type: Date, default: null },
  updatedAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

const User = mongoose.model("Users", user);

export default User;
