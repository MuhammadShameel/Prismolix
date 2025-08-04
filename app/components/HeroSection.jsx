import React from "react";
import Image from "next/image";

import Shape from "../../public/assets/images/hero-shape.png";

const HeroSection = () => {
  return (
    <section className="relative pb-[100px] pt-[295px] overflow-hidden">
      {/* Container for the text content */}
      <div className="container mx-auto lg:px-5 md:px-4 px-3 relative z-10">
        <div className="lg:w-4/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
          {/* Pre-heading */}
          <p className="font-medium text-[26px] color-primary-dark">
            [Prismolix Agency]
          </p>

          {/* Main Heading with Highlighted Text */}
          <h1 className="font-bold tracking-tighter leading-[100%]">
            The <span className="text-overlay text-white px-2">Agency</span>{" "}
            Behind Top Agencies
          </h1>

          {/* Subheading */}
          <p className="text-base max-w-3xl">
            Your time should be spent closing deals — not designing pages. We
            handle execution so you can focus on growth.
          </p>

          {/* Button Group */}
          <div className="flex items-center gap-4 mt-4">
            <button className="btn btn-primary">Book a Call</button>
            <button className="btn btn-outline">How it Works</button>
          </div>
        </div>
      </div>

      {/* The Image (positioned absolutely) */}
      <div className="absolute top-[45%] right-0 -translate-y-1/2 w-1/2 lg:w-2/5 h-full z-0 hidden lg:block">
        <Image
          src={Shape}
          alt="Abstract 3D hero image"
          layout="fill"
          // objectFit="contain"
          className="object-right"
        />
      </div>
    </section>
  );
};

export default HeroSection;
