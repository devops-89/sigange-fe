import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import TempServices from "./TempServices";

const servicesData = [
  { title: "LED Signs", desc: "Bright, energy-efficient signage for your business." },
  { title: "Channel Letters", desc: "Custom 3D letters to enhance your storefront." },
  { title: "Pylon Signs", desc: "High-visibility signs for maximum brand exposure." },
  { title: "Neon Signs", desc: "Classic neon signs with a modern twist." },
  { title: "Vehicle Wraps", desc: "Turn your vehicle into a moving billboard." },
  { title: "Monument Signs", desc: "Elegant, ground-level signage for a professional look." },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation duration
      once: true, // Only animate once
      easing: "ease-in-out", // Smoother easing
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto text-center px-6 py-12">
     
    
    

     

      <h1 
        data-aos="fade-up" 
        data-aos-delay="200"
        className="text-5xl md:text-6xl font-bold text-white mt-6"
      >
        Let’s <span className="text-orange-500">ILLUMINATE</span> Your Sign
      </h1>

      {/* Dynamic Grid for Services */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <TempServices/>
      </div>
      
    </div>
  );
};

export default Services;
