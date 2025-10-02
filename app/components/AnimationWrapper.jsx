"use client";
import { useState, useEffect } from "react";

const AnimationWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-[#4a008c] flex flex-col items-center justify-center z-50">
        {/* Logo Container */}
        <div className="relative w-64 h-64">
          {/* Prism Layers */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            <polygon
              className="prism-layer layer-5 animate-slide-down"
              fill="#6756a4"
              points="100,50 50,150 150,150"
            />
            <polygon
              className="prism-layer layer-4 animate-slide-down"
              fill="#5d4d95"
              points="100,70 60,150 140,150"
            />
            <polygon
              className="prism-layer layer-3 animate-slide-down"
              fill="#983679"
              points="100,90 70,150 130,150"
            />
            <polygon
              className="prism-layer layer-2 animate-slide-down"
              fill="#b54190"
              points="100,110 80,150 120,150"
            />
            <polygon
              className="prism-layer layer-1 animate-slide-down"
              fill="#c3539f"
              points="100,130 90,150 110,150"
            />
          </svg>
        </div>

        {/* Text */}
        <h1
          className="text-5xl md:text-6xl font-black text-white mb-8 opacity-0 animate-text-reveal"
          style={{ animationDelay: "1.5s" }}
        >
          PRISMOLIX
        </h1>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full w-0 animate-loading"></div>
        </div>
      </div>
    );
  }

  return children;
};

export default AnimationWrapper;
