"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImg from "../../../public/assets/images/blog-detail-bg.png";
import ContactSection from "../../../app/components/ContactSection";
import Testimonial from "../../../app/components/Testimonial";
import CallSchedule from "../../../app/components/CallSchedule";
import ToolsMarquee from "../../../app/components/ToolsMarquee";
import OfferSection from "../../../app/components/OfferSection";

const data = {
  process: [
    {
      number: "01",
      title: "Fully white-labeled",
      description:
        "Your branding, your voice — we work invisibly behind the scenes.",
    },
    {
      number: "02",
      title: "Senior designers only",
      description: "No juniors, no training, no guessing.",
    },
    {
      number: "03",
      title: "System-first mindset",
      description: "We design for scale — not just single screens.",
    },
    {
      number: "04",
      title: "Built for dev handoff",
      description:
        "Clean, annotated, and component-based designs that developers love.",
    },
    {
      number: "05",
      title: "Embedded collaboration",
      description:
        "Slack, Notion, Figma — we plug into your stack and workflow.",
    },
  ],
};

const Page = () => {
  // const [data, setData] = useState(null);

  return (
    <>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="testimonial-bg relative flex flex-col md:flex-row p-4 justify-center">
            <div className="absolute inset-0 z-[-1]">
              <Image
                src={bgImg}
                alt="A modern turntable playing a record"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-5 max-w-6xl my-lg">
              <span className="font-medium text-[26px]  color-primary-dark">
                [Case Study]
              </span>
              <h1 className="text-center leading-[95%] max-w-5xl">
                UI/UX Design Services
              </h1>
              <p className="text-center max-w-3xl">
                Your time should be spent closing deals — not designing pages.
                We handle execution so you can focus on growth.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative bg-light-purple rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="flex items-center gap-12">
              <div className=" w-full lg:w-1/2">
                <Image
                  src="/assets/images/section-shape.png"
                  alt="Abstract 3D shape"
                  width={200}
                  height={200}
                  className="absolute top w-[590.646px] top-0 left-0 h-auto object-contain rounded-2xl"
                />
              </div>

              <div className="w-full lg:w-3/4 flex flex-col -icon">
                <span className="font-medium text-[26px]  color-primary-dark">
                  [Service Detail]
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Scalable, Systematic, and Pixel-Perfect - Designed for
                  Agencies
                </h2>

                <p className="text-gray-700 text-lg mb-4">
                  Vlmea yuac dfnreie napset viorld slsan daisgn. Stixnotir
                  qutuig eitibiea. Visae oltir vetip- lrted tihdllt
                  slkognrvjlcono titae nottes acth pon sgonay — uitlo nigra
                  roaliy te aox eni imedaisd oopects.
                </p>

                <p className="text-gray-600 text-base mb-8">
                  Emen paotuer qiotrin ta tuk-seda doign vofume, vei tvop yau
                  thip issiur vritoa saeshtimg ogtdy.
                </p>

                <button className="btn btn-primary w-60 bg-brand-purple text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-light-purple">
                  Let's Talk Scalability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto my-lg">
          <div className="service-content flex flex-col items-center gap-5">
            <span className="font-medium text-[26px] color-primary-dark">
              [The Difference]
            </span>
            <h2 className="leading-20 tracking-tight text-center max-w-4xl">
              Why Agencies Choose Our UI/UX Team
            </h2>
          </div>
          <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {(data?.process?.length ? data.process : []).map((step) => (
              <div
                key={step.number + step.title}
                className="relative flex flex-col bg-light-purple rounded-[30px] p-8 overflow-hidden"
              >
                <p className="absolute top-0 right-8 !lg:text-[150px] !md:text-[140px] !sm:text-[130px] !text-[120px] font-black text-white z-0 select-none leading-tight">
                  {step.number}
                  <span className="color-primary-light">.</span>
                </p>
                <div className="relative z-10 flex flex-col h-full mt-36">
                  <div className="mt-auto">
                    <h4 className="mt-2 max-w-xs">{step.title}</h4>
                    <p className="text-sm max-w-xs">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="service-content flex flex-col items-center gap-5">
            <span className="font-medium text-[26px] color-primary-dark">
              [The Difference]
            </span>
            <h2 className="leading-20 tracking-tight text-center max-w-4xl">
              What We Deliver
            </h2>
          </div>
          <div className="flex lg:flex-row flex-col gap-5 mt-5">
            <div className="bg-light-purple lg:w-1/2 w-full px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4 className="text-xl font-bold text-gray-800">
                1. Design Discovery
              </h4>
              <p className="font-medium text-gray-600">
                We start with a deep dive into your client's goals, users, and
                product.
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Stakeholder input
                </li>
                <hr className="w-full my-4 border-gray-300" />
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Competitive analysis
                </li>
                <hr className="w-full my-4 border-gray-300" />
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  UX audits (if redesign)
                </li>
              </ul>
            </div>

            <div className="bg-light-purple lg:w-1/2 w-full px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4 className="text-xl font-bold text-gray-800">
                2. Wireframes & Flows
              </h4>
              <p className="font-medium text-gray-600">
                Low-fidelity wireframes that define structure, logic, and
                interaction.
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  User flows
                </li>
                <hr className="w-full my-4 border-gray-300" />
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Mobile/web wireframes
                </li>
                <hr className="w-full my-4 border-gray-300" />
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Iterative feedback
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-5 mt-5">
            <div className="bg-light-purple lg:w-1/2 w-full px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4 className="text-xl font-bold text-gray-800">
                3. UI Design & Systemization
              </h4>
              <p className="font-medium text-gray-600">
                We create modular, consistent, high-fidelity designs in Figma.
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Color, typography, components
                </li>
                <hr className="w-full my-4 border-gray-300" />
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Page templates and design libraries
                </li>
                <hr className="w-full my-4 border-gray-300" />
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Auto-layout + responsive principles
                </li>
              </ul>
            </div>

            <div className="bg-light-purple lg:w-1/2 w-full px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4 className="text-xl font-bold text-gray-800">
                4. Developer Handoff
              </h4>
              <p className="font-medium text-gray-600">
                We prep files with dev-friendly annotations and specs for a ease
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Figma developer mode
                </li>
                <hr className="w-full my-4 border-gray-300" />
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Component naming standards
                </li>
                <hr className="w-full my-4 border-gray-300" />
                <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Optional Loom walkthroughs
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex lg:flex-row flex-col gap-5">
            <div className="bg-light-purple lg:w-1/2 w-2/2 px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>1. Design Discovery</h4>
              <p className="font-medium">
                We start with a deep dive into your client's goals, users, and
                product.
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Stakeholder input
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Competitive analysis
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  UX audits (if redesign)
                </li>
              </ul>
            </div>
            <div className="bg-light-purple lg:w-1/2 w-2/2 px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>1. Design Discovery</h4>
              <p className="font-medium">
                We start with a deep dive into your client's goals, users, and
                product.
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Stakeholder input
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Competitive analysis
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  UX audits (if redesign)
                </li>
              </ul>
            </div>
            <div className="bg-light-purple lg:w-1/2 w-2/2 px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>1. Design Discovery</h4>
              <p className="font-medium">
                We start with a deep dive into your client's goals, users, and
                product.
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Stakeholder input
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Competitive analysis
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  UX audits (if redesign)
                </li>
              </ul>
            </div>
            <div className="bg-light-purple lg:w-1/2 w-2/2 px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>1. Design Discovery</h4>
              <p className="font-medium">
                We start with a deep dive into your client's goals, users, and
                product.
              </p>
              <ul className="flex flex-col mt-5">
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Stakeholder input
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Competitive analysis
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  UX audits (if redesign)
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>

      <ToolsMarquee />

      <OfferSection />

      <ContactSection />

      <Testimonial />

      <CallSchedule />
    </>
  );
};

export default Page;
