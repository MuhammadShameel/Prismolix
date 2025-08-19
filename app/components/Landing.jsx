import React from "react";
import HeroSection from "./HeroSection";
import Image from "next/image";
import ProblemSolution from "./ProblemSolution";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ContactSection from "./ContactSection";
import CallSchedule from "./CallSchedule";

const Home = () => {
  return (
    <div className="relative">
      <Image
        className="absolute w-full h-auto top-0 left-0 z-0"
        src={"/assets/images/Shade.png"}
        width={100}
        height={100}
        alt=""
      />
      <HeroSection />
      {/* <ProblemSolution />
      <Services />
      <Testimonial />
      <ContactSection />
      <CallSchedule /> */}
    </div>
  );
};

export default Home;
