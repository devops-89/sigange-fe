"use client";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TempServices from "@/components/TempServices";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full text-white">
      
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/background.mp4"
      />

      {/* Content Wrapper */}
      <div className="flex items-center justify-center flex-col min-h-screen p-4 sm:p-0">
        
        {/* Logo */}
        <div className="w-full flex justify-between items-center pl-4 sm:pl-10">
          <Link href="/">
            <img src="/logo.webp" className="w-[140px]" alt="Logo" />
          </Link>

          {/* Mobile Menu Toggle Button */}
        
          {/* Mobile Menu Button */}
                 <button className="md:hidden z-30 focus:outline-none"  onClick={() => setMenuOpen(!menuOpen)}>
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
        </div>

        {/* Navigation & Services */}
        <div className="w-full mt-6">
          <div className="text-white flex  flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
            
          

            {/* Services */}
            <div className="w-full sm:w-auto">
              <TempServices/>
            </div>

              {/* Navbar (Hidden on Mobile, Toggleable) */}
              <div
              className={`border-r-0 sm:border-l-2 sm:w-[350px] w-full sm:max-w-[350px] ${
                menuOpen ? "block" : "hidden sm:block"
              }`}
            >
              <Navbar />
            </div>

          </div>
        </div>

      </div>
    
    </div>
  );
}
