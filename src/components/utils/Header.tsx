"use client";
import React, { useState } from "react";
import { navData } from "../../data/navData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { headerStyles } from "../../styles/headerStyles";
import { icons } from "../../icons/icons";
import { Container } from "@radix-ui/themes";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleHeaderState = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMobile(!isMobile);
  };

  return (
    <div className="relative">
      {/* Main header component */}
      <motion.div className="w-full h-full sticky top-0">
        <Container>
          <div className="flex">
            {/* Header container with flex layout */}
            <div
              className={`${
                isMobile
                  ? headerStyles.minScreenContainerStyles
                  : headerStyles.containerStyles
              } `}
            >
              {/* Company logo */}
              <div>
                <Link to="/">
                  <img
                    src="/company-logo.jpg"
                    alt="An img of the company logo of FG Builders"
                    width={150}
                    height={150}
                    className={`max-lg:hidden`}
                  />
                </Link>
              </div>
              {/* Header navigation links */}
              <div className={` ${headerStyles.headerImageContainer}`}>
                <motion.div
                  transition={{ ease: "linear", duration: 0.5 }}
                  animate={{ y: isMobile ? 0 : "-100%" }}
                  initial={{ y: "-100%" }}
                >
                  <Link to="/">
                    <img
                      src="/company-logo.jpg"
                      alt="An img of the company logo of FG Builders"
                      width={150}
                      height={150}
                      className={`lg:hidden`}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  transition={{
                    ease: "easeIn",
                    duration: 0.5,
                  }}
                  animate={{ y: isMobile ? 0 : "0%" }}
                  initial={{ y: 0 }}
                  className={`${
                    isMobile
                      ? headerStyles.minScreenNavLinkStylesContainer
                      : headerStyles.navLinkStylesContainer
                  }`}
                >
                  {navData.map((nav) => (
                    <div
                      key={nav.title}
                      className={`${headerStyles.navTextContainer}`}
                    >
                      <Link to={nav.link}>
                        <div className="flex gap-2 hover:text-blue-500">
                          <p className={`${headerStyles.navText}`}>
                            {nav.title}
                          </p>
                          <button>{nav.icon}</button>
                        </div>
                      </Link>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/*bars icon to display on small screens*/}
            <motion.div className="lg:hidden justify-end right-10 top-0 flex p-10 ">
              {/* Adjusted positioning context */}
              {/* Added relative positioning */}
              {isMobile ? (
                <button onClick={toggleHeaderState} className="text-red-500">
                  {icons.crossIcon}
                </button>
              ) : (
                <button onClick={toggleHeaderState} className="text-green-500">
                  {icons.barsIcon}
                </button>
              )}
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Header;
