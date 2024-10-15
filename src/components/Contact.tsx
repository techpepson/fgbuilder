"use client";

import { Heading } from "@radix-ui/themes";
import React, { useState } from "react";
import { Footer, Header } from "./component-expo";
import { whiteBuilding } from "../images/image-export";
import { motion } from "framer-motion"; // Import Framer Motion

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to a server or displaying an alert
    console.log("Form submitted", formData);
  };

  // Framer Motion variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below and faded out
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slide up and fade in
  };

  return (
    <div className="h-full w-full">
      <Header />
      {/* Contact introduction section */}
      <section className="py-16 relative">
        <div className="absolute w-full h-full -z-[999]">
          <img
            src={whiteBuilding}
            alt="An image of a white storey building"
            className="absolute w-full h-full "
          />
        </div>
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInVariants} // Apply animation for the heading and description
          >
            <Heading
              as="h1"
              className=" max-lg:text-3xl lg:text-5xl font-semibold text-gray-800 mb-6"
            >
              <span className=" max-lg:text-3xl lg:text-5xl font-semibold text-cyan-950 mb-6">
                Reach Out to Our Team With Your Concerns
              </span>
            </Heading>
            <p className="text-lg max-w-2xl mx-auto">
              We are here to help you! Fill out the form below or contact us
              through our email or phone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-12">
        <motion.div
          className="container mx-auto max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInVariants} // Animate form entry
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-8 shadow-lg rounded-lg"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Additional contact information section */}
      <section className="py-16 bg-gray-50">
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants} // Animate contact information
        >
          <Heading
            as="h2"
            className="text-2xl font-semibold text-gray-800 mb-8"
          >
            Contact Information
          </Heading>
          <p className="text-lg text-gray-600 mb-4">
            You can also reach us through the following contact details:
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@fgbuilders.com">support@fgbuilders.com</a>
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> 0200877944
            </p>
            <p className="text-lg">
              <strong>Address:</strong> Adenta Housing Down, Accra, Ghana
            </p>
          </div>
        </motion.div>
      </section>

      {/* Google Maps Embed section */}
      <section>
        <motion.div
          className="w-full h-full mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants} // Animate map entry
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7940.070011048742!2d-0.15374995535537767!3d5.708082177095155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf838f2079ac43%3A0xef75f9536e2c9d61!2sAdenta%20Housing%20Down%20Container!5e0!3m2!1sen!2sgh!4v1728817842830!5m2!1sen!2sgh"
            width="2000"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, width: "100%" }}
          ></iframe>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
