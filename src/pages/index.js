'use client';
import { useState } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import TempServices from '@/components/TempServices';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import MarqueeText from '@/components/MarqueeText';
import HomepageFooter from '@/components/HomepageFooter';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/background.mp4"
      />

      {/* Page Content */}
      <div className="flex h-screen flex-col sm:p-0">
        {/* Header */}
        <div className="flex  items-center md:pt-10 md:pl-48 sm:px-10">
          <Link href="/">
            <img src="/logo.webp" className="w-[140px]" alt="Logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-30 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoMdClose className="text-[30px] text-white" />
            ) : (
              <div className="flex flex-col gap-[4px]">
                <div className="w-6 h-1 bg-white" />
                <div className="w-6 h-1 bg-white" />
                <div className="w-6 h-1 bg-white" />
              </div>
            )}
          </button>
        </div>

        {/* Services + Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-4  sm:mt-12 h-auto sm:h-[80vh]">
          {/* TempServices */}
          <div className="w-full sm:w-auto">
            <TempServices />
          </div>

          {/* Navbar */}
          <div
            className={`w-full sm:w-[350px] border-t sm:border-t-0 sm:border-l border-white pt-6 sm:pt-0 pl-0 sm:pl-6 transition-all duration-300 ${
              menuOpen ? 'block' : 'hidden sm:block'
            }`}
          >
            <Navbar />
          </div>
        </div>

        {/* Marquee Text */}
        <div className="mt-10">
          <MarqueeText />
        </div>
      </div>

      {/* Footer */}
      <HomepageFooter />
    </div>
  );
}
