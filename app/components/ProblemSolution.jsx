import React from "react";
import Image from "next/image";
import Marquee from "./Marquee"; // Assuming Marquee is a component in your project

import bgImg from "../../public/assets/images/problem-section-bg.png";

const backgroundImage = bgImg;

const ProblemSolution = () => {
  return (
    <>
      <section className="lg:px-5 md:px-4 px-3">
        <div className="container mx-auto">
          <div className="relative rounded-[30px] mb-[30px] overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={backgroundImage}
                alt="A modern turntable playing a record"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

            {/* Content */}
            <div className="relative z-20  p-5 md:p-8 lg:p-10">
              <div className="max-w-4xl">
                <p className="font-medium fs-26 text-[#C4B5FD]">
                  [Problem & Solution]
                </p>

                <h2 className="lg:leading-20 leading-10 md:leading-18 sm:leading-16 tracking-tight lg:mt-4 md:mt-3 mt-2">
                  Growing Your Agency Shouldn’t Cost You Sanity
                </h2>
              </div>

              <div className="space-y-4 text-[#A5A5AF] xl:mt-80 lg:mt-70 md:mt-60 sm:mt-40 mt-36  max-w-6xl">
                <p>
                  As your agency wins more clients, deadlines tighten, workloads
                  balloon, and quality threatens to slip. Hiring freelancers can
                  be risky; building a team takes time. You need reliable design
                  and dev support—fast.
                </p>
                <p>
                  We plug into your agency as an embedded team—no extra hiring,
                  no oversight headaches. With Prismolix, you maintain the
                  client-facing role, while we deliver high-quality UI/UX
                  design, WordPress or Shopify sites, full-stack apps, and
                  graphic design. Transparent process. Deadline-driven sprints.
                  Reliable results.
                </p>
                <button className="mt-7 btn btn-primary btn-shine">
                  Let's Talk Scalability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
      {/* <div class="container mx-auto h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0)_100%)] mb-10"></div> */}
    </>
  );
};

export default ProblemSolution;
