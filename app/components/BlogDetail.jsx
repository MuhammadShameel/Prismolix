"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import featureImg from "../../public/assets/images/blog-detail-feature.png";
import bgImg from "../../public/assets/images/blog-detail-bg.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const page = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="testimonial-bg relative flex flex-col md:flex-row p-4 justify-center">
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
          <div className="flex flex-col items-center justify-center gap-5 max-w-6xl my-lg">
            <span className="font-medium text-[26px]  color-primary-dark">
              [Case Study - 01]
            </span>
            <h1 className="text-center leading-[95%]">
              Scaling a Creative Studio Without Hiring
            </h1>
            <p className="text-center">
              A fast-growing NYC creative agency partnered with Prismolix to
              scale their landing page delivery without hiring in-house. We
              built a modular design system and shipped 10+ white-labeled
              landing pages in just 8 weeks — helping them meet client demand,
              improve turnaround, and retain quality without the overhead.
            </p>
          </div>
        </div>
        <Swiper
          onSwiper={setSwiper}
          modules={[Navigation, Autoplay, Pagination]}
          autoHeight={true}
          slidesPerView={1}
          // loop={true}
          navigation
          // scrollbar={{ draggable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   type: "fraction",
          // }}
        >
          <SwiperSlide>
            <div className="slider">
              <Image
                src={featureImg}
                className="w-full rounded-[10px]"
                quality={95}
                unoptimized={true}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <Image
                src={featureImg}
                className="w-full rounded-[10px]"
                quality={95}
                unoptimized={true}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <Image
                src={featureImg}
                className="w-full rounded-[10px]"
                quality={95}
                unoptimized={true}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col gap-5">
          <div className="flex gap-1.5 mt-5">
            <span className="bg-light-purple px-5 py-2.5 rounded-full">
              UI/UX
            </span>
            <span className="bg-light-purple px-5 py-2.5 rounded-full">
              Design System
            </span>
            <span className="bg-light-purple px-5 py-2.5 rounded-full">
              Landing Pages
            </span>
          </div>
          <div className="bg-light-purple flex lg:flex-row flex-col gap-7 px-10 py-6 rounded-[20px]">
            <div className="w-3/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Category
              </span>
              <p>E-commerce</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="w-3/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Time Taken
              </span>
              <p>2 Months</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="w-3/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Start Date
              </span>
              <p>26 November 2024</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="w-3/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Completed Date
              </span>
              <p>26 December 2024</p>
            </div>
          </div>
          <div className="bg-light-purple flex px-10 py-6 rounded-[20px]">
            <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
              Technologies Used
            </span>
            <ul>
              <li className="border p-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="22"
                  viewBox="0 0 14 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1506_2091)">
                    <path
                      d="M7.375 6.86882C7.375 4.80925 7.375 2.79832 7.375 0.795507C7.39933 0.771182 7.42365 0.738747 7.43987 0.738747C8.58318 0.746856 9.73459 0.698205 10.8698 0.787399C12.3131 0.909027 13.424 2.19829 13.4807 3.67405C13.5375 5.11737 12.5239 6.49583 11.1212 6.74719C10.44 6.86882 9.72648 6.83639 9.02915 6.85261C8.49398 6.88504 7.95882 6.86882 7.375 6.86882Z"
                      fill="#292929"
                    />
                    <path
                      d="M6.27227 0.730681C6.27227 2.79026 6.27227 4.80118 6.27227 6.87697C6.08577 6.87697 5.90738 6.87697 5.72899 6.87697C4.93435 6.87697 4.13161 6.87697 3.33697 6.87697C1.55308 6.86886 0.182736 5.55528 0.142193 3.83626C0.109759 2.19833 1.41524 0.819875 3.14236 0.738789C4.16404 0.690138 5.19383 0.730681 6.27227 0.730681Z"
                      fill="#292929"
                    />
                    <path
                      d="M6.2645 7.96342C6.2645 10.0149 6.2645 12.0177 6.2645 14.134C4.94281 14.0692 3.62111 14.1178 2.34807 13.8989C0.953393 13.6556 0.0533428 12.2528 0.158754 10.8501C0.272274 9.28511 1.35071 8.10126 2.84269 7.97963C3.96978 7.89044 5.10498 7.96342 6.2645 7.96342Z"
                      fill="#292929"
                    />
                    <path
                      d="M6.32918 15.1395C6.28864 16.4125 6.33729 17.6531 6.18323 18.8532C5.99673 20.2722 4.58584 21.3263 3.16684 21.2776C1.64243 21.229 0.393714 20.1181 0.199108 18.6342C-0.0522575 16.7693 1.35052 15.1476 3.23171 15.1313C4.22906 15.1395 5.22642 15.1395 6.32918 15.1395Z"
                      fill="#292929"
                    />
                    <path
                      d="M10.4073 14.0692C8.72067 14.0611 7.35033 12.6745 7.35843 10.9879C7.36654 9.30947 8.75311 7.93101 10.4397 7.93912C12.1263 7.94723 13.4966 9.3338 13.4885 11.0204C13.4804 12.707 12.0938 14.0773 10.4073 14.0692Z"
                      fill="#292929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1506_2091">
                      <rect
                        width="13.3467"
                        height="20.5714"
                        fill="white"
                        transform="translate(0.142578 0.714355)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
