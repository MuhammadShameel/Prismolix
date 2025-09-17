import React from "react";
import Image from "next/image";

import Shape from "../../public/assets/images/contactShape.png";
import FooterMarquee from "../components/FooterMarquee";
import ContactUsForm from "../components/ContactUsForm";

export const metadata = {
  title: "Contact Prismolix • Let’s Talk White-Label Design & Development",
  description:
    "Get in touch to explore how Prismolix can support your agency’s growth. Book a call, ask questions or start a project today. We’re ready to scale with you.",
  alternates: {
    canonical: "https://www.prismolix.com/",
  },
  openGraph: {
    type: "website",
    url: "https://prismolix.com",
    title: "Contact Prismolix • Let’s Talk White-Label Design & Development",
    description:
      "Get in touch to explore how Prismolix can support your agency’s growth. Book a call, ask questions or start a project today. We’re ready to scale with you.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Prismolix • Let’s Talk White-Label Design & Development",
    description:
      "Get in touch to explore how Prismolix can support your agency’s growth. Book a call, ask questions or start a project today. We’re ready to scale with you.",
    images:
      "https://prismolix.wasmer.app/wp-content/uploads/2025/08/blogDetail.png",
  },
};

const ContactUs = () => {
  // 2. Add state for all form inputs and submission status

  return (
    <div>
      <Image
        className="absolute w-full h-auto top-0 right-0 -z-1"
        src={"/assets/images/Shade.png"}
        width={100}
        height={100}
        alt=""
      />
      <Image
        src={Shape}
        alt="Abstract 3D hero image"
        // objectFit="contain"
        className="absolute top-0 right-0"
      />
      <section className="relative hero-section overflow-hidden">
        {/* Container for the text content */}
        <div className="container mx-auto lg:px-5 md:px-4 px-3 relative z-10">
          <div className="lg:w-4/6 flex flex-col items-start lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            {/* Pre-heading */}
            <span className="fs-26 color-primary-dark">[Contact Us]</span>

            {/* Main Heading with Highlighted Text */}
            <h1 className="font-bold tracking-tighter leading-[100%]">
              Let’s Build Your
              <span className="text-overlay text-white px-2">
                Delivery
              </span>{" "}
              Team
            </h1>

            {/* Subheading */}
            <p className="text-base max-w-3xl">
              Your time should be spent closing deals — not designing pages. We
              handle execution so you can focus on growth.
            </p>

            {/* Button Group */}
            <div className="flex items-center gap-4 mt-4">
              <button className="btn btn-primary btn-shine">Book a Call</button>
              <button className="btn btn-outline">How it Works</button>
            </div>
          </div>
        </div>

        {/* The Image (positioned absolutely) */}
      </section>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto">
          <iframe
            width="100%"
            height="600px"
            frameBorder="0" // Corrected
            marginHeight="0" // Corrected
            marginWidth="0" // Corrected
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.90445574054587!2d73.08406689103585!3d33.5151302549978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df93789af0d237%3A0xfbcd71a0c39f8cb2!2sZamek%20Constructions!5e0!3m2!1sen!2s!4v1755503159340!5m2!1sen!2s"
            style={{ filter: "grayscale(2) contrast(0.5)" }}
          ></iframe>
          <div className="flex justify-between mt-5 items-center">
            <div>
              <p className="fs-26 lg:max-w-sm max-w-4xl font-medium">
                ABC building, ABC - Street, Bahria Town, Phase 8, Rawalpindi
              </p>
            </div>
            <div>
              <button className="btn btn-dark flex gap-2.5 items-center text-nowrap">
                Get Directions{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.0098 14.5741L18.0098 5.98982L9.42549 5.98982"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.99023 18.0104L17.8908 6.10977"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="my-lg ">
            <div className="bg-light-purple flex lg:flex-row flex-col lg:gap-7 gap-4 lg:px-10 lg:py-6 md:px-8 md:py-5 p-5 rounded-[20px]">
              <div className="lg:w-4/12 w-12/12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M19.6497 23.6834L14.1997 29.1334C13.5997 28.6 13.0163 28.05 12.4497 27.4834C10.733 25.75 9.18301 23.9334 7.79967 22.0334C6.43301 20.1334 5.33301 18.2334 4.53301 16.35C3.73301 14.45 3.33301 12.6334 3.33301 10.9C3.33301 9.76671 3.53301 8.68337 3.93301 7.68337C4.33301 6.66671 4.96634 5.73337 5.84967 4.90004C6.91634 3.85004 8.08301 3.33337 9.31634 3.33337C9.78301 3.33337 10.2497 3.43337 10.6663 3.63337C11.0997 3.83337 11.483 4.13337 11.783 4.56671L15.6497 10.0167C15.9497 10.4334 16.1663 10.8167 16.3163 11.1834C16.4663 11.5334 16.5497 11.8834 16.5497 12.2C16.5497 12.6 16.433 13 16.1997 13.3834C15.983 13.7667 15.6663 14.1667 15.2663 14.5667L13.9997 15.8834C13.8163 16.0667 13.733 16.2834 13.733 16.55C13.733 16.6834 13.7497 16.8 13.783 16.9334C13.833 17.0667 13.883 17.1667 13.9163 17.2667C14.2163 17.8167 14.733 18.5334 15.4663 19.4C16.2163 20.2667 17.0163 21.15 17.883 22.0334C18.483 22.6167 19.0663 23.1834 19.6497 23.6834Z"
                    fill="#4A008C"
                  />
                  <path
                    d="M36.6167 30.55C36.6167 31.0167 36.5333 31.5 36.3667 31.9667C36.3167 32.1 36.2667 32.2334 36.2 32.3667C35.9167 32.9667 35.55 33.5334 35.0667 34.0667C34.25 34.9667 33.35 35.6167 32.3333 36.0334C32.3167 36.0334 32.3 36.05 32.2833 36.05C31.3 36.45 30.2333 36.6667 29.0833 36.6667C27.3833 36.6667 25.5667 36.2667 23.65 35.45C21.7333 34.6334 19.8167 33.5334 17.9167 32.15C17.2667 31.6667 16.6167 31.1834 16 30.6667L21.45 25.2167C21.9167 25.5667 22.3333 25.8334 22.6833 26.0167C22.7667 26.05 22.8667 26.1 22.9833 26.15C23.1167 26.2 23.25 26.2167 23.4 26.2167C23.6833 26.2167 23.9 26.1167 24.0833 25.9334L25.35 24.6834C25.7667 24.2667 26.1667 23.95 26.55 23.75C26.9333 23.5167 27.3167 23.4 27.7333 23.4C28.05 23.4 28.3833 23.4667 28.75 23.6167C29.1167 23.7667 29.5 23.9834 29.9167 24.2667L35.4333 28.1834C35.8667 28.4834 36.1667 28.8334 36.35 29.25C36.5167 29.6667 36.6167 30.0834 36.6167 30.55Z"
                    fill="#4A008C"
                  />
                </svg>
                <span className="font-medium fs-26">Phone Number: </span>
                <p>+123 1234 1234 1234</p>
              </div>
              <div className="lg:w-4/12 w-12/12 border-l-[#8C8C8C] border-r-[#8C8C8C] border-t-[#8C8C8C] border-b-[#8C8C8C] lg:border-l lg:border-r lg:border-t-0 lg:border-b-0 border-t border-b lg:pl-5 lg:py-0 py-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="43"
                  viewBox="0 0 41 43"
                  fill="none"
                >
                  <path
                    d="M18.4827 36.5642L16.4321 30.4124C15.8546 28.7036 14.5229 27.3718 12.8141 26.7944L6.66225 24.7438C1.38252 22.976 1.45323 15.4807 6.76832 13.8425L9.54961 12.994C9.92673 12.8762 10.3392 12.8879 10.7163 13.0294L32.3302 21.2082C33.2141 21.55 33.6855 22.5164 33.4027 23.4121L29.3604 36.4346C27.7223 41.7497 20.2387 41.8322 18.4827 36.5642Z"
                    fill="#4A008C"
                  />
                  <path
                    opacity="0.4"
                    d="M32.8367 18.8629L18.6828 13.5007C17.0918 12.8996 17.1625 10.6133 18.7888 10.1183L29.1715 6.901C33.5792 5.53393 37.704 9.65872 36.3369 14.0664L35.1937 17.7315C34.8755 18.7097 33.7913 19.2282 32.8367 18.8629Z"
                    fill="#4A008C"
                  />
                </svg>
                <span className="font-medium fs-26">Location:</span>
                <p>Bahria Town, Phase 8, Rawalpindi</p>
              </div>
              <div className="lg:w-4/12 w-12/12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M29 34.1667H12.3333C7.33333 34.1667 4 31.6667 4 25.8334V14.1667C4 8.33337 7.33333 5.83337 12.3333 5.83337H29C34 5.83337 37.3333 8.33337 37.3333 14.1667V25.8334C37.3333 31.6667 34 34.1667 29 34.1667Z"
                    fill="#4A008C"
                  />
                  <path
                    d="M20.6669 21.4499C19.2669 21.4499 17.8503 21.0166 16.767 20.1333L11.5503 15.9666C11.0169 15.5333 10.917 14.7499 11.3503 14.2166C11.7836 13.6833 12.567 13.5833 13.1003 14.0166L18.3169 18.1833C19.5836 19.2 21.7336 19.2 23.0003 18.1833L28.2169 14.0166C28.7503 13.5833 29.5503 13.6666 29.9669 14.2166C30.4003 14.7499 30.317 15.55 29.767 15.9666L24.5503 20.1333C23.4836 21.0166 22.0669 21.4499 20.6669 21.4499Z"
                    fill="#4A008C"
                  />
                </svg>
                <span className="font-medium fs-26">Email:</span>
                <p>username@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-5 md:px-4 px-3 my-lg">
        <div className="container mx-auto my-lg lg:px-5 md:px-4 px-3">
          <span className="fs-26 color-primary-dark">
            [Let's Work Together]
          </span>
          <div className="flex flex-col  mt-2.5">
            <div className="flex lg:flex-row flex-col lg:justify-between">
              <h2> Let’s Connect</h2>
              <p className="max-w-md text-[#292929]">
                Let’s create something amazing together! Reach out I’d love to
                hear about your project and ideas.
              </p>
            </div>
            <ContactUsForm />
          </div>
        </div>
      </section>
      <FooterMarquee />
    </div>
  );
};

export default ContactUs;
