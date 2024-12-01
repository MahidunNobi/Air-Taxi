import Section from "@/components/Shared/Section/Section";

import SingleRoute from "./SingleRoute";

const PopularRoutes = () => {
  return (
    <Section classN="bg-[#f1f5f8]">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center">
          Explore Popular Routes
        </h2>
        <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center gap-12 ">
          <SingleRoute />
          <SingleRoute />
          <SingleRoute />
          <SingleRoute />
          <SingleRoute />
          <SingleRoute />
          <SingleRoute />
        </div>
      </div>
    </Section>
  );
};

export default PopularRoutes;
