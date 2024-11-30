import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftRight, Plane } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-bg min-h-[95vh] text-white grid place-content-center">
      <div className="container flex flex-col md:flex-row gap-6 md:justify-between items-center py-12">
        {/* ----------Intro--------- */}
        <div className="md:max-w-[50%]">
          <h1 className="text-4xl md:text-6xl font-bold">
            Your Gateway to Seamless Air Travel.
          </h1>
          <p className="mt-4">
            Experience the freedom of the skies like never before with TaxyFly.
            Whether you&apos;re planning a business trip or a dream vacation, we
            offer unparalleled convenience, comfort, and reliability
          </p>

          <Button variant={"white"} className="px-10 py-6 rounded-3xl mt-10">
            {" "}
            Discover Price{" "}
          </Button>
        </div>

        {/* -------------Form---------- */}
        <div className="w-full md:max-w-[450px] bg-white rounded-lg p-6 text-gray-800 space-y-3">
          <h6 className="text-lg text-primary">Flights</h6>
          {/* -------Route Navigator----- */}
          <div>
            <RadioGroup defaultValue="option-one" className="col-span-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Return</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">One Way</Label>
              </div>
            </RadioGroup>
          </div>
          {/* -------------Destinations--------- */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center relative">
            {/* -------Leaving From-------- */}
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Leaving From" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <button className="hidden md:inline-block shadow-lg border p-3 rounded-full absolute left-1/2 -translate-x-1/2 bg-white">
              <ArrowLeftRight size={16} />
            </button>
            {/* ------------Going To--------- */}
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Going To" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* --------Departure-------- */}
          <Input placeholder="Departure" required />
          {/* --------Return-------- */}
          <Input placeholder="Return" required />
          {/* --------Occupant-------- */}
          <Input placeholder="Occupant" required />

          <Button variant={"submit"} size={"sumbit"}>
            Search Flights <Plane />{" "}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
