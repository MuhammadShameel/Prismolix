import React from "react";
import Image from "next/image";
import Shape from "../../public/assets/images/blogShape.png";
import Marquee from "../components/Marquee";
import CallSchedule from "../components/CallSchedule";
import FooterMarquee from "../components/FooterMarquee";

const services = [
  {
    number: "01",
    title: "Not a freelancer pool. Everyone’s vetted and trained.",
  },
  {
    number: "02",
    title: "Not a productized service. We adapt to your workflow.",
  },
  {
    number: "03",
    title: "Not bloated with overhead. We stay lean so you stay profitable.",
  },
];

export const metadata = {
  title: "About Prismolix — Your White-Label Partner in Design & Development",
  description:
    "Learn how Prismolix empowers agencies by seamlessly providing design, development & creative support. We plug in as your behind-the-scenes team so you can stay client-focused.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "About Prismolix — Your White-Label Partner in Design & Development",
    description:
      "Learn how Prismolix empowers agencies by seamlessly providing design, development & creative support. We plug in as your behind-the-scenes team so you can stay client-focused.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Prismolix — Your White-Label Partner in Design & Development",
    description:
      "Learn how Prismolix empowers agencies by seamlessly providing design, development & creative support. We plug in as your behind-the-scenes team so you can stay client-focused.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
};

const About = () => {
  return (
    <>
      <section className="relative hero-section">
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
          // objectFit="contain"
          className="absolute top-0 right-0"
        />
        {/* Container for the text content */}
        <div className="container mx-auto lg:px-5 md:px-4 px-3 relative z-10">
          <div className="lg:w-5/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2 max-w-6xl">
            {/* Pre-heading */}
            <p className="fs-26px color-primary-dark">[Our Blog]</p>

            {/* Main Heading with Highlighted Text */}
            <h1 className="font-bold tracking-tighter leading-[100%]">
              The Silent Engine Behind Your{""}
              <span className="text-overlay text-white px-2">Success</span>
            </h1>

            {/* Subheading */}
            <p className="text-base max-w-3xl">
              Your agency’s real value is in strategy, sales, and client
              relationships — not in chasing deadlines or managing unreliable
              freelancers. That’s where <strong>Prismolix</strong> comes in.
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
      <section className="lg:px-5 md:px-4 px-3 my-lg !mb-0">
        <div className="container mx-auto">
          {/* Main flex container: column on mobile, row on large screens */}
          <div className="overflow-hidden rounded-3xl bg-light-purple flex flex-col lg:items-center gap-0 lg:flex-row lg:gap-12">
            {/* Image Column */}
            <div className="lg:w-2/6">
              <Image
                src="/assets/images/section-shape.png"
                alt="Abstract 3D shape"
                width={590}
                height={590} // Use dimensions for a 1:1 aspect ratio
                className="h-auto w-full max-w-md lg:max-w-none"
              />
            </div>

            {/* Text Content Column */}
            <div className="w-full lg:w-4/6 p-5 sm:p-8 md:p-12 lg:p-16">
              <span className="font-medium color-primary-dark fs-26">
                [About Company]
              </span>

              <h2 className="mt-2 mb-4 font-bold leading-tight ">
                Agency Growth Without Burnout
              </h2>

              <p className="mb-4">
                Growing your agency shouldn’t mean endless stress, late nights,
                and bottlenecks. At Prismolix, we don’t take the spotlight — we
                power those who do.
              </p>
              <p className="mb-6 text-base">
                We help creative and digital agencies scale effortlessly by
                delivering world-class UI/UX design, web, app, and Shopify
                development — all white-labeled, fully integrated into your
                workflow, and with zero management overhead.
              </p>
              <p className="mb-6 text-base">
                No more freelancer headaches. No more inconsistent delivery.
                With Prismolix, you get a dedicated execution team that adapts
                to your speed, works in your tools, and delivers with quality
                and consistency.
              </p>

              <button className="btn btn-primary btn-shine mt-2 w-full sm:w-auto sm:self-start">
                Let's Talk Scalability
              </button>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
      <section className="lg:px-5 md:px-4 px-3 my-lg !mt-[50px]">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:gap-24 gap-5">
            <div className="lg:w-2/10 w-10/10 ">
              <span className="fs-26  color-primary-dark">[About Company]</span>
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
              <h5 className="!font-normal mt-2.5">
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
                  <p className="fs-26">Founder of Prismolix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="service-content flex flex-col items-center gap-5 max-w-2xl mx-auto">
            <span className="fs-26 color-primary-dark">[The Difference]</span>
            <h2 className="lg:leading-20 leading-10 tracking-tight text-center">
              What makes us different
            </h2>
          </div>
          <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {/* Service Cards - Generated from the array */}
            {services.map((service) => (
              <div
                key={service.number}
                className="relative justify-between flex flex-col bg-light-purple rounded-[30px] lg:p-8 md:p-7 p-5 overflow-hidden"
              >
                {/* Giant background number */}
                <p className="self-end big-number font-black text-white z-0 select-none leading-tight">
                  {service.number}
                  <span className="color-primary-light">.</span>
                </p>

                {/* Card Content */}
                <div className="flex flex-col mt-36">
                  {/* Price section pushed to the bottom */}
                  <div>
                    <h4 className="leading-[45px]">{service.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallSchedule />
      <FooterMarquee />
    </>
  );
};

export default About;
