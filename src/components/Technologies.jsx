import React from 'react';
import { Link } from 'react-router-dom';

const technologies = [
  {
    title: "React.js",
    description: "A JavaScript library for building user interfaces.",
    icon: "⚛️", // placeholder, you can replace with an actual icon
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    icon: "💨",
  },
  {
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 engine.",
    icon: "🟢",
  },
];

export default function Technologies() {
  return (
    <section className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-600 mb-8">
                Our technology stack leverages modern frameworks and tools to build high-performance, scalable solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                >
                    <div className="text-4xl mb-4">{tech.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                </div>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <Link to={'/technologies'} className="bg-white border-[1px] border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                    View All Technologies
                </Link>
            </div>
        </div>
        <img
          src="/blue.png"
          alt="Decorative background"
          className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
        />
    </section>
  );
}
