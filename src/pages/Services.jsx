import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
    <Navbar />
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Empowering Businesses with Cutting-Edge Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Our services are designed to accelerate your growth, enhance your operations, and 
          provide unmatched value. Explore how we can partner with you to achieve 
          excellence and drive results.
        </p>
      </div>
    </section>
    <Footer />
    </>
  )
}
