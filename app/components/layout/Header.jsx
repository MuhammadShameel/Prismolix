// components/Header.jsx
"use client";

import React, { useState, useEffect } from "react"; // Import useEffect
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Logo from "../../../public/assets/images/logo.svg"; // Adjust the path as necessary

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
        transition={{ duration: 0.8, ease: "easeInOut" }}
        // Conditionally apply classes for the sticky/floating header
        className={`navbar  ${isScrolled ? "scrolled" : " "}`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between pl-[30px] pr-2.5 py-[10px]  ">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Prismolix Logo"
                className="lg:w-full md:w-[75%] sm:w-[75%] w-[75%] !h-[50%]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center lg:gap-10 md:gap-5">
              <nav>
                <ul className="flex items-center lg:gap-10 md:gap-5">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="nav-link font-medium hover:text-black transition-colors lg:text-xl md:text-md"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <button className="btn btn-primary bg-purple-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
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
            className="fixed top-24 left-0 w-full z-40 px-3 md:hidden" // Adjusted z-index
          >
            <div className="[background:linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),rgba(0,0,0,0.05)] backdrop-blur-[15px] p-6 rounded-[10px]">
              <nav>
                <ul className="flex flex-col items-center gap-6">
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
                    <button className="btn btn-primary w-full bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium">
                      Contact Us
                    </button>
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
