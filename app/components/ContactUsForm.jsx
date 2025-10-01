// components/ContactSection.jsx
"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { sendFormData } from "../server/action";

const ContactSection = () => {
  const inputStyle =
    "w-full bg-gray-100 rounded-[6px] py-5 px-[30px] focus:outline-none focus:ring-2 focus:ring-purple-500";
  const errorInputStyle =
    "w-full bg-[#EAE3F5] xl:text-[22px] lg:text-[18px] md:text-[16px] text-[14px] lg:px-[30px] px-3 rounded-[6px] py-5  border-2 border-red-500 focus:border-red-500 focus:outline-none transition-colors";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[+]?[\d\s\-\(\)]+$/, "Please enter a valid phone number")
      .min(10, "Phone number must be at least 10 digits"),
    service: Yup.string(),
    budget: Yup.string(),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be less than 500 characters"),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // ✅ Validate before sending
      await validationSchema.validate(formData, { abortEarly: false });

      // ✅ Prepare FormData for sending
      const formPayload = new FormData();
      formPayload.append("firstName", formData.firstName);
      formPayload.append("lastName", formData.lastName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("service", formData.service);
      formPayload.append("budget", formData.budget);
      formPayload.append("message", formData.message);

      await sendFormData(formPayload);

      // ✅ Reset form after success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });

      alert("Form submitted successfully!");
    } catch (err) {
      if (err.inner) {
        // ✅ Collect Yup validation errors
        const errorObj = {};
        err.inner.forEach((error) => {
          errorObj[error.path] = error.message;
        });
        setErrors(errorObj);
      } else {
        console.error("Form submission failed:", err);
        alert("Something went wrong while submitting the form.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="my-lg">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Left Column */}

          {/* Right Column: Contact Form */}
          <form onSubmit={handleSubmit} className="w-full  flex flex-col gap-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First name *"
                  className={errors.firstName ? errorInputStyle : inputStyle}
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && (
                  <p className="text-[16px]! text-red-600 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  className={errors.lastName ? errorInputStyle : inputStyle}
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && (
                  <p className="text-[16px]! text-red-600 mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email *"
                className={errors.email ? errorInputStyle : inputStyle}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-[16px]! text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="sr-only">
                Enter your Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                className={errors.phone ? errorInputStyle : inputStyle}
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <p className="text-[16px]! text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Service & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label htmlFor="service" className="sr-only">
                  Service you're looking for
                </label>
                <select
                  id="service"
                  name="service"
                  className={`${
                    errors.service ? errorInputStyle : inputStyle
                  }  appearance-none pr-12`}
                  onChange={handleInputChange}
                  value={formData.service}
                >
                  <option value="">Service You're looking for</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                </select>
                {/* Your Custom SVG Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
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
              <div className="relative">
                <label htmlFor="budget" className="sr-only">
                  Your Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className={`${
                    errors.budget ? errorInputStyle : inputStyle
                  } appearance-none pr-12`}
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Your Budget</option>
                  <option value="2000 USD">2000</option>
                  <option value="3000 USD">3000</option>
                  <option value="5000 USD">5000</option>
                </select>

                {/* Your Custom SVG Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                  <span className="font-semibold text-gray-700 lg:text-[22px] md:text-[18px] text-[14px]">
                    USD
                  </span>
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

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">
                Your message here
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here *"
                rows={5}
                className={`${
                  errors.message ? errorInputStyle : inputStyle
                } resize-none`}
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && (
                <p className="text-[16px]! text-red-600 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-primary btn-shine"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
