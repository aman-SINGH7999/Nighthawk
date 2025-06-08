import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
            Unleash Your Ideas with{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Nighthawk
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8">
            Empowering software solutions and services tailored for startups, enterprises, and innovators alike.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Video / Illustration */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-xl aspect-video bg-slate-200 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition">
            <video
              controls
              src="/video-2.mp4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <img
        src="/signup.jpg"
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Optional gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent pointer-events-none -z-20"></div>
    </section>
  );
}
