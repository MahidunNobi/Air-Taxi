import { ArrowLeftRight } from "lucide-react";
import Image from "next/image";

const SingleRoute = () => {
  return (
    <div className="max-w-[300px] rounded-lg overflow-hidden bg-white shadow-lg">
      <div>
        <Image src={"/routes/1.webp"} alt="Route" height={300} width={450} />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold flex items-center gap-2 mt-3">
          New York <ArrowLeftRight size={18} /> Los Angles
        </h3>

        <span className="text-sm text-gray-500">Round Trip | 3 days </span>
        <h4 className="text-xl font-semibold text-right">
          <span className="text-sm font-medium"> From </span>
          $492
        </h4>
      </div>
    </div>
  );
};

export default SingleRoute;
