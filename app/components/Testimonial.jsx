"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Line from "../../public/assets/images/testimonial-line.svg";
import bgImg from "../../public/assets/images/check-bg.png";
import quoteIcon from "../../public/assets/images/quote-icon.svg";
import Person from "../../public/assets/images/ali-rehman.png";

// Data for the testimonials
const testimonialsData = [
  {
    quote:
      "“Prismolix let us scale our delivery without adding any full-time hires. Clients never noticed. That’s the dream",
    name: "Ali Rehman",
    title: "Creative Director at Clutch Media",
    image: Person,
  },
  {
    quote:
      "Their team integrated seamlessly with ours. The quality of work was exceptional, and they hit every deadline.",
    name: "Jane Doe",
    title: "Project Manager at Innovate Inc.",
    image: Person, // Replace with another image if you have one
  },
  {
    quote:
      "A true white-label partner. Our agency's capabilities have expanded significantly thanks to their support.",
    name: "John Smith",
    title: "CEO of Visionary Studios",
    image: Person, // Replace with another image if you have one
  },
];

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  return (
    <section className="px-3 py-12 md:px-4 lg:px-5 md:py-20">
      <div className="container mx-auto">
        <div className="relative flex flex-col rounded-2xl md:flex-row md:items-center">
          <div className="absolute inset-0 z-[-1]">
            <Image
              src={bgImg}
              alt="A modern turntable playing a record"
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          </div>

          {/* MODIFICATION HERE: This section is now hidden on mobile */}
          <div className="lg:flex  hidden md:w-1/4 p-10">
            <Image src={Line} alt="" />
            <span className="fs-26 color-primary-dark">[Testimonial]</span>
          </div>

          {/* Right Column: Swiper */}
          <div className="relative w-full overflow-hidden lg:w-3/4">
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                    <div className="flex items-start justify-between">
                      <Image
                        src={quoteIcon}
                        alt="Quote icon"
                        className=" w-auto lg:h-36 h-20"
                      />

                      <h3 className="text-right color-primary-dark text-2xl font-bold sm:text-3xl">
                        0{index + 1}
                        <span className="font-light color-dark-cards-bg lg:text-[35px] md:text-3xl sm:text-2xl text-xl">
                          /0{testimonialsData.length}
                        </span>
                      </h3>
                    </div>

                    <div className="min-h-[120px] sm:min-h-[100px] lg:mt-10">
                      <h4 className="max-w-2xl text-lg font-medium sm:text-xl md:text-2xl">
                        "{testimonial.quote}"
                      </h4>
                    </div>

                    <div className="flex items-center gap-4 lg:mt-10">
                      <div className="img-wrapper h-[104px] w-[104px]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="font-bold text-dark-cards-bg text-lg sm:text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-dark-cards-bg text-sm sm:text-base">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="mt-8 flex items-end justify-end gap-4 md:absolute md:bottom-8 md:right-8 md:mt-0 z-1">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 p-2.5 items-center justify-center rounded-full bg-light-purple cursor-pointer transition-colors duration-200 ease-in-out hover:bg-violet-600! hover:text-white "
              >
                {/* SVG Icon for Left Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M19.9375 12.354L7.29167 24.9998L19.9375 37.6457"
                    stroke="currentColor" // Changed to currentColor
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.7084 25H7.64588"
                    stroke="currentColor" // Changed to currentColor
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex h-12 w-12 p-2.5 items-center justify-center rounded-full bg-light-purple cursor-pointer transition-colors duration-200 ease-in-out hover:bg-violet-600! hover:text-white" // Added hover:text-white
              >
                {/* SVG Icon for Right Arrow */}
                <svg
                  className="rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M19.9375 12.354L7.29167 24.9998L19.9375 37.6457"
                    stroke="currentColor" // Changed to currentColor
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.7084 25H7.64588"
                    stroke="currentColor" // Changed to currentColor
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
