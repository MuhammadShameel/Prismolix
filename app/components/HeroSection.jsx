"use client";

import React, { useContext, useEffect } from "react";
import { AnimationContext } from "../context/AnimationContext";
import Image from "next/image";
import Shape from "../../public/assets/images/hero-shape.png";
import SvgShade from "./SvgShade";

const HeroSection = () => {
  const { isIntroComplete } = useContext(AnimationContext);

  useEffect(() => {
    if (!isIntroComplete || !headingRef.current) {
      return;
    }
  }, [isIntroComplete]);
  return (
    <section className="relative pb-[100px] hero-section lg:px-5 md:px-4 px-3">
      {/* This background image is fine */}
      <SvgShade />
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
            White-Label Design & Development{" "}
            <span className="text-overlay text-white px-2">Made</span>
            Simple
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
