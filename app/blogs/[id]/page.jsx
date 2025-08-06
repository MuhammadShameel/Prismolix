"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import featureImg from "../../../public/assets/images/blog-detail-feature.png";
import bgImg from "../../../public/assets/images/blog-detail-bg.png";

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
        </div>
        <div className="bg-light-purple flex lg:flex-row flex-col gap-7 px-10 py-6 rounded-[20px]">
          <div>
            <span>Category</span>
            <p>E-commerce</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
