import React from "react";
import Image from "next/image";

import bgImg from "../../../public/assets/images/blog-detail-bg.png";

const page = () => {
  return (
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="testimonial-bg relative flex flex-col md:flex-row p-4">
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
          <div className="flex justify-center">
            <span className="font-medium text-[26px] color-primary-dark">
              [Case Study - 01]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
