"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Fallback image import
import featureImg from "../../public/assets/images/blog-detail-feature.png";

const CaseStudySlider = ({ gallery, featuredImage, title }) => {
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  // Memoize gallery items to handle fallbacks
  const galleryItems = useMemo(() => {
    if (gallery?.length) return gallery;

    // Use the featuredImage or the static import as a fallback
    const fallbackUrl = featuredImage || featureImg;

    return [
      {
        type: "image",
        url: typeof fallbackUrl === "string" ? fallbackUrl : featureImg.src, // Ensure URL is a string
        thumbnail:
          typeof fallbackUrl === "string" ? fallbackUrl : featureImg.src,
      },
    ];
  }, [gallery, featuredImage]);

  return (
    <div className="relative">
      <Swiper
        onSwiper={setSwiper}
        modules={[Navigation, Autoplay, Pagination]}
        autoHeight={true}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          el: ".swiper-pagination", // Target the container element
          clickable: true,
        }}
      >
        {galleryItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="slider">
              {item.type === "video" ? (
                <video className="w-full rounded-[10px]" controls>
                  <source src={item.url} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.url || featureImg}
                  className="w-full rounded-[10px] lg:h-[674px] md-[530px] h-[330px] object-cover"
                  quality={95}
                  width={item.width || 1200}
                  height={item.height || 675}
                  alt={title || "Case Study Image"}
                  unoptimized={true}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      {galleryItems.length > 1 && (
        <div className="absolute top-1/2 z-10 hidden w-full -translate-y-1/2 items-center justify-between px-4 md:flex">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex h-14 w-14 p-3 items-center justify-center cursor-pointer rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition hover:bg-white"
          >
            {/* Previous SVG */}
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
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.7084 25H7.64588"
                stroke="#292929"
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="flex h-14 w-14 p-3 items-center justify-center cursor-pointer rounded-full bg-violet-600 text-white shadow-md transition hover:bg-violet-700"
          >
            {/* Next SVG */}
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
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.29163 25H42.3541"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Pagination Container */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CaseStudySlider;
