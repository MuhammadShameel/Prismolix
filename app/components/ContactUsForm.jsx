"use client";
import React, { useState } from "react";

const ContactUsForm = () => {
  // --- All hooks and logic must be INSIDE the component ---

  // 1. State for all form inputs and submission status
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [responseMessage, setResponseMessage] = useState("");

  // 2. The form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setResponseMessage("");

    const formData = new FormData();
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

  // Custom styles for reuse (can be inside or outside if they don't use state/props)
  const inputStyle =
    "w-full bg-gray-100 rounded-[6px] py-5 px-[30px] focus:outline-none focus:ring-2 focus:ring-purple-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-10">
      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="sr-only">
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name *"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputStyle}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="sr-only">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name *"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputStyle}
            required
          />
        </div>
      </div>

      {/* Email and Phone Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="sr-only">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Enter your Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your Phone Number *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputStyle}
            required
          />
        </div>
      </div>

      {/* Service and Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label htmlFor="service" className="sr-only">
            Service you're looking for
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${inputStyle} appearance-none pr-12`}
          >
            <option value="">Service You're looking for</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
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
        <div>
          <div className="relative">
            <label htmlFor="budget" className="sr-only">
              Your Budget
            </label>
            <select
              id="budget"
              name="budget"
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
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="sr-only">
          Your message here
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message *"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputStyle + " resize-none"}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
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
  );
};

export default ContactUsForm;
