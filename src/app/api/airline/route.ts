import connectDB from "@/lib/connectDB";
import Airline from "@/modules/Airline/Airline.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();
  const airlines = await Airline.find();
  return NextResponse.json(airlines);
};
