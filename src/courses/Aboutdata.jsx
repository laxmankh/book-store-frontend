import React from "react";
import Navabar from "../components/Navabar";
import Footer from "../components/Footer";
import AboutUs from "../components/About";

const Aboutdata = () => {
  return (
    <div>
      <Navabar />
      <div className="min-h-screen">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default Aboutdata;
