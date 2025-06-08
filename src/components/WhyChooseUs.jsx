// import React from 'react';

// const features = [
//   {
//     title: 'Trusted Expertise',
//     description:
//       'Our team brings years of experience and deep industry knowledge to every project, ensuring quality outcomes.',
//     image: '/green-card.webp',
//   },
//   {
//     title: 'Customer-Centric Approach',
//     description:
//       'We prioritize your needs, offering tailored solutions and dedicated support to help your business thrive.',
//     image: '/blue-card.webp',
//   },
//   {
//     title: 'Proven Results',
//     description:
//       'Our track record speaks for itself, delivering success stories across diverse industries and challenges.',
//     image: '/signup.jpg',
//   },
//   {
//     title: 'Affordable Pricing',
//     description:
//       'We offer competitive rates without compromising on quality, making premium solutions accessible to all.',
//     image: '/signup.jpg',
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="py-12 px-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 text-center">
//           Why Choose Us
//         </h2>
//         <div className="space-y-12">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row ${
//                 index % 2 !== 0 ? 'md:flex-row-reverse' : ''
//               } items-center gap-6 md:gap-10`}
//             >
//               {/* Image */}
//               <div className="w-full md:w-1/2">
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="rounded-md shadow-sm w-full h-64 object-cover"
//                 />
//               </div>

//               {/* Text */}
//               <div className="w-full md:w-1/2">
//                 <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



//--------------------------------------

import React from 'react';

const features = [
  {
    title: 'Trusted Expertise',
    description:
      'Our team brings years of experience and deep industry knowledge to every project, ensuring quality outcomes.',
    color: 'from-blue-500 to-purple-600',
    cardColor: 'from-blue-200 to-purple-200',
    icon: '📘', // You can also use SVGs/icons here
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'We prioritize your needs, offering tailored solutions and dedicated support to help your business thrive.',
    color: 'from-green-400 to-cyan-500',
    cardColor: 'from-green-200 to-cyan-200',

    icon: '💬',
  },
  {
    title: 'Proven Results',
    description:
      'Our track record speaks for itself, delivering success stories across diverse industries and challenges.',
    color: 'from-yellow-400 to-orange-500',
    cardColor: 'from-yellow-200 to-orange-200',
    icon: '📈',
  },
  {
    title: 'Affordable Pricing',
    description:
      'We offer competitive rates without compromising on quality, making premium solutions accessible to all.',
    color: 'from-pink-500 to-red-500',
    cardColor: 'from-pink-200 to-red-200',
    icon: '💰',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine innovation with excellence to deliver services that stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`h-1 w-full bg-gradient-to-r ${feature.color}`}
              ></div>
              <div className={`p-6 flex items-start space-x-4 bg-gradient-to-tl ${feature.cardColor}`}>
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {
                     feature.icon
                  }
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//------------------------------------------------------
// import React from 'react';

// const features = [
//   {
//     title: 'Trusted Expertise',
//     description:
//       'Our team brings years of experience and deep industry knowledge to every project, ensuring quality outcomes.',
//     color: 'from-blue-500 to-purple-600',
//     icon: '📘',
//     img: '/blue-card.webp',
//   },
//   {
//     title: 'Customer-Centric Approach',
//     description:
//       'We prioritize your needs, offering tailored solutions and dedicated support to help your business thrive.',
//     color: 'from-green-400 to-cyan-500',
//     icon: '💬',
//   },
//   {
//     title: 'Proven Results',
//     description:
//       'Our track record speaks for itself, delivering success stories across diverse industries and challenges.',
//     color: 'from-yellow-400 to-orange-500',
//     icon: '📈',
//   },
//   {
//     title: 'Affordable Pricing',
//     description:
//       'We offer competitive rates without compromising on quality, making premium solutions accessible to all.',
//     color: 'from-pink-500 to-red-500',
//     icon: '💰',
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
//             Why Choose Us
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             We combine innovation with excellence to deliver services that stand out.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-transform duration-300 transform hover:-translate-y-1 group"
//             >
//               {/* Gradient bar */}
//               <div className={`h-1 w-full bg-gradient-to-r ${feature.color}`} />

//               {/* Card Content */}
//               <div className="p-6 flex flex-col items-center text-center space-y-4">
//                 {/* Icon */}
//                 <div
//                   className={`text-4xl transition-transform duration-300 group-hover:scale-110`}
//                 >
//                   {feature.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 leading-relaxed text-sm">
//                   {feature.description}
//                 </p>
//               </div>

//               {/* Hover background glow */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
