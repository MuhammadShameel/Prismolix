import React from "react";
import Image from "next/image";

import Shape from "../../public/assets/images/hero-shape.svg";

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
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis
        iure modi dolorum aut atque nihil, accusamus esse facilis corporis
        perspiciatis nostrum commodi ipsam facere eligendi aspernatur doloremque
        ipsum laudantium.
      </h2>
    </div>
  );
};

export default HeroSection;
