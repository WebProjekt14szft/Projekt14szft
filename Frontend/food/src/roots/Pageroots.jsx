import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../page/About";
import Contact from "../page/Contact";
import Home from "../page/Home";
import Services from "../page/Services";

const Pageroots = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/contact" element={<Services />} />
      </Routes>
    </section>
  );
};

export default Pageroots;
