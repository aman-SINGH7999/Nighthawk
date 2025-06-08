// import React from 'react';

// export default function ContactUs() {
//   return (
//     <section className="py-16 px-4 bg-gradient-to-br from-blue-400 via-pink-50 to-white">
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
//           Contact Us
//         </h2>
//         <p className="text-slate-600 text-center mb-10">
//           Have questions or need help? Fill out the form below and we'll get back to you as soon as possible.
//         </p>

//         {/* Form */}
//         <form className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6">
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="w-full">
//               <label className="block text-slate-700 font-medium mb-2">Name</label>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
//               />
//             </div>
//             <div className="w-full">
//               <label className="block text-slate-700 font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-slate-700 font-medium mb-2">Message</label>
//             <textarea
//               rows="5"
//               placeholder="Your Message"
//               className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-slate-800 text-white px-6 py-3 rounded-md hover:bg-slate-700 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function ContactUs() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-400 via-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have questions or need help? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="opacity-90">support@nighthawk.com</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-teal-500 p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="opacity-90">+1 (800) 123-4567</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="opacity-90">123 Business Ave, Tech City, USA</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200 space-y-6 transition-all duration-300 hover:shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block text-slate-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-slate-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}