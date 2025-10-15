"use client"; // This file is now a Client Component

import React, { useState } from "react";
import Image from "next/image";
import { extractBlogData } from "../../services/projects.service.js"; // Adjust path if needed
import featureImg from "../../public/assets/images/blog-img.png"; // Adjust path if needed

// Define categories statically inside the component
const categories = [
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "UI/UX Designing",
  "Email Marketing",
  "SEO/Search Engine Optimization",
];

// Helper function to get image URL (can be moved here or imported)
const getImageUrl = (portfolio) => {
  const featuredImageUrl =
    portfolio._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  if (featuredImageUrl) {
    return featuredImageUrl.replace("http://", "https://");
  }
  return featureImg;
};

// The component receives the full list of projects as a prop
const PortfolioFilter = ({ initialItems }) => {
  const [activeCategory, setActiveCategory] = useState("Web Development");

  // Filter logic now uses the 'initialItems' prop
  const filteredPortfolioItems = initialItems.filter((item) => {
    const { tags } = extractBlogData(item);
    return tags.some(
      (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <>
      {/* Filter Tabs UI */}
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#6A34E8] text-white" // Use your primary color for active
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Render the FILTERED portfolio items */}
      {filteredPortfolioItems.length > 0 ? (
        filteredPortfolioItems.map((portfolio, index) => {
          const portfolioData = extractBlogData(portfolio);
          return (
            <section key={portfolio.id} className="lg:px-5 md:px-4 px-3 my-lg">
              {/* Your existing JSX for rendering a single project item goes here... */}
              {/* I've copied it below for completeness */}
              <div className="container mx-auto">
                <div className="lg:rounded-[30px] rounded-[20px] bg-light-purple lg:px-[30px] lg:py-[50px] md:px-[25px] md:py-[40px] px-[15px] py-[15px]">
                  {/* ... The entire structure of a single portfolio item ... */}
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
                            <span className="bg-white px-5 py-2.5 rounded-full">
                              <p>Case Study</p>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-5/8 w-8/8 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                      <span className="font-medium fs-26 color-primary-dark">
                        [Case Study - {String(index + 1).padStart(2, "0")}]
                      </span>
                      <h2 className="font-bold tracking-[-1px] leading-[102%]">
                        {portfolioData.title}
                      </h2>
                      <div>
                        {" "}
                        <span className="font-medium fs-26">Client Type:</span>
                        <p className="text-base max-w-3xl">
                          {portfolioData.clientType}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <span className="font-medium fs-26">
                          Services Provided:
                        </span>
                        <p className="text-base max-w-3xl">
                          {portfolioData.servicesProvided}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <span className="font-medium fs-26">Challenge:</span>
                        <p className="text-base max-w-3xl">
                          {portfolioData.challenge}
                        </p>
                      </div>
                      <div className="lg:hidden block ">
                        <span className="font-medium fs-26">
                          Services Provided:
                        </span>
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
                            <span className="bg-white px-5 py-2.5 rounded-full">
                              <p>Case Study</p>
                            </span>
                          )}
                        </div>
                      </div>
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
        })
      ) : (
        <div className="text-center my-lg">
          <p>No projects found for this category.</p>
        </div>
      )}
    </>
  );
};

export default PortfolioFilter;
