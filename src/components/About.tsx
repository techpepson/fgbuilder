"use client";

import React from "react";
import { Footer, Header } from "./component-expo";
import { listing1, whiteBuilding, ceo, director } from "../images/image-export";
import { motion } from "framer-motion"; // Import Framer Motion
import { Heading } from "@radix-ui/themes";

const About: React.FC = () => {
  // Framer Motion variants for fade-in effect
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and slide up
  };

  return (
    <>
      <Header />

      <div className="py-10">
        {/* Introduction Section */}
        <motion.section
          className="container mx-auto text-center mb-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Animate every time it enters the viewport
          variants={fadeInVariants}
        >
          <h1 className="text-4xl font-bold mb-5">
            Ghana&apos;s Leading Construction Company
          </h1>
          <p className="text-lg text-gray-700">
            FG BUILDERS is a renowned construction company headquartered in
            Accra, Ghana. With a strong commitment to quality, innovation, and
            sustainability, we have established ourselves as a leading player in
            the Ghanaian construction industry.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left bg-gray-100 py-10 mb-10 gap-8 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInVariants}
        >
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold mb-5">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To deliver exceptional construction projects that exceed client
              expectations, contribute to the growth of Ghana&apos;s
              infrastructure, and foster a sustainable built environment.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={listing1}
              alt="Luxury homes in Ghana"
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          className="container mx-auto text-center py-10 bg-gray-100 mb-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Animate every time it enters the viewport
          variants={{
            hidden: { opacity: 0, y: 50 }, // Start invisible and below
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and slide up
          }}
        >
          <h2 className="text-3xl font-bold mb-5">Our Values</h2>
          <ul className="list-none flex flex-col text-left max-w-2xl mx-auto text-gray-700 space-y-4">
            <li>
              <Heading className="text-lg font-semibold">Integrity</Heading> We
              uphold the highest ethical standards in all our dealings.
            </li>
            <li>
              <Heading className="text-lg font-semibold">Quality</Heading> We
              strive for excellence in every aspect of our projects.
            </li>
            <li>
              <Heading className="text-lg font-semibold">Innovation</Heading> We
              embrace new technologies and approaches to deliver innovative
              solutions.
            </li>
            <li>
              <Heading className="text-lg font-semibold">
                Sustainability
              </Heading>{" "}
              We are committed to minimizing our environmental impact and
              promoting sustainable practices.
            </li>
            <li>
              <Heading className="text-lg font-semibold">
                Client Satisfaction
              </Heading>{" "}
              We prioritize the needs and satisfaction of our clients.
            </li>
          </ul>
        </motion.section>

        {/* Our Services Section */}
        <motion.section
          className="container mx-auto text-center py-10 mb-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, y: 50 }, // Start invisible and below
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and slide up
          }}
        >
          <h2 className="text-3xl font-bold mb-5">Our Services</h2>
          <ul className="list-none flex flex-col text-left max-w-2xl mx-auto text-gray-700 space-y-4">
            <li>
              <Heading className="text-lg font-semibold">
                Residential Construction
              </Heading>{" "}
              Building a wide range of residential properties, from luxury homes
              to affordable housing.
            </li>
            <li>
              <Heading className="text-lg font-semibold">
                Commercial Construction
              </Heading>{" "}
              Constructing office buildings, retail spaces, hotels, and other
              commercial facilities.
            </li>
            <li>
              <Heading className="text-lg font-semibold">
                Industrial Construction
              </Heading>{" "}
              Building factories, warehouses, and other industrial
              infrastructure.
            </li>
            <li>
              <Heading className="text-lg font-semibold">
                Infrastructure Development
              </Heading>{" "}
              Developing roads, bridges, airports, and other essential
              infrastructure.
            </li>
            <li>
              <Heading className="text-lg font-semibold">
                Renovations and Remodeling
              </Heading>{" "}
              Revitalizing existing buildings through renovations and remodeling
              projects.
            </li>
          </ul>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="container mx-auto text-center mb-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl font-bold mb-5">Meet Our Team</h2>
          <p className="text-lg text-gray-700 mb-10">
            Our team of experienced professionals is dedicated to guiding you
            through every step of your real estate journey, whether you&apos;re
            buying, selling, or investing in property.
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInVariants}
            >
              <img
                src={ceo}
                alt="CEO of FG Builders"
                className="rounded-md w-96 h-96"
              />
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-md text-gray-600">CEO & Founder</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInVariants}
            >
              <img
                src={director}
                alt="Project Manager of FG Builders"
                className=" h-96 w-96 rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-md text-gray-600">Project Manager</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="container mx-auto text-center py-10 bg-gray-100 mb-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl font-bold mb-5">Why Choose FG Builders?</h2>
          <p className="text-lg mb-5 text-gray-700">
            We provide a range of real estate solutions, from developing luxury
            homes to offering property management services. Here’s why FG
            Builders is the right choice for you:
          </p>
          <ul className="flex flex-col list-none list-inside mx-auto text-left max-w-2xl text-gray-700">
            <li className="mb-3">
              <Heading>
                <span>Experience and Expertise</span>
              </Heading>
              <p>
                Our team of experienced professionals possesses the knowledge
                and skills to deliver successful projects.
              </p>
            </li>
            <li className="mb-3">
              <Heading>
                <span>Quality Craftsmanship</span>
              </Heading>
              <p>
                We are dedicated to providing high-quality workmanship in every
                project we undertake.
              </p>
            </li>
            <li className="mb-3">
              <Heading>
                <span>Timely Delivery </span>
              </Heading>
              <p>
                {" "}
                We consistently meet project deadlines and adhere to strict
                timelines. Competitive Pricing - We offer competitive pricing
                without compromising on quality.{" "}
              </p>
            </li>
            <li className="mb-3">
              <Heading>
                <span>Client Focus</span>
              </Heading>
              <p>
                We prioritize our clients&apos; needs and maintain open
                communication throughout the project.We prioritize our
                clients&aos; needs and maintain open communication throughout
                the project.
              </p>
            </li>
            <li className="mb-3">
              <p>
                FG BUILDERS is a trusted partner for construction projects in
                Ghana. We are committed to delivering exceptional results and
                contributing to the growth and development of the country.
              </p>
            </li>
          </ul>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          className="container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left py-10 px-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInVariants}
        >
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold mb-5">Our Vision</h2>
            <p className="text-lg text-gray-700">
              To be the most trusted and respected construction company in
              Ghana, renowned for our expertise, reliability, and commitment to
              excellence.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={whiteBuilding}
              alt="Modern architecture by FG Builders"
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default About;
