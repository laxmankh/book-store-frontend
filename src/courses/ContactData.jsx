import React from "react";
import Navabar from "../components/Navabar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactData = () => {
  return (
    <div>
      <Navabar />
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactData;
