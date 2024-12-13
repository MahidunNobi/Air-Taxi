import mongoose, { Model, Schema } from "mongoose";
import { IAirline } from "./Airline.interface";

const AirlineSchema: Schema<IAirline> = new Schema({
  airline_name: {
    type: String,
    required: [true, "Airline Name is required"],
    trim: true,
  },
  airline_email: { type: String, unique: true, trim: true, required: true },
  airline_licence_no: { type: String, required: true },
  airline_password: { type: String, required: true },
  airline_logo: String,
  account_status: {
    type: String,
    required: true,
    enum: {
      values: ["pending", "active", "suspended"],
      message: "account status can only pending, active or suspended. ",
    },
    default: "pending",
  },
  resetToken: String,
  resetTokenExpiry: Date,
});

const Airline: Model<IAirline> =
  mongoose.models.Airline || mongoose.model<IAirline>("Airline", AirlineSchema);

export default Airline;
