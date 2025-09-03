import React from "react";
import HeroSection from "./HeroSection";
import Image from "next/image";
import ProblemSolution from "./ProblemSolution";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ContactSection from "./ContactSection";
import CallSchedule from "./CallSchedule";
import FooterMarquee from "../components/FooterMarquee";

import Shape from "../../public/assets/images/hero-shape.png";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <Services />
      <Testimonial />
      <ContactSection />
      <CallSchedule />
      <FooterMarquee />
    </>
  );
};

export default Home;
