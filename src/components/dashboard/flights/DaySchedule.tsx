import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

const DaySchedule = ({ day }: { day: string }) => {
  return (
    <div>
      <Checkbox id={day.toLowerCase()} />
      <Label
        htmlFor={day.toLowerCase()}
        className=" cursor-pointer ml-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {day}
      </Label>
    </div>
  );
};

export default DaySchedule;
