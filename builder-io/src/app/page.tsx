// app/[...page]/page.tsx
import { useParams } from 'next/navigation';
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import "@/styles/style1.css";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page?: string[];
  };
  searchParams: {
    test?: string;
    [key: string]: string | string[] | undefined;
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const path = "/" + ((await params).page?.join("/") || "");
  const modelName =  (await searchParams).modelName;
  console.log(modelName, "11")
  const content = await builder
    .get(modelName as string, {
      userAttributes: {
        urlPath: "/",
        revalidate: 0
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} model={modelName as string} />;
}
