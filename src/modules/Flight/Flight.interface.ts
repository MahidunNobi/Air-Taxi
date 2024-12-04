type FlightDayType = {
  status: boolean;
  departure_time: Date;
  arrival_time: Date;
};
type FlightSeatType = {
  status: boolean;
  seat_count: number;
  seat_price: number;
};

export type FlightType = {
  flight_number: string;
  airline_name: string;
  departure_airport: string;
  arrival_airport: string;
  flight_schedule_type: "auto" | "manual";
  auto_schedule_week_days: {
    saturday: FlightDayType;
    sunday: FlightDayType;
    monday: FlightDayType;
    tuesday: FlightDayType;
    wednesday: FlightDayType;
    thursday: FlightDayType;
    friday: FlightDayType;
  };
  auto_schedule_start_date: Date;
  auto_schedule_end_date: Date;
  auto_schedule_freequecy: "weekly" | "bi-weekly" | "monthly";
  manual_schedule_date_time: Date;
  flight_duration: string;
  seats: {
    economy_class: FlightSeatType;
    business_class: FlightSeatType;
    first_class: FlightSeatType;
  };
  baggage_allowance: string;
  baggage_overweight_price_per_kg: number;
};
