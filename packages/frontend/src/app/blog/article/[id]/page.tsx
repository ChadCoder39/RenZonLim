import ArticleBlock from "@/components/articles/ablock1";

export default function ArticlePage({params}: {params: {id: string}}) {
  return <ArticleBlock id={params.id} />;
}
