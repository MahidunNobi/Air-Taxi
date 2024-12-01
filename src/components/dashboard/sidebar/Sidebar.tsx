"use client";
import { useContext } from "react";
import Image from "next/image";
import { SidebarContext } from "@/Context/SidebarContext";
import { ChevronFirst, ChevronLast } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  // const [expanded, setExpanded] = useState<boolean>(true);
  const sidebarCon = useContext(SidebarContext);
  //   const authData = useAuth();
  return (
    <aside className="min-h-screen absolute top-0 left-0 z-10 md:static">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex items-center">
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="" */}
          {/* /> */}
          <Link
            href={"/"}
            className={`h-10 overflow-hidden transition-all flex-1 ${
              sidebarCon?.expanded ? "w-auto" : "w-0"
            }`}
          >
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

          <button
            onClick={() =>
              sidebarCon?.setExpanded &&
              sidebarCon?.setExpanded((curr) => !curr)
            }
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {sidebarCon?.expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
}
