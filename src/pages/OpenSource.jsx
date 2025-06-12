import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import openSourceData from '../data/openSourceData'
import { Link } from 'react-router-dom'

export default function OpenSource() {
    
  return (
    <>
    <Navbar />
    <div>
        <HeroSection
            title="Open Source at Innovatech Solutions"
            description="We believe in the power of collaboration and community-driven development. Our commitment to open source is reflected in our active participation in various projects and our contributions to the open-source ecosystem."
            imgUrl="/product.jpeg"
            bgColor="bg-gradient-to-r from-green-800 to-blue-800"
            btnText={"Explore Our products"}
            btnUrl='/products'
        />
              {/* Open Source Philosophy */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Open Source Philosophy</h2>
          <p className="text-gray-600">
            At Innovatech Solutions, we embrace open source as a core principle. We believe that sharing knowledge and code fosters innovation, accelerates development, and ultimately leads to better software. Our contributions are driven by a desire to give back to the community and to collaborate with talented developers worldwide.
          </p>
        </div>
      </section>

    
      {/* Featured Projects */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="space-y-8">
            {openSourceData.featuredProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row-reverse">
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
                  >
                    View Repository
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How We Contribute */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">How We Contribute</h2>
          <p className="text-gray-600">
            Our contributions to open source take many forms, including:
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                <strong>Code Contributions:</strong> We actively contribute code to existing projects, fixing bugs, adding features, and improving performance.
              </li>
              <li>
                <strong>Project Sponsorship:</strong> We sponsor open-source projects that align with our values and goals, providing financial support and resources.
              </li>
              <li>
                <strong>Community Engagement:</strong> We participate in discussions, provide support to other developers, and help build vibrant communities around open-source projects.
              </li>
              <li>
                <strong>Documentation and Education:</strong> We create documentation, tutorials, and other educational materials to help others learn and use open-source software.
              </li>
            </ul>
          </p>
        </div>
      </section>

     
      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg mb-6">
            We encourage everyone to get involved in open source, regardless of their experience level. Whether you're a seasoned developer or just starting out, there are many ways to contribute. Explore our projects, join our community, and start making a difference today!
          </p>
          <Link to={'/products'} className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition">
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}
