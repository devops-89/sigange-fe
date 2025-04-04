import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Link from "next/link";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
      easing: "ease-in-out", // Smooth transition
    });
  }, []);

  return (
    <nav className="bg-transparent text-white py-4">
      <ul className="flex flex-col justify-center items-start space-y-6 pl-10">
        
        {/* Menu Items with Hover Effects */}
        {[
          { id: "01", name: "SURREY" },
          { id: "02", name: "CLOVERDALE" },
          { id: "03", name: "ABBOTSFORD" },
          { id: "04", name: "EDMONTON" },  
          { id: "05", name: "CALGARY" },
        ].map((item, index) => (
          <li 
            key={index} 
            className="relative group   cursor-pointer" 
            data-aos="fade-up"
            data-aos-delay={index * 100} 
          >
            <h1 className="stroke-current text-7xl font-bold text-gray-600 group-hover:text-orange-700/50 group-hover:scale-125  transition-all duration-600 ease-in-out">
              {item.id}
            </h1>
            <Link
              href={`/citypage/${item.name}`}
              className="absolute inset-10 text-3xl font-bold group-hover:text-orange-500 leading-4 group-hover:translate-x-3.5 transition-all duration-600 ease-in-out"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
