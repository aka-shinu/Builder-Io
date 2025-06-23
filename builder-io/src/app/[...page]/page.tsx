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
  const path = "/" + (params.page?.join("/") || "");
  const modelName = searchParams.modelName;
  console.log(modelName);
  const content = await builder
    .get(modelName as string, {
      userAttributes: {
        urlPath: path,
        revalidate: 0
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} model={modelName as string} />;
}
