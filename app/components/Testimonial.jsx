import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Line from "../../public/assets/images/testimonial-line.svg";
import bgImg from "../../public/assets/images/check-bg.png";
import quote from "../../public/assets/images/quote-icon.svg";
import Person from "../../public/assets/images/ali-rehman.png";

const backgroundImage = bgImg;

const Testimonial = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div class="testimonial-bg relative flex flex-col md:flex-row p-4">
          <div className="absolute inset-0 z-[-1]">
            <Image
              src={backgroundImage}
              alt="A modern turntable playing a record"
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          </div>
          <div class="md:w-1/4 p-10 flex">
            <Image src={Line} alt="" />
            <span className="font-medium color-primary-dark">
              [Testimonial]
            </span>
          </div>

          <div class="md:w-3/4 p-8 flex flex-col gap-12">
            <div className="flex">
              {" "}
              <Image src={quote} alt="" />
              <div className="ms-auto flex">
                <h3 className="color-primary-dark">
                  01
                  <span className="color-dark-cards-bg text-[35px] font-light">
                    /06
                  </span>
                </h3>
              </div>
            </div>
            <div className="max-w-2xl">
              <h4>
                Prismolix let us scale our delivery without adding any full-time
                hires. Clients never noticed. That's the dream."
              </h4>
            </div>
            <div className="flex">
              <div className="flex gap-5">
                <Image src={Person} alt="" />
                <div className="flex flex-col justify-center">
                  <h3 className="color-dark-cards-bg leading-14">
                    Ali Rehman.
                  </h3>
                  <p className="color-dark-cards-bg !text-[25px]">
                    Creative Director at Clutch Media
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 ms-auto">
                {/* Left Arrow Button */}
                <button
                  aria-label="Previous"
                  className="
          flex p-2.5 items-center justify-center rounded-full
          bg-light-purple text-gray-800
          transition-colors duration-200 ease-in-out
          
          focus:outline-none focus:ring-2 focus:ring-[#f2ebff] focus:ring-offset-2
        "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <path
                      d="M19.9375 12.354L7.29167 24.9998L19.9375 37.6457"
                      stroke="#292929"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M42.7084 25H7.64588"
                      stroke="#292929"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                  aria-label="Next"
                  className="
          flex p-2.5 items-center justify-center rounded-full
          bg-violet-600 text-white
          transition-colors duration-200 ease-in-out
          hover:bg-violet-700
          focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
        "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <path
                      d="M30.0625 12.354L42.7083 24.9998L30.0625 37.6457"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.29163 25H42.3541"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
