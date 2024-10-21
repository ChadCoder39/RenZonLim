export default function ArticlePage({params}: {params: {index: number}}) {
  return <div className="mt-40">ArticlePage {params.index}</div>;
}
