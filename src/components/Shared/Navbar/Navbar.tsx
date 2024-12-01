"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  const session = useSession();

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
          {/* ---------Dextop Navlinks--------- */}
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

        {session.status === "authenticated" ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center">
                <CircleUserRound
                  size={46}
                  className="bg- rounded-full p-2 z-10 text-primary"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{session.data.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link href={"/dashboard"} className="w-full">
                  Dashboard
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <button onClick={() => signOut({ redirect: false })}>
                  Log Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login" className="hidden md:flex">
            <Button size={"lg"}> Sign In </Button>{" "}
          </Link>
        )}

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
