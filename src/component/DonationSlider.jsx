import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import cow1 from "../assets/cow1.jpg"
import cow2 from "../assets/cow3.jpg"
import cow3 from "../assets/cow_grp2.jpg"
import cow4 from "../assets/cow_grp1.jpg"

const donationItems = [
  { id: 1, title: "Cow Feed", amount: "₹500", img: cow1 },
  { id: 2, title: "Medical Care", amount: "₹1000", img: cow2 },
  { id: 3, title: "Shelter Maintenance", amount: "₹2000", img: cow3},
  { id: 4, title: "Water Supply", amount: "₹800", img: cow4 },
];

const DonationSlider = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-yellow-50">
      <p className="text-3xl font-bold text-gray-800 text-center  p-8">
        Support Our Cause
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="max-w-6xl mx-auto p-4"
      >
        {donationItems.map((item) => (
          <SwiperSlide key={item.id} >
            <div className="bg-white rounded-xl  shadow-md overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-yellow-600 font-bold text-lg">{item.amount}</p>
                <Link href="/donate">
                  <button className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DonationSlider;