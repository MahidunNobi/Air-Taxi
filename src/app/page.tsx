import Hero from "@/components/Home/Hero/Hero";
import PopularRoutes from "@/components/Home/PopularRoutes/PopularRoutes";
import PopularDestinations from "@/components/Home/PupularDestinations/PopularDestinations";
import Services from "@/components/Home/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PopularDestinations />
      <PopularRoutes />
    </>
  );
}
