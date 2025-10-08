import React from "react";
import Image from "next/image";
import Shape from "../../../public/assets/images/image-7.png";
import featureImg from "../../../public/assets/images/blog-img.png";
import {
  fetchAllBlogs,
  extractBlogData,
} from "../../../services/projects.service.js";

import Testimonial from "../../components/Testimonial.jsx";
import ContactSection from "../../components/ContactSection.jsx";
import CallSchedule from "../../components/CallSchedule.jsx";
import FooterMarquee from "../../components/FooterMarquee";

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

export const metadata = {
  title: "Case Studies by Prismolix • Real Projects, Real Results",
  description:
    "See how we’ve helped agencies scale and deliver exceptional results. Explore projects in web, apps, Shopify & UX/UI that showcase our transparent process and impact.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Case Studies by Prismolix • Real Projects, Real Results",
    description:
      "See how we’ve helped agencies scale and deliver exceptional results. Explore projects in web, apps, Shopify & UX/UI that showcase our transparent process and impact.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies by Prismolix • Real Projects, Real Results",
    description:
      "See how we’ve helped agencies scale and deliver exceptional results. Explore projects in web, apps, Shopify & UX/UI that showcase our transparent process and impact.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
};

const page = async () => {
  // Fetch portfolio items from API
  const portfolioItems = await fetchAllBlogs();

  return (
    <>
      <section className="relative  hero-section lg:px-5 md:px-4 px-3">
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
        {/* Container for the text content */}
        <div className="container mx-auto relative z-10">
          <div className="lg:w-4/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            {/* Pre-heading */}
            <span className="fs-26 color-primary-dark">[Case Studies]</span>

            {/* Main Heading with Highlighted Text */}
            <h1 className="font-bold tracking-tighter leading-[100%]">
              Quietly Powering
              <span className="text-overlay  text-white px-2">Agency</span>{" "}
              Growth
            </h1>

            {/* Subheading */}
            <p className="text-base max-w-3xl">
              At Prismolix, we partner seamlessly with agencies behind the
              scenes — helping them deliver faster, scale smarter, and produce
              beautiful results, all without ballooning their headcount.
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

      {/* Dynamic Portfolio Sections */}
      {portfolioItems.map((portfolio, index) => {
        const portfolioData = extractBlogData(portfolio);

        return (
          <section key={portfolio.id} className="lg:px-5 md:px-4 px-3 my-lg">
            <div className="container mx-auto">
              <div className="lg:rounded-[30px]  rounded-[20px] bg-light-purple lg:px-[30px] lg:py-[50px] md:px-[25px] md:py-[40px] px-[15px] py-[15px]">
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
                      <span className="font-medium fs-26">
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
                    <span className="font-medium fs-26 color-primary-dark">
                      [Case Study - {String(index + 1).padStart(2, "0")}]
                    </span>

                    {/* Main Heading with Highlighted Text */}
                    <h2 className="font-bold tracking-[-1px] leading-[102%]">
                      {portfolioData.title}
                    </h2>

                    {/* Subheading */}
                    <div>
                      <span className="font-medium fs-26">Client Type:</span>

                      <p className="text-base max-w-3xl">
                        {portfolioData.clientType}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium fs-26">
                        Services Provided:
                      </span>

                      <p className="text-base max-w-3xl">
                        {portfolioData.servicesProvided}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium fs-26">Challenge:</span>

                      <p className="text-base max-w-3xl">
                        {portfolioData.challenge}
                      </p>
                    </div>
                    <div className="lg:hidden block ">
                      <span className="font-medium fs-26">
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
                        className="btn btn-primary btn-shine"
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
      <FooterMarquee />
    </>
  );
};

export default page;
