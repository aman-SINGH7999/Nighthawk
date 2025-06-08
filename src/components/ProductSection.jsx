
// import React from 'react';
// import ProductCard from './ProductCard';

// export default function ProductSection() {
//   const products = [
//     {
//       img: '/india-aggriculture.avif',
//       title: 'Customer Management',
//       description: 'Centralize customer data, track interactions, and personalize your approach. "This CRM has transformed how we manage customer data. It\'s intuitive and powerful." - Amelia Bennett, Marketing Manager',
//     },
//     {
//       img: '/india-space.avif',
//       title: 'Sales Automation',
//       description: 'Automate repetitive tasks, streamline workflows, and close deals faster. "Sales automation has saved us countless hours and boosted our efficiency." - Ethan Carter, Sales Director',
//     },
//     {
//       img: '/615.webp',
//       title: 'Communication Tools',
//       description: 'Integrate email, chat, and other communication channels for seamless interactions. "The integrated communication tools make it easy to stay connected with our customers." - Olivia Hayes, Customer Support Lead',
//     },
//   ];

//   return (
//     <section className="py-10 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-center">Product Tour</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {products.map((product, index) => (
//           <ProductCard
//             key={index}
//             img={product.img}
//             title={product.title}
//             description={product.description}
//           />
//         ))}
//       </div>
//       <div className='w-full flex justify-center py-10'>
//         <button className="bg-white border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition-transform transform hover:scale-105">
//           View All Products
//         </button>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import ProductCard from './ProductCard';

export default function ProductSection() {
  const products = [
    {
      img: '/india-aggriculture.avif',
      title: 'Customer Management',
      description:
        'Centralize customer data, track interactions, and personalize your approach.',
      testimonial: '"This CRM has transformed how we manage customer data. It\'s intuitive and powerful." - Amelia Bennett, Marketing Manager',
    },
    {
      img: '/india-space.avif',
      title: 'Sales Automation',
      description:
        'Automate repetitive tasks, streamline workflows, and close deals faster.',
      testimonial: '"Sales automation has saved us countless hours and boosted our efficiency." - Ethan Carter, Sales Director',
    },
    {
      img: '/615.webp',
      title: 'Communication Tools',
      description:
        'Integrate email, chat, and other communication channels for seamless interactions.',
      testimonial: '"The integrated communication tools make it easy to stay connected with our customers." - Olivia Hayes, Customer Support Lead',
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Product Tour</h2>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto">
          Discover the tools that help you grow and scale your business effortlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-white border-[1px] border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300">
          View All Products
        </button>
      </div>
    </section>
  );
}