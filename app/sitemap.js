import { articles, BLOG_ORIGIN, blogAlternates, blogPath } from '@/lib/blog';
import { CATEGORIES, DESTINATIONS, TOURS } from '@/lib/data';
import { localePath } from '@/lib/i18n';

export default function sitemap() {
  const paths = [ '/', '/about', '/faq', '/contact', '/start', '/quiz', '/quiz-discovery', '/talk-to-human', '/journeys', '/tours', '/corporate-events',
    ...CATEGORIES.map(c => `/journeys/${c.slug}`),
    ...DESTINATIONS.map(d => `/destinations/${d.slug}`),
    ...TOURS.map(t => `/tours/${t.slug}`),
  ];
  const pages = [...new Set(paths)].flatMap(path => ['en', 'es'].map(locale => ({
    url: BLOG_ORIGIN + localePath(path, locale),
    alternates: { languages: { en: BLOG_ORIGIN + path, es: BLOG_ORIGIN + localePath(path, 'es') } },
  })));
  const blog = ['', ...articles.map(a => a.slug)].flatMap(slug => ['en','es'].map(locale => ({
    url: BLOG_ORIGIN + blogPath(slug, locale),
    lastModified: articles.find(a => a.slug === slug)?.modified || articles[0].modified,
    alternates: { languages: blogAlternates(slug, locale).languages },
  })));
  return [...pages, ...blog];
}
