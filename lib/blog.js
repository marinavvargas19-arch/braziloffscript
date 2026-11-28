import fs from 'node:fs';
import path from 'node:path';
import { languageAlternates, localePath } from '@/lib/i18n';

export const BLOG_ORIGIN = 'https://www.braziloffscript.com';
export const articles = [{
  slug: 'is-brazil-safe-for-tourists',
  published: '2026-11-27T20:00:00-03:00',
  modified: '2026-11-28T02:20:00-03:00',
  author: 'Marina Vargas',
  cover: 'rio',
  en: {
    title: 'Is Brazil Safe for Tourists in 2027? An Honest Local Guide',
    description: 'Is Brazil safe for tourists? Yes, with city smarts. What the US, UK and Canada warn about, where the real risks are, and how to avoid them.',
    category: 'Travel Safety',
  },
  es: {
    title: '¿Es seguro viajar a Brasil en 2027? Guía honesta de una agencia local',
    description: '¿Es seguro viajar a Brasil? Sí, con precauciones de ciudad grande. Qué dicen los avisos oficiales y cómo evitar los riesgos reales.',
    category: 'Seguridad en el viaje',
  },
  pt: {
    title: 'O Brasil é seguro para turistas? O guia honesto de quem mora aqui (2027)',
    description: 'O Brasil é seguro para turistas? Sim, com cuidados de cidade grande. O que dizem os avisos oficiais e como evitar os riscos reais.',
    category: 'Segurança na viagem',
  },
  fr: {
    title: `Le Brésil est-il sûr pour les touristes en 2027 ? Le guide honnête d'une agence locale`,
    description: 'Le Brésil est-il sûr ? Oui, avec les réflexes des grandes villes. Ce que disent les avis officiels et comment éviter les vrais risques.',
    category: 'Sécurité en voyage',
  },
  it: {
    title: `Il Brasile è sicuro per i turisti nel 2027? La guida onesta di un'agenzia locale`,
    description: 'Il Brasile è sicuro per i turisti? Sì, con le attenzioni da grande città. Cosa dicono gli avvisi ufficiali e come evitare i rischi reali.',
    category: 'Sicurezza in viaggio',
  },
}, {
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
  pt: {
    title: 'Como planejar uma viagem ao Brasil: o guia de quem é daqui',
    description: 'Descubra onde ir, quando viajar, quantos dias reservar e como montar um roteiro pelo Brasil com dicas de quem vive aqui.',
    category: 'Guias de viagem pelo Brasil',
  },
  fr: {
    title: `Comment organiser un voyage au Brésil : le guide d'une agence locale`,
    description: 'Où aller, quand partir et combien de jours prévoir ? Découvrez les conseils d’une agence locale pour préparer votre voyage au Brésil.',
    category: 'Guides de voyage au Brésil',
  },
  it: {
    title: 'Come organizzare un viaggio in Brasile: la guida di chi ci vive',
    description: 'Scopri dove andare, quando partire e quanti giorni prevedere per il tuo viaggio in Brasile, con i consigli di un’agenzia locale.',
    category: 'Guide di viaggio in Brasile',
  },
}];

export function getArticle(slug, locale = 'en') {
  const entry = articles.find(article => article.slug === slug);
  if (!entry || !Object.hasOwn(entry, locale)) return null;
  const content = fs.readFileSync(path.join(process.cwd(), 'content/blog', `${slug}.${locale}.md`), 'utf8');
  return { ...entry, ...entry[locale], locale, content, readMinutes: Math.ceil(content.split(/\s+/).length / 210) };
}

export function blogPath(slug, locale = 'en') {
  return localePath(slug ? `/blog/${slug}` : '/blog', locale);
}
export function blogAlternates(slug, locale) {
  return { canonical: BLOG_ORIGIN + blogPath(slug, locale), languages: {
    ...languageAlternates(BLOG_ORIGIN + blogPath(slug)),
    'x-default': BLOG_ORIGIN + blogPath(slug),
  }};
}
