import fs from 'node:fs';
import path from 'node:path';

export const BLOG_ORIGIN = 'https://www.braziloffscript.com';
export const articles = [{
  slug: 'how-to-plan-a-trip-to-brazil',
  published: '2026-11-16T12:00:00-03:00',
  modified: '2026-11-16T12:00:00-03:00',
  author: 'Marina Vargas',
  cover: 'cover',
  en: {
    title: "How to Plan a Trip to Brazil: A Local's Travel Guide",
    description: 'Planning a trip to Brazil? Discover where to go, when to visit, how long to stay and insider tips from a local Brazilian travel agency.',
    category: 'Brazil Travel Guides',
  },
  es: {
    title: 'Cómo planificar un viaje a Brasil: una guía local',
    description: '¿Planeas un viaje a Brasil? Descubre adónde ir, cuándo viajar, cuántos días quedarte y consejos de una agencia de viajes brasileña con conocimiento local.',
    category: 'Guías de viaje a Brasil',
  },
}];

export function getArticle(slug, locale = 'en') {
  const entry = articles.find(article => article.slug === slug);
  if (!entry || !['en', 'es'].includes(locale)) return null;
  const content = fs.readFileSync(path.join(process.cwd(), 'content/blog', `${slug}.${locale}.md`), 'utf8');
  return { ...entry, ...entry[locale], locale, content, readMinutes: Math.ceil(content.split(/\s+/).length / 210) };
}

export function blogPath(slug, locale = 'en') {
  return `${locale === 'es' ? '/es' : ''}/blog${slug ? `/${slug}` : ''}`;
}
export function blogAlternates(slug, locale) {
  return { canonical: BLOG_ORIGIN + blogPath(slug, locale), languages: {
    en: BLOG_ORIGIN + blogPath(slug), es: BLOG_ORIGIN + blogPath(slug, 'es'),
    'x-default': BLOG_ORIGIN + blogPath(slug),
  }};
}
