import React from 'react'
import Navbar from '../navbar/Navbar'
import Address_navbar from '../navbar/Address_navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Address_navbar/>
    <Navbar/>
    <div className='min-h-screen bg-yellow-50'>
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout