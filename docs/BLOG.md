# Official travel blog

The implementation in PR #3 (`restore-blog-travel-guide`) was reviewed before this version was built. Its abbreviated draft has been replaced by the owner's complete official English article and a full Spanish translation. The original generic posts are not registered and return 404.

## Add an article

1. Add a record to `articles` in `lib/blog.js`, including both locale metadata, a stable slug, real publication/modification dates and the cover key.
2. Add `content/blog/<slug>.en.md` and `<slug>.es.md`. The first blocks are H1, italic subtitle and `::photo <cover-key>`.
3. Use H2 for sections and H3 for subsections. The first five H2s populate this guide's contents navigation. The shared index automatically lists registered articles.
4. Supported blocks: paragraphs, `**strong**`, `*emphasis*`, bullet lists, `> callouts`, `::photo <key>`, `::gallery <key> <key>`, `::tour /tours/<slug>`, `::cta <button text>` and `::quiz <button text>`. CTA goes directly to the localized custom-trip questionnaire; quiz goes to the localized 60-second discovery quiz (`/quiz-discovery`).
5. Add verified photo metadata and credits to `lib/blog-photos.js`. Run `node scripts/optimize-blog-images.mjs` to create responsive WebP files. Preserve original source files and license records. New article-specific Open Graph artwork should be added to the shared metadata renderer when publishing another article.
6. Build with `npm run build`. Check both locales, original text, headings, image alt text, contents anchors, mobile menu, internal tour links, CTA, canonical, hreflang, Open Graph, BlogPosting and sitemap. No admin or API URLs belong in the sitemap.

The initial English source preserves the owner's text. Editorial image placeholders were replaced by directives; the visual-highlight instruction became a blockquote. Only additional tour-link blocks were inserted. No original prose was summarized.

The site's existing Cormorant Garamond and Quicksand Latin font files are now served locally with their OFL licenses because Google Fonts returned a response incompatible with the existing Next.js font loader during a clean production build. Typography, colors and unrelated functionality are retained.
