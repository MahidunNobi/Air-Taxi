import Airline from "@/modules/Airline/Airline.model";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;
    const reqBody = await req.json();

    const newAirline = await Airline.findByIdAndUpdate(id, reqBody, {
      new: true,
    });

    return NextResponse.json({
      message: "Airline Updated successfully",
      success: true,
      data: newAirline,
    });
  } catch (error) {
    console.log(error);
    NextResponse.json(
      { success: false, message: "Failed to update airline" },
      { status: 500 }
    );
  }
};
