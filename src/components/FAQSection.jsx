import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is your refund policy?',
    answer:
      'Our refund policy allows you to request a full refund within 30 days of purchase, no questions asked.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can reach our customer support team via email at support@example.com or call us at 1-800-123-4567.',
  },
  {
    question: 'Do you offer customization?',
    answer:
      'Yes, we offer a variety of customization options to suit your business needs. Contact us for more information.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'Our refund policy allows you to request a full refund within 30 days of purchase, no questions asked.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can reach our customer support team via email at support@example.com or call us at 1-800-123-4567.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full bg-white flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-slate-700 hover:bg-blue-50 transition"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180 text-blue-600' : 'text-slate-600'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ${
                  activeIndex === index ? 'max-h-96 py-4 bg-blue-50' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
          src="/pink.png"
          alt="Decorative background"
          className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
        />
    </section>
  );
}
