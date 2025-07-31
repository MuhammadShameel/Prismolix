// src/components/SwiperMarquee.jsx
"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

// Your image data
const images = [
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-11.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-10.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-09.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-08.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-07.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-06.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-05.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-04.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-02.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-01.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website_Artboard-12.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-03.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-11.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-10.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-09.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-08.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-07.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-06.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-05.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-04.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-02.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-01.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website_Artboard-12.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-03.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-11.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-10.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-09.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-08.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-07.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-06.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-05.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-04.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-02.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-01.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website_Artboard-12.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-03.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-11.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-10.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-09.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-08.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-07.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-06.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-05.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-04.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-02.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-01.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website_Artboard-12.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-03.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-11.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-10.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-09.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-08.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-07.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-06.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-05.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-04.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-02.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-01.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website_Artboard-12.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-03.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-11.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-10.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-09.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-08.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-07.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-06.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-05.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-04.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-02.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-01.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website_Artboard-12.png",
  "https://ux-recruiter.wasmer.app/wp-content/uploads/2025/07/Logo-For-Recruite-Website-03.png",
];

export default function SwiperMarquee() {
  return (
    <div className="gradient-line marquee w-full py-10">
      <Swiper
        // Swiper modules
        modules={[Autoplay]}
        // --- Core Marquee Settings ---

        // Loop forever
        loop={true}
        // Allow all slides to be visible
        slidesPerView={"auto"}
        unselectable="on"
        // No space between slides
        spaceBetween={0}
        // Center the slides (important for the loop)
        centeredSlides={true}
        // Allow touch interactions to slide
        allowTouchMove={false}
        // Disable pausing on hover
        autoplay={{
          delay: 0, // A very small delay to keep it moving
          disableOnInteraction: false,
          pauseOnMouseEnter: false, // Continue animation on hover
        }}
        // The animation speed
        speed={4000} // A higher number means a slower, smoother animation
      >
        {images.map((imageSrc, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="flex-shrink-0 mx-7">
              <Image
                src={imageSrc}
                alt={`marquee-image-${index}`}
                width={120}
                height={80}
                className="rounded-md object-contain"
                unoptimized={true} // Add if using external URLs that aren't configured in next.config.js
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
