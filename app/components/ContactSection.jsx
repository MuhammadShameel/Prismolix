// components/ContactSection.jsx

import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  // Common style for all form inputs
  const inputStyle =
    "w-full bg-[#EAE3F5] px-[30px] py-5 text-sm border-2 border-transparent focus:border-violet-500 focus:outline-none transition-colors";

  return (
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-light-purple p-10 sm:p-12">
          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-start">
              <div className="lg:mb-[123px] ">
                <span className="font-medium text-[26px] color-primary-dark">
                  [Let's Work Together]
                </span>
              </div>
              <div>
                {" "}
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Contact Me!
                </h2>
                <p className=" max-w-lg mt-2.5">
                  Let's create something amazing together! Reach out, I'd love
                  to hear about your project and ideas.
                </p>
                <div className="mt-12 space-y-4">
                  <a
                    href="tel:+12312341234"
                    className="flex items-center gap-3 text-gray-800 hover:text-violet-600"
                  >
                    <Phone size={20} className="text-violet-500" />
                    <span>+123 1234 1234</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-800">
                    <MapPin size={20} className="text-violet-500" />
                    <span>Bahria Town, Phase 8, Rawalpindi</span>
                  </div>
                  <a
                    href="mailto:username@example.com"
                    className="flex items-center gap-3 text-gray-800 hover:text-violet-600"
                  >
                    <Mail size={20} className="text-violet-500" />
                    <span>username@example.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name *"
                  className={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className={inputStyle}
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email *"
                className={inputStyle}
              />
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className={inputStyle}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className={inputStyle}>
                  <option>Service You're looking for</option>
                  <option>UI/UX Design</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                </select>
                <input
                  type="text"
                  placeholder="Your Budget"
                  className={inputStyle}
                />
              </div>
              <textarea
                placeholder="Your message here *"
                rows={5}
                className={`${inputStyle} resize-none`}
              ></textarea>
              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary">
                  Submit now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
