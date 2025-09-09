import React from "react";
import Image from "next/image";

const WhyPrismolix = () => {
  return (
    <div>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <span className="fs-26 color-primary-dark">[Why Prismolix]</span>
          <div className="flex xl:flex-row flex-col justify-between lg:items-center item-start mt-5 lg:gap-0 gap-2.5">
            <h2 className="xl:max-w-2xl lg:max-w-3xl lg:leading-20 leading-10">
              Why Agencies Trust Prismolix
            </h2>
            <p className="lg:max-w-3xl md:max-w-2xl max-w-5xl">
              We’re not a freelancer marketplace or a faceless studio. We’re
              your silent delivery arm. Prismolix operates as a fully embedded
              partner inside your agency. Our systems are built to deliver fast,
              reliably, and at scale — without compromising on quality.
            </p>
          </div>
          <div className="w-full space-y-2 p-2 sm:space-y-4 sm:p-4 mt-10">
            {/* First Row */}
            <div className="flex w-full flex-nowrap gap-x-2 sm:gap-x-4">
              <div className="w-[30%] rounded-2xl bg-light-purple p-4 sm:p-5 md:p-7 lg:rounded-4xl">
                <Image
                  src={"/assets/images/circleShape.png"}
                  alt={"Decorative circular shape"}
                  width={254}
                  height={254}
                  className="h-auto w-full" // Make image responsive
                />
                <h4 className="mt-4 md:mt-8 lg:mt-12 !lg:text-[45px] !md:text-[28px] !sm: text-[16px]">
                  White-label execution under your brand
                </h4>
              </div>
              <div className=" w-[40%]  rounded-2xl bg-light-purple p-4 sm:p-5 md:p-7 lg:rounded-4xl">
                <h4 className="!lg:text-xl">
                  Senior-level talent only pre-vetted, curated, and managed
                </h4>
              </div>
              <div className="w-[30%] rounded-2xl bg-light-purple p-4 sm:p-5 md:p-7 lg:rounded-4xl">
                <Image
                  src={"/assets/images/ide-icons.png"}
                  alt={"Tool stack icons"}
                  width={254}
                  height={254}
                  className="h-auto w-full" // Make image responsive
                  unoptimized={true}
                />
                <h4 className="md:mt-6 lg:mt-28">
                  Slack, Notion, Figma, GitHub we work on your stack
                </h4>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex w-full flex-nowrap gap-x-2 sm:gap-x-4">
              <div className="w-1/2 rounded-2xl bg-light-purple p-4 sm:p-5 md:p-7 lg:rounded-4xl">
                <Image
                  src={"/assets/images/infinity.png"}
                  alt={"Infinity symbol"}
                  width={268}
                  height={268}
                  className="lg:h-[268px] lg:w-[268px] md:h-[238px] md:w-[238px] sm:h-[200px] sm:w-[200px] h-[150px] w-[150px]" // Make image responsive
                />
                <h4 className="mt-12 lg:text-[45px] md:text-[28px] text-[16px]">
                  Retainer-based model with fast onboarding and flexible scaling
                </h4>
              </div>
              <div className="flex w-1/2 flex-col items-end rounded-2xl bg-light-purple p-4 sm:p-5 md:p-7 lg:rounded-4xl">
                <Image
                  src={"/assets/images/image-6.png"}
                  alt={"Abstract management graphic"}
                  width={299}
                  height={270}
                  className="lg:h-[270px] lg:w-[299px]  md:h-[220px] md:w-[239px] sm:h-[180px] sm:w-[200px] h-[130px] w-[159px]" // Make image responsive
                />
                <h4 className="mt-auto text-right lg:text-[45px] md:text-[28px] text-[16px]">
                  Project managers who understand agency chaos — and bring calm
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPrismolix;
