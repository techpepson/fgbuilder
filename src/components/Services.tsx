"use client";

import React from "react";
import { motion } from "framer-motion";
import { listing7, sale, listing2, listing3 } from "../images/image-export"; // replace with your actual images
import { Footer, Header } from "./component-expo";

const Services: React.FC = () => {
  return (
    <div className="bg-indigo-100 overflow-hidden">
      <Header />
      <div className="container mx-auto px-4 py-16 bg">
        {/* Service 1: Pre-Construction */}
        <motion.div
          className="service-item flex flex-col lg:flex-row items-center mb-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img
            src={listing7}
            alt="Pre-Construction"
            className="w-full lg:w-1/2 object-cover mb-8 lg:mb-0 lg:mr-8"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Pre-Construction Services
            </h2>
            <p className="text-gray-600">
              We specialize in offering comprehensive pre-construction services.
              Our team works closely with clients to plan and execute the
              perfect design, keeping timelines and budgets in mind. From land
              acquisition to architectural planning, we ensure your project is
              off to the best start.
            </p>
          </div>
        </motion.div>

        {/* Service 2: Ready for Sale Buildings */}
        <motion.div
          className="service-item flex flex-col lg:flex-row-reverse items-center mb-16"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img
            src={sale}
            alt="Ready for Sale Buildings"
            className="w-full lg:w-1/2 object-cover mb-8 lg:mb-0 lg:ml-8"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Ready-for-Sale Buildings
            </h2>
            <p className="text-gray-600">
              We offer a range of completed properties that are ready for
              immediate sale. Whether you’re looking for a modern apartment,
              family home, or commercial space, our portfolio includes
              properties that meet the highest standards of design and
              construction.
            </p>
          </div>
        </motion.div>

        {/* Service 3: Land Sales */}
        <motion.div
          className="service-item flex flex-col lg:flex-row items-center mb-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img
            src={listing2}
            alt="Land Sales"
            className="w-full lg:w-1/2 object-cover mb-8 lg:mb-0 lg:mr-8"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Land Sales</h2>
            <p className="text-gray-600">
              We provide prime land for sale in key locations across the
              country. Whether you’re looking to build your dream home, start a
              commercial venture, or invest in real estate, we have the perfect
              plots to suit your needs.
            </p>
          </div>
        </motion.div>

        {/* Service 4: Other Services */}
        <motion.div
          className="service-item flex flex-col lg:flex-row-reverse items-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img
            src={listing3}
            alt="Other Services"
            className="w-full lg:w-1/2 object-cover mb-8 lg:mb-0 lg:ml-8"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Other Real Estate Services
            </h2>
            <p className="text-gray-600">
              Our company offers a wide range of real estate services beyond
              construction and sales. We handle property management, valuation,
              and advisory services to help you maximize your investment. With
              our experience and network, we offer solutions that meet your
              specific needs.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
