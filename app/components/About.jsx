"use client";
import React, { useState } from "react";
import Image from "next/image";
import Shape from "../../public/assets/images/blogShape.png";
import Marquee from "../components/Marquee";

const About = () => {
  // const [data, setData] = useState(null);

  return (
    <>
      <section className="relative pt-[295px] overflow-hidden">
        {/* Container for the text content */}
        <div className="container mx-auto lg:px-5 md:px-4 px-3 relative z-10">
          <div className="lg:w-6/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            {/* Pre-heading */}
            <p className="font-medium text-[26px] color-primary-dark">
              [Our Blog]
            </p>

            {/* Main Heading with Highlighted Text */}
            <h1 className="font-bold tracking-tighter leading-[100%] max-w-6xl">
              The Silent Engine Powering Top {""}
              <span className="text-overlay text-white px-2">Agencies</span>
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
        <div className="absolute top-72 right-0 -translate-y-1/2 w-1/2 lg:w-[670px] h-[670px] z-0 hidden lg:block">
          <Image
            src={Shape}
            alt="Abstract 3D hero image"
            layout="fill"
            // objectFit="contain"
            className="object-right"
          />
        </div>
      </section>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="relative bg-light-purple rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="flex items-center gap-12">
              <div className=" w-full lg:w-1/2">
                <Image
                  src="/assets/images/section-shape.png"
                  alt="Abstract 3D shape"
                  width={200}
                  height={200}
                  unoptimized={true}
                  className="absolute top w-[590.646px] top-0 left-0 h-auto object-contain rounded-2xl"
                />
              </div>

              <div className="w-full lg:w-3/4 flex flex-col -icon">
                <span className="font-medium text-[26px]  color-primary-dark">
                  [About Company]
                </span>

                <h2 className="font-bold text-gray-900 leading-[82px] mb-6">
                  Agency Growth Shouldn't Mean Burnout
                </h2>

                <p className="text-gray-700 text-lg mb-4">
                  At Prismolix, we don’t chase the spotlight — we power those
                  who do. We’re the behind-the-scenes partner helping agencies
                  scale effortlessly by delivering world-class design and
                  development — under your brand, inside your workflow, and with
                  zero management overhead.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  {" "}
                  We were built for agencies who are growing fast but tired of
                  bottlenecks — sourcing freelancers, managing inconsistent
                  delivery, or sacrificing quality under pressure. Prismolix
                  gives you a full-stack execution team that integrates
                  seamlessly, works in your tools, and moves at your speed.
                </p>

                <button className="btn btn-primary w-60 bg-brand-purple text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-light-purple">
                  Let's Talk Scalability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:gap-24 gap-5">
            <div className="lg:w-2/10 w-10/10 ">
              <span className="font-medium text-[26px]  color-primary-dark">
                [About Company]
              </span>
              <div className="img-wrapper lg:block hidden mt-12 h-auto rounded-[10px]">
                <Image
                  src={"/assets/images/founder.png"}
                  className="w-full"
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:w-8/10 w-10/10 ">
              <h2>Founder’s Note</h2>
              <h5 className="!font-normal">
                I built Prismolix for the agency owner I once was — overwhelmed
                by unreliable freelancers, missed deadlines, and the constant
                fear of projects falling through the cracks. I know how it feels
                to juggle client expectations while handling execution alone.
                Prismolix was born to solve that problem — to be the dependable
                delivery partner I wish I had back then. Today, we make sure no
                agency has to go through that chaos again.
              </h5>
              <div className="flex items-center mt-2.5">
                <div className="image-wrapper w-[70px] h-[70px] lg:hidden block">
                  <Image
                    src={"/assets/images/founder.png"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col lg:ml-0 ml-3">
                  <h3>Taha A. Khanzada</h3>
                  <p>Founder of Prismolix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
