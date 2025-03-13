import React, { useState } from 'react';
import logo from '../../assets/logo1.png';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [Menu, setMenu] = useState('')


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (Menu == 'show') {
      setMenu('')
    }
    else {
      setMenu('show')
    }


  };

  return (
    <nav className='bg-amber-500 px-6 md:px-16 w-full h-16 md:h-18 lg:h-22 flex items-center justify-between'>
      {/* Logo */}
      <div className='w-32 md:w-44 lg:w-52 pt-2'>
        <NavLink to='/'><img src={logo} alt='LOGO' /></NavLink>
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center gap-6 text-md lg:text-xl'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><Link to='/donate'>Donation</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
<div className='flex gap-6'>
      {/* Donate Button */}
      <div className='flex items-center gap-6 '>
        <Link to='/donate' className='bg-amber-300 text-md font-semibold py-2 px-4 rounded-3xl h-8 w-20 md:h-9 md:w-24 md:text-lg lg:w-28 lg:h-10 flex items-center justify-center'>DONATE</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className={`${Menu} md:hidden flex items-center`}>
        <button onClick={toggleMenu} className='flex flex-col space-y-1'>
          <div className='b1 w-6 h-1 bg-black'></div>
          <div className='b2 w-6 h-1 bg-black'></div>
          <div className='b3 w-6 h-1 bg-black'></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {/* Modern Mobile Navigation Menu */}
      <div className={`fixed top-20 right-20 w-48 p-6 rounded-xl shadow-lg bg-white z-50 flex flex-col items-center justify-center space-y-4 transition-transform ${menuOpen ? '' : 'hidden'}`}>
        <ul className='text-lg text-center space-y-2'>
          <li><NavLink to='/' onClick={toggleMenu} >Home</NavLink></li>
          
          <li><Link to='/donate' onClick={toggleMenu} >Donation</Link></li>
         
          <li><Link to='/gallery' onClick={toggleMenu}>Gallery</Link></li>
         
          <li><Link to='/about' onClick={toggleMenu}>About Us</Link></li>
          
          <li><Link to='/contact' onClick={toggleMenu}>Contact Us</Link></li>
         
        </ul>
        <Link to='/donate' onClick={toggleMenu} className='bg-amber-300 text-md font-semibold py-2 px-4 rounded-3xl shadow-md'>DONATE</Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
