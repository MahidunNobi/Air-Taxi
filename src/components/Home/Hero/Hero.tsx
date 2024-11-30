import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-bg h-[95vh] text-white grid place-content-center">
      <div className="container">
        {/* ----------Intro--------- */}
        <div className="max-w-[50%]">
          <h1 className="text-4xl md:text-6xl font-bold">
            Your Gateway to Seamless Air Travel.
          </h1>
          <p className="mt-4">
            Experience the freedom of the skies like never before with TaxyFly.
            Whether you&apos;re planning a business trip or a dream vacation, we
            offer unparalleled convenience, comfort, and reliability
          </p>

          <Button variant={"white"} className="px-10 py-6 rounded-3xl mt-10">
            {" "}
            Discover Price{" "}
          </Button>
        </div>

        {/* -------------Form---------- */}
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
