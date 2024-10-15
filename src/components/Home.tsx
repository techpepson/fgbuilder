"use client";

import React, { useState } from "react";
import { icons } from "../icons/icons";
import { listingsData } from "../data/listingsData";
import { collaborators } from "../data/collaboratorsData";
import { Footer, Header } from "./component-expo";
import background from "../styles/homePage.module.css";
import { homeStyles } from "../styles/homeStyles";
import { tower } from "../images/image-export";
import { Heading } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const Home: React.FC = () => {
  // State definition for indexing listing images
  const [index, setIndex] = useState<number>(0);

  const increaseIndex = () => {
    setIndex((prev) => (prev + 1) % (listingsData.length - 2));
  };
  const decreaseIndex = () => {
    setIndex(
      (prev) =>
        (prev - 1 + (listingsData.length - 2)) % (listingsData.length - 2)
    );
  };

  // Framer motion variants for animations
  const imageVariants = {
    hidden: { opacity: 0, x: -100 }, // Start offscreen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Animate to visible
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 }, // Start offscreen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Animate to visible
  };

  return (
    <div className="relative overflow-hidden">
      {/* The home container */}
      <div className={``}>
        <Header />
        {/* Container for the top section */}
        <section>
          <div
            className={`${background.homeBackground} ${homeStyles.homeTopSection} `}
          >
            <motion.div
              className={`${homeStyles.absoluteImageContainer}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }} // Ensure the animation only runs once when in view
              variants={imageVariants} // Apply image animation variants
            >
              <img
                src={tower}
                alt="An img of tower"
                className="w-full h-full rounded-md"
              />
            </motion.div>
            <div className={`${background.background}`}></div>
            {/* Content container */}
            <motion.div
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }} // Animate only when in view
              variants={textVariants} // Apply text animation variants
            >
              <Heading className={`${homeStyles.headingStyles}`}>
                <span className={`${homeStyles.headingStyles}`}>
                  Finding your Dream Home
                </span>
              </Heading>
              <p className={`${homeStyles.textStyles} `}>
                FG BUILDERS is a renowned construction company headquartered in
                Accra, Ghana. With a strong commitment to quality, innovation,
                and sustainability, we have established ourselves as a leading
                player in the Ghanaian construction industry.
              </p>
              {/* Location icon and texts */}
              <div className={`${homeStyles.flexPosition} max-lg:text-white`}>
                <button>{icons.location}</button>
                <p>Accra, Ghana.</p>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Listings section */}
        <section className="mt-16 px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex justify-between items-center">
              <Heading className="text-2xl font-semibold">
                Current Listings
              </Heading>
              <div className="flex space-x-4 items-center">
                <button className="text-xl" onClick={decreaseIndex}>
                  {icons.arrowLongLeft}
                </button>
                <button className="text-xl" onClick={increaseIndex}>
                  {icons.arrowLongRight}
                </button>
              </div>
            </div>

            {/* Listings Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {listingsData.slice(index, index + 3).map((listing) => (
                <Link
                  to={`/listings/${listing.productId}`}
                  key={listing.productId}
                >
                  <motion.div
                    key={listing.productId}
                    className="space-y-3 shadow-lg rounded-lg overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageVariants} // Apply image animation
                  >
                    <img
                      src={listing.productImage}
                      alt={listing.productName}
                      className="w-full h-60 object-cover hover:scale-110 transition-all duration-75 transform"
                    />
                    <motion.div
                      className="p-4 space-y-2"
                      variants={textVariants}
                    >
                      <h3 className="font-semibold text-lg">
                        {listing.productName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {listing.productPrice}
                      </p>
                      <p className="text-sm">{listing.productDescription}</p>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4">
              <Link to="/properties">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  Show All
                </button>
              </Link>
              <p className="text-gray-600">
                Showing {index + 3} of {listingsData.length} items
              </p>
            </div>
          </div>
        </section>
        {/* Collaborators section */}
        <section className="bg-gray-100 py-16 mt-16">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <Heading className="text-2xl font-semibold">
              Our Valued Collaborators and Friends Over The Decade
            </Heading>
            <div className="flex justify-center items-center flex-wrap gap-8">
              {collaborators.map((collaborator, index) => (
                <motion.div
                  key={index}
                  className="h-24 w-24 p-2 bg-white rounded-md shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={imageVariants}
                >
                  <img
                    src={collaborator.collaboratorImage}
                    alt={collaborator.collaboratorName}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sellers Assurance section */}
        <section>
          <motion.div
            className="p-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={textVariants}
          >
            <Heading>Sellers Assurance Program</Heading>
            <p>
              Sell with FG Builders and get amazing benefits like home
              improvements at no upfront cost and new technology to help find
              worthy buyers.
            </p>
          </motion.div>
        </section>

        {/* Instant Estimate section */}
        <section className="py-16 bg-slate-950 bg-opacity-75 text-white">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-5 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={textVariants}
          >
            <Heading className="text-3xl font-bold">
              Get an Instant Estimate on Your Home
            </Heading>
            <p className="text-lg">
              Learn your property value so you can tackle the real estate market
              with confidence.
            </p>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
