import { notFound } from 'next/navigation';
import TravelGuide, { guideMetadata } from '@/components/travel-guide';
import { articles, getArticle } from '@/lib/blog';
export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) { return guideMetadata((await params).slug, 'es'); }
export default async function Page({ params }) {
  const article = getArticle((await params).slug, 'es');
  if (!article) notFound();
  return <TravelGuide article={article} />;
}
