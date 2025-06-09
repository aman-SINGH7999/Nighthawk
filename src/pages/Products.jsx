import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductPageCard from '../components/ProductPageCard';
import productsData from '../data/productsData'

export default function ProductPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroSection
          title="ConnectSphere: Your All-in-One Business Platform"
          description="Streamline your operations, enhance collaboration, and drive growth with our comprehensive suite of tools."
          btnText="Explore Products"
          imgUrl="/product.jpeg"
      />

       {/* Products Section */}
      <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 text-center">
          Our Products
        </h2>
        <div className="flex flex-col gap-8">
          {productsData?.map((product, index) => (
            <ProductPageCard key={index} i={index}  product={product} />
          ))}
        </div>
      </div>
    </section>

  

      {/* Why Choose Us? */}
      <section className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://picsum.photos/id/23/800/500" 
                alt="Why Choose Us"
                className="rounded-lg shadow w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Product?</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✔️</span>
                  <span>Easy to use and deploy within minutes.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✔️</span>
                  <span>Seamless integration with third-party tools.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✔️</span>
                  <span>Dedicated support team available 24/7.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✔️</span>
                  <span>Scalable infrastructure to grow with your business.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
        src="/blue.png"
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-6">
            Join thousands of companies already using our product to streamline their operations and boost productivity.
          </p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition">
            Start Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}