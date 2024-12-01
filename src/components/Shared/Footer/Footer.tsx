import { Clock, MailOpen, MapPinned, PhoneIncoming } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  FaCaretRight,
  FaFacebook,
  FaGooglePlusG,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const quickLinks = [
  "Our Services",
  "Our Team",
  "About Fastiva",
  "New Blog",
  "Get in Touch",
  "Clients List",
  "Brochure",
];

const Footer = () => {
  return (
    <footer className="text-gray-800 border-t">
      <div className="container mx-auto pt-12">
        {/* --------Sections------- */}
        <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* --------Logo----- */}
          <div className="">
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
            <span className="text-sm text-gray-500 my-4 block">
              We make your dream more beautiful & enjoyful with lots of
              happiness.
            </span>
            <div className="space-x-2">
              <Button variant={"outline"} className="bg-gray-300 px-2">
                <FaFacebook />
              </Button>
              <Button variant={"outline"} className="bg-gray-300 px-2">
                <FaLinkedin />
              </Button>
              <Button variant={"outline"} className="bg-gray-300 px-2">
                <FaGooglePlusG />
              </Button>
              <Button variant={"outline"} className="bg-gray-300 px-2">
                <FaTwitter />
              </Button>
            </div>
          </div>
          {/* --------------About Fastiva------------- */}
          <div className="">
            <h3 className="relative text-lg before:w-5 before:h-1 before:rounded-xl before:bg-primary before:absolute before:left-0 before:top-1/2 pl-7 font-semibold">
              {" "}
              About Us
            </h3>
            <h6 className="font-medium text-sm my-4">
              {" "}
              The Flights Specialists!{" "}
            </h6>
            <p className="text-sm text-gray-500">
              We&apos;re thrilled to be a part of your journey to create
              unforgettable experiences. Whether you&apos;re planning a wedding,
              corporate event, or private celebration, our platform is here to
              simplify every step.
            </p>
          </div>
          {/* -----------Keep in Touch----------- */}
          <div className="">
            <h3 className="relative text-lg before:w-5 before:h-1 before:rounded-xl before:bg-primary before:absolute before:left-0 before:top-1/2 pl-7 font-semibold mb-4">
              Keep in Touch
            </h3>
            <div className="text-sm text-gray-500 *:flex *:items-center *:gap-2 space-y-3">
              <span>
                <MapPinned size={16} /> 38-2 Hilton Street, California, USA{" "}
              </span>
              <span>
                <PhoneIncoming size={16} /> (+01) 123 456 7890
              </span>
              <span>
                <MailOpen size={16} /> info@fastiva.org
              </span>
              <span>
                <Clock size={16} /> Mon - Fri 9.00 am - 6.00 pm
              </span>
            </div>
          </div>

          {/* -----------Quick Links----------- */}
          <div className="">
            <h3 className="relative text-lg before:w-5 before:h-1 before:rounded-xl before:bg-primary before:absolute before:left-0 before:top-1/2 pl-7 font-semibold mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 *:flex *:items-center *:gap-1 *:text-sm text-gray-500">
              {quickLinks.map((l, i) => (
                <span
                  key={i}
                  className="hover:text-primary duration-300 cursor-pointer"
                >
                  <FaCaretRight /> {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ------Copy write----- */}
      <div className="bg-[#151515] p-6 flex justify-center text-gray-500 text-sm text-center">
        <span>
          {" "}
          &copy;2024-<span className="text-white ">Air Taxi</span> – The Flights
          Specialists All Rights Reserved.{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
