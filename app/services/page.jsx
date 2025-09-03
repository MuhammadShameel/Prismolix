// "use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // It's good practice to import Link for navigation
import {
  fetchAllServices,
  extractServiceData,
} from "../../services/service.service"; // Import your service functions

import Shape from "../../public/assets/images/circleShape.svg";
import OfferSection from "../components/OfferSection";
import ContactSection from "../components/ContactSection";
import CallSchedule from "../components/CallSchedule";
import FooterMarquee from "../components/FooterMarquee";

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

      <section className="relative pt-[295px]">
        <Image
          className="absolute top-0 right-0 z-0 h-auto w-full"
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
              <span className="text-overlay px-2 text-white">Scalable</span>{" "}
              Design & Development
            </h1>
            <p className="max-w-3xl text-base">
              Your time should be spent closing deals — not designing pages. We
              handle execution so you can focus on growth.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button className="btn btn-primary">Book a Call</button>
              <button className="btn btn-outline">How it Works</button>
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
              What We Build
            </h2>
            <p className=" text-center color-dark-cards-bg">
              Whether it’s a landing page sprint, a headless eCommerce build, or
              full-stack app design — we’ve got you covered.
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
                <p className="absolute top-0 right-8 z-0 select-none font-black leading-tight text-white !text-[120px] !sm:text-[130px] !md:text-[140px] !lg:text-[150px]">
                  {String(index + 1).padStart(2, "0")}
                  <span className="color-primary-light">.</span>
                </p>
                <div className="relative z-10 mt-36 flex h-full flex-col">
                  <div className="mt-auto">
                    <div className="gradient-line pb-5">
                      <p>
                        <span className="rounded-full bg-white px-2.5 py-[7px]">
                          {service.duration}
                        </span>
                      </p>
                      <h4
                        className="mt-2"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      />
                    </div>
                    <ul className="mt-5 flex flex-col">
                      {service.keyPoints.map((point, idx) => (
                        <React.Fragment key={idx}>
                          <li className="flex gap-2.5 font-medium text-gray-700 fs-26">
                            <svg
                              className="mt-2.5 w-3 h-3"
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
                            <hr className="my-4 w-full border-gray-300" />
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                    <div className="pt-5">
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
