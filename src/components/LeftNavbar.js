import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const leftCities = ["SURREY", "CLOVERDALE", "ABBOTSFORD"];

const LeftNavbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <nav className="text-white h-full flex items-start  min-h-[300px]">
      <ul className="flex flex-col justify-center space-y-6  w-full ">
        {leftCities.map((city, index) => (
          <li
            key={city}
            className="group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Link
              href={`/citypage/${city}`}
              className="text-4xl  font-bold group-hover:text-orange-500 transition-all duration-500 ease-in-out"
            >
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftNavbar;
