import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
    <Navbar />
    <div className='w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-20'>
        <div className='text-center text-6xl font-bold my-5'>Our Services</div>
    </div>
    <Footer />
    </>
  )
}
