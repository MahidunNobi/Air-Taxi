"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Airline_active_button = ({ id }: { id: string }) => {
  const handleActivate = async () => {
    const res = await axios.patch(`/api/airline/${id}`, {
      id,
      account_status: "active",
    });
    console.log(res);
  };

  return (
    <Button onClick={handleActivate} variant={"success"} size={"lg"}>
      Activate
    </Button>
  );
};

export default Airline_active_button;
