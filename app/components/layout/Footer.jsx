// components/Footer.jsx

import React from "react";
import { Youtube, Linkedin, Instagram, Facebook, Command } from "lucide-react";
import Image from "next/image";

import FooterShape from "../../../public/assets/images/footer-shape.png";
import LogoIcon from "../../../public/assets/images/logo-icon.svg";

// You can create a simple SVG component for the TikTok icon or find one.
const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 12a4 4 0 1 0 4 4V8a8 8 0 1 1-8-8" />
  </svg>
);

// Data for links to keep the component clean
const footerLinks = {
  column1: [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
  ],
  column2: [
    { name: "Testimonials", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Why Prismolix", href: "#" },
  ],
};

const socialLinks = [
  { icon: <Youtube size={20} />, href: "#" },
  { icon: <TikTokIcon size={20} />, href: "#" },
  { icon: <Linkedin size={20} />, href: "#" },
  { icon: <Instagram size={20} />, href: "#" },
  { icon: <Facebook size={20} />, href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const marqueeContent = `© ${currentYear} Prismolix`;

  return (
    <footer className="bg-white text-black w-full">
      {/* Top Ticker/Marquee */}
      <div className="w-full py-3 bg-light-purple color-dark overflow-hidden lg:px-5 md:px-4 px-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(10)
            .fill(marqueeContent)
            .map((item, index) => (
              <span
                key={index}
                className="mx-5 text-[26px] font-medium flex items-center"
              >
                {item}
              </span>
            ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto  py-16 lg:py-24">
        {/* Giant Background Text */}
        <div className="absolute top-[340px] inset-0 w-full h-auto flex items-center justify-center overflow-hidden z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1320"
            height="180"
            viewBox="0 0 1320 180"
            fill="none"
          >
            <path
              d="M0 178.759V1.24138H68.4208C102.867 1.24138 120.09 17.0897 120.09 48.7862C120.09 83.2965 96.5363 104.359 49.4282 111.972L44.9454 92.6069C79.5491 87.2276 96.8509 72.9517 96.8509 49.7793C96.8509 30.0828 86.7057 20.2345 66.4154 20.2345H21.8239V178.759H0Z"
              fill="#292929"
            />
            <path
              d="M153.424 178.759V1.24138H225.384C257.471 1.24138 273.515 15.4345 273.515 43.8207C273.515 66.9103 257.825 84 226.446 95.0897L284.368 178.759H255.584L201.909 98.9379V83.9172C234.153 78.5379 250.275 65.5034 250.275 44.8138C250.275 28.4276 241.31 20.2345 223.379 20.2345H175.248V178.759H153.424Z"
              fill="#292929"
            />
            <path
              d="M337.166 1.24138V178.759H315.343V1.24138H337.166Z"
              fill="#292929"
            />
            <path
              d="M382.887 172.552V151.448C400.582 158.069 419.693 161.379 440.219 161.379C469.239 161.379 483.749 150.207 483.749 127.862C483.749 108.828 473.053 99.3103 451.662 99.3103H429.956C394.644 99.3103 376.989 83.1724 376.989 50.8965C376.989 16.9655 399.599 0 444.82 0C464.481 0 482.766 2.48276 499.674 7.44828V28.5517C482.766 21.931 464.481 18.6207 444.82 18.6207C414.148 18.6207 398.813 29.3793 398.813 50.8965C398.813 69.931 409.194 79.4483 429.956 79.4483H451.662C487.602 79.4483 505.573 95.5862 505.573 127.862C505.573 162.621 483.788 180 440.219 180C419.693 180 400.582 177.517 382.887 172.552Z"
              fill="#292929"
            />
            <path
              d="M541.738 178.759V1.24138H569.46L631.393 149.338L692.146 1.24138H718.689V178.759H699.224V33.1448L639.297 178.759H622.074L561.203 33.1448V178.759H541.738Z"
              fill="#292929"
            />
            <path
              d="M780.217 89.5034C780.217 137.421 800.782 161.379 841.913 161.379C882.18 161.379 902.313 137.421 902.313 89.5034C902.313 42.2483 882.18 18.6207 841.913 18.6207C800.782 18.6207 780.217 42.2483 780.217 89.5034ZM757.213 90.2483C757.213 30.0828 785.447 0 841.913 0C897.515 0 925.316 30.0828 925.316 90.2483C925.316 150.083 897.515 180 841.913 180C785.447 180 757.213 150.083 757.213 90.2483Z"
              fill="#292929"
            />
            <path
              d="M985.783 1.24138V160.138H1074.02V178.759H963.959V1.24138H985.783Z"
              fill="#292929"
            />
            <path
              d="M1129.77 1.24138V178.759H1107.95V1.24138H1129.77Z"
              fill="#292929"
            />
            <path
              d="M1227.16 90L1160.74 1.24138H1187.29L1240.37 72.2483L1293.46 1.24138H1320L1253.7 90L1320 178.759H1293.46L1240.37 107.752L1187.29 178.759H1160.74L1227.16 90Z"
              fill="#292929"
            />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Left Section: Logo, text, and socials */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col items-start">
              <Image src={LogoIcon} alt="" />
            </div>
            <p className="color-dark-cards-bg leading-normal max-w-sm">
              Your time should be spent closing deals — not designing pages. We
              handle execution so you can focus on growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="border border-gray-300 rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section: 3D Art Placeholder */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <Image
              src={FooterShape} // Using a placeholder that looks like abstract chrome
              alt="Abstract 3D Shape"
              className="object-contain w-full h-auto z-0"
            />
          </div>

          {/* Right Section: Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-2 mt-[70px]">
            <div>
              <ul className="space-y-3">
                {footerLinks.column1.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[26px] text-gray-700 hover:text-black font-medium flex items-center gap-2"
                    >
                      <span className="text-gray-400">&gt;</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {footerLinks.column2.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[26px] text-gray-700 hover:text-black font-medium flex items-center gap-2"
                    >
                      <span className="text-gray-400">&gt;</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto  py-6 border-t border-gray-200">
        <div className="color-dark-cards-bg flex text-[26px] justify-between items-center font-medium">
          <a href="#" className="hover:text-black">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
