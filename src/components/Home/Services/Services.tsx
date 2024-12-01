import {
  FaPersonWalkingLuggage,
  FaSackDollar,
  FaUmbrellaBeach,
} from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
const Services = () => {
  return (
    <section className="border-b py-16">
      <div className="container flex flex-col md:flex-row md:justify-between gap-12 md:gap-3">
        {/* --------Easy Booking------- */}
        <div className="max-w-[350px] flex flex-col items-center *:text-center md:*:text-left md:block">
          <FaSackDollar size={48} className="text-primary" />
          <h3 className="text-xl mt-3 font-medium">Easy Booking</h3>
          <p className="text-gray-500">
            Plan your trips effortlessly with our user-friendly booking system.
            Enjoy a seamless experience from flight selection to payment, all in
            just a few clicks.
          </p>
        </div>
        {/* --------Best Destinations------- */}
        <div className="max-w-[350px] flex flex-col items-center *:text-center md:*:text-left md:block">
          <FaUmbrellaBeach size={48} className="text-primary" />
          <h3 className="text-xl mt-3 font-medium">Best Destinations</h3>
          <p className="text-gray-500">
            Explore a curated list of top travel destinations worldwide. Whether
            it’s a beach getaway or a cultural retreat, we bring the best to
            you.
          </p>
        </div>
        {/* --------Travel Guides------- */}
        <div className="max-w-[350px] flex flex-col items-center *:text-center md:*:text-left md:block">
          <FaPersonWalkingLuggage size={48} className="text-primary" />
          <h3 className="text-xl mt-3 font-medium">Travel Guides</h3>
          <p className="text-gray-500">
            Discover expert travel guides packed with tips, recommendations, and
            insights. Let us help you create unforgettable memories on every
            trip.
          </p>
        </div>
        {/* --------Friendly Support------- */}
        <div className="max-w-[350px] flex flex-col items-center *:text-center md:*:text-left md:block">
          <FaHeadphonesAlt size={48} className="text-primary" />
          <h3 className="text-xl mt-3 font-medium">Friendly Support</h3>
          <p className="text-gray-500">
            Our dedicated support team is here to assist you 24/7. Experience
            prompt and friendly help whenever you need it, making your journey
            worry-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
