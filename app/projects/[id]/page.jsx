// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper/modules";

// import featureImg from "../../../public/assets/images/blog-detail-feature.png";
// import bgImg from "../../../public/assets/images/blog-detail-bg.png";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const page = () => {
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
//     <section className="lg:px-5 md:px-4 px-3 my-lg">
//       <div className="container mx-auto">
//         <div className="testimonial-bg relative flex flex-col md:flex-row p-4 justify-center">
//           <div className="absolute inset-0 z-[-1]">
//             <Image
//               src={bgImg}
//               alt="A modern turntable playing a record"
//               layout="fill"
//               objectFit="cover"
//               quality={90}
//             />
//           </div>

//           {/* MODIFICATION HERE: This section is now hidden on mobile */}
//           <div className="flex flex-col items-center justify-center gap-5 max-w-6xl my-lg">
//             <span className="font-medium text-[26px]  color-primary-dark">
//               [Case Study - 01]
//             </span>
//             <h1 className="text-center leading-[95%]">
//               Scaling a Creative Studio Without Hiring
//             </h1>
//             <p className="text-center">
//               A fast-growing NYC creative agency partnered with Prismolix to
//               scale their landing page delivery without hiring in-house. We
//               built a modular design system and shipped 10+ white-labeled
//               landing pages in just 8 weeks — helping them meet client demand,
//               improve turnaround, and retain quality without the overhead.
//             </p>
//           </div>
//         </div>
//         <Swiper
//           onSwiper={setSwiper}
//           modules={[Navigation, Autoplay, Pagination]}
//           autoHeight={true}
//           slidesPerView={1}
//           // loop={true}
//           navigation
//           // scrollbar={{ draggable: true }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           // pagination={{
//           //   type: "fraction",
//           // }}
//         >
//           <SwiperSlide>
//             <div className="slider">
//               <Image
//                 src={featureImg}
//                 className="w-full rounded-[10px]"
//                 quality={95}
//                 unoptimized={true}
//                 alt=""
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="slider">
//               <Image
//                 src={featureImg}
//                 className="w-full rounded-[10px]"
//                 quality={95}
//                 unoptimized={true}
//                 alt=""
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="slider">
//               <Image
//                 src={featureImg}
//                 className="w-full rounded-[10px]"
//                 quality={95}
//                 unoptimized={true}
//                 alt=""
//               />
//             </div>
//           </SwiperSlide>
//         </Swiper>

//         <div className="flex flex-col gap-5">
//           <div className="flex gap-1.5 mt-5">
//             <span className="bg-light-purple px-5 py-2.5 rounded-full">
//               UI/UX
//             </span>
//             <span className="bg-light-purple px-5 py-2.5 rounded-full">
//               Design System
//             </span>
//             <span className="bg-light-purple px-5 py-2.5 rounded-full">
//               Landing Pages
//             </span>
//           </div>
//         </div>
//         <div className="bg-light-purple flex lg:flex-row flex-col gap-7 px-10 py-6 rounded-[20px]">
//           <div>
//             <span>Category</span>
//             <p>E-commerce</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default page;

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import {
  fetchBlogBySlug,
  extractBlogData,
} from "../../../services/blog.service.js";

import featureImg from "../../../public/assets/images/blog-detail-feature.png";
import bgImg from "../../../public/assets/images/blog-detail-bg.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const formatMonthYear = (input) => {
  if (!input) return "—";
  // Supports dd/mm/yyyy and ISO
  const normalized = input.includes("/")
    ? input.split("/").reverse().join("-")
    : input;
  const date = new Date(normalized);
  if (isNaN(date)) return input;
  return date.toLocaleDateString(undefined, { month: "long", year: "numeric" });
};

const diffInMonths = (start, end) => {
  if (!start || !end) return "—";
  const s = new Date(
    start.includes("/") ? start.split("/").reverse().join("-") : start
  );
  const e = new Date(
    end.includes("/") ? end.split("/").reverse().join("-") : end
  );
  if (isNaN(s) || isNaN(e)) return "—";
  const months =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  if (months <= 0) return "< 1 Month";
  return months === 1 ? "1 Month" : `${months} Months`;
};

