import HeroSlider from '@/components/HeroSlider';

import React from 'react';
import ExpertMediaAgency from '@/components/ExpertMediaAgency';
import { useRouter } from 'next/router';
import CityNavbar from '@/components/CityNavbar';
import OurServices from '@/components/our-services';

import AboutSection from '@/components/AboutSection';

import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { OurProducts } from '@/components/ui/our-products';
import ContactUs from '@/components/ContactUs';



const CityPage = () => {

  const router=useRouter();

  

  const testimonialsData = [
    {
      name: "CHANNEL LETTERS",
      designation: "CEO, Tech Innovations",
      quote: "Attractive outdoor signs for all businesses - Outshine your competition with large 3D sign letters.",
      src: "/products/product2.jpg", 
    },
    {
      name: "INDOOR SIGNS",
      designation: "Marketing Head, Creative Agency",
      quote: "Improve customer experience and make your premises safer with professional indoor signs. Mega Signs is the one stop show for all your indoor signage needs in Edmonton",
      src: "/products/product3.png",
    },
    {
      name: "PYLON SIGNS",
      designation: "Founder, Startup Hub",
      quote: "Grow brand awareness generate leads from afar and became a local landmark with signage that towers above the competition",
      src: "/products/product1.jpg",
    },
    {
      name: "VEHICLES WRAPS",
      designation: "CTO, FinTech Corp",
      quote: "Branded vehicles are one of the most effective ways of growing your brand make an impact in your community with custom vehicles wraps for your commeercial vehicles",
      src: "/products/product4.jpg",
    },
  ];
  
  
  return (
    <>
       <CityNavbar/>
       <HeroSlider cityName={router.query.slug}/>
       <AboutSection/>
      
       
        <OurServices />
        <OurProducts testimonials={testimonialsData} autoplay={true} />
    
       <ExpertMediaAgency />
      
       <Testimonials/> 
       <ContactUs />
         
      <Footer/>
     </>
  )
}

export default CityPage;