import React from "react";
import Image from "next/image";
import Shape from "../../public/assets/images/image-7.png";
import featureImg from "../../public/assets/images/blog-img.png";
import sectionShape from "../../public/assets/images/section-shape.png";
import {
  fetchAllBlogs,
  extractBlogData,
} from "../../services/projects.service.js";

import Testimonial from "../components/Testimonial.jsx";
import ContactSection from "../components/ContactSection.jsx";
import CallSchedule from "../components/CallSchedule.jsx";

// Helper function to get image URL
const getImageUrl = (portfolio) => {
  const featuredImageUrl =
    portfolio._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  if (featuredImageUrl) {
    // Convert HTTP to HTTPS if needed
    return featuredImageUrl.replace("http://", "https://");
  }
  return featureImg;
};

const page = async () => {
  // Fetch portfolio items from API
  const portfolioItems = await fetchAllBlogs();

  return (
    <div className="relative">
      <Image
        className="absolute w-full h-auto top-0 left-0 z-[-1]"
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
      <section className="relative  pt-[295px] overflow-hidden lg:px-5 md:px-4 px-3">
        {/* Container for the text content */}
        <div className="container mx-auto relative z-10">
          <div className="lg:w-4/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            {/* Pre-heading */}
            <p className="font-medium text-[26px] color-primary-dark">
              [Case Studies]
            </p>

            {/* Main Heading with Highlighted Text */}
            <h1 className="font-bold tracking-tighter leading-[100%]">
              Quietly Powering
              <span className="text-overlay  text-white px-2">Agency</span>{" "}
              Success
            </h1>

            {/* Subheading */}
            <p className="text-base max-w-3xl">
              Prismolix works behind the scenes to help top agencies ship
              faster, scale smarter, and deliver beautiful results — without
              adding headcount.
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

      {/* Dynamic Portfolio Sections */}
      {portfolioItems.map((portfolio, index) => {
        const portfolioData = extractBlogData(portfolio);

        return (
          <section key={portfolio.id} className="lg:px-5 md:px-4 px-3 my-lg">
            <div className="container mx-auto">
              <div className="rounded-[30px] bg-light-purple px-[30px] py-[50px]">
                <div className="flex lg:flex-row flex-col gap-10">
                  <div className="lg:w-3/8 w-8/8">
                    <div className="img-wrapper">
                      <Image
                        className="w-full"
                        src={getImageUrl(portfolio)}
                        alt={portfolioData.title || "Portfolio Image"}
                        width={500}
                        unoptimized={true}
                        height={300}
                      />
                    </div>
                    <div className="lg:block hidden mt-14">
                      <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                        Services Provided:
                      </span>

                      {/* Dynamic tags from API */}
                      <div className="flex flex-wrap justify-start gap-1.5 mt-1.5">
                        {portfolioData.tags.length > 0 ? (
                          portfolioData.tags
                            .slice(0, 3)
                            .map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-white px-5 py-2.5 rounded-full"
                              >
                                <p>{tag}</p>
                              </span>
                            ))
                        ) : (
                          // Show message if no tags available
                          <span className="bg-white px-5 py-2.5 rounded-full">
                            <p>Case Study</p>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-5/8 w-8/8 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                    {/* Pre-heading */}
                    <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] color-primary-dark">
                      [Case Study - {String(index + 1).padStart(2, "0")}]
                    </span>

                    {/* Main Heading with Highlighted Text */}
                    <h2 className="font-bold tracking-[-1px] leading-[102%]">
                      {portfolioData.title}
                    </h2>

                    {/* Subheading */}
                    <div>
                      <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                        Client Type:
                      </span>

                      <p className="text-base max-w-3xl">
                        {portfolioData.clientType}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                        Services Provided:
                      </span>

                      <p className="text-base max-w-3xl">
                        {portfolioData.servicesProvided}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                        Challenge:
                      </span>

                      <p className="text-base max-w-3xl">
                        {portfolioData.challenge}
                      </p>
                    </div>
                    <div className="lg:hidden block ">
                      <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                        Services Provided:
                      </span>

                      {/* Dynamic tags from API for mobile */}
                      <div className="flex flex-wrap justify-start gap-1.5 mt-1.5">
                        {portfolioData.tags.length > 0 ? (
                          portfolioData.tags
                            .slice(0, 3)
                            .map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-white px-5 py-2.5 rounded-full"
                              >
                                <p>{tag}</p>
                              </span>
                            ))
                        ) : (
                          // Show message if no tags available
                          <span className="bg-white px-5 py-2.5 rounded-full">
                            <p>Case Study</p>
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Button Group */}
                    <div className="flex items-center gap-4 mt-4">
                      <a
                        href={`/projects/${portfolioData.slug}`}
                        className="btn btn-primary"
                      >
                        View Full Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Testimonial />
      <ContactSection />
      <CallSchedule />

      {/* <section className="w-full my-lg lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="bg-light-purple rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/assets/images/section-shape.png"
                  alt="Abstract 3D shape"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <span className="text-brand-purple font-semibold uppercase tracking-wider text-sm mb-4">
                  Service Detail
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

                <button className="bg-brand-purple text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-light-purple">
                  Let's Talk Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default page;
