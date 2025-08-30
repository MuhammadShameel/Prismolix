// components/ContactSection.jsx
"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { sendFormData } from "../server/action";

const ContactSection = () => {
  const inputStyle =
    "w-full bg-[#EAE3F5] lg:px-[30px] px-3 rounded-[6px] py-5 text-sm border-2 border-transparent focus:border-violet-500 focus:outline-none transition-colors";
  const errorInputStyle =
    "w-full bg-[#EAE3F5] lg:px-[30px] px-3 rounded-[6px] py-5 text-sm border-2 border-red-500 focus:border-red-500 focus:outline-none transition-colors";

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
      .max(500, "Message must be less than 500 characters")
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
    <section className="lg:px-5 md:px-4 px-3 my-lg">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-light-purple lg:p-10 md:p-8 sm:p-5 p-2.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div className="flex flex-col justify-start">
              <div className="lg:mb-[123px]">
                <span className="font-medium text-[26px] color-primary-dark">
                  [Let's Work Together]
                </span>
              </div>
              <div className="lg:mb-0 mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Contact Me!
                </h2>
                <p className="max-w-lg mt-2.5">
                  Let's create something amazing together! Reach out, I'd love
                  to hear about your project and ideas.
                </p>
                {/* Contact Info */}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
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
                    <p className="text-[16px]! text-red-600 mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
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
                    <p className="text-[16px]! text-red-600 mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
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
                <div>
                  <select
                    id="service"
                    name="service"
                    className={`${errors.service ? errorInputStyle : inputStyle}`}
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Service You're looking for</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                  </select>
                </div>
                <div>
                  <select
                    id="budget"
                    name="budget"
                    className={`${errors.budget ? errorInputStyle : inputStyle}`}
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Your Budget</option>
                    <option value="2000 USD">2000 USD</option>
                    <option value="3000 USD">3000 USD</option>
                    <option value="5000 USD">5000 USD</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here *"
                  rows={5}
                  className={`${errors.message ? errorInputStyle : inputStyle} resize-none`}
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && (
                  <p className="text-[16px]! text-red-600 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit now"}
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
