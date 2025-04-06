'use client';

import { useEffect, useState } from 'react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TABS = [
  {
    title: 'INDOOR SIGNS',
    icon: 'linearicons-mustache',
    heading: 'INDOOR SIGNS',
    text:"Improve Customer experience and make your premises safer with professional indoor signs. Mega Signs is the one stop shop for all your Indoor Signage.",
    image: '/homepage/services/indoor.png',
  },
  {
    title: 'VEHICLE WRAPS',
    icon: 'linearicons-heart',
    heading: 'VEHICLE WRAPS',
    text: "Branded Vehicles are one of the most effective ways of growing your brand. Make an impact in your community with custom vehicle wraps for your commercial vehicles.",
    image: '/homepage/services/vehiclewraps2.jpg',
  },
  {
    title: 'PRINT MEDIA',
    icon: 'linearicons-shirt',
    heading: 'PRINT MEDIA',
    text: "Make your brand unforgettable with high-quality print materials. From brochures and flyers to business cards and banners, we bring your vision to life with vibrant colors and professional finishes that leave a lasting impression.",
    image: '/homepage/services/printmedia1.jpg',
  },
  {
    title: 'OUTDOOR SIGNS',
    icon: 'linearicons-couch',
    heading: 'OUTDOOR SIGNS',
    text: "Improve Customer experience and make your premises safer with professional indoor signs. Mega Signs is the one stop shop for all your Indoor Signage.",
    image: '/homepage/services/outdoorsigns.jpg',
  },
  {
    title: 'CHANNEL LETTERS',
    icon: 'linearicons-couch',
    heading: 'CHANNEL LETTERS',
    text: "Attractive Outdoor Signs for all Businesses- Outshine Your Competition with Large 3D Sign Letters.",
    image: '/homepage/services/channelletter.jpg',
  },
  {
    title: 'PYLON SIGNS',
    icon: 'linearicons-couch',
    heading: 'PYLON SIGNS',
    text: "Grow Brand Awareness, generate leads from afar and become a local landmark with signage that towers above the competition.",
    image: '/homepage/services/pylonsigns.jpg',
  },
];



export default function AnimatedTabsSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handleTabClick = (index) => {
    if (index === activeTab) return;
    setAnimate(false);
    setTimeout(() => {
      setActiveTab(index);
      setAnimate(true);
    }, 100);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % TABS.length);
        setAnimate(true);
        AOS.refresh();
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#101010] py-20 md:px-[30px]" id="service">
      <div className="flex flex-col md:flex-row container mx-auto px-4 md:px-20 ">
        {/* Tabs list */}
        <div className="flex overflow-x-auto items-start flex-col md:pl-24 gap-2 md:gap-4 mb-6 md:mb-0 md:w-1/3 w-full ">
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleTabClick(i)}
              className={` gap-2 px-2  py-2 border-l-4 transition-all whitespace-nowrap  ${
                activeTab === i
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-white hover:text-orange-400'
              }`}
            >
              <i className={`fa ${tab.icon} text-lg`} />
              <span
                className="text-lg md:text-2xl font-bold uppercase text-transparent bg-clip-text"
                style={{
                  WebkitTextStroke: '1px #FF6900',
                  color: 'transparent',
                }}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        {/* Content - Centered Grid */}
        <div className="relative w-full md:w-2/3 h-auto flex justify-center">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full transform transition-transform duration-900 ease-out ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Text */}
            <div data-aos="fade-right" className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {TABS[activeTab].heading}
              </h2>
              <p>{TABS[activeTab].text}</p>
            </div>

            {/* Image */}
            {TABS[activeTab].image && (
              <div data-aos="fade-left">
                <img
                  src={TABS[activeTab].image}
                  alt={TABS[activeTab].heading}
                  className="shadow-lg w-full h-[200px] md:h-[360px] object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
