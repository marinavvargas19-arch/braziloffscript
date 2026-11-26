import Link from 'next/link';
import { articles, getArticle, blogPath, blogAlternates, BLOG_ORIGIN } from '@/lib/blog';
import { blogPhotos, blogPhotoText } from '@/lib/blog-photos';
import { LANGUAGES, localePath } from '@/lib/i18n';
import { blogCopy } from '@/lib/blog-copy';
import styles from './travel-guide.module.css';

function Inline({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> :
    part.startsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : part);
}
export function Photo({ id, locale = 'en', hero = false, compact = false }) {
  const photo = blogPhotos[id];
  if (!photo) throw new Error(`Unknown blog photo: ${id}`);
  const [caption, alt] = blogPhotoText(id, locale);
  return <figure className={styles.photo}>
    <img src={`/blog/optimized/${id}-960.webp`}
      srcSet={[640, 960, 1600].map(w => `/blog/optimized/${id}-${w}.webp ${w}w`).join(', ')}
      sizes={hero ? '(max-width: 1240px) 100vw, 1200px' : compact ? '(max-width: 639px) 100vw, (max-width: 1023px) 45vw, 400px' : '(max-width: 1023px) 100vw, 820px'}
      alt={alt} width={1600} height={1067}
      loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : undefined} decoding="async"
      style={hero ? { aspectRatio: '2 / 1' } : undefined} />
    <figcaption>{caption}{photo.credit && <> · <a href={photo.credit.source}>{photo.credit.name}</a> · <a href={photo.credit.url}>{photo.credit.license}</a> · {blogCopy[locale].adapted}</>}</figcaption>
  </figure>;
}

const socialLocales = { en: 'en_US', es: 'es_ES', pt: 'pt_BR', fr: 'fr_FR', it: 'it_IT' };

export function guideMetadata(slug, locale = 'en') {
  const article = getArticle(slug, locale);
  if (!article) return { title: 'Not found', robots: { index: false } };
  const url = BLOG_ORIGIN + blogPath(slug, locale);
  return {
    title: { absolute: article.title }, description: article.description,
    authors: [{ name: 'Marina Vargas', url: `${url}#author` }],
    alternates: blogAlternates(slug, locale),
    openGraph: {
      title: article.title, description: article.description, type: 'article', url,
      siteName: 'Brazil Off Script', locale: socialLocales[locale],
      alternateLocale: Object.entries(socialLocales).filter(([language]) => language !== locale).map(([, tag]) => tag),
      publishedTime: article.published, modifiedTime: article.modified,
      authors: ['Marina Vargas'], section: article.category,
      images: [{ url: `${BLOG_ORIGIN}/blog/brazil-travel-guide-og.jpg`, width: 1200, height: 630, alt: blogPhotoText('cover', locale)[1] }],
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [`${BLOG_ORIGIN}/blog/brazil-travel-guide-og.jpg`] },
  };
}

export function blogMetadata(locale = 'en') {
  const copy = blogCopy[locale];
  const title = `${copy.title} | Brazil Off Script`;
  const { description } = copy;
  return { title: { absolute: title }, description, alternates: blogAlternates('', locale), openGraph: { title, description, type: 'website', url: BLOG_ORIGIN + blogPath('', locale), images: [`${BLOG_ORIGIN}/blog/brazil-travel-guide-og.jpg`] } };
}

function AuthorLine({ article }) {
  return <div className="flex items-center gap-3 text-sm mt-7">
    <img src="/marina-vargas-contact.jpeg" width={48} height={48} alt="Marina Vargas" className="w-12 h-12 object-cover rounded-full" style={{ objectPosition: '50% 68%' }} />
    <div><a href="#author" className="font-semibold underline decoration-line underline-offset-4">Marina Vargas</a><div className="text-muted text-xs mt-1">{blogCopy[article.locale].founder}</div></div>
    <span className="hidden sm:block ml-auto text-muted text-xs">{article.readMinutes} {blogCopy[article.locale].readTime}</span>
  </div>;
}

export function BlogHome({ locale = 'en' }) {
  const copy = blogCopy[locale];
  const posts = articles.map(a => getArticle(a.slug, locale));
  return <div lang={LANGUAGES[locale].tag} className="max-w-[1240px] mx-auto px-5 sm:px-8 py-12 sm:py-20">
    <div className="text-terra-d uppercase tracking-[.24em] text-xs font-bold">{copy.journal}</div>
    <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16 items-end mt-5 pb-10 border-b border-line">
      <h1 className="font-serif text-[clamp(44px,6vw,76px)] leading-[.98] text-ink">{copy.heading}</h1>
      <p className="text-ink-soft leading-relaxed max-w-md">{copy.intro}</p>
    </div>
    <div className="space-y-14 mt-10">
      {posts.map((article, i) => <article key={article.slug} className="grid md:grid-cols-[1.25fr_1fr] gap-8 md:gap-12 items-center">
        <Link href={blogPath(article.slug, locale)} aria-label={article.title} className="block"><Photo id={article.cover} locale={locale} hero={i === 0} /></Link>
        <div><p className="text-xs uppercase tracking-[.18em] text-terra-d font-bold">{article.category}</p>
          <h2 className="font-serif text-[clamp(32px,4vw,46px)] leading-[1.08] mt-4"><Link href={blogPath(article.slug, locale)} className="hover:text-leaf">{article.title}</Link></h2>
          <p className="text-ink-soft leading-relaxed mt-5">{article.description}</p>
          <p className="text-xs text-muted mt-5">Marina Vargas · {article.readMinutes} {copy.readTime}</p>
          <Link href={blogPath(article.slug, locale)} className="inline-flex items-center gap-5 mt-7 py-3 border-b border-ink font-semibold text-sm">{copy.read} <span aria-hidden="true">↗</span></Link>
        </div>
      </article>)}
    </div>
  </div>;
}

function Block({ block, locale }) {
  if (block.startsWith('::photo ')) return <Photo id={block.slice(8)} locale={locale} />;
  if (block.startsWith('::gallery ')) return <div className={styles.gallery}>{block.slice(10).split(' ').map(id => <Photo key={id} id={id} locale={locale} compact />)}</div>;
  if (block.startsWith('::tour ')) return <p><Link className="text-leaf-d underline underline-offset-4 font-semibold text-sm" href={localePath(block.slice(7), locale)}>{blogCopy[locale].tour} →</Link></p>;
  if (block.startsWith('::cta ')) return <Link className={styles.cta} href={localePath('/quiz', locale)}>{block.slice(6)} <span className="ml-5" aria-hidden="true">→</span></Link>;
  if (block.startsWith('### ')) return <h3><Inline text={block.slice(4)} /></h3>;
  if (block.startsWith('- ')) return <ul>{block.split('\n').map((line, i) => <li key={i}><Inline text={line.slice(2)} /></li>)}</ul>;
  if (block.startsWith('> ')) return <blockquote className={styles.quote}>{block.slice(2)}</blockquote>;
  if (block === '---') return null;
  if (/^\*\*(?:Off Script Tip|Consejo Off Script|Dica Off Script|Conseil Off Script|Consiglio Off Script)\s*:/.test(block)) return <aside className={styles.tip}><Inline text={block} /></aside>;
  return <p><Inline text={block} /></p>;
}

function Blocks({ blocks, locale }) {
  const nodes = [];
  for (let i = 0; i < blocks.length; i++) {
    if (/^### (7|10|14|21) /.test(blocks[i])) {
      const cards = [];
      while (i < blocks.length && /^### (7|10|14|21) /.test(blocks[i])) {
        const heading = blocks[i++].slice(4), number = heading.match(/^\d+/)[0], content = [];
        while (i < blocks.length && !blocks[i].startsWith('### ')) content.push(blocks[i++]);
        cards.push(<section key={number} className={styles.duration}><h3><span className={styles.durationNumber}>{number}</span>{heading.slice(number.length).trim()}</h3>{content.map((block, j) => <Block key={j} block={block} locale={locale} />)}</section>);
      }
      nodes.push(<div key={`durations-${i}`} className={styles.durations}>{cards}</div>); i--;
    } else if (blocks[i] === `### ${blogCopy[locale].author}`) {
      nodes.push(<section id="author" key="author" className={styles.author}><img src="/marina-vargas-contact.jpeg" alt="Marina Vargas" width={80} height={80} loading="lazy" className="w-20 h-20 rounded-full object-cover mb-5" style={{objectPosition:'50% 68%'}} />{blocks.slice(i).map((block,j) => <Block key={j} block={block} locale={locale} />)}</section>); break;
    } else nodes.push(<Block key={i} block={blocks[i]} locale={locale} />);
  }
  return nodes;
}

export default function TravelGuide({ article }) {
  const { locale } = article;
  const copy = blogCopy[locale];
  const blocks = article.content.trim().split(/\n\s*\n/);
  const subtitle = blocks[1].replace(/^\*|\*$/g, '');
  const introduction = [], sections = [];
  for (const block of blocks.slice(3)) {
    if (block.startsWith('## ')) sections.push({ heading: block.slice(3), blocks: [] });
    else if (sections.length) sections.at(-1).blocks.push(block);
    else introduction.push(block);
  }
  const url = BLOG_ORIGIN + blogPath(article.slug, locale);
  const schema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${url}#article`,
    headline: article.title, description: article.description, url,
    datePublished: article.published, dateModified: article.modified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }, inLanguage: LANGUAGES[locale].tag,
    articleSection: article.category,
    author: { '@type': 'Person', name: 'Marina Vargas', jobTitle: copy.founder, url: `${url}#author` },
    publisher: { '@type': 'Organization', name: 'Brazil Off Script', url: BLOG_ORIGIN, logo: { '@type': 'ImageObject', url: `${BLOG_ORIGIN}/logo.png` } },
    image: [`${BLOG_ORIGIN}/blog/brazil-travel-guide-og.jpg`],
    articleBody: blocks.filter(b => !b.startsWith('::')).join('\n\n').replace(/^[#>]+ /gm, '').replace(/\*/g, ''),
  };
  return <article lang={LANGUAGES[locale].tag} className={`${styles.article} max-w-[1240px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-20`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav aria-label={copy.breadcrumb} className="text-xs text-muted flex gap-3"><Link href={localePath('/',locale)}>{copy.home}</Link><span aria-hidden="true">/</span><Link href={blogPath('',locale)}>Blog</Link><span aria-hidden="true">/</span><span>{article.category}</span></nav>
    <header className="max-w-[900px] mx-auto mt-10 sm:mt-14">
      <p className="text-terra-d uppercase tracking-[.22em] text-xs font-bold mb-5">{article.category}</p>
      <h1 className="font-serif text-[clamp(40px,5.5vw,72px)] leading-[1.02] tracking-[-.02em]">{article.title}</h1>
      <p className="font-serif italic text-[24px] sm:text-[28px] leading-snug text-ink-soft mt-6">{subtitle}</p>
      <AuthorLine article={article} />
    </header>
    <Photo id={article.cover} locale={locale} hero />
    <div className="grid lg:grid-cols-[230px_minmax(0,1fr)] gap-8 lg:gap-16 mt-10 sm:mt-14">
      <aside><nav aria-label={copy.contents} className={`${styles.toc} lg:sticky lg:top-32 border-t border-ink pt-5`}>
        <p className="text-xs uppercase tracking-[.18em] font-bold mb-3">{copy.inGuide}</p>
        <ol>{sections.slice(0,5).map((section,i) => <li key={i}><a href={`#section-${i+1}`}>{section.heading}</a></li>)}</ol>
      </nav></aside>
      <div className={styles.body}>
        <Blocks blocks={introduction} locale={locale} />
        {sections.map((section,i) => <section key={i} className={styles.section}>
          <h2 id={`section-${i+1}`}>{section.heading}</h2><Blocks blocks={section.blocks} locale={locale} />
        </section>)}
      </div>
    </div>
  </article>;
}
