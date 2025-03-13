import "./Herosection.css"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import cow1 from "../assets/cow_banner1.jpg"
import cow4 from "../assets/cow3.jpg"
import cow3 from "../assets/cow_grp2.jpg"
import cow2 from "../assets/cow_grp_banner1.jpg"
import { Link, NavLink } from 'react-router-dom'

const Herosection = () => {
  return (
    <div className="w-11/12 mx-auto h-[250px] sm:h-[330px] md:h-[380px] lg:h-[450px] rounded-xl overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {[
          { 
            title: "Welcome to Goshala", 
            desc: "A sacred place where we care for and protect cows with love and devotion." 
          },
          { 
            title: "Support Our Cause", 
            desc: "Your contributions help provide food, shelter, and medical aid to cows in need." 
          },
          { 
            title: "Donate for Cows", 
            desc: "Join our mission to create a compassionate world for these gentle beings." 
          }
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img src={cow1} alt="cow" className="w-full h-full object-cover absolute inset-0" />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent"></div>

              {/* Text Content Box */}
              <div className="absolute inset-y-1 right-0 flex items-center justify-end pr-4 sm:pr-8 md:pr-16 lg:pr-24">
                <div className=" text-white max-w-xs sm:max-w-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">{slide.title}</h1>
                  <p className="mt-2 w-56 pb-4 sm:mt-3 md:mt-4 md:w-full text-xs sm:text-sm md:text-lg opacity-90">{slide.desc}</p>
                  <div className="mt-3 sm:mt-4">
                    <Link to="/donate" className="bg-amber-400 text-sm sm:text-md md:text-lg font-semibold py-2 px-4 sm:px-6 rounded-3xl shadow-md hover:bg-amber-500 transition">
                      DONATE NOW
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Herosection;