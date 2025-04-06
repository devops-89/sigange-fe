"use client";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import Services from "@/components/Services";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Footer from "@/components/homepage/Footer.jsx";
import TempServices from "@/components/homepage/TempServices";
import SignageGallery from "@/components/homepage/SignageGallery";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/homepage/Navbar";
import OurClients from "@/components/homepage/OurClients";
import CityCardsSection from "@/components/homepage/CityCardSection";
import CounterSection from "@/components/homepage/CounterSection";
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
    <div>
      <Navbar />
      <HeroSlider />
      {/* Counter Section */}
      <CounterSection/>
      {/* TempServices */}
      <TempServices />

      {/* Signage Gallery */}
      <SignageGallery />

      {/* City Card Services */}
      <CityCardsSection />
      {/* our clients */}
      <OurClients />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
