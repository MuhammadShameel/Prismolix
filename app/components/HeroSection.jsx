import React from "react";
import Image from "next/image";

import Shape from "../../public/assets/images/hero-shape.png";

const HeroSection = () => {
  return (
    <section className="relative pb-[100px] hero-section lg:px-5 md:px-4 px-3">
      <Image
        className="absolute w-full h-auto top-0 right-0 -z-1"
        src={"/assets/images/Shade.png"}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={Shape}
        alt="Abstract 3D hero image"
        className="absolute right-0 top-0"
      />
      {/* Container for the text content */}
      <div className="container mx-auto relative z-10">
        <div className="lg:w-4/6">
          {/* Pre-heading */}
          <p className="fs-26 color-primary-dark">[Prismolix Agency]</p>

          {/* Main Heading with Highlighted Text */}
          <h1 className="font-bold tracking-tighter leading-[100%] lg:my-5 md:my-4 sm:my-3 my-2">
            The <span className="text-overlay text-white px-2">Agency</span>{" "}
            Behind Top Agencies
          </h1>

          {/* Subheading */}
          <p className="text-base max-w-3xl">
            Focus on closing deals — we handle the execution. From UI/UX to full
            stack, we’re the extension of your agency.
          </p>

          {/* Button Group */}
          <div className="flex items-center gap-4 lg:mt-9 mt-8">
            <button className="btn btn-primary btn-shine">Book a Call</button>
            <button className="btn btn-outline">How it Works</button>
          </div>
        </div>
      </div>

      {/* The Image (positioned absolutely) */}
      {/* <div className="absolute top-[45%] right-0 -translate-y-1/2 w-1/2 lg:w-2/5 h-full z-0 hidden lg:block ">
        <Image
          src={Shape}
          alt="Abstract 3D hero image"
          layout="fill"
          // objectFit="contain"
          className="object-right w-full h-auto "
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
