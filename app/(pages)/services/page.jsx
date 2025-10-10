import React from "react";
import Image from "next/image";
import Link from "next/link"; // It's good practice to import Link for navigation
import {
  fetchAllServices,
  extractServiceData,
} from "../../../services/service.service"; // Import your service functions

import Shape from "../../../public/assets/images/circleShape.svg";
import OfferSection from "../../components/OfferSection";
import ContactSection from "../../components/ContactSection";
import CallSchedule from "../../components/CallSchedule";
import FooterMarquee from "../../components/FooterMarquee";

export const metadata = {
  title: "Prismolix Services • UI/UX, Web & App Development, Shopify Builds",
  description:
    "Explore our core services: UI/UX systems, custom web & app builds, Shopify & WordPress, and ongoing graphic design. High-quality, scalable solutions to support agency growth.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Prismolix Services • UI/UX, Web & App Development, Shopify Builds",
    description:
      "Explore our core services: UI/UX systems, custom web & app builds, Shopify & WordPress, and ongoing graphic design. High-quality, scalable solutions to support agency growth.",
    images:
      "https://api.prismolix.com/wp-content/uploads/2025/08/blogDetail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prismolix Services • UI/UX, Web & App Development, Shopify Builds",
    description:
      "Explore our core services: UI/UX systems, custom web & app builds, Shopify & WordPress, and ongoing graphic design. High-quality, scalable solutions to support agency growth.",
    images:
      "https://api.prismolix.com/wp-content/uploads/2025/08/blogDetail.png",
  },
};

// Convert the component to an async Server Component
const ServicesPage = async () => {
  // 1. Fetch all services from the API
  const servicesFromAPI = await fetchAllServices();

  // 2. Process the raw data with your extractor function to get a clean object
  const services = servicesFromAPI.map((service) =>
    extractServiceData(service)
  );

  return (
    <>
      {/* --- This top section remains static as it's the introduction to the page --- */}

      <section className="relative hero-section">
        <Image
          className="absolute top-0 right-0 h-auto w-full -z-1"
          src={"/assets/images/Shade.png"}
          width={100}
          height={100}
          alt=""
        />
        <Image
          src={Shape}
          alt="Abstract 3D hero image"
          className="absolute top-0 right-0"
        />
        <div className="container relative z-10 mx-auto px-3 md:px-4 lg:px-5">
          <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 lg:w-4/6 lg:gap-5">
            <p className="fs-26 color-primary-dark">[Services]</p>
            <h1 className="font-bold leading-[100%] tracking-tighter">
              Your Growth, Our
              <span className="text-overlay px-2 text-white">
                Scalable
              </span>{" "}
              Execution
            </h1>
            <p className="max-w-3xl text-base">
              Your time should be spent closing deals — not designing pages. We
              handle execution so you can focus on growth.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button className="btn btn-primary btn-shine">Book a Call</button>
              <button className="btn btn-outline">How it Works</button>
            </div>
          </div>
        </div>
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
              <span className="font-medium color-primary-dark fs-26 md:text-xl">
                [Our Services]
              </span>

              <h2 className="mt-2 mb-4 font-bold leading-tight ">
                What We Do — End-to-End Agency Execution
              </h2>

              <p className="mb-4 md:text-lg">
                We specialize in delivering{" "}
                <strong>end-to-end digital solutions</strong>
                designed to help agencies grow without limits. From intuitive
                UI/UX design to powerful full-stack development, our services
                give you the flexibility to take on more clients while ensuring
                every project runs smoothly. With a scalable model, you can
                expand your capacity without the stress of hiring or managing
                extra teams.
              </p>
              <p className="mb-6 text-base md:text-lg">
                Every solution we deliver is tailored to align with your
                clients’ unique goals. We focus on quality, consistency, and
                results — so your agency can stand out with work that speaks for
                itself. Whether it’s websites, apps, or eCommerce platforms, our
                team ensures each project not only looks great but also performs
                flawlessly.
              </p>

              <button className="btn btn-primary btn-shine mt-2 w-full sm:w-auto sm:self-start">
                Let's Talk Scalability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- This section now uses the dynamically fetched data --- */}
      <section className="my-12 px-3 md:px-4 lg:my-24 lg:px-5">
        <div className="container mx-auto">
          <div className="service-content flex flex-col items-center gap-5 max-w-2xl mx-auto">
            <span className="fs-26 color-primary-dark">[Services]</span>
            <h2 className=" text-center leading-10 tracking-tight lg:leading-20">
              Our Services
            </h2>
            <p className=" text-center color-dark-cards-bg">
              Here are the core services we offer to help your agency scale with
              confidence and efficiency:
            </p>
          </div>

          <div className="service-cards mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {/* 3. Map over the fetched and processed services data */}
            {services.map((service, index) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.id}
                className="relative flex flex-col overflow-hidden rounded-[30px] bg-light-purple p-8"
              >
                <p className="self-end select-none font-black leading-tight big-number">
                  {String(index + 1).padStart(2, "0")}
                  <span className="color-primary-light">.</span>
                </p>
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="gradient-line pb-[30px]">
                        <span className="rounded-full bg-white px-2.5 py-[7px]">
                          {service.duration}
                        </span>
                        <h4
                          className="mt-2.5"
                          dangerouslySetInnerHTML={{ __html: service.title }}
                        />
                      </div>
                      <ul className="mt-[30px] flex flex-col">
                        {service.keyPoints.map((point, idx) => (
                          <React.Fragment key={idx}>
                            <li className="flex gap-2.5 font-medium items-center text-gray-700 fs-26">
                              <svg
                                className="w-3 h-3"
                                width="10"
                                height="10"
                                viewBox="0 0 10 11"
                                fill="none"
                              >
                                <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                              </svg>
                              {point}
                            </li>
                            {idx < service.keyPoints.length - 1 && (
                              <hr className="my-5 w-full border-gray-300" />
                            )}
                          </React.Fragment>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-[50px]">
                      <p className="text-sm text-gray-500">Starting from:</p>
                      <h4 className="service-price color-primary-dark">
                        {service.startingPrice}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OfferSection />
      <ContactSection />
      <CallSchedule />
      <FooterMarquee />
    </>
  );
};

export default ServicesPage;
