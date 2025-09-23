import React from "react";
import Image from "next/image";
import ModelViewer from "../components/ModelViewer";

const HeroSection = () => {
  return (
    // ✅ THIS IS THE LINE TO CHANGE
    <section className="relative h-screen flex items-center pb-[100px] hero-section lg:px-5 md:px-4 px-3 overflow-x-clip">
      {/* This background image is fine */}
      <Image
        className="absolute w-full h-auto top-0 right-0 -z-1"
        src={"/assets/images/Shade.png"}
        width={100}
        height={100}
        alt=""
      />

      {/* This container for the 3D model is also fine */}
      <div className="absolute top-0 right-0 h-screen w-3/4 z-1 0">
        <div className="!h-[100%] !w-[100%]">
          <div className="shape-wrapper !h-full !w-full">
            <ModelViewer />
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default HeroSection;
