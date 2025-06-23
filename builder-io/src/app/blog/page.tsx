"use client";

import NewsletterBanner from "@/components/NewsletterBanner";

export default function BlogPage() {
  return (
    <>
      <NewsletterBanner />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        {/* Blog content will go here */}
      </main>
    </>
  );
} 