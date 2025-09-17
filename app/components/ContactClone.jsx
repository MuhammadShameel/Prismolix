// components/ContactSection.jsx
"use client";
import React, { useState } from "react";

const ContactSection = () => {
  // Common style for all form inputs
  const inputStyle =
    "w-full bg-[#EAE3F5] lg:px-[30px] px-3 rounded-[6px] py-5 border-2 border-transparent focus:border-violet-500 focus:outline-none transition-colors";

  // 2. Add state for all form inputs and submission status
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [responseMessage, setResponseMessage] = useState("");

  // 3. The form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setResponseMessage("");

    // --- IMPORTANT: UPDATE THESE VALUES ---

    const formData = new FormData();
    // These keys must match the names in your Contact Form 7 shortcodes
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("service", service);
    formData.append("budget", budget);
    formData.append("message", message);
    formData.append("_wpcf7_unit_tag", "d507871");

    try {
      const response = await fetch(
        `https://prismolix.wasmer.app/wp-json/contact-form-7/v1/contact-forms/88/feedback`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.status === "mail_sent") {
        setStatus("success");
        setResponseMessage(data.message);
        // Reset form fields on success
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setService("");
        setBudget("");
        setMessage("");
      } else {
        setStatus("error");
        setResponseMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="flex rounded-2xl bg-light-purple lg:p-10 md:p-8  p-5">
          {/* Grid Container */}
          {/* Left Column: Contact Info */}
          <div className="w-4/10 flex flex-col justify-start lg:!pr-20">
            <div className="lg:mb-[123px] ">
              <span className="fs-26 color-primary-dark">
                [Let's Work Together]
              </span>
            </div>
            <div className="lg:mb-0 mb-12">
              {" "}
              <h2>Contact Me!</h2>
              <p className="mt-2.5 ">
                Let's create something amazing together! Reach out, I'd love to
                hear about your project and ideas.
              </p>
              <div className="mt-12 space-y-4">
                <a
                  href="tel:+12312341234"
                  className="flex items-center gap-3  hover:text-violet-600"
                >
                  {/* <Phone size={20} className="text-violet-500" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M14.7375 18.2625L10.65 22.35C10.2 21.95 9.7625 21.5375 9.3375 21.1125C8.05 19.8125 6.8875 18.45 5.85 17.025C4.825 15.6 4 14.175 3.4 12.7625C2.8 11.3375 2.5 9.975 2.5 8.675C2.5 7.825 2.65 7.0125 2.95 6.2625C3.25 5.5 3.725 4.8 4.3875 4.175C5.1875 3.3875 6.0625 3 6.9875 3C7.3375 3 7.6875 3.075 8 3.225C8.325 3.375 8.6125 3.6 8.8375 3.925L11.7375 8.0125C11.9625 8.325 12.125 8.6125 12.2375 8.8875C12.35 9.15 12.4125 9.4125 12.4125 9.65C12.4125 9.95 12.325 10.25 12.15 10.5375C11.9875 10.825 11.75 11.125 11.45 11.425L10.5 12.4125C10.3625 12.55 10.3 12.7125 10.3 12.9125C10.3 13.0125 10.3125 13.1 10.3375 13.2C10.375 13.3 10.4125 13.375 10.4375 13.45C10.6625 13.8625 11.05 14.4 11.6 15.05C12.1625 15.7 12.7625 16.3625 13.4125 17.025C13.8625 17.4625 14.3 17.8875 14.7375 18.2625Z"
                      fill="#4A008C"
                    />
                    <path
                      d="M27.4625 23.4123C27.4625 23.7623 27.4 24.1248 27.275 24.4748C27.2375 24.5748 27.2 24.6748 27.15 24.7748C26.9375 25.2248 26.6625 25.6498 26.3 26.0498C25.6875 26.7248 25.0125 27.2123 24.25 27.5248C24.2375 27.5248 24.225 27.5373 24.2125 27.5373C23.475 27.8373 22.675 27.9998 21.8125 27.9998C20.5375 27.9998 19.175 27.6998 17.7375 27.0873C16.3 26.4748 14.8625 25.6498 13.4375 24.6123C12.95 24.2498 12.4625 23.8873 12 23.4998L16.0875 19.4123C16.4375 19.6748 16.75 19.8748 17.0125 20.0123C17.075 20.0373 17.15 20.0748 17.2375 20.1123C17.3375 20.1498 17.4375 20.1623 17.55 20.1623C17.7625 20.1623 17.925 20.0873 18.0625 19.9498L19.0125 19.0123C19.325 18.6998 19.625 18.4623 19.9125 18.3123C20.2 18.1373 20.4875 18.0498 20.8 18.0498C21.0375 18.0498 21.2875 18.0998 21.5625 18.2123C21.8375 18.3248 22.125 18.4873 22.4375 18.6998L26.575 21.6373C26.9 21.8623 27.125 22.1248 27.2625 22.4373C27.3875 22.7498 27.4625 23.0623 27.4625 23.4123Z"
                      fill="#4A008C"
                    />
                  </svg>
                  <p className="fs-26 font-medium">+123 1234 1234</p>
                </a>
                <div className="flex items-center gap-3 ">
                  {/* <MapPin size={20} className="text-violet-500" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="33"
                    viewBox="0 0 30 33"
                    fill="none"
                  >
                    <path
                      d="M13.6119 27.6731L12.074 23.0592C11.6409 21.7776 10.6421 20.7788 9.36044 20.3457L4.74657 18.8077C0.786769 17.4819 0.839803 11.8604 4.82612 10.6318L6.91208 9.99539C7.19493 9.907 7.50429 9.91584 7.78713 10.0219L23.9976 16.1561C24.6605 16.4124 25.014 17.1372 24.8019 17.8089L21.7702 27.5758C20.5416 31.5621 14.9289 31.624 13.6119 27.6731Z"
                      fill="#4A008C"
                    />
                    <path
                      opacity="0.4"
                      d="M24.3775 14.3972L13.7621 10.3755C12.5688 9.92472 12.6219 8.20998 13.8416 7.83875L21.6287 5.42575C24.9344 4.40045 28.028 7.49404 27.0027 10.7998L26.1453 13.5486C25.9066 14.2823 25.0935 14.6712 24.3775 14.3972Z"
                      fill="#4A008C"
                    />
                  </svg>
                  <p className="fs-26 font-medium">
                    Bahria Town, Phase 8, Rawalpindi
                  </p>
                </div>
                <a
                  href="mailto:username@example.com"
                  className="flex items-center gap-3  hover:text-violet-600"
                >
                  {/* <Mail size={20} className="text-violet-500" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M21.25 26.125H8.75C5 26.125 2.5 24.25 2.5 19.875V11.125C2.5 6.75 5 4.875 8.75 4.875H21.25C25 4.875 27.5 6.75 27.5 11.125V19.875C27.5 24.25 25 26.125 21.25 26.125Z"
                      fill="#4A008C"
                    />
                    <path
                      d="M15 16.5875C13.95 16.5875 12.8875 16.2625 12.075 15.6L8.16253 12.475C7.76253 12.15 7.68753 11.5625 8.01253 11.1625C8.33753 10.7625 8.92504 10.6875 9.32504 11.0125L13.2375 14.1375C14.1875 14.9 15.8 14.9 16.75 14.1375L20.6625 11.0125C21.0625 10.6875 21.6625 10.75 21.975 11.1625C22.3 11.5625 22.2375 12.1625 21.825 12.475L17.9125 15.6C17.1125 16.2625 16.05 16.5875 15 16.5875Z"
                      fill="#4A008C"
                    />
                  </svg>
                  <p className="fs-26 font-medium">username@example.com</p>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form className="w-6/10 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label htmlFor="firstName" className="sr-only">
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First name *"
                className={inputStyle}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label htmlFor="lastName" className="sr-only">
                Last Name*
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name *"
                className={inputStyle}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <label htmlFor="email" className="sr-only">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email *"
              className={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="phone" className="sr-only">
              Enter your Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              className={inputStyle}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* --- Custom Select Dropdown --- */}
              <div className="relative">
                <label htmlFor="service" className="sr-only">
                  Service you're looking for
                </label>
                <select
                  id="service"
                  name="service"
                  // Add appearance-none to hide the default arrow and pr-12 to make space for our icon
                  className={`${inputStyle} appearance-none pr-12`}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Service You're looking for</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                </select>

                {/* Your Custom SVG Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                  >
                    <path
                      d="M9.01472 6.75734L15.8029 0.302944L17.5 2L9.01472 10.4853L0.529434 2L2.22649 0.302945L9.01472 6.75734Z"
                      fill="#364153"
                    />
                  </svg>
                </div>
              </div>

              {/* The budget input remains the same */}
              <div className="relative">
                <label htmlFor="budget" className="sr-only">
                  Your Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  // Add appearance-none to hide the default arrow and pr-12 to make space for our icon
                  className={`${inputStyle} appearance-none pr-12`}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="">Your Budget</option>
                  <option value="2000 USD">2000 USD</option>
                  <option value="3000 USD">3000 USD</option>
                  <option value="5000 USD">5000 USD</option>
                </select>

                {/* Your Custom SVG Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                  <span className="font-semibold text-gray-700">USD</span>
                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                  >
                    <path
                      d="M9.01472 6.75734L15.8029 0.302944L17.5 2L9.01472 10.4853L0.529434 2L2.22649 0.302945L9.01472 6.75734Z"
                      fill="#364153"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <label htmlFor="message" className="sr-only">
              Your message here
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here *"
              rows={5}
              className={`${inputStyle} resize-none`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary btn-shine"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Submitting..." : "Submit now"}
              </button>
            </div>
            {/* Submission Status Message */}
            {responseMessage && (
              <div
                className={`mt-4 rounded-md p-3 text-center ${
                  status === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {responseMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
