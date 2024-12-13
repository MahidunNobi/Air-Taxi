// "use client";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IAirline } from "@/modules/Airline/Airline.interface";
import { getAirlines } from "@/modules/Airline/Airline.action";
import Image from "next/image";
import Airline_active_button from "@/components/dashboard/Admin/Airline_active_button";
import { Types } from "mongoose";

const Page = async () => {
  // const {
  //   data: myBookings,
  //   isLoading,
  //   refetch,
  // } = useQuery<IAirline[]>({
  //   queryKey: ["get-airlines"],
  //   queryFn: async () => {
  //     const res = await axios.get("/my-pending-bookings/api");
  //     return res.data;
  //   },
  // });

  const airlines = await getAirlines();
  return (
    <div>
      <h3 className="text-4xl mb-10 font-medium"> Available Airlines</h3>
      {/* ---------Tools---------- */}
      <div className="my-6 flex gap-6 justify-between">
        <div className="flex gap-6 items-center">
          <Input
            className="h-auto max-w-72 text-lg"
            type="text"
            placeholder="Search Airline"
          />
          <DatePicker />
          <Button variant={"outlinePrimary"} className="px-6 w-auto">
            Search
          </Button>
        </div>

        <div className="flex gap-6 items-center">
          <Select>
            <SelectTrigger className="w-[180px] h-auto">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Link href={"/dashboard/flights/add-flight"}>
            <Button variant={"submit"}>Add Flight</Button>
          </Link>
        </div>
      </div>

      {/* -----------Table---------- */}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Licence No.</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {airlines.map((air) => (
            <TableRow key={air._id?.toString()}>
              <TableCell className="font-medium">
                <Image
                  src={air.airline_logo}
                  alt={air.airline_name}
                  width={60}
                  height={100}
                />
              </TableCell>
              <TableCell>{air.airline_name}</TableCell>
              <TableCell>{air.airline_licence_no}</TableCell>
              <TableCell>{air.airline_email}</TableCell>
              <TableCell>
                {air.account_status === "pending" && (
                  <span className="text-[#F5A623]">Pending</span>
                )}
                {air.account_status === "active" && (
                  <span className="text-[#4CAF50]">Active</span>
                )}
                {air.account_status === "suspended" && (
                  <span className="text-[#ff2727]">Suspended</span>
                )}
              </TableCell>
              <TableCell>
                <Airline_active_button
                  id={(air._id as Types.ObjectId).toString()}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
