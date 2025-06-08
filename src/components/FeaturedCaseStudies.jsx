import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    id: 1,
    title: 'Boosting Sales Efficiency by 30%',
    description:
      'Learn how a small business increased sales efficiency by 30% using our CRM platform.',
    buttonText: 'Read More',
    backgroundColor: 'bg-teal-500',
    imageUrl: '/card-img.webp', // Replace with actual image path
  },
  {
    id: 2,
    title: 'Improving Customer Retention by 20%',
    description:
      'Discover how a mid-sized company improved customer retention by 20% with our tailored solutions.',
    buttonText: 'Read More',
    backgroundColor: 'bg-green-400',
    imageUrl: '/flame.webp', // Replace with actual image path
  },
];

export default function FeaturedCaseStudies() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
          Featured Case Studies
        </h2>

        <div className="space-y-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <button className="bg-white border-[1px] border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                View More
            </button>
        </div>
      </div>
    </section>
  );
}
