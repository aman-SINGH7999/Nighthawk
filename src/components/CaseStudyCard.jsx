import React from 'react';

export default function CaseStudyCard({
  title,
  description,
  buttonText,
  backgroundColor,
  imageUrl,
}) {
  return (
    <div className={"flex flex-col md:flex-row items-start gap-6"}>
      {/* Text Section */}
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <button
          className="inline-block bg-white border border-slate-300 text-slate-700 font-medium px-5 py-2 rounded-full shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 transition"
          aria-label={`Read more about ${title}`}
        >
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div
        className={`relative w-full md:w-1/2 h-52 rounded-lg shadow-md overflow-hidden ${backgroundColor}`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
