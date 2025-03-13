import React from 'react'
import Layout from '../component/Layout/Layout'
import { motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

const Gallery = () => {
  return (
  <Layout>
    <div className="bg-yellow-50 min-h-screen py-16 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Goshala Gallery</h1>
        <p className="text-lg text-gray-600">
          Explore beautiful moments captured at our Goshala.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </Layout>
  )
}

export default Gallery