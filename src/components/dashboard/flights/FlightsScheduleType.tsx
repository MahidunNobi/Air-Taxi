"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import AutoScheduleFields from "./AutoScheduleFields";
import { InputRegular } from "@/components/ui/InputRegular";

const FlightsScheduleType = () => {
  const [scheduleType, setScheduleType] = useState("");
  const handleScheduleTypeChange = (value: string) => {
    setScheduleType(value);
  };

  return (
    <>
      <Label htmlFor="flight_schedule_type">Flights Schedule Type</Label>

      <RadioGroup
        value={scheduleType}
        id="flight_schedule_type"
        onValueChange={handleScheduleTypeChange}
      >
        <div className="flex items-center">
          <RadioGroupItem value="auto" id="auto" />
          <Label htmlFor="auto" className="cursor-pointer">
            Auto Schedule Flights
          </Label>
        </div>
        <div className="flex items-center">
          <RadioGroupItem value="manual" id="manual" />
          <Label htmlFor="manual" className="cursor-pointer">
            Manually Schedule Flights
          </Label>
        </div>
      </RadioGroup>

      {/* -------------Auto Schedule types------- */}
      {scheduleType === "auto" && <AutoScheduleFields />}
      {scheduleType === "manual" && (
        <InputRegular
          type="datetime-local"
          name="manual_departure"
          required
          placeholder="Departure Date Time"
          className="max-w-72"
        />
      )}
    </>
  );
};

export default FlightsScheduleType;
