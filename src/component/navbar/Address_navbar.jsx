import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import email from '../../assets/email.png'
import phone from '../../assets/phone-call.png'
import gps from '../../assets/gps.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

const Address_navbar = () => {
  return (
    <div className="w-full bg-orange-500 text-white px-4 sm:px-8 md:px-16 lg:px-20 py-2 text-xs sm:text-sm md:text-md flex flex-wrap items-center justify-center sm:justify-between">
      
    {/* Address */}
    <div className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-lg sm:text-xl" />
      <span className="font-semibold">123 Goshala Road, Vrindavan, India</span>
    </div>

    {/* Contact */}
    <div className="hidden sm:flex items-center gap-2">
      <FaPhoneAlt className="text-lg sm:text-xl" />
      <a href="tel:+919876543210" className="font-semibold hover:underline">+91 98765 43210</a>
    </div>

  </div>
  )
}

export default Address_navbar