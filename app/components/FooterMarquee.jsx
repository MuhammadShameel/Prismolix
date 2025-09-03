"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const FooterMarquee = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();
  const marqueeText = `© ${currentYear} Prismolix`;

  if (!mounted) {
    // SSR-safe fallback
    return (
      <div className="flex w-full overflow-hidden">
        <span className="mx-5 flex items-center whitespace-nowrap fs-26">
          {marqueeText}
        </span>
      </div>
    );
  }
  return (
    <section className="footer-marquee w-full overflow-hidden bg-light-purple py-3 px-3 color-dark md:px-4 lg:px-5">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView="auto"
        className="w-full"
      >
        {Array(10)
          .fill(marqueeText)
          .map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <span className="mx-5 flex items-center whitespace-nowrap fs-26">
                {item}
              </span>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default FooterMarquee;
