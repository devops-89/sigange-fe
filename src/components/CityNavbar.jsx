"use client";
import { useEffect, useState } from "react";
import CustomButton from "./ui/CustomButton";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
const CityNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolling(window.pageYOffset > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolling ? "bg-black/70 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-30">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.webp" className="w-[140px]" alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-30 focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? (
            <div className="text-white"><IoMdClose className="text-[30px]" /></div>
          ) : (
            <div>
              <div className="w-6 h-1 bg-white mb-1"></div>
              <div className="w-6 h-1 bg-white mb-1"></div>
              <div className="w-6 h-1 bg-white"></div>
            </div>
          )}
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute top-0 left-0 w-full flex item-center justify-center h-screen md:w-auto md:h-auto bg-black text-white md:bg-transparent shadow-md md:shadow-none md:static md:flex md:items-center transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col justify-center items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6 md:p-0 font-medium text-xl">
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#service">
                Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#product">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side Button */}
        <div className="hidden md:flex items-center">
          <Link href="#contact">
            <CustomButton>Contact Us</CustomButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CityNavbar;