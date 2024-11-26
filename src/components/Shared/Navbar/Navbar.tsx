"use client";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleUserRound, Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  //   const session = useSession();

  const pagesRoutes = [
    {
      id: 3,
      path: "/my-services",
      title: "My Services",
      description:
        "So far, the services you have created, you can find them here",
    },
    {
      id: 2,
      path: "/add-service",
      title: "Add Service",
      description: "Create new services in this page to add them to the site.",
    },
    {
      id: 4,
      path: "/my-bookings",
      title: "My Bookings",
      description:
        "So far, the services you have booked, you can find them here",
    },
    {
      id: 5,
      path: "/my-pending-bookings",
      title: "My Pending Bookings",
      description:
        "So far, the services you have booked, you can find them here",
    },
  ];

  return (
    <nav className="">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <h2 className="text-primary text-3xl font-semibold">
          <Link href={"/"}>Fastiva</Link>
        </h2>
        {/* ------Navigations items--- */}
        <div className="items-center gap-3 hidden md:flex">
          <div className="flex gap-6 *: *:duration-300">
            <Link className="hover:text-primary duration-300" href={"/"}>
              Home
            </Link>
            <Link
              className="hover:text-primary duration-300"
              href={"/services"}
            >
              Services
            </Link>
          </div>

          <Link href="/login">
            <Button size={"lg"}> Sign In </Button>{" "}
          </Link>
        </div>
        {/*------ Mobile navigation Items----- */}
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger>
              <Menu color="#ed4a43" />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
