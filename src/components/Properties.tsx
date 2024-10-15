"use client";

import React from "react";
import { listingsData } from "../data/listingsData";// Assuming the listingsData is exported from a separate file
import { Footer, Header } from "./component-expo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import { icons } from "../icons/icons";

const Properties:React.FC = () => {
  // Framer Motion variants for fade-in effect
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and slide up
  };

  return (
    <div className="bg-orange-50">
      <Header />

      <motion.div
        className="container mx-auto py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} // Set to animate every time it comes into view
        variants={fadeInVariants} // Heading animation
      >
        <h1 className="text-4xl font-bold text-center mb-8">
          Available Properties
        </h1>

        {/* Listing all properties */}
        <div className="space-y-10">
          {listingsData.map((listing, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-md rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }} // Animate every time it enters the view
              variants={fadeInVariants} // Apply the animation to each property card
            >
              {/* Property Image */}
              <div className="lg:w-1/2 w-full">
                <img
                  src={listing.productImage}
                  alt={listing.productName}
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>

              {/* Property Details */}
              <div className="lg:w-1/2 w-full p-6 lg:pl-10 space-y-4 text-left">
                <h2 className="text-2xl font-bold text-gray-800">
                  {listing.productName}
                </h2>
                <div className="flex gap-3">
                  <button>{icons.dollarSign}</button>
                  <p className="text-xl text-gray-700">
                    {listing.productPrice}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button>{icons.location}</button>
                  <p className="text-lg text-gray-600">
                    {listing.productLocation}
                  </p>
                </div>
                <p className="text-gray-600">{listing.productDetail}</p>
                <Link to={`/listings/${listing.productId}`}>
                  <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Properties;
