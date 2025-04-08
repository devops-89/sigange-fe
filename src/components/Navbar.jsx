import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const cityGroups = {
  left: ["SURREY", "CLOVERDALE", "ABBOTSFORD"],
  right: ["EDMONTON", "CALGARY"],
};

const Navbar = ({ type }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <nav className="bg-transparent text-white py-4">
      <ul
        className={`flex flex-col justify-center items-start space-y-6 ${
          type === "right" ? "pl-4 sm:items-end sm:pr-10" : "pl-10"
        }`}
      >
        {cityGroups[type]?.map((city, index) => (
          <li
            key={index}
            className="relative group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h1 className="stroke-current text-6xl font-bold text-gray-600 group-hover:text-orange-700/50 group-hover:scale-125 transition-all duration-600 ease-in-out">
              &nbsp;
            </h1>
            <Link
              href={`/citypage/${city}`}
              className={`absolute inset-10 text-3xl font-bold group-hover:text-orange-500 leading-4 group-hover:translate-x-3.5 transition-all duration-600 ease-in-out ${
                type === "right" ? "text-right" : "text-left"
              }`}
            >
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
