// "use client";

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  fetchServiceBySlug,
  extractServiceData,
} from "../../../services/service.service";

import bgImg from "../../../public/assets/images/blog-detail-bg.png";
import ContactSection from "../../components/ContactSection";
import Testimonial from "../../components/Testimonial";
import CallSchedule from "../../components/CallSchedule";
import OfferSection from "../../components/OfferSection";
import ToolsMarquee from "../../components/ToolsMarquee";

const ServiceDetailPage = async ({ params }) => {
  const slug = params.slug;
  const service = await fetchServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceData = extractServiceData(service);

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <div className="testimonial-bg relative flex flex-col md:flex-row justify-center">
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
                [Service]
              </span>
              <div className="max-w-3xl text-center">
                <h1
                  className="text-center leading-[95%]"
                  dangerouslySetInnerHTML={{ __html: serviceData.title }}
                />

                <p
                  className="text-center mt-5"
                  dangerouslySetInnerHTML={{
                    __html: serviceData.content, // Use the content property
                  }}
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-light-purple">
            <div className="flex flex-col items-center gap-0 lg:flex-row lg:gap-12">
              <div className="w-full lg:w-2/6 lg:flex-shrink-0">
                <Image
                  src="/assets/images/section-shape.png"
                  alt="Abstract 3D shape"
                  width={590}
                  height={590} // Use dimensions for a 1:1 aspect ratio
                  className="h-auto w-full max-w-md lg:max-w-none"
                />
              </div>

              <div className="flex w-full flex-col lg:w-4/6  p-6 sm:p-8 md:p-12 lg:p-16">
                <span className="font-medium text-[26px]  color-primary-dark">
                  [Service Detail]
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {serviceData.secondTitle}
                </h2>

                <p className="text-gray-700 text-lg mb-4">
                  {serviceData.secondParagraph}
                </p>

                <button className="btn btn-primary w-60 bg-brand-purple text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-light-purple">
                  Let's Talk Scalability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- "Why Choose Us" Section --- */}
      <section className="my-12 px-3 md:px-4 lg:my-24 lg:px-5">
        <div className="container mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="font-bold tracking-tight">
              {serviceData.whyChooseUs.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.whyChooseUs.cards.map((card, index) => (
              <div
                key={index}
                className="relative flex flex-col overflow-hidden rounded-[30px] bg-light-purple p-8"
              >
                <p className="absolute top-0 right-8 !lg:text-[150px] !md:text-[140px] !sm:text-[130px] !text-[120px] font-black text-white z-0 select-none leading-tight">
                  {String(index + 1).padStart(2, "0")}{" "}
                  <span className="color-primary-light">.</span>
                </p>
                <div className="relative z-10 mt-36 flex h-full flex-col">
                  <div className="mt-auto">
                    <h4 className="max-w-xs font-bold">{card.title}</h4>
                    <p className="max-w-xs text-sm">{card.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- "What We Deliver" Section --- */}
      <section className="my-12 px-3 md:px-4 lg:my-24 lg:px-5">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What We Deliver
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceData.deliverables.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2.5 rounded-2xl bg-light-purple p-8"
              >
                <h4 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h4>
                <p className="font-medium text-gray-600">{item.content}</p>
                <ul className="mt-5 flex flex-col">
                  {item.keyPoints.map((point, idx) => (
                    <React.Fragment key={idx}>
                      <li className="flex items-center gap-2.5 text-xl font-medium text-gray-700">
                        <svg
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                          className="h-2.5 w-2.5 flex-shrink-0"
                        >
                          <circle cx="5" cy="5.5" r="5" fill="#4A008C" />
                        </svg>
                        {point}
                      </li>
                      {idx < item.keyPoints.length - 1 && (
                        <hr className="my-4 w-full border-gray-300" />
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToolsMarquee />
      <OfferSection />
      <ContactSection />
      <Testimonial />
      <CallSchedule />
    </>
  );
};

export default ServiceDetailPage;
