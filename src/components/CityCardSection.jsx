"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const placesData = [
  {
    name: "SURREY",
    desc: "An iconic landmark of Paris offering panoramic city views.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    icon: "icofont-building-alt",
  },
  {
    name: "CLOVERDALE",
    desc: "World’s largest art museum, home to the Mona Lisa.",
    image: "/homepage/citycard/cloverdale.webp",
    icon: "icofont-paint",
  },
  {
    name: "ABBOTSFORD",
    desc: "A stunning Gothic cathedral with historical significance.",
    image: "homepage/citycard/abbotsford.jpeg",
    icon: "icofont-church",
  },
  {
    name: "EDMONTON",
    desc: "A stunning Gothic cathedral with historical significance.",
    image: "homepage/citycard/edmonton.jpg",
    icon: "icofont-church",
  },
  {
    name: "CALGARY",
    desc: "A stunning Gothic cathedral with historical significance.",
    image: "homepage/citycard/calgary.jpg",
    icon: "icofont-church",
  },
];

const CityPlacesSection = () => {
  return (
    <section
      className="w-full py-20 md:px-20  bg-cover bg-center"
      style={{ backgroundImage: "url('/homepage/citysection/background.jpg')" }}
      id="cities"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-start px-4">
      {/* Left Side - Static Content */}
<div className="lg:w-1/3 space-y-6">
  <h2 className="text-lg font-semibold text-orange-500">Jassal Signs Services</h2>
  <h3 className="text-4xl font-bold text-white uppercase leading-tight">
    We Light Up Cities <br /> With Signs That Speak
  </h3>
  <img
    src="https://themexbd.com/poket/restaurant/wp-content/uploads/2021/11/title-thmub2.png"
    alt="Decor"
    className="w-20"
  />
  <p className="text-white">
    From Surrey to Edmonton, Jassal Signs proudly serves businesses across Canada’s most vibrant cities. Eye-catching signage, bold branding, and expert installation — right where you are.
  </p>
  <a
    href="#"
    className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
  >
    View All Locations
  </a>
</div>

        {/* Right Side - Swiper Slider */}
        <div className="lg:w-2/3 h-[400px]  w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {placesData.map((place, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg  overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <div className="text-blue-600 text-2xl mb-2">
                      <i className={`icofont ${place.icon}`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      <a href="#">{place.name}</a>
                    </h3>
                    <p className="text-gray-600 text-sm">{place.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CityPlacesSection;