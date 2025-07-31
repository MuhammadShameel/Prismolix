import React from "react";
import Image from "next/image";

import Shape from "../public/assets/images/hero-shape.svg";

const HeroSection = () => {
  return (
    <div>
      <Image
        src={Shape}
        className="absolute right-0"
        alt="Hero Image"
        width={500}
        height={300}
      />
    </div>
  );
};

export default HeroSection;
