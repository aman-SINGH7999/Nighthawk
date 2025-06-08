// src/pages/Services.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import services from '../data/servicesData';
import HeroSection from '../components/HeroSection';

export default function Services() {
  return (
    <>
      <Navbar />
        {/* Hero Section */}
        <HeroSection
            title="Innovative Solutions for Modern Businesses"
            description="Our range of services ensures your business stays ahead of the curve."
            bgImg={'/services.jpeg'}
        />

      
      <div className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-500">
            Explore our comprehensive suite of services designed to propel your business forward. From strategic consulting to cutting-edge development and ongoing support, we're here to help you succeed.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Consulting */}
          <div>
            <h2 className="text-xl font-bold mb-4">Consulting</h2>
            {services.filter(service => service.category === "Consulting").map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Details */}
                <div className="md:w-2/3 p-6">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {service.ctaText}
                  </button>
                </div>

                {/* Image */}
                <div className="md:w-1/3 p-6">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-60 md:h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Development */}
          <div>
            <h2 className="text-xl font-bold mb-4">Development</h2>
            {services.filter(service => service.category === "Development").map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Details */}
                <div className="md:w-2/3 p-6">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {service.ctaText}
                  </button>
                </div>

                {/* Image */}
                <div className="md:w-1/3 p-6">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-60 md:h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Support */}
          <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            {services.filter(service => service.category === "Support").map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Details */}
                <div className="md:w-2/3 p-6">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {service.ctaText}
                  </button>
                </div>

                {/* Image */}
                <div className="md:w-1/3 p-6">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-60 md:h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import services from '../data/servicesData';

// export default function ServicesTwo() {
//   return (
//     <>
//       <Navbar />
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-sky-600 to-blue-500 py-20 px-4 text-white">
//         <div className="relative max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//             Innovative Solutions for Modern Businesses
//           </h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//             Our range of services ensures your business stays ahead of the curve.
//           </p>
//         </div>
//       </div>

//       {/* Services List */}
//       <section className="py-12 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto space-y-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`relative bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row ${
//                 index % 2 === 0 ? '' : 'md:flex-row-reverse'
//               }`}
//             >
//               {/* Image */}
//               <div className="md:w-1/3">
//                 <img
//                   src={service.imageUrl}
//                   alt={service.title}
//                   className="w-full h-60 md:h-full object-cover"
//                 />
//               </div>
//               {/* Details */}
//               <div className="md:w-2/3 p-6">
//                 <h2 className='text-5xl mb-2'>{service.icon}</h2>
//                 <h3 className="text-2xl font-bold text-purple-700 mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-slate-600">{service.longDescription}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }
