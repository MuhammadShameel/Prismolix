// components/Header.jsx
"use client";

import React, { useState, useEffect, useContext } from "react"; // Import useEffect
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimationContext } from "../../context/AnimationContext";

import Logo from "../../../public/assets/images/logo.png"; // Adjust the path as necessary

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Study", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "How It Works", href: "/howItWorks" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll tracking
  const { isIntroComplete } = useContext(AnimationContext);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls down more than 10px
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: isIntroComplete ? 0 : 3.5,
        }}
        // Conditionally apply classes for the sticky/floating header
        className={`navbar lg:px-5 md:px-4 px-3  ${
          isScrolled ? "scrolled" : " "
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between px-2.5 py-[10px]  ">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 logo-wrapper lg:h-[40px] md:h-[30px] h-[30px] w-auto"
            >
              <Image
                src={Logo}
                alt="Prismolix Logo"
                className="w-full h-full object-contain"
              />
            </Link>
            <nav className="hidden xl:flex lg:flex items-center xl:gap-10 lg:gap-5">
              <ul className="flex items-center xl:gap-10 lg:gap-8 md:gap-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="nav-link transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center lg:gap-10 ">
              <Link href={"/contact"} className="btn btn-primary btn-shine">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none p-2"
              >
                {isOpen ? (
                  <X size={24} className="text-gray-800" />
                ) : (
                  <Menu size={24} className="text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* The inner div now controls the background and border radius */}
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 w-full z-40 px-3 lg:hidden" // Adjusted z-index
          >
            <div className="[background:linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),rgba(0,0,0,0.05)] backdrop-blur-[15px] p-6 rounded-[10px]">
              <nav>
                <ul className="flex flex-col items-start gap-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="nav-link text-gray-800 font-medium text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/contact"
                      className="btn btn-primary btn-shine w-full bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
