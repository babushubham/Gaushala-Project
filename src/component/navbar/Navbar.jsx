import React, { useState } from 'react'
import logo from '../../assets/logo1.png'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  const [Menu, setMenu] = useState('')

  const ShowMenu =()=>{
    if(Menu=='show'){
      setMenu('')
    }
    else{
      setMenu('show')
    }
  }
  
  return (
    <><div className='flex items-center justify-between bg-amber-500 px-16  min-w-full h-16 md:h-18 lg:h-22 '>
    <div className='w-40 pt-6 pb-4 contrast-200 md:w-44 lg:w-52'><NavLink to="/"><img src={logo} alt="LOGO" /></NavLink></div>
    <div className='   '>
      <ul className={` md:flex md:relative items-center justify-between text-md  md:gap-6 lg:text-xl gap-8`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><Link to='/donate'>Donation</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </div>
    <div className='flex items-center justify-center gap-10'>
    <div className='w-22 h-7 rounded-3xl text-lg p-2 font-semibold  flex items-center justify-center bg-amber-300 md:w-24 md:text-xl md:h-8 lg:w-28 lg:h-10'><Link to="/donate">DONATE</Link> </div>
    
    <div onClick={ShowMenu} className={`${Menu} cursor-pointer mb-2`}>
      <div className='b1 w-6 h-1 mt-1 bg-black'></div>
      <div className=' b2 w-6 h-1 mt-1 bg-black'></div>
      <div className=' b3 w-6 h-1 mt-1 bg-black'></div>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Navbar