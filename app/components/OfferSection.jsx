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
    <section className="relative lg:px-5 md:px-4 px-3 my-lg ">
      <Image
        src={"/assets/images/shape-offer.png"}
        width={100}
        height={100}
        className="absolute lg:block hidden right-0 top-0 z-[-1] lg:w-[1149.531px] lg:h-[1149.531px] w-full h-auto"
        unoptimized="true"
        alt=""
      />

      <div className="container mx-auto ">
        <div className="flex lg:flex-row flex-col gap-5 mt-5">
          <div className="lg:w-1/2 w-full rounded-[20px] flex flex-col gap-2.5">
            <span className="fs-26 color-primary-dark">[What We Offer]</span>

            <h2 className="text-xl font-bold text-gray-800 leading-20">
              What’s Included in Every Retainer
            </h2>

            <ul className="flex flex-col">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="flex lg:items-center gap-2.5 py-5 font-medium text-gray-700 fs-26 border-b border-b-gray-300 last:border-b-0"
                >
                  <div>
                    <svg
                      className="mt-2 w-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden lg:w-1/2 w-full flex lg:mb-0 mb-[-150px]">
            <Image
              src={"/assets/images/what-we-offer-shape.png"}
              width={100}
              height={100}
              className=" z-[-1] lg:w-[800px] lg:h-[800px] w-full h-auto"
              unoptimized="true"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
