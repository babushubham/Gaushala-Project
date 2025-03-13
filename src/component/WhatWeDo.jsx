import cowLogo from '../assets/cowLogo.png'
import { motion } from "framer-motion";
import {  Heart, Home, Stethoscope } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Cow Shelter & Care",
    description: "We provide a safe and loving shelter for abandoned and rescued cows, ensuring their well-being.",
    icon: <Home className="w-12 h-12 text-black-400 " />,
  },
  {
    id: 2,
    title: "Food & Nutrition",
    description: "We offer nutritious food to cows daily, ensuring their health and happiness.",
    icon: <img src={cowLogo} alt="Feed Icon" className="w-14 h-13 contrast-200" />,
  },
  {
    id: 3,
    title: "Medical Assistance",
    description: "Our team provides medical care and vaccinations to keep our cows healthy.",
    icon: <Stethoscope className="w-12 h-12 text-black" />,
  },
  {
    id: 4,
    title: "Community Service",
    description: "We promote cow protection awareness and encourage people to contribute to their welfare.",
    icon: <Heart className="w-12 h-12 text-black" />,
  },
];

const WhatWeDo = () => {
  return (
    <div className="bg-yellow-50 py-16 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800">What We Do</h2>
        <p className="text-lg text-gray-600 mt-2">
          Our Goshala is dedicated to protecting and caring for cows with love and compassion.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
