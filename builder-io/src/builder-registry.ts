"use client";
import { builder, Builder } from "@builder.io/react";
import Navbar from "./components/Navbar";
import NewsletterBanner from "./components/NewsletterBanner";
import TitleBlock from "./components/TitleBlock";
import BlogCards from "./components/BlogPosts";
import InsightSection from "./components/InsightUpdates";
import CaseStudies from "./components/CaseStudies";
import Faq from "./components/Faq";
import ConsultationCTA from "./components/ConsultationCTA";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(NewsletterBanner, {
  name: "NewsletterBanner",
});
Builder.registerComponent(ConsultationCTA, {
  name: "ConsultationCTA",
});
Builder.registerComponent(Testimonials, {
  name: "Testimonials",
});
Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Navbar, {
  name: "Navbar",
});
Builder.registerComponent(Faq, {
  name: "Faq",
});

Builder.registerComponent(TitleBlock, {
  name: "TitleBlock",
});
Builder.registerComponent(BlogCards, {
  name: "BlogCards",
  inputs: [
    {
      name: "data",
      type: "list",
      subFields: [
        { name: "title", type: "text" },
        { name: "description", type: "longText" },
        { name: "image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
        {
          name: "data",
          type: "object",
          subFields: [
            { name: "authorImage", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
            { name: "authorName", type: "text" },
            { name: "category", type: "text" },
            { name: "time", type: "number" },
          ],
        },
      ],
    },
  ],
  customModel: 'blogs-',
} as any);

Builder.registerComponent(InsightSection, {
  name: "InsightSection",
  inputs: [
    {
      name: "data",
      type: "object",
      subFields: [
        { name: "category", type: "text" },
        { name: "title", type: "text" },
        { name: "description", type: "longText" },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "png", "webp"]
        },
        {
          name: "cardData",
          type: "list",
          subFields: [
            {
              name: "image",
              type: "file",
              allowedFileTypes: ["jpeg", "png", "webp"]
            },
            { name: "title", type: "text" },
            { name: "description", type: "longText" },
            { name: "category", type: "text" },
            { name: "time", type: "number" }
          ]
        }
      ]
    }
  ],  
  customModel: 'section',
} as any);
Builder.registerComponent(CaseStudies, {
  name: "CaseStudies",
  inputs: [
    {
      name: "data",
      type: "object",
      subFields: [
        { name: "category", type: "text" },
        { name: "title", type: "text" },
        { name: "description", type: "longText" },
        {
          name: "cardData",
          type: "list",
          subFields: [
            {
              name: "image",
              type: "file",
              allowedFileTypes: ["jpeg", "png", "webp"]
            },
            { name: "title", type: "text" },
            { name: "description", type: "longText" },
            { name: "category", type: "text" },
            { name: "time", type: "number" }
          ]
        }
      ]
    }
  ],  
  customModel: 'section',
} as any);