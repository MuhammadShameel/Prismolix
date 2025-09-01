import React from "react";
import Image from "next/image";

import backgroundImage from "../../public/assets/images/schedule-bg.png";
const CallSchedule = () => {
  return (
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col gap-5">
          {/* Left Side: Text Content */}
          <div className="relative overflow-hidden lg:w-7/10 w-full bg-primary lg:p-8 md:p-7 p-5 rounded-2xl text-white z-[-2]">
            <div className="max-w-xl">
              <h2 className="leading-[87%] tracking-[-1px]">
                Ready to Scale Without Hiring?
              </h2>
            </div>
            <div className="mt-3.5 max-w-lg ms-auto text-right z-100">
              <p>
                Book your onboarding call and let Prismolix quietly deliver your
                next 10 projects — while you keep focusing on client
                relationships and growth.
              </p>
              <button className="btn btn-secondary mt-7">
                Schedule My Call
              </button>
            </div>
            <Image
              className="absolute -bottom-16 left-0 w-[440px] h-[440px] z-[-1]"
              src={"/assets/images/callScheduleIcon.svg"}
              width={100}
              height={100}
              alt=""
            />
          </div>

          {/* Right Side: Image */}
          {/* MODIFICATION HERE: Added responsive height */}
          <div className="relative overflow-hidden lg:w-3/10 w-full rounded-2xl h-80 lg:h-auto">
            {/* Background Image */}
            <div
              className="absolute inset-0 z-10 bg-cover bg-center bg-black/20 bg-blend-luminosity"
              style={{
                backgroundImage: "url('/assets/images/schedule-bg.png')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallSchedule;
