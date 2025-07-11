"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
console.log(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <div className="w-full h-fit">
      { <BuilderComponent content={content} model={model} />}
    </div>;
  }
  
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
}
