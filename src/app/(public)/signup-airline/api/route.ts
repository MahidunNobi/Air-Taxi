import connectDB from "@/lib/connectDB";
import Airline from "@/modules/Airline/Airline.model";
import User from "@/modules/User/User.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const {
      airline_name,
      airline_email,
      airline_password,
      airline_logo,
      airline_licence_no,
    } = body;
    if (
      !airline_name ||
      !airline_email ||
      !airline_logo ||
      !airline_password ||
      !airline_licence_no
    ) {
      return NextResponse.json(
        { message: "Please provide the required credentials" },
        { status: 400 }
      );
    }
    await connectDB();
    const airlineExists = await Airline.findOne({ airline_email });
    const userExists = await User.findOne({ email: airline_email });
    if (airlineExists || userExists) {
      return NextResponse.json(
        { message: "Airline Already exists" },
        { status: 403 }
      );
    }
    const salt = bcrypt.genSaltSync(16);
    const hashedPassword = bcrypt.hashSync(airline_password, salt);

    const airline = new Airline({
      airline_name,
      airline_email,
      airline_licence_no,
      airline_password: hashedPassword,
      airline_logo,
      provider: "credentials",
    });
    await airline.save();
    return NextResponse.json({
      message: "Account application send. Admin will response soon.",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong..", error });
  }
};
