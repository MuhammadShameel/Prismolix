// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper/modules";

// // import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import Line from "../../public/assets/images/testimonial-line.svg";
// import bgImg from "../../public/assets/images/check-bg.png";
// import quote from "../../public/assets/images/quote-icon.svg";
// import Person from "../../public/assets/images/ali-rehman.png";

// const backgroundImage = bgImg;

// const Testimonial = () => {
//   const [swiper, setSwiper] = useState(null);

//   const handlePrev = () => {
//     if (swiper) {
//       swiper.slidePrev();
//     }
//   };

//   const handleNext = () => {
//     if (swiper) {
//       swiper.slideNext();
//     }
//   };

//   return (
//     <section className="lg:px-5 md:px-4 px-3">
//       <div className="container mx-auto relative">
//         <div className="testimonial-bg relative flex flex-col md:flex-row p-4">
// <div className="absolute inset-0 z-[-1]">
//   <Image
//     src={backgroundImage}
//     alt="A modern turntable playing a record"
//     layout="fill"
//     objectFit="cover"
//     quality={90}
//   />
// </div>

// {/* MODIFICATION HERE: This section is now hidden on mobile */}
// <div className="lg:flex  hidden md:w-1/4 p-10">
//   <Image src={Line} alt="" />
//   <span className="font-medium text-[26px] color-primary-dark">
//     [Testimonial]
//   </span>
// </div>

//           {/* MODIFICATION HERE: This section now takes full width on mobile */}
//           <Swiper
//             onSwiper={setSwiper}
//             modules={[Navigation, Autoplay, Pagination]}
//             autoHeight={true}
//             slidesPerView={1}
//             // loop={true}
//             // navigation
//             // scrollbar={{ draggable: true }}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             // pagination={{
//             //   type: "fraction",
//             // }}
//           >
//             <SwiperSlide>
//               <div className="w-full md:w-4/4 flex flex-col gap-12">
//                 <div className="flex">
//                   <Image src={quote} alt="" />
//                   <div className="ms-auto flex">
//                     <h3 className="color-primary-dark">
//                       01
//                       <span className="color-dark-cards-bg lg:text-[35px] md:text-3xl sm:text-2xl text-xl font-light">
//                         /06
//                       </span>
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="max-w-2xl">
//                   <h4>
//                     Prismolix let us scale our delivery without adding any
//                     full-time hires. Clients never noticed. That's the dream."
//                   </h4>
//                 </div>
//                 <div className="flex flex-col sm:flex-row">
//                   <div className="flex gap-5">
//                     <Image src={Person} alt="" />
//                     <div className="flex flex-col justify-center">
//                       <h3 className="color-dark-cards-bg leading-14">
//                         Ali Rehman.
//                       </h3>
//                       <p className="color-dark-cards-bg !lg:text-[25px]">
//                         Creative Director at Clutch Media
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="w-full md:w-4/4 flex flex-col gap-12">
//                 <div className="flex">
//                   <Image src={quote} alt="" />
//                   <div className="ms-auto flex">
//                     <h3 className="color-primary-dark">
//                       02
//                       <span className="color-dark-cards-bg lg:text-[35px] md:text-3xl sm:text-2xl text-xl font-light">
//                         /06
//                       </span>
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="max-w-2xl">
//                   <h4>
//                     Prismolix let us scale our delivery without adding any
//                     full-time hires. Clients never noticed. That's the dream."
//                   </h4>
//                 </div>
//                 <div className="flex flex-col sm:flex-row">
//                   <div className="flex gap-5">
//                     <Image src={Person} alt="" />
//                     <div className="flex flex-col justify-center">
//                       <h3 className="color-dark-cards-bg leading-14">
//                         Ali Rehman.
//                       </h3>
//                       <p className="color-dark-cards-bg !lg:text-[25px]">
//                         Creative Director at Clutch Media
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <div className="absolute right-0 bottom-48 flex items-center gap-4 ms-auto mt-6 sm:mt-0 z-10">
//             {/* Left Arrow Button */}
//             <button
//               onClick={handlePrev}
//               aria-label="Previous"
//               className="flex p-2.5 items-center justify-center rounded-full bg-light-purple text-gray-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#f2ebff] focus:ring-offset-2"
//             >
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="50"
//   height="50"
//   viewBox="0 0 50 50"
//   fill="none"
// >
//   <path
//     d="M19.9375 12.354L7.29167 24.9998L19.9375 37.6457"
//     stroke="#292929"
//     strokeWidth="2.5"
//     strokeMiterlimit="10"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   />
//   <path
//     d="M42.7084 25H7.64588"
//     stroke="#292929"
//     strokeWidth="2.5"
//     strokeMiterlimit="10"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   />
// </svg>
//             </button>

//             {/* Right Arrow Button */}
//             <button
//               onClick={handleNext}
//               aria-label="Next"
//               className="flex p-2.5 items-center justify-center rounded-full bg-violet-600 text-white transition-colors duration-200 ease-in-out hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="50"
//                 height="50"
//                 viewBox="0 0 50 50"
//                 fill="none"
//               >
//                 <path
//                   d="M30.0625 12.354L42.7083 24.9998L30.0625 37.6457"
//                   stroke="white"
//                   strokeWidth="2.5"
//                   strokeMiterlimit="10"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M7.29163 25H42.3541"
//                   stroke="white"
//                   strokeWidth="2.5"
//                   strokeMiterlimit="10"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
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
      "Prismolix let us scale our delivery without adding any full-time hires. Clients never noticed. That's the dream.",
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
          {/* Background Image */}
          {/* <div className="absolute inset-0 z-[-1] overflow-hidden rounded-2xl">
            <Image
              src={bgImg}
              alt="Abstract background"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          <div className="hidden shrink-0 flex-col items-center justify-center p-6 md:flex md:w-1/3 lg:w-1/4">
            <Image src={Line} alt="Decorative line" className="h-16 w-auto" />
            <span className="mt-4 text-center font-medium text-primary-dark md:text-xl lg:text-2xl">
              [Testimonial]
            </span>
          </div> */}

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
            <span className="font-medium text-[26px] color-primary-dark">
              [Testimonial]
            </span>
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
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                      />
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
            <div className="mt-8 flex items-end justify-end gap-4 md:absolute md:bottom-8 md:right-8 md:mt-0">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 p-2.5 items-center justify-center rounded-full bg-light-purple text-gray-800 transition hover:bg-gray-200"
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
                aria-label="Next testimonial"
                className="flex h-12 w-12  p-2.5 items-center justify-center rounded-full bg-violet-600 text-white transition-colors duration-200 ease-in-out hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                {/* SVG Icon for Right Arrow */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
