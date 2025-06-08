
import React from 'react';
import FeatureCard from './FeatureCard';
import { Link } from 'react-router-dom';

export default function KeyFeatures() {
  const features = [
    {
      icon: '🔒',
      title: 'Robust Security',
      description:
        'Our platform employs state-of-the-art security measures to protect your data and ensure compliance with industry standards.',
      cardColor: 'from-pink-100 to-red-100',
      },
    {
      icon: '👥',
      title: 'Seamless Collaboration',
      description:
        'Facilitate teamwork and communication with integrated tools that keep everyone on the same page.',
      cardColor: 'from-yellow-100 to-orange-100',
    },
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      description:
        'Leverage advanced analytics to gain actionable insights, optimize performance, and make informed decisions.',
      cardColor: 'from-green-100 to-cyan-100',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-slate-800">Key Features</h2>
        <p className='text-gray-500'>Explore the core functionalities that make our platform stand out.</p>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Empowering Your Business with Innovative Solutions</h2>
          <p className="text-slate-600">
            Our platform offers a suite of powerful features designed to streamline your operations, enhance collaboration, and drive growth. Discover how our solutions can transform your business.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <Link to={'/services'} className="bg-white border-[1px] border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                View All Features
            </Link>
        </div>
      </div>
    </section>
  );
}