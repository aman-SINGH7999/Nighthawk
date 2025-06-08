import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Project Manager at TechSolutions Inc.',
    feedback:
      'InnovateSoft has revolutionized our project management. We’ve seen a significant increase in efficiency and a decrease in project completion times.',
    image: '/night.jpg', // Replace with actual image path
  },
  {
    name: 'David Lee',
    role: 'CEO of Global Marketing Group',
    feedback:
      'The collaboration features in InnovateSoft are outstanding. Our team can now work together seamlessly, even when we’re miles apart.',
    image: '/images.jpg', // Replace with actual image path
  },
  {
    name: 'Emily Rodriguez',
    role: 'IT Director at SecureData Systems',
    feedback:
      'The security features of InnovateSoft give us peace of mind. We know our data is safe and protected.',
    image: '/priya.jpg', // Replace with actual image path
  },
];

export default function CustomerSuccessStories() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Customer Success Stories
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Customer Image */}
              <div className="mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto"
                />
              </div>
              {/* Feedback Text */}
              <p className="text-gray-700 italic text-center mb-4">
                "{testimonial.feedback}"
              </p>
              {/* Name and Role */}
              <div className="text-center">
                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Link to={'/services'} className="bg-white border-[1px] border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            View All Customers
        </Link>
    </div>
    </section>
  );
}
