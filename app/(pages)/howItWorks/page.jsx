import React from "react";
import Image from "next/image";
import SvgShade from "../../components/SvgShade";

import Shape from "../../../public/assets/images/howItWorks.svg";
import CallIcon from "../../../public/assets/images/call-icon.svg";
import PlugIcon from "../../../public/assets/images/plug-icon.svg";
import CodeIcon from "../../../public/assets/images/code-icon.png";
import GraphlIcon from "../../../public/assets/images/graph-icon.png";
import ToolsMarquee from "../../components/ToolsMarquee";
import OfferSection from "../../components/OfferSection";
import ContactSection from "../../components/ContactSection";
import CallSchedule from "../../components/CallSchedule";
import FooterMarquee from "../../components/FooterMarquee";

export const metadata = {
  title: "How Prismolix Works • Our Process & Partnership Model",
  description:
    "Our streamlined process: onboarding, sprint-based milestones, shared tracking & dedicated communication. Learn how we deliver seamlessly for agencies.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "How Prismolix Works • Our Process & Partnership Model",
    description:
      "Our streamlined process: onboarding, sprint-based milestones, shared tracking & dedicated communication. Learn how we deliver seamlessly for agencies.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Prismolix Works • Our Process & Partnership Model",
    description:
      "Our streamlined process: onboarding, sprint-based milestones, shared tracking & dedicated communication. Learn how we deliver seamlessly for agencies.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
};

const HowItWorks = () => {
  return (
    <div className="relative">
      <SvgShade />

      <Image
        src={Shape}
        alt="Abstract 3D hero image"
        // objectFit="contain"
        className="absolute top-0 right-0"
      />

      <section className="relative hero-section overflow-hidden">
        {/* Container for the text content */}
        <div className="container mx-auto lg:px-5 md:px-4 px-3 relative z-10">
          <div className="lg:w-4/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            {/* Pre-heading */}
            <span className="fs-26 color-primary-dark">[How it Works]</span>

            {/* Main Heading with Highlighted Text */}
            <h1 className="font-bold tracking-tighter leading-[100%]">
              Our <span className="text-overlay text-white px-2">Process,</span>
              Your Competitive Edge
            </h1>

            {/* Subheading */}
            <p className="text-base max-w-[700px]">
              We simplify complex projects into clear steps — giving your agency
              the power to scale faster, deliver better, and impress clients
              every time.
            </p>

            {/* Button Group */}
            <div className="flex items-center gap-4 mt-4">
              <button className="btn btn-primary btn-shine">Book a Call</button>
              <button className="btn btn-outline">How it Works</button>
            </div>
          </div>
        </div>

        {/* The Image (positioned absolutely) */}
      </section>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="rounded-[30px] bg-light-purple lg:px-[30px] lg:py-[50px] md:px-[25px] md:py-[40px]  px-[20px] py-[20px]">
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 items-center">
              <div className="lg:w-2/10 w-10/10">
                <div className="img-wrapper flex lg:justify-center">
                  <Image
                    className="lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] w-[100px] h-[100px]"
                    src={CallIcon}
                    alt={"Portfolio Image"}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="lg:w-8/10 w-10/10 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                {/* Pre-heading */}
                <span className="font-medium fs-26 color-primary-dark">
                  [Step 01]
                </span>

                {/* Main Heading with Highlighted Text */}
                <h2 className="font-bold tracking-[-1px] leading-[102%] max-w-[700px]">
                  Book a Strategy Call
                </h2>

                {/* Subheading */}

                <p className="text-base">
                  We start by understanding your agency’s workflow, clients, and
                  goals. Whether you're scaling quickly or filling a short-term
                  gap, we tailor our setup to match your needs.
                </p>

                {/* Button Group */}
                <div className="flex items-center gap-4 mt-4">
                  <a href={`#`} className="btn btn-primary btn-shine">
                    View Full Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-[30px] bg-light-purple lg:px-[30px] lg:py-[50px] md:px-[25px] md:py-[40px] px-[20px] py-[20px]">
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 items-center">
              <div className="lg:w-2/10 w-10/10">
                <div className="img-wrapper flex lg:justify-center">
                  <Image
                    className="lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] w-[100px] h-[100px]"
                    src={PlugIcon}
                    alt={"Portfolio Image"}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="lg:w-8/10 w-10/10 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                {/* Pre-heading */}
                <span className="font-medium fs-26 color-primary-dark">
                  [Step 02]
                </span>

                {/* Main Heading with Highlighted Text */}
                <h2 className="font-bold tracking-[-1px] leading-[102%] max-w-[700px]">
                  Get Plugged Into Your Workflow
                </h2>

                {/* Subheading */}

                <p className="text-base">
                  We join your Slack, Notion, Figma, or any tools your team
                  already uses. You’ll be matched with a dedicated PM and
                  assigned a senior-level team aligned with your services.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-[30px] bg-light-purple lg:px-[30px] lg:py-[50px] md:px-[25px] md:py-[40px] px-[20px] py-[20px]">
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 items-center">
              <div className="lg:w-2/10 w-10/10">
                <div className="img-wrapper flex lg:justify-center">
                  <Image
                    className="lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] w-[100px] h-[100px]"
                    src={CodeIcon}
                    alt={"Portfolio Image"}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="lg:w-8/10 w-10/10 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                {/* Pre-heading */}
                <span className="font-medium fs-26 color-primary-dark">
                  [Step 03]
                </span>

                {/* Main Heading with Highlighted Text */}
                <h2 className="font-bold tracking-[-1px] leading-[102%] max-w-[700px]">
                  Launch Your First Project{" "}
                </h2>

                {/* Subheading */}

                <p className="text-base">
                  We start executing — whether it's a landing page sprint, a
                  design system, or a dev build. You get weekly sprints,
                  progress updates, and full visibility into what's shipping.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-[30px] bg-light-purple lg:px-[30px] lg:py-[50px] md:px-[25px] md:py-[40px] px-[20px] py-[20px]">
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 items-center">
              <div className="lg:w-2/10 w-10/10">
                <div className="img-wrapper flex lg:justify-center">
                  <Image
                    className="lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] w-[100px] h-[100px]"
                    src={GraphlIcon}
                    alt={"Portfolio Image"}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="lg:w-8/10 w-10/10 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                {/* Pre-heading */}
                <span className="font-medium fs-26 color-primary-dark">
                  [Step 04]
                </span>

                {/* Main Heading with Highlighted Text */}
                <h2 className="font-bold tracking-[-1px] leading-[102%] max-w-[700px]">
                  Scale-up As You Grow
                </h2>

                {/* Subheading */}

                <p className="text-base">
                  Need more output? Bigger builds? Just let us know. Our team
                  scales with you — without you needing to hire, train, or
                  manage anyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToolsMarquee />
      <OfferSection />
      <ContactSection />
      <CallSchedule />
      <FooterMarquee />
    </div>
  );
};

export default HowItWorks;
