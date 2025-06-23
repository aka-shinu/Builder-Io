import React, { useState } from "react";

const FAQ_CATEGORY = "FAQ";
const FAQ_TITLE = "Frequently asked questions";
const FAQ_DESCRIPTION =
  "Explore to learn more about how Symbiofy can empower your business with AI-driven solutions.";

const FAQS = [
  {
    question:
      "Is Symbiofy's AI platform scalable for both small clinics and large healthcare institutions?",
    answer:
      "Yes, Symbiofy's AI solutions integrate seamlessly with existing healthcare workflows, enhancing efficiency and streamlining processes while adapting to your specific needs.",
  },
  {
    question: "How to launch a Symbiofy website?",
    answer: "You can launch a Symbiofy website by contacting our support team or following the onboarding guide in your dashboard.",
  },
  {
    question:
      "Is Symbiofy's AI platform scalable for both small clinics and large healthcare institutions?",
    answer:
      "Yes, Symbiofy's AI solutions integrate seamlessly with existing healthcare workflows, enhancing efficiency and streamlining processes while adapting to your specific needs.",
  },
  {
    question: "When was Symbiofy founded?",
    answer: "Symbiofy was founded in 2021 to revolutionize healthcare with AI-driven solutions.",
  },
  {
    question: "When was Symbiofy founded?",
    answer: "Symbiofy was founded in 2021 to revolutionize healthcare with AI-driven solutions.",
  },
  {
    question: "Can Symbiofy's AI solutions integrate with healthcare workflows?",
    answer: "Absolutely! Our solutions are designed to integrate with a wide range of healthcare workflows, ensuring minimal disruption and maximum benefit.",
  },
  {
    question:
      "Is Symbiofy's AI platform scalable for both small clinics and large healthcare institutions?",
    answer:
      "Yes, Symbiofy's AI solutions integrate seamlessly with existing healthcare workflows, enhancing efficiency and streamlining processes while adapting to your specific needs.",
  },
];

const PlusIcon = () => (
  <span className="inline-flex p-2 items-center justify-center w-8 h-8 rounded bg-[#E6FBF9] text-[#00C7BE]">
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  </span>
);

const MinusIcon = () => (
  <span className="inline-flex items-center justify-center w-8 h-8 p-2 rounded bg-[#E6FBF9] text-[#00C7BE]">
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  </span>
);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#00C7BE] font-semibold tracking-wider mb-2">{FAQ_CATEGORY}</p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">{FAQ_TITLE}</h2>
          <p className="text-gray-500 text-base">{FAQ_DESCRIPTION}</p>
        </div>
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.question + idx}
              className="bg-white rounded-xl shadow p-6 transition-all duration-200 border border-transparent hover:border-[#00C7BE]"
            >
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === idx ? <MinusIcon /> : <PlusIcon />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 text-base mt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
