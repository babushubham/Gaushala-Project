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
    <div className="w-3/4 mx-auto h-[370px]  ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="w-full h-full rounded-xl "
      >
        <SwiperSlide>
          <div className="h-full  w-full mx-auto flex justify-center ">
            <div className='w-full h-full mx-auto'><img src={cow1} alt="cow2" className="  object-contain" /></div>
            <div className="img-text absolute right-0 w-2/3 h-full">
            <div className="flex flex-col items-center justify-center gap-10 my-20 ml-40"><h1 className="  text-white text-center text-4xl  font-bold">Welcome to Goshala</h1>
            <div className='w-28 h-10 rounded-3xl text-xl font-semibold  flex items-center justify-center  bg-amber-300'><Link to="/donate">DONATE</Link></div></div>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full  w-full mx-auto flex justify-center ">
            <div className='w-full h-full mx-auto'><img src={cow1} alt="cow2" className="  object-contain" /></div>
            <div className="img-text absolute right-0 w-2/3 h-full">
            <div className="flex flex-col items-center justify-center gap-10 my-20 ml-40"><h1 className="  text-white text-center text-4xl  font-bold">Support Our Cause</h1>
            <div className='w-28 h-10 rounded-3xl text-xl font-semibold  flex items-center justify-center  bg-amber-300'><Link to="/donate">DONATE</Link></div></div>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full  w-full mx-auto flex justify-center ">
            <div className='w-full h-full mx-auto'><img src={cow1} alt="cow2" className="  object-contain" /></div>
            <div className="img-text absolute right-0 w-2/3 h-full">
            <div className="flex flex-col items-center justify-center gap-10 my-20 ml-40"><h1 className="  text-white text-center text-4xl  font-bold">Donate for Cows</h1>
            <div className='w-28 h-10 rounded-3xl text-xl font-semibold  flex items-center justify-center  bg-amber-300'><Link to="/donate">DONATE</Link></div></div>
            </div>
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Herosection