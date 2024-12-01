import Section from "@/components/Shared/Section/Section";

import SingleDest from "./SingleDest";

const PopularDestinations = () => {
  return (
    <Section>
      <div className="container">
        <h2 className="text-4xl font-semibold text-center">
          Explore Popular Destination
        </h2>
        <div className="mt-12 grid grid-cols-4 justify-items-center gap-8">
          <SingleDest />
          <SingleDest />
          <SingleDest />
          <SingleDest />
          <SingleDest />
          <SingleDest />
          <SingleDest />
          <SingleDest />
        </div>
      </div>
    </Section>
  );
};

export default PopularDestinations;
