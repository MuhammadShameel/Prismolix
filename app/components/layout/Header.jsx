// components/Header.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/assets/images/logo.svg"; // Adjust the path as necessary

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Case Study", href: "#" },
  { name: "How It Works", href: "#" },
];

const Header = () => {
  return (
    <motion.header
      // Framer Motion animation properties
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-full lg:px-5 md:px-4 px-3 z-100"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between pl-[30px] pr-2.5 py-[10px] rounded-[10px] [background:linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),rgba(0,0,0,0.05)] backdrop-blur-[15px]">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Image src={Logo} alt=""></Image>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="color-dark-cards-bg font-medium hover:color-dark transition-colors text-xl"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
