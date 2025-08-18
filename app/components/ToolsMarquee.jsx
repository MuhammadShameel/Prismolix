import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

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

const ToolsMarquee = () => {
  return (
    <>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="service-content flex flex-col items-center gap-5">
            <span className="font-medium text-[26px] color-primary-dark">
              [Tools]
            </span>
            <h2 className="leading-20 tracking-tight text-center max-w-2xl">
              Tools & Platforms We Use
            </h2>
          </div>
        </div>
      </section>
      <Swiper
        className="mt-7"
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
            <div className="flex-shrink-0 flex mx-7">
              <Image
                src={imageSrc}
                alt={`marquee-image-${index}`}
                width={120}
                height={80}
                className="rounded-md object-contain"
                unoptimized={true} // Add if using external URLs that aren't configured in next.config.js
              />
              <div className="border opacity-20 border-r-1 ml-18 h-20"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ToolsMarquee;
