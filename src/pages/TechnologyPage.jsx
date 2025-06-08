// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import technologies from '../data/technologiesData';

// // Helper function to group technologies by category
// const groupTechnologiesByCategory = (techList) => {
//   return techList.reduce((acc, tech) => {
//     const category = tech.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(tech);
//     return acc;
//   }, {});
// };

// export default function TechnologyPage() {
//   // Group technologies by category
//   const groupedTechnologies = groupTechnologiesByCategory(technologies);

//   return (
//     <>
//       <Navbar />
//       <section className="py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold mb-2">Technology We Use</h1>
//             <p className="text-gray-600">
//               Our platform is built on a robust and modern technology stack, ensuring performance, scalability, and reliability. We leverage industry-leading tools and frameworks to deliver a seamless experience.
//             </p>
//           </div>

//           {/* Render each category */}
//           {Object.entries(groupedTechnologies).map(([category, techs]) => (
//             <div key={category} className="mb-12">
//               {/* Category Heading */}
//               <h2 className="text-xl font-bold mb-4">{category}</h2>

//               {/* Cards for technologies */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {techs.map((tech, index) => (
//                   <div
//                     key={index}
//                     className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
//                 >
//                     <div className="text-4xl mb-4">{tech.icon}</div>
//                     <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
//                     <p className="text-gray-600">{tech.description}</p>
//                 </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import technologies from '../data/technologiesData';
import HeroSection from '../components/HeroSection';

// Helper function to group technologies by category
const groupTechnologiesByCategory = (techList) => {
  return techList.reduce((acc, tech) => {
    const category = tech.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {});
};

export default function TechnologyPage() {
  // Group technologies by category
  const groupedTechnologies = groupTechnologiesByCategory(technologies);

  return (
    <>
      <Navbar />
       {/* Hero Section */}
        <HeroSection
          title="Our Technology Stack"
          description="We leverage the latest frameworks, tools, and technologies to build scalable, high-performance, and user-friendly solutions."
          imgUrl={'/technologies.jpeg'}
          bgColor="bg-gradient-to-r from-indigo-800 via-sky-700 to-blue-400"
      />

      {/* <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 py-20 px-4 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/70 to-purple-700/70 opacity-80"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Technology Stack
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We leverage the latest frameworks, tools, and technologies to build scalable, high-performance, and user-friendly solutions.
          </p>
        </div>
      </div> */}

      {/* Technology Categories Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Technologies We Use</h2>
            <p className="text-gray-600">
              Our platform is built on a robust and modern technology stack, ensuring performance, scalability, and reliability. We leverage industry-leading tools and frameworks to deliver a seamless experience.
            </p>
          </div>

          {/* Render each category */}
          {Object.entries(groupedTechnologies).map(([category, techs]) => (
            <div key={category} className="mb-12">
              {/* Category Heading */}
              <h3 className="text-xl font-bold mb-4">{category}</h3>

              {/* Cards for technologies */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition bg-white"
                  >
                    <div className="text-4xl mb-4">{tech.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{tech.title}</h4>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                ))}
                <img
                    src="/blue.png"
                    alt="Decorative background"
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
