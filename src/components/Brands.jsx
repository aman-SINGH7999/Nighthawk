import React from 'react';


export default function Brands() {
  const brands = [
    {
      id: 1,
      name: 'Company A',
      logo: '/balaji.webp',
      backgroundColor: 'bg-yellow-100',
    },
    {
      id: 2,
      name: 'Company B',
      logo: '/flame.webp',
      backgroundColor: 'bg-gray-100',
    },
    {
      id: 3,
      name: 'Company C',
      logo: '/genpact.webp',
      backgroundColor: 'bg-green-100',
    },
    {
      id: 4,
      name: 'Company D',
      logo: '/godrej.webp',
      backgroundColor: 'bg-indigo-800 text-white',
    },
    {
      id: 5,
      name: 'Company E',
      logo: '/mahindra.webp',
      backgroundColor: 'bg-white',
    },
    {
      id: 6,
      name: 'Company F',
      logo: '/pepe.webp',
      backgroundColor: 'bg-white',
    },
    {
      id: 7,
      name: 'Company G',
      logo: '/razor.webp',
      backgroundColor: 'bg-white',
    },
    {
      id: 8,
      name: 'Company H',
      logo: '/secutech.webp',
      backgroundColor: 'bg-white',
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Trusted by Leading Companies</h2>

        {/* Logos */}
        <div className="flex flex-row flex-wrap gap-7 justify-center">
          {brands.map((brand) => (
            <div
                className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg ${brand?.backgroundColor}`}
                >
                {/* Logo */}
                <img src={brand?.logo} alt={brand?.name} className="h-20 mb-2" />

                {/* Company Name */}
                <p className="text-sm font-semibold text-center">{brand?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}