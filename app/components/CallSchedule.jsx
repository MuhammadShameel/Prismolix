import React from "react";
import Image from "next/image";

const CallSchedule = () => {
  return (
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col gap-5">
          {/* Left Side: Text Content */}
          <div className="relative overflow-hidden lg:w-7/10 w-full bg-primary lg:p-8 md:p-7 p-5 rounded-2xl text-white">
            <div className="relative max-w-xl z-1">
              <h2 className="leading-[87%] tracking-[-1px]">
                Ready to Grow Without the Overload?
              </h2>
            </div>
            <div className="relative mt-3.5 max-w-lg ms-auto text-right z-1">
              <p>
                Focus on client relationships while we quietly handle delivery.
                Let Prismolix power your next 10 projects with reliability,
                speed, and consistency.
              </p>
              <button className="btn btn-secondary  mt-7">
                Book Your Call Today
              </button>
            </div>
            <Image
              className="absolute -bottom-16 lg:left-0 -left-30 lg:w-[590px] lg:h-[440px] w-[500px] h-[380px] z-0"
              src={"/assets/images/callScheduleIcon.png"}
              width={100}
              height={100}
              unoptimized={true}
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
