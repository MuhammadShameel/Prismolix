"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const VideoSlider = ({ videos }) => {
  const [swiper, setSwiper] = useState(null);
  const [isPlaying, setIsPlaying] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef({});

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  const handlePlayClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      setIsPlaying((prev) => ({ ...prev, [index]: true }));
    }
  };

  return (
    <div className="relative w-full">
      {/* Swiper Slider */}
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        className="rounded-[10px] overflow-hidden"
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full"
                controls={!!isPlaying[index]}
                onPause={() =>
                  setIsPlaying((prev) => ({ ...prev, [index]: false }))
                }
              >
                <source src={videoSrc} type="video/mp4" />
              </video>

              {/* Center Play Overlay */}
              {!isPlaying[index] && (
                <button
                  onClick={() => handlePlayClick(index)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                >
                  <div
                    className="rounded-full shadow-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.20)",
                      backdropFilter: "blur(7px)",
                      WebkitBackdropFilter: "blur(7px)",
                      padding: "37px",
                    }}
                  >
                    <Play size={50} fill="white" stroke="white" />
                  </div>
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-10 -translate-y-1/2 bg-[#EFEAFF] p-3 rounded-full shadow z-10 cursor-pointer"
      >
        <ArrowLeft size={40} />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-10 -translate-y-1/2 bg-[#6B1AFF] p-3 rounded-full shadow text-white z-10 cursor-pointer"
      >
        <ArrowRight size={40} />
      </button>

      {/* Active Slider Indicators */}
      <div className="absolute -bottom-4 right-6 flex gap-2 z-10">
        {videos.map((_, i) => (
          <span
            key={i}
            className={`h-[5px] rounded transition-all duration-300 ${
              activeIndex === i
                ? "w-[50px] bg-[#1B1B1B]"
                : "w-[15px] bg-[#A5A5AF]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
