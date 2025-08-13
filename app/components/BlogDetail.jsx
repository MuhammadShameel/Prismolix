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
import VideoSlider from "./VideoSlider";

const services = [
  {
    number: "01",
    title: "Design System Creation",
    content:
      "Built reusable components, buttons, forms, headers, and layouts in Figma",
  },
  {
    number: "02",
    title: "Landing Page Design",
    content: "10 landing pages designed and dev-ready within 8 weeks",
  },
  {
    number: "03",
    title: "Headless WordPress Dev",
    content: "Developed frontend using Next.js + WP backend, mobile-optimized",
  },
  {
    number: "04",
    title: "Workflow Integration",
    content:
      "Shared tracking board, async review process, Slack updates, weekly syncs",
  },
];

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
        {/* <Swiper
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
        </Swiper> */}
        <VideoSlider
          videos={[
            "/assets/images/slider-video.mp4",
            "/assets/images/slider-video.mp4",
            "/assets/images/slider-video.mp4",
          ]}
        />

        <div className="flex flex-col gap-5">
          <div className="flex gap-1.5 mt-5 flex-wrap">
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
          <div className="bg-light-purple flex lg:flex-row flex-col lg:gap-7 gap-4 px-10 py-6 rounded-[20px]">
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Category
              </span>
              <p>E-commerce</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Time Taken
              </span>
              <p>2 Months</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Start Date
              </span>
              <p>26 November 2024</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Completed Date
              </span>
              <p>26 December 2024</p>
            </div>
          </div>
          <div className="bg-light-purple flex lg:flex-row flex-col lg:items-center px-10 py-6 rounded-[20px] lg:gap-10 gap-3">
            <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
              Technologies Used
            </span>
            <ul className="flex lg:gap-10 gap-2.5">
              {/* <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] flex items-center">
                Technologies Used
              </span> */}
              <li className="border-black/25 border p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              <li className="border-black/25 border p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1506_2099)">
                    <path
                      d="M0.571289 0.714233C6.66342 0.714233 12.7104 0.714233 18.7832 0.714233C18.7574 1.17195 18.7317 1.60388 18.6994 2.04225C18.5125 4.63383 18.3191 7.2254 18.1386 9.81698C17.9774 12.0991 17.8291 14.3812 17.6744 16.6569C17.6357 17.2694 17.5777 17.8754 17.5455 18.4878C17.5326 18.6941 17.4488 18.7779 17.2554 18.8359C14.7992 19.6353 12.3559 20.454 9.89967 21.2534C9.77073 21.2986 9.59667 21.2921 9.46774 21.2534C7.03733 20.4605 4.60693 19.6546 2.17007 18.8617C1.91865 18.7779 1.84129 18.649 1.82195 18.4104C1.74459 17.1985 1.65434 15.9929 1.57053 14.7809C1.4287 12.7373 1.28687 10.6937 1.1386 8.64368C1.02256 6.94175 0.900071 5.23982 0.78403 3.53789C0.713117 2.60956 0.642203 1.68124 0.571289 0.714233ZM4.58758 14.0976C4.58758 14.2201 4.58114 14.3232 4.58758 14.4264C4.62627 15.0259 4.68429 15.6255 4.70363 16.225C4.71007 16.4442 4.78743 16.5409 4.98728 16.6054C6.49581 17.1017 7.99789 17.6046 9.49997 18.101C9.60312 18.1332 9.7385 18.1461 9.8352 18.1139C11.3631 17.611 12.8845 17.0953 14.4124 16.5989C14.5993 16.5344 14.6509 16.4442 14.6638 16.2572C14.7992 14.3103 14.9474 12.357 15.0893 10.4101C15.1151 10.0297 15.1279 9.64936 15.1473 9.22388C12.2978 9.22388 9.47419 9.22388 6.63764 9.22388C6.56672 8.17307 6.49581 7.16094 6.4249 6.11657C9.42906 6.11657 12.3881 6.11657 15.3794 6.11657C15.4374 5.31073 15.489 4.53713 15.547 3.75063C11.6209 3.75063 7.73358 3.75063 3.82687 3.75063C4.01383 6.39378 4.20078 9.01759 4.38129 11.6607C7.12114 11.6607 9.82231 11.6607 12.5622 11.6607C12.4912 12.6406 12.4332 13.5883 12.3494 14.536C12.343 14.6327 12.2076 14.7745 12.1044 14.8067C11.3889 15.0581 10.6668 15.3031 9.93835 15.5223C9.77718 15.5739 9.57733 15.5674 9.41617 15.5159C8.82952 15.3418 8.26221 15.1033 7.67556 14.955C7.21139 14.839 6.92129 14.652 6.95997 14.1363C6.95997 14.1234 6.93418 14.104 6.92129 14.0847C6.15413 14.0976 5.38053 14.0976 4.58758 14.0976Z"
                      fill="#292929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1506_2099">
                      <rect
                        width="18.2119"
                        height="20.5714"
                        fill="white"
                        transform="translate(0.571289 0.714233)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>{" "}
              <li className="border-black/25 border p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1506_2103)">
                    <path
                      d="M0.577734 0.714233C6.59062 0.714233 12.5906 0.714233 18.6035 0.714233C18.5391 1.52626 18.4746 2.31251 18.4037 3.10521C18.3071 4.23947 18.2039 5.37374 18.1008 6.50156C17.9397 8.31896 17.7721 10.1364 17.611 11.9538C17.4886 13.32 17.379 14.6928 17.2566 16.059C17.1728 17.0515 17.0826 18.0504 16.9795 19.0429C16.9666 19.146 16.8441 19.2943 16.7474 19.32C14.4402 19.9774 12.1266 20.6219 9.81296 21.2599C9.65185 21.305 9.45206 21.2921 9.2845 21.247C7.01597 20.609 4.74744 19.9709 2.47247 19.3394C2.27269 19.2878 2.1889 19.2105 2.16957 18.9978C2.00201 16.9871 1.828 14.9763 1.64755 12.9656C1.42843 10.4135 1.18998 7.86139 0.95797 5.30929C0.822632 3.82057 0.700183 2.33829 0.571289 0.849572C0.571289 0.810904 0.577734 0.765791 0.577734 0.714233ZM4.61855 12.4564C4.61855 12.5789 4.6121 12.6885 4.61855 12.7916C4.70878 13.784 4.80545 14.7765 4.88278 15.7755C4.90212 16.0204 4.97945 16.1235 5.21791 16.1879C6.62285 16.5617 8.02779 16.9548 9.43273 17.3415C9.51006 17.3608 9.60029 17.3866 9.67763 17.3673C11.147 16.9677 12.61 16.5617 14.0729 16.1492C14.1567 16.1235 14.2662 16.0075 14.2727 15.9237C14.4145 14.4607 14.5498 12.9978 14.6787 11.5349C14.8011 10.1686 14.9172 8.79587 15.0396 7.42959C15.1234 6.46934 15.2072 5.50908 15.2974 4.53593C11.4821 4.53593 7.69266 4.53593 3.88386 4.53593C3.92897 5.24485 3.97408 5.93443 4.02564 6.65623C6.9773 6.65623 9.89674 6.65623 12.842 6.65623C12.784 7.42959 12.726 8.17718 12.6744 8.95054C9.85808 8.98921 7.07397 9.02143 4.25765 9.0601C4.33498 9.79479 4.41232 10.4908 4.48966 11.2191C7.17064 11.2191 9.81296 11.2191 12.4875 11.2191C12.3779 12.218 12.2813 13.1911 12.1588 14.1578C12.1459 14.2481 12.0299 14.377 11.9333 14.4027C11.4112 14.5639 10.8699 14.667 10.3543 14.8474C9.81296 15.0343 9.29739 15.0085 8.76248 14.8345C8.29846 14.6799 7.81511 14.551 7.33821 14.4479C7.1062 14.3963 7.02886 14.2867 7.01597 14.0612C6.98375 13.5392 6.92575 13.0171 6.88063 12.4887C6.10083 12.4564 5.36613 12.4564 4.61855 12.4564Z"
                      fill="#292929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1506_2103">
                      <rect
                        width="18.0387"
                        height="20.5714"
                        fill="white"
                        transform="translate(0.571289 0.714233)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>{" "}
              <li className="border-black/25 border p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1506_2107)">
                    <path
                      d="M0.857422 0.714355C7.75323 0.714355 14.6104 0.714355 21.4869 0.714355C21.4224 1.50061 21.358 2.26752 21.2871 3.04089C21.1904 4.14293 21.0873 5.23852 20.9842 6.34056C20.8166 8.12574 20.649 9.91092 20.4879 11.6897C20.3655 13.0237 20.2559 14.3642 20.1335 15.6982C20.0239 16.9163 19.9143 18.1343 19.8048 19.3524C19.7855 19.5393 19.721 19.6166 19.5148 19.6617C16.8789 20.1837 14.243 20.7187 11.6007 21.2407C11.3429 21.2922 11.0658 21.3051 10.808 21.2536C8.39126 20.7767 5.9745 20.2869 3.55774 19.7971C3.31285 19.7455 3.07439 19.6811 2.82949 19.6617C2.60393 19.6424 2.53948 19.5393 2.52015 19.3395C2.39126 17.8314 2.26236 16.3234 2.12702 14.8218C1.94013 12.7917 1.74679 10.7616 1.55989 8.73154C1.41811 6.94636 1.26988 5.15474 1.11521 3.37601C1.03787 2.49953 0.947647 1.62306 0.857422 0.714355ZM15.3 11.8637C15.1904 13.043 15.0873 14.1709 14.9777 15.3051C14.0626 15.4856 13.1797 15.6596 12.3032 15.8465C12.2065 15.8658 12.0454 15.9496 12.0454 16.014C12.0261 16.5425 12.0325 17.0774 12.0325 17.6445C13.5792 17.3352 15.0744 17.0387 16.576 16.7358C16.7758 14.5382 16.9756 12.3663 17.1754 10.1429C16.0089 10.1429 14.8875 10.1429 13.779 10.1429C13.779 8.68643 13.779 7.27504 13.779 5.83788C15.0551 5.83788 16.3053 5.83788 17.5749 5.83788C17.62 5.25786 17.6652 4.71006 17.7167 4.14937C15.8026 4.14937 13.9337 4.14937 12.0647 4.14937C12.0647 6.72724 12.0647 9.28578 12.0647 11.8637C13.141 11.8637 14.2044 11.8637 15.3 11.8637ZM8.59104 4.14293C8.59104 7.95818 8.59104 11.7348 8.59104 15.5436C8.16569 15.4598 7.77257 15.3825 7.373 15.3051C7.31499 14.7251 7.26344 14.1709 7.21188 13.6037C6.6383 13.6037 6.08406 13.6037 5.49115 13.6037C5.58782 14.6542 5.67804 15.6854 5.77471 16.7358C7.28277 17.0387 8.78438 17.3352 10.2989 17.6381C10.2989 13.1204 10.2989 8.63487 10.2989 4.14293C9.72531 4.14293 9.18395 4.14293 8.59104 4.14293Z"
                      fill="#292929"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1506_2107">
                      <rect
                        width="20.6294"
                        height="20.5714"
                        fill="white"
                        transform="translate(0.857422 0.714355)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>
            </ul>
          </div>
          <div className="bg-light-purple flex flex-col px-10 py-6 rounded-[20px] gap-12">
            <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
              Methods Used
            </span>
            <div className="flex lg:flex-row flex-col lg:gap-[30px] gap-[20px]">
              <div className="lg:w-4/12 w-12/12">
                <button className="font-medium w-full text-center py-2.5 scroll-px-24 rounded-full bg-[#C4B5FD] ">
                  Agile Development
                </button>
              </div>
              <div className="border-r-1 bg-black opacity-20"></div>
              <div className="lg:w-4/12 w-12/12">
                <p className="font-medium w-full text-center py-2.5 scroll-px-24 rounded-full bg-[#C4B5FD] ">
                  User Testing
                </p>
              </div>
              <div className="border-r-1 bg-black opacity-20"></div>
              <div className="lg:w-4/12 w-12/12">
                <p className="font-medium w-full text-center py-2.5 scroll-px-24 rounded-full bg-[#C4B5FD] ">
                  A/B Testing
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="bg-light-purple lg:w-1/2 w-2/2 px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>The Challenge</h4>
              <p className="font-medium">
                The client — a fast-growing creative studio — was winning more
                clients than they could handle. With limited internal capacity,
                they faced:
              </p>
              <ul className="flex flex-col">
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Project backlogs and late deliveries
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Inconsistent quality from freelance hires
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />

                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Difficulty onboarding reliable, scalable support
                </li>
              </ul>
            </div>
            <div className="bg-light-purple lg:w-1/2 w-2/2 px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>Our Solution</h4>
              <p className="font-medium">
                We embedded a dedicated Prismolix team (1 UI/UX Designer, 1
                Frontend Dev, 1 PM) directly into their Slack and Notion setup.
                Our mission:
              </p>
              <ul className="flex flex-col">
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Build a modular design system in Figma
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />
                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Deliver all landing pages, on-brand and on-time
                </li>
                <hr className="w-full my-5 bg-black opacity-20" />

                <li className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                  >
                    <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                  </svg>
                  Set up a shared delivery pipeline with milestones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-lg">
        <div className="service-content flex flex-col items-center gap-5">
          <span className="font-medium text-[26px] color-primary-dark">
            [The Process]
          </span>
          <h2 className="leading-20 tracking-tight max-w-4xl">What We Did</h2>
        </div>
        <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {/* Service Cards - Generated from the array */}
          {services.map((service) => (
            <div
              key={service.number}
              className="relative flex flex-col bg-light-purple rounded-[30px] p-8 overflow-hidden"
            >
              {/* Giant background number */}
              <p className="absolute top-0 right-8 !lg:text-[150px] !md:text-[140px] !sm:text-[130px] !text-[120px] font-black text-white z-0 select-none leading-tight">
                {service.number}
                <span className="color-primary-light">.</span>
              </p>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full mt-36">
                {/* Price section pushed to the bottom */}
                <div className="mt-auto">
                  <h4 className="mt-2">{service.title}</h4>

                  <p className="text-sm ">{service.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto my-lg">
        <div className="service-content flex flex-col items-center gap-5">
          <span className="font-medium text-[26px] color-primary-dark">
            [Tools]
          </span>
          <h2 className="leading-20 tracking-tight max-w-2xl text-center">
            Tools & Platforms We Use
          </h2>
        </div>
      </div>
    </section>
  );
};

export default page;
