import Image from "next/image";

const SingleDest = () => {
  return (
    <div className="border p-2 rounded-lg max-w-[420px] flex flex-col items-center">
      <Image src="/destinations/1.webp" alt="Place" width={450} height={800} />
      <h4 className="text-xl font-medium text-center mt-3"> New York </h4>
      <span className="text-gray-500"> 14 Flights/Month</span>
    </div>
  );
};

export default SingleDest;
