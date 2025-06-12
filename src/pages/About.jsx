import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import values from '../data/valuesData'
import history from '../data/historyData'
import teamMembers from '../data/teamMembersData'

export default function About() {
  return (
    <>
    <Navbar />
    <div>
        <HeroSection
            title="ConnectSphere: Your All-in-One Business Platform"
            description="Streamline your operations, enhance collaboration, and drive growth with our comprehensive suite of tools."
            imgUrl="/product.jpeg"
            bgColor="bg-gradient-to-r from-sky-800 via-blue-800 to-transparent"
        />
        {/* Mission Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At Innovatech Solutions, our mission is to deliver innovative and impactful software solutions that address our clients' unique challenges and propel their success. We are committed to fostering long-term partnerships built on trust, transparency, and exceptional service.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-4 rounded shadow-sm"
              >
                <div className="text-2xl mb-2">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our History</h2>
          <div className="space-y-4">
            {history.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        {/* Our Team Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Meet the passionate and skilled professionals behind our success.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-md"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
    <Footer/>
    </>
  )
}