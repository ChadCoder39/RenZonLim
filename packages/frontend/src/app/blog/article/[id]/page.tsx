export default function ArticlePage({params}: {params: {name: string}}) {
  return <div className="mt-40">ArticlePage {params.name}</div>;
}
