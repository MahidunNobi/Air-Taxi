import { IUser } from "./User.inerface";
import mongoose, { Model, Schema } from "mongoose";

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: [true, "Name is required"], trim: true },
  email: { type: String, unique: true, trim: true, required: true },
  password: { type: String, required: true },
  phone: String,
  role: {
    type: String,
    enum: {
      values: ["user", "company", "admin"],
      message: "Role is cannot be other than User, Company or Admin",
    },
    default: "user",
  },
  imageUrl: String,
  provider: { type: String, required: true },
  resetToken: String,
  resetTokenExpiry: Date,
});

const User: Model<IUser> =
  mongoose.models.Users || mongoose.model<IUser>("Users", UserSchema);

export default User;
