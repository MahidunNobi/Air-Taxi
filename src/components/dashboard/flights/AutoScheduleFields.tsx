import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DaySchedule from "./DaySchedule";

const AutoScheduleFields = () => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      {weekDays.map((day) => (
        <DaySchedule key={day} day={day} />
      ))}
      {/* --------Schedule Start End---------- */}
      <div className="flex gap-3 my-3">
        <div className="flex flex-col">
          <Label className="pl-2 mb-1">Schedule Start</Label>
          <DatePicker placeholder="Schedule Start From" />
        </div>
        <div className="flex flex-col">
          <Label className="pl-2 mb-1">Schedule End</Label>
          <DatePicker placeholder="Schedule End At" />
        </div>
      </div>

      {/* -------Schedule Frequency------- */}
      <Label className="pl-2 mb-1">Schedule Freequecy</Label>
      <Select defaultValue="weekly">
        <SelectTrigger className="w-[180px] h-auto">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AutoScheduleFields;
