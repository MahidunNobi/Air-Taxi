"use server";

import connectDB from "@/lib/connectDB";
import Airline from "./Airline.model";
import { IAirline } from "./Airline.interface";

export const getAirlines = async (): Promise<IAirline[]> => {
  await connectDB();
  const airlines = await Airline.find();
  return airlines;
};