const Page = () => {
  const params = useParams();
  const slug = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const portfolio = await fetchBlogBySlug(slug);
        if (!portfolio) throw new Error("Not found");
        const extracted = extractBlogData(portfolio);
        if (isMounted) setData(extracted);
      } catch (err) {
        if (isMounted) setError("Failed to load");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    if (slug) run();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const galleryItems = useMemo(() => {
    if (data?.gallery?.length) return data.gallery;
    const fallbackUrl = data?.featuredImage || featureImg;
    return [
      {
        type: "image",
        url: typeof fallbackUrl === "string" ? fallbackUrl : featureImg,
        thumbnail: typeof fallbackUrl === "string" ? fallbackUrl : featureImg,
      },
    ];
  }, [data]);

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

          <div className="flex flex-col items-center justify-center gap-5 max-w-6xl my-lg">
            <span className="font-medium text-[26px]  color-primary-dark">
              [Case Study]
            </span>
            <h1 className="text-center leading-[95%]">
              {loading ? "Loading..." : data?.title || "—"}
            </h1>
            <p className="text-center">
              {loading ? (
                ""
              ) : (
                <span
                  dangerouslySetInnerHTML={{
                    __html: data?.excerpt || data?.content || "",
                  }}
                />
              )}
            </p>
          </div>
        </div>

        <Swiper
          onSwiper={setSwiper}
          modules={[Navigation, Autoplay, Pagination]}
          autoHeight={true}
          slidesPerView={1}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                    alt={data?.title || "Case Study"}
                    unoptimized={true}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col gap-5">
          <div className="flex gap-1.5 mt-5 flex-wrap">
            {loading ? (
              <span className="bg-light-purple px-5 py-2.5 rounded-full">
                Loading...
              </span>
            ) : data?.tags?.length ? (
              data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-light-purple px-5 py-2.5 rounded-full"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="bg-light-purple px-5 py-2.5 rounded-full">
                Case Study
              </span>
            )}
          </div>

          <div className="bg-light-purple flex lg:flex-row flex-col lg:gap-7 gap-4 px-10 py-6 rounded-[20px]">
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Category
              </span>
              <p>
                {loading ? "—" : data?.industry || data?.categories?.[0] || "—"}
              </p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Time Taken
              </span>
              <p>
                {loading ? "—" : diffInMonths(data?.startDate, data?.endDate)}
              </p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Start Date
              </span>
              <p>{loading ? "—" : formatMonthYear(data?.startDate)}</p>
            </div>
            <div className="border-r-1 bg-black opacity-20"></div>
            <div className="lg:w-3/12 w-12/12">
              <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px]">
                Completed Date
              </span>
              <p>{loading ? "—" : formatMonthYear(data?.endDate)}</p>
            </div>
          </div>

          <div className="bg-light-purple flex lg:flex-row flex-col lg:items-center px-10 py-6 rounded-[20px] lg:gap-10 gap-3">
            <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
              Technologies Used
            </span>
            <ul className="flex lg:gap-10 gap-2.5">
              {(data?.technologiesUsed && data.technologiesUsed.length > 0
                ? data.technologiesUsed
                : [{ imageUrl: null }]
              ).map((tech, idx) => (
                <li
                  key={idx}
                  className="border-black/25 border p-4 rounded-full"
                >
                  {tech.imageUrl ? (
                    <Image
                      src={tech.imageUrl}
                      alt={tech.name || "Tech"}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <span className="block w-5 h-5 bg-black/40 rounded" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-light-purple flex flex-col px-10 py-6 rounded-[20px] gap-12">
            <span className="font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] ">
              Methods Used
            </span>
            <div className="flex lg:flex-row flex-col lg:gap-[30px] gap-[20px]">
              {(data?.methodsUsed?.length ? data.methodsUsed : ["—"]).map(
                (method, idx) => (
                  <div key={idx} className="lg:w-4/12 w-12/12">
                    <p className="font-medium w-full text-center py-2.5 scroll-px-24 rounded-full bg-[#C4B5FD] ">
                      {method}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-5">
            <div className="bg-light-purple lg:w-1/2 w-2/2 px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>The Challenge</h4>
              <p className="font-medium">
                {loading ? "" : data?.description || "—"}
              </p>
              <ul className="flex flex-col">
                {(data?.keyPoints || []).map((kp, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                    </svg>
                    {kp}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-light-purple lg:w-1/2 w-2/2 px-10 py-6 rounded-[20px] flex flex-col gap-2.5">
              <h4>Our Solution</h4>
              <p className="font-medium">
                {loading ? "" : data?.description || "—"}
              </p>
              <ul className="flex flex-col">
                {(data?.keyPoints || []).map((kp, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 font-medium lg:text-[26px] md:text-[24px] sm:text-[20px] text-[18px] "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                    </svg>
                    {kp}
                  </li>
                ))}
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
          <h2 className="lg:leading-20 leading-10 tracking-tight max-w-4xl">
            What We Did
          </h2>
        </div>
        <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {(data?.process?.length ? data.process : []).map((step) => (
            <div
              key={step.number + step.title}
              className="relative flex flex-col bg-light-purple rounded-[30px] p-8 overflow-hidden"
            >
              <p className="absolute top-0 right-8 !lg:text-[150px] !md:text-[140px] !sm:text-[130px] !text-[120px] font-black text-white z-0 select-none leading-tight">
                {step.number}
                <span className="color-primary-light">.</span>
              </p>
              <div className="relative z-10 flex flex-col h-full mt-36">
                <div className="mt-auto">
                  <h4 className="mt-2">{step.title}</h4>
                  <p className="text-sm ">{step.description}</p>
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
          <h2 className="lg:leading-20 leading-10 tracking-tight max-w-2xl text-center">
            Tools & Platforms We Use
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Page;
