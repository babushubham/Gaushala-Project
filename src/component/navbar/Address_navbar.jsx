import React from 'react'
import email from '../../assets/email.png'
import phone from '../../assets/phone-call.png'
import gps from '../../assets/gps.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

const Address_navbar = () => {
  return (
    <>
    <div className='flex items-center justify-evenly bg-orange-500 min-w-full h-7 '>
    <div className='flex items-center justify-between'><img src={email} alt="" className='w-5'/><div className='pl-2 font-semibold '>Gaurishurbhigaushala@gmail.com</div></div>
    <div className='flex items-center justify-between'><img src={phone} alt="" className='w-5'/><div className='pl-2 font-semibold'>+91 9876554329</div></div>
    <div className='flex items-center justify-between'><img src={gps} alt="" className='w-5'/><div className='pl-2 font-semibold'>Attla Chungi, Vrindavan, Mathura, UP</div></div>
    </div>
    </>
  )
}

export default Address_navbar