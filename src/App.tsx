import React from "react";
import { Routes, Route } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import {
  About,
  Contact,
  Home,
  Services,
  Properties,
  Listings,
} from "./components/component-expo";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/listings/:productId" element={<Listings />} />
      </Routes>
    </>
  );
};

export default App;
