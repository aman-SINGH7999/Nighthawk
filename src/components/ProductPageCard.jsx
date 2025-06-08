import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProductPageCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:h-80">
      {/* Image Section */}
      <div
        className="relative md:w-1/2 w-full h-64 md:h-full bg-gray-800 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.images[currentImageIndex]}
          alt={product.title}
          className="object-contain w-full h-full p-2"
        />

        {/* Left Arrow */}
        {isHovered && (
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
        )}

        {/* Right Arrow */}
        {isHovered && (
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        )}

        {/* Progress Bars */}
        <div className="absolute bottom-2 left-0 w-full flex justify-center space-x-2">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-indigo-600 w-8' : 'bg-gray-300 w-4'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-2 text-slate-800">
          {product.title}
        </h3>
        <p className="text-indigo-600 font-medium mb-2">
          {product.shortDescription}
        </p>
        <p className="text-slate-600 text-base mb-4">
          {product.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2">
          {product.technologyUsed.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
