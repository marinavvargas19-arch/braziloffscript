import { articles, BLOG_ORIGIN, blogAlternates, blogPath } from '@/lib/blog';
import { CATEGORIES, DESTINATIONS, TOURS } from '@/lib/data';
import { languageAlternates, localePath, SUPPORTED_LOCALES } from '@/lib/i18n';

export default function sitemap() {
  const paths = [ '/', '/about', '/faq', '/contact', '/start', '/quiz', '/quiz-discovery', '/talk-to-human', '/journeys', '/tours', '/corporate-events',
    ...CATEGORIES.map(c => `/journeys/${c.slug}`),
    ...DESTINATIONS.map(d => `/destinations/${d.slug}`),
    ...TOURS.map(t => `/tours/${t.slug}`),
    ...DESTINATIONS.map(d => `/tours/${d.slug}`),
  ];
  const pages = [...new Set(paths)].flatMap(path => SUPPORTED_LOCALES.map(locale => ({
    url: BLOG_ORIGIN + localePath(path, locale),
    alternates: { languages: languageAlternates(BLOG_ORIGIN + path) },
  })));
  const blog = ['', ...articles.map(a => a.slug)].flatMap(slug => SUPPORTED_LOCALES.map(locale => ({
    url: BLOG_ORIGIN + blogPath(slug, locale),
    lastModified: articles.find(a => a.slug === slug)?.modified || articles[0].modified,
    alternates: { languages: blogAlternates(slug, locale).languages },
  })));
  return [...pages, ...blog];
}
