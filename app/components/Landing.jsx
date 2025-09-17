import React from "react";
import HeroSection from "./HeroSection";
import Image from "next/image";
import ProblemSolution from "./ProblemSolution";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ContactSection from "./ContactSection";
import CallSchedule from "./CallSchedule";
import FooterMarquee from "../components/FooterMarquee";


export const metadata = {
  title: "Prismolix • White-Label Design & Dev Agency for Growing Agencies",
  description:
    "Prismolix helps creative & digital agencies scale faster. We deliver UI/UX, web, app & Shopify design & development. Focus on growth; let us handle execution.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Prismolix • White-Label Design & Dev Agency for Growing Agencies",
    description:
      "Prismolix helps creative & digital agencies scale faster. We deliver UI/UX, web, app & Shopify design & development. Focus on growth; let us handle execution.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prismolix • White-Label Design & Dev Agency for Growing Agencies",
    description:
      "Prismolix helps creative & digital agencies scale faster. We deliver UI/UX, web, app & Shopify design & development. Focus on growth; let us handle execution.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
};

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
