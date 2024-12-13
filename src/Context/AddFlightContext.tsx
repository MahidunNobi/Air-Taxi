"use client";
import { FlightType } from "@/modules/Flight/Flight.interface";
import { createContext, SetStateAction, useState } from "react";

const initialFlightDetails: FlightType = {
  flight_number: "",
  airline_name: "",
  departure_airport: "",
  arrival_airport: "",
  flight_schedule_type: "manual", // Default to manual scheduling
  auto_schedule_week_days: {
    saturday: {
      status: false,
      departure_time: new Date(),
      arrival_time: new Date(),
    },
    sunday: {
      status: false,
      departure_time: new Date(),
      arrival_time: new Date(),
    },
    monday: {
      status: false,
      departure_time: new Date(),
      arrival_time: new Date(),
    },
    tuesday: {
      status: false,
      departure_time: new Date(),
      arrival_time: new Date(),
    },
    wednesday: {
      status: false,
      departure_time: new Date(),
      arrival_time: new Date(),
    },
    thursday: {
      status: false,
      departure_time: new Date(),
      arrival_time: new Date(),
    },
    friday: {
      status: false,
      departure_time: new Date(),
      arrival_time: new Date(),
    },
  },
  auto_schedule_start_date: new Date(), // Set to today's date by default
  auto_schedule_end_date: new Date(), // Can be updated later
  auto_schedule_freequecy: "weekly", // Default frequency
  manual_schedule_date_time: new Date(), // Default to now
  flight_duration: "", // Placeholder for flight duration
  seats: {
    economy_class: { status: false, seat_count: 0, seat_price: 0 },
    business_class: { status: false, seat_count: 0, seat_price: 0 },
    first_class: { status: false, seat_count: 0, seat_price: 0 },
  },
  baggage_allowance: "", // Placeholder for baggage allowance (e.g., "20kg")
  baggage_overweight_price_per_kg: 0, // Default overweight charge
};

type SidebarContextType = {
  flightDetails: FlightType;
  setFlightDetails?: React.Dispatch<SetStateAction<FlightType>>;
};

export const AddFlightContext = createContext<SidebarContextType>({
  flightDetails: initialFlightDetails,
});

const AddFlightContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [flightDetails, setFlightDetails] =
    useState<FlightType>(initialFlightDetails);
  return (
    <AddFlightContext.Provider value={{ flightDetails, setFlightDetails }}>
      {children}
    </AddFlightContext.Provider>
  );
};

export default AddFlightContextProvider;
