import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    image: "/testimonials/testimonial1.jpg",
    clientImg: "/testimonials/user-1.jpg",
    clientName: "John Doe",
    category: "Inspiration",
    title: "The installation process was incredibly smooth, and the team made everything so easy and efficient. I highly recommend their outstanding service to everyone.",
    link: "https://outmedia.freekytheme.com/tech-gift-ideas-to-help-tackle-your-holiday-shopping-list/",
  },
  {
    image: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/blog-details-d.jpg",
    clientImg: "/testimonials/user-2.jpg",
    clientName: "Bharti Doe",
    category: "Inspiration",
    title: "This was an absolutely amazing signage service. The attention to detail, professionalism, and quality exceeded my expectations in every possible way.",
    link: "https://outmedia.freekytheme.com/get-no-fuss-file-level-crypto-with-fscrypt/",
  },
  {
    image: "https://outmedia.freekytheme.com/wp-content/uploads/2020/09/blog-details-a.jpg",
    clientImg: "/testimonials/user-3.jpg",
    clientName: "David Johnson",
    category: "Technology",
    title: "From start to finish, the installation process was completely hassle-free. The team was very supportive, making it an enjoyable experience overall.",
    link: "https://outmedia.freekytheme.com/be-well-a-few-tips-to-brighten-your-day/",
  },
  {
    image: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/blog-details-f.jpg",
    clientImg: "/testimonials/user-4.jpg",
    clientName: "Emma Brown",
    category: "Technology",
    title: "Their signage service was absolutely fantastic. The quality, communication, and efficiency made this experience far better than I ever imagined possible.",
    link: "https://outmedia.freekytheme.com/arm-pivot-a-step-into-the-reality-distortion-field/",
  },
];

export default function Testimonials() {
  return (
    <section className="md:py-16   pt-20  bg-white mb-[60px] md:mb-0">
      <div className="max-w-6xl mx-auto text-center px-4">
      <div className=" mb-[30px] text-center" data-aos="fade-up">
          <p className="md:text-2xl text-xl text-orange-600 uppercase mb-3">What Our Clients Say</p>
          <h1 className="md:text-6xl text-4xl text-gray-900 font-extrabold">
            TESTIMONIALS<span className="text-orange-600"></span>
          </h1>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={testimonial.link}
                className="block h-80 overflow-hidden shadow-md group"
              >
                {/* Background Image */}
                <div
                  className="h-full bg-cover bg-center bg-gray-700 transition-transform duration-300 parent-testimonial"
                //   style={{ backgroundImage: `url(${testimonial.image})` }}
                >
                  {/* Overlay */}
                  <div className="h-full w-full  flex flex-col justify-end p-10 text-white background-animation">
                    {/* Client Info */}
                    <div className="flex items-center mb-2 relative z-30">
                      <img
                        src={testimonial.clientImg}
                        alt={testimonial.clientName}
                        className="w-12 h-12 rounded-full border-2 border-white mr-3"
                      />
                      <h1 className="text-2xl font-medium">{testimonial.clientName}</h1>
                    </div>
                    
                    <p className="text-medium text-left mb-2 z-30">{testimonial.title}</p>
                  
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
