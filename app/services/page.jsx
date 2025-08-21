import React from "react";
import Image from "next/image";

import Shape from "../../public/assets/images/circleShape.svg";
import OfferSection from "../components/OfferSection";
import ContactSection from "../components/ContactSection";
import CallSchedule from "../components/CallSchedule";

const services = [
  {
    number: "01",
    timeframe: "1–2 weeks",
    title: "UI/UX Systems",
    price: "$2,000/mo",
    features: [
      "User flows & journey maps",
      "Mobile/web wireframes",
      "Iterative feedback & revisions",
    ],
  },
  {
    number: "02",
    timeframe: "2–3 weeks",
    title: "WordPress",
    price: "$3,000/mo",
    features: [
      "Custom theme development",
      "Plugin integration",
      "Performance optimization",
    ],
  },
  {
    number: "03",
    timeframe: "2–4 weeks",
    title: "Shopify",
    price: "$3,000/mo",
    features: ["Custom store setup", "Theme customization", "App integration"],
  },
  {
    number: "04",
    timeframe: "4–8 weeks",
    title: "App Development",
    price: "Custom",
    features: [
      "User flows & journey maps",
      "Mobile/web wireframes",
      "Iterative feedback & revisions",
    ],
  },
  {
    number: "05",
    timeframe: "Ongoing",
    title: "Graphic Design",
    price: "$1,500/mo",
    features: [
      "Custom theme development",
      "Plugin integration",
      "Performance optimization",
    ],
  },
];

const page = () => {
  return (
    <div className="relative">
      <Image
        className="absolute w-full h-auto top-0 left-0 z-0"
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
      />{" "}
      <section className="relative pt-[295px] overflow-hidden">
        {/* Container for the text content */}
        <div className="container mx-auto lg:px-5 md:px-4 px-3 relative z-10">
          <div className="lg:w-4/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            {/* Pre-heading */}
            <p className="font-medium text-[26px] color-primary-dark">
              [Services]
            </p>

            {/* Main Heading with Highlighted Text */}
            <h1 className="font-bold tracking-tighter leading-[100%]">
              <span className="text-overlay text-white px-2">Scalable</span>{" "}
              Design & Development
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
        <div className="container mx-auto">
          <div className="service-content flex flex-col items-center gap-5">
            <span className="font-medium text-[26px] color-primary-dark">
              [Services]
            </span>
            <h2 className="lg:leading-20 leading-10 tracking-tight max-w-4xl">
              What We Build
            </h2>
            <p className="color-dark-cards-bg max-w-2xl text-center">
              Whether it’s a landing page sprint, a headless eCommerce build, or
              full-stack app design — we’ve got you covered.
            </p>
          </div>
          <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {/* Service Cards - Generated from the array */}
            {services.map((service) => (
              <div
                key={service.number}
                className="relative flex flex-col bg-light-purple rounded-[30px] p-8 overflow-hidden"
              >
                {/* Giant background number */}
                <p className="absolute top-0 right-8 !lg:text-[150px] !md:text-[140px] !sm:text-[130px] !text-[120px] font-black text-white z-0 select-none leading-tight">
                  {service.number}
                  <span className="color-primary-light">.</span>
                </p>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full mt-36">
                  {/* Price section pushed to the bottom */}
                  <div className="mt-auto">
                    <div className="gradient-line pb-5">
                      <p className="">
                        <span className="bg-white px-2.5 py-[7px] rounded-full">
                          {service.timeframe}
                        </span>
                      </p>
                      <h4 className="mt-2">{service.title}</h4>
                    </div>

                    <ul className="flex flex-col mt-5">
                      {service.features.map((feature, index) => (
                        // Use a React Fragment to group the list item and the conditional divider
                        <React.Fragment key={index}>
                          <li className="flex items-center gap-2.5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="11"
                              viewBox="0 0 10 11"
                              fill="none"
                            >
                              <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                            </svg>
                            {feature}
                          </li>

                          {/* Only render the <hr> if it's NOT the last item */}
                          {index < service.features.length - 1 && (
                            <hr className="w-full my-4 border-gray-300" />
                          )}
                        </React.Fragment>
                      ))}
                    </ul>

                    <div className="pt-5">
                      <p className="text-sm text-gray-500">Starting from:</p>
                      <h4 className="service-price color-primary-dark">
                        {service.price}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OfferSection />
      <ContactSection />
      <CallSchedule />
    </div>
  );
};

export default page;
