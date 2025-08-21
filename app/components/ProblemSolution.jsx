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
            <div className="relative z-20 flex flex-col items-start gap-6 p-10 md:p-12 lg:p-16">
              <p className="font-medium text-[#C4B5FD]">[Problem & Solution]</p>

              <h2 className="lg:leading-20 leading-10 md:leading-18 sm:leading-16 leading-12 tracking-tight max-w-4xl">
                Agency Growth Shouldn't Mean Burnout
              </h2>

              <div className="space-y-4 text-[#A5A5AF] lg:mt-80 md:mt-60 sm:mt-40 mt-36  max-w-6xl">
                <p>
                  As your agency wins more clients, expectations pile up. Design
                  timelines stretch. Dev work gets complex. Quality starts
                  slipping. And hiring takes too long — or worse, you hire the
                  wrong fit.
                </p>
                <p>
                  Prismolix was built for this moment. We're a white-label team
                  that plugs into your agency, delivering high-quality design
                  and development without the headache of sourcing, training, or
                  managing freelancers. You stay client-facing. We quietly
                  deliver.
                </p>
              </div>

              <button className="mt-4 btn btn-primary">
                Let's Talk Scalability
              </button>
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
