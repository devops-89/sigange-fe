import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  {
    src: "/homepage/gallery/image1.jpeg",
    category: "people",
    title: "Choice of India Signage by Edmonton Sign Company, AB",
  },
  {
    src: "/homepage/gallery/image2.jpeg",
    category: "product",
    title: "CUSTOM CHANNEL LETTER NAMASTE INDIA BY EDMONTON SIGNS, AB",
  },
  {
    src: "/homepage/gallery/image3.jpeg",
    category: "product",
    title: "LOCAL SIGN SHOP THE BROKIN YOLK IN EDMONTON, AB",
  },
  {
    src: "/homepage/gallery/image4.jpeg",
    category: "",
    title: "BUSINESS TAMARACK MEDICAL CLINIC BY EDMONTON SIGN, AB",
  },
  {
    src: "/homepage/gallery/image5.jpeg",
    category: "",
    title: "COMMERCIAL CHANNEL LETTER BY EDMONTON SIGN, AB",
  },
  {
    src: "/homepage/gallery/image6.jpeg",
    category: "product",
    title: "CUSTOM OLYMPIA LIQUOR CHANNEL LETTER BY EDMONTON SIGNS, AB",
  },
  {
    src: "/homepage/gallery/image7.jpeg",
    category: "",
    title: "CUSTOM BUCK OR TWO STOREFRONT SIGN BY EDMONTON SIGNS, AB ",
  },
  {
    src: "/homepage/gallery/image8.jpeg",
    category: "weddings",
    title: "COMMERCIAL STOREFRONT PHARMACY BY EDMONTON SIGNS COMPANY, AB  ",
  },
  {
    src: "/homepage/gallery/image9.jpeg",
    category: "COMMERCIAL BUSINESS DAYCARE & OSC BY EDMONTON SIGNS, AB ",
    title: "COMMERCIAL BUSINESS DAYCARE & OSC BY EDMONTON SIGNS, AB ",
  },
  {
    src: "/homepage/gallery/image10.jpeg",
    category: "weddings",
    title: "COMMERCIAL SUPERCLIPS STOREFRONT SIGNAGE BY EDMONTON SIGNS, AB ",
  },
  {
    src: "/homepage/gallery/image11.jpeg",
    category: "weddings",
    title: "BUSINESS SIGNAGE BY EDMONTON SIGNS, AB ",
  },
  {
    src: "/homepage/gallery/image12.jpeg",
    category: "people",
    title: "EPIC RED BUSINESS SIGNAGE BY EDMONTON SIGNS COMPANY, AB ",
  },
  {
    src: "/homepage/gallery/image13.jpeg",
    category: "weddings",
    title: "COMMERCIAL SWEET $ SASSY SIGNAGE BY EDMONTON SIGNS, AB",
  },
  {
    src: "/homepage/gallery/image14.jpeg",
    category: "realstate",
    title: "CUSTOM ECONO LIQUOR BUSINESS BY SIGN COMPANY EDMONTON, AB",
  },
  {
    src: "/homepage/gallery/image15.jpeg",
    category: "weddings",
    title: "COMMERCIAL SUBWAY SIGNAGE BY EDMONTON SIGNS COMPANY, AB",
  },
  
];

export default function SignageGallery() {
  const [selectedFilter, setSelectedFilter] = useState("*");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    AOS.init({ duration: 1000, mirror:true });
  }, []);

  const filteredImages =
    selectedFilter === "*"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  return (
    <section  className="py-20 md:px-20" id="gallery">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <div className="flex justify-center flex-wrap mb-8">
          <h1
            data-aos="fade-up"
            className=" text-xl md:text-3xl font-bold uppercase text-gray-900  mx-auto"
           
          >
            Check Out Our Gallery to Find the Best Signage Design for Your Next Project
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer group relative overflow-hidden shadow-md"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img.src}
                alt={img.title || "Portfolio Image"}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-none bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {img.title && (
                  <span className="text-white text-lg font-medium px-2 text-center">
                    {img.title}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <Lightbox
          mainSrc={filteredImages[lightboxIndex].src}
          nextSrc={
            filteredImages[(lightboxIndex + 1) % filteredImages.length].src
          }
          prevSrc={
            filteredImages[
              (lightboxIndex + filteredImages.length - 1) % filteredImages.length
            ].src
          }
          onCloseRequest={() => setLightboxIndex(-1)}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + filteredImages.length - 1) % filteredImages.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
          }
        />
      )}
    </section>
  );
}