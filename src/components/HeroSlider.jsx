import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const slide = {
  image: "/slider/slider-image1.jpg",
  title: "JASSAL SIGNS SIGNAGE SERVICES",
};

const locations = ["SURREY", "CLOVERDALE", "ABBOTSFORD", "EDMINTON", "CALGARY"];

const HeroSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);

  return (
    <section className="w-full h-[78vh] xs:h-[60vh] md:h-[100vh] overflow-hidden" id="home">
      <div className="relative w-full h-full group">
        {/* Zooming Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-100 group-hover:scale-105 transition-transform duration-[6000ms] ease-out will-change-transform"
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[#1703375f]"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex items-center h-full">
          <div className="max-w-5xl text-white" data-aos="fade-up" data-aos-delay="300">
            <p className="text-lg uppercase tracking-widest font-medium text-orange-400 mb-2 text-center lg:ml-20 lg:text-left">
              We Bring Brands To Life
            </p>
            <h1 className="text-4xl leading-[3rem] text-center md:text-left font-extrabold lg:ml-20 lg:text-7xl lg:leading-[6.5rem]">
              {slide.title} 
            </h1>

            {/* City Links */}
            <div
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 lg:ml-20"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {locations.map((city, idx) => (
                <Link key={idx} href={`/citypage/${city.toLowerCase()}`}>
                  <span
                    className="text-2xl py-3 font-semibold uppercase text-transparent bg-clip-text hover:scale-110 transition-transform duration-300"
                    style={{
                      WebkitTextStroke: "1px #FF6900",
                      color: "transparent",
                    }}
                  >
                    {city}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
