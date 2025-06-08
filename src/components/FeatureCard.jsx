import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow hover:shadow-xl transition`}>
      <div className="text-4xl mb-4 text-indigo-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}


// import React from 'react';

// export default function FeatureCard({ icon, title, description,cardColor }) {
//   return (
//     <div className={`bg-gradient-to-tl ${cardColor} rounded-lg shadow-md p-6 flex flex-col items-start transition duration-300 hover:shadow-lg`}>
//       {/* Icon */}
//       <div className="text-3xl text-indigo-600 mb-4">{icon}</div>

//       {/* Title */}
//       <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>

//       {/* Description */}
//       <p className="text-slate-600 text-sm">{description}</p>
//     </div>
//   );
// }