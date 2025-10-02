// components/SvgShade.jsx
"use client";
import { motion } from "framer-motion";

const SvgShade = () => (
  <motion.svg
    className="absolute w-full h-auto top-0 right-0 -z-10"
    width="1151"
    height="1250"
    viewBox="0 0 1151 1250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    style={{ transformOrigin: "100% 0%" }} // top right
  >
    <g filter="url(#filter0_f_1506_2284)">
      <circle cx="927.5" cy="322.5" r="227.5" fill="#6B1AFF" />
    </g>
    <defs>
      <filter
        id="filter0_f_1506_2284"
        x="0"
        y="-605"
        width="1855"
        height="1855"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="350"
          result="effect1_foregroundBlur_1506_2284"
        />
      </filter>
    </defs>
  </motion.svg>
);

export default SvgShade;
