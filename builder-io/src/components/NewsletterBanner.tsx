"use client";

import Link from 'next/link';

export default function NewsletterBanner() {
  return (
    <div className="w-full bg-[#1C1C1C] text-white py-2 text-center">
      <Link 
        href="/newsletter" 
        className="inline-flex items-center hover:opacity-80 transition-opacity"
      >
        Subscribe to our Newsletter For New & latest Blogs and Resources
        <svg 
          className="w-4 h-4 ml-2" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M7 17L17 7M17 7H7M17 7V17" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
} 