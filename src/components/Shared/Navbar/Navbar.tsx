"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  //   const session = useSession();

  const NavLinks = [
    {
      id: 3,
      path: "/my-services",
      title: "My Services",
    },
    {
      id: 2,
      path: "/add-service",
      title: "Add Service",
    },
    {
      id: 4,
      path: "/my-bookings",
      title: "My Bookings",
    },
    {
      id: 5,
      path: "/my-pending-bookings",
      title: "My Pending Bookings",
    },
  ];

  return (
    <nav className="">
      <div className="container py-6 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <div className="w-32">
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={300}
                height={600}
                className="w-full h-full"
              />
            </div>
          </Link>
          <div className="hidden md:flex gap-6 *: *:duration-300 ">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                className="hover:text-primary duration-300"
                href={`${link.path}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* ------Navigations items--- */}
        <Link href="/login" className="hidden md:flex">
          <Button size={"lg"}> Sign In </Button>{" "}
        </Link>

        {/*------ Mobile navigation Items----- */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu color="#ed4a43" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle className="text-primary text-xl font-medium">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-6 justify-between h-[92%]">
                <div className="*:block *:py-2 *:border-b overflow-y-auto flex-1">
                  {NavLinks.map((link) => (
                    <Link key={link.id} href={`${link.path}`}>
                      <SheetClose> {link.title} </SheetClose>
                    </Link>
                  ))}
                </div>
                <div>
                  <Link href="/login" className="w-full">
                    <Button className="w-full rounded-sm py-4">Sign In</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
