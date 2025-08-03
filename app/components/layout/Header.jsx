// components/Header.jsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Logo from "../../../public/assets/images/logo.svg"; // Adjust the path as necessary

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Case Study", href: "#" },
  { name: "How It Works", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-full lg:px-5 md:px-4 px-3 z-50"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between pl-[30px] pr-2.5 py-[10px] rounded-[10px] [background:linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),rgba(0,0,0,0.05)] backdrop-blur-[15px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Prismolix Logo"
                className="lg:w-full md:w-[75%] sm:w-[75%] w-[75%] !h-[50%]"
              />
            </Link>

            {/* Desktop Navigation & Button */}
            <div className="hidden md:flex items-center">
              {" "}
              <nav>
                <ul className="flex items-center lg:gap-10 md:gap-5">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="nav-link font-medium hover:text-black transition-colors lg:text-xl md:text-md"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden md:flex items-center gap-6">
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
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-24 left-0 w-full z-40 px-4 md:hidden"
          >
            <div className=" [background:linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),rgba(0,0,0,0.05)] backdrop-blur-[15px] p-6">
              <nav className="justify-center">
                <ul className="flex flex-col items-center gap-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="nav-link text-gray-800 font-medium text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
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
