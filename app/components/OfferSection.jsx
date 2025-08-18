import React from "react";
import Image from "next/image";
import SideShape from "../../public/assets/images/offer.svg";

const listItems = [
  "Dedicated project manager",
  "Weekly sprints with clear milestones",
  "Shared Notion or Trello board for tracking",
  "Slack communication with your team",
  "Delivery under your brand name",
];

const OfferSection = () => {
  return (
    <section className="relative lg:px-5 md:px-4 px-3 my-lg">
      <div className="absolute img-wrapper">
        {/* <Image className=" right-0 top-0" src={SideShape} alt="" /> */}
      </div>
      <div className="container mx-auto ">
        <div className="flex lg:flex-row flex-col gap-5 mt-5">
          <div className="lg:w-1/2 w-full px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
            <span className="font-medium text-[26px] color-primary-dark">
              [What We Offer]
            </span>

            <h2 className="text-xl font-bold text-gray-800 leading-20">
              What’s Included in Every Retainer
            </h2>

            <ul className="flex flex-col">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 py-5 font-medium text-gray-700 lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] border-b border-b-gray-300 last:border-b-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
