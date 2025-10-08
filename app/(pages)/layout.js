"use client";

import { useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import IntroAnimation from "../components/IntroAnimation";
import { AnimationContext } from "../context/AnimationContext";

const Layout = ({ children }) => {
  const [isIntroComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <AnimationContext.Provider value={{ isIntroComplete }}>
      <>
        {!isIntroComplete && (
          <IntroAnimation onAnimationComplete={handleIntroComplete} />
        )}
        <Header />
        {children}
        <Footer />
      </>
    </AnimationContext.Provider>
  );
};

export default Layout;
