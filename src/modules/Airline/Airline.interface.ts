import { Types } from "mongoose";

export interface IAirline extends Document {
  _id?: Types.ObjectId;
  airline_name: string;
  airline_licence_no: string;
  airline_email: string;
  airline_password?: string;
  airline_logo: string;
  account_status: "pending" | "active" | "suspended";
  resetToken?: string;
  resetTokenExpiry?: Date;
}
