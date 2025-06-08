


import React from 'react';

export default function ProductCard({ img, title, description, buttonLabel = "Learn More" }) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
          <p className="text-slate-600 text-sm">
            {description}
          </p>
        </div>
        <button
          className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-slate-800 py-2 px-4 rounded-full transition duration-200"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}


// import React from 'react';

// export default function ProductCard({ img, title, description, testimonial }) {
//   return (
//     <div className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 group">
//       {/* Image */}
//       <div className="w-full h-48 overflow-hidden">
//         <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
//       </div>

//       {/* Content */}
//       <div className="flex flex-col flex-1 p-6">
//         <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
//         <p className="text-slate-600 mb-4">{description}</p>

//         <blockquote className="italic text-sm text-slate-500 mt-auto border-l-2 border-indigo-200 pl-3 mb-4">
//           {testimonial}
//         </blockquote>

//         <button className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// }