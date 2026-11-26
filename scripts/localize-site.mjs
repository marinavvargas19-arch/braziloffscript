import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import ts from "typescript";

const locales = ["pt", "fr", "it"];
const pages = [
  "about", "contact", "corporate-events", "destinations/[slug]", "faq",
  "journeys", "journeys/[slug]", "talk-to-human", "tours", "tours/[slug]",
  "quiz", "quiz-discovery", "start",
];
const immersive = new Set(["quiz", "quiz-discovery", "start"]);
const modules = [
  "lib/data.js", "lib/corporate-events.js",
  ...[
    "bahia-offsites", "booking-panel", "contact-client", "corporate-events",
    "corporate-inquiry", "itinerary-accordion", "journeys-list", "quiz-client",
    "quiz-discovery-client", "quiz-visuals", "tour-page-content", "tours-list",
    "layout/footer", "layout/header", "layout/newsletter", "layout/wa-fab",
  ].map(name => `components/${name}.jsx`),
];
const routeSource = page => `app/${immersive.has(page) ? "" : "(main)/"}${page}/page.jsx`;
const alias = file => `@/${file.replace(/\.[^.]+$/, "")}`;
const translatedModules = new Map(modules.map(file => [alias(file), file]));
const inventory = new Set();
const homeMetadata = {
  pt: ["Viagens sob medida pelo Brasil", "Descubra o Brasil com viagens privativas sob medida, criadas por especialistas locais."],
  fr: ["Voyages sur mesure au Brésil", "Découvrez le Brésil avec des voyages privés sur mesure, conçus par des spécialistes locaux."],
  it: ["Viaggi su misura in Brasile", "Scopri il Brasile con viaggi privati su misura, progettati da esperti locali."],
};
const layoutSource = "app/(main)/layout.jsx";
const displayAttributes = new Set(["alt", "aria-label", "placeholder", "title", "eyebrow", "sub", "label", "summary"]);
const technicalValues = new Set([
  "Brazil Off Script", "WhatsApp", "Trancoso", "Fernando de Noronha", "Espírito Santo",
  "Rio de Janeiro", "Porto Seguro", "Cumbuco", "Bahia", "Ceará", "Brasil",
  "E-mail", "Content-Type", "application/json", "US",
  "Escape", "Enter", "ArrowLeft", "ArrowRight", "PDF", "UTC", "Newsletter",
]);
const copyWords = new Set(["days", "day", "nights", "night", "from", "per person", "all-inclusive", "offsite", "offsites", "pace", "stays", "destinations"]);
const technicalProperties = new Set([
  "className", "id", "key", "slug", "src", "img", "image", "url", "icon",
  "color", "class", "value", "method", "source", "leadOrigin", "href",
  "type", "locale", "siteName", "card", "k", "currency", "regionWords",
]);

function isRoute(value) {
  return /^\/(?:$|(?:about|contact|corporate-events|destinations|faq|journeys|talk-to-human|tours|quiz|quiz-discovery|start)(?:[/?#]|$))/.test(value);
}

function shouldTranslate(value, node) {
  const clean = value.trim();
  if (/\.webp|data:|\.jpg|\.png/.test(clean) || technicalValues.has(clean) || !/\p{L}/u.test(clean)) return false;
  if (/^(?:[\/#@]|[+\-]?\d{2,}(?:[ -]\d){2}|https?:|mailto:|tel:|[a-z0-9._-]+@[a-z0-9._-]+)/i.test(clean)) return false;
  if ((!copyWords.has(clean) && /^[a-z][a-z0-9_./-]*$/.test(clean)) || /^(?:\w+\/)+\w+$/.test(clean)) return false;
  const parent = node.parent;
  if (clean === "use client" || clean === "use server") return false;
  if (ts.isBinaryExpression(parent) || ts.isCaseClause(parent) || ts.isElementAccessExpression(parent)) return false;
  if (ts.isPropertyAssignment(parent) && technicalProperties.has(parent.name.getText().replace(/['"]/g, ""))) return false;
  if (ts.isJsxAttribute(parent) && !displayAttributes.has(parent.name.getText())) return false;
  if (ts.isCallExpression(parent) && !["encodeURIComponent", "setSubmitError"].includes(parent.expression.getText())) return false;
  return !/^(?:[a-z]{2}[-_][A-Z]{2}|US\$\{)/.test(clean);
}

function transform(file, locale, dictionary) {
  const input = readFileSync(file, "utf8");
  const source = ts.createSourceFile(file, input, ts.ScriptTarget.Latest, true, ts.ScriptKind.JSX);
  const changes = [];
  const replace = (node, value, start = node.getStart(source)) =>
    changes.push({ start, end: node.end, value });
  const lookup = value => {
    if (!value.trim()) return value;
    const key = value.trim();
    inventory.add(key);
    const translated = dictionary[key]?.replaceAll("▁", " ").replace(/ {2,}/g, " ").trim();
    return translated ? value.replace(key, () => translated) : value;
  };

  function visit(node) {
    if (ts.isConditionalExpression(node) && /^(?:es|locale === ["']es["'])$/.test(node.condition.getText(source))) {
      visit(node.whenFalse);
      return;
    }
    if (ts.isVariableDeclaration(node) && ["BLOG_POSTS", "CONTACT_METHOD_LABELS"].includes(node.name.getText())) return;
    if (ts.isVariableDeclaration(node) && ["regionWords", "styleWords"].includes(node.name.getText()) &&
        node.initializer && ts.isObjectLiteralExpression(node.initializer)) return;
    if (ts.isPropertyAssignment(node) && node.name.getText() === "es" && ts.isObjectLiteralExpression(node.initializer)) return;
    if (ts.isImportDeclaration(node)) {
      const dependency = translatedModules.get(node.moduleSpecifier.text);
      if (dependency) replace(node.moduleSpecifier, JSON.stringify(`@/lib/localized/${locale}/${dependency.replace(/\.[^.]+$/, "")}`));
      return;
    }
    if (ts.isJsxText(node)) {
      const raw = node.getFullText(source);
      const normalized = raw.trim().replace(/\s+/g, " ");
      if (shouldTranslate(normalized, node)) {
        const translated = lookup(normalized);
        if (translated !== normalized) {
          const escaped = translated.replace(/[&<>{}]/g, char => `&#${char.charCodeAt(0)};`);
          replace(node, raw.replace(raw.trim(), () => escaped), node.getFullStart());
        }
      }
      return;
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const parent = node.parent;
      if ((ts.isPropertyAssignment(parent) && parent.name === node) || ts.isLiteralTypeNode(parent) || input.slice(node.getStart(), node.end) === '"use client"') return;
      const text = node.text;
      let value = text;
      if (text === "en") value = locale;
      else if (text === "en_US") value = locale === "pt" ? "pt_BR" : locale === "fr" ? "fr_FR" : "it_IT";
      else if (isRoute(text) && !ts.isVariableDeclaration(parent) && !ts.isBinaryExpression(parent) && !(ts.isPropertyAssignment(parent) && parent.name.getText() === "href" && file.endsWith("/header.jsx")) && !(ts.isCallExpression(parent) && ["localePath", "languageAlternates"].includes(parent.expression.getText()))) value = `/${locale}${text === "/" ? "" : text}`;
      else if (!(ts.isPropertyAssignment(parent) && parent.name.getText() === "value") && shouldTranslate(text, node)) value = lookup(text);
      if (value !== text) replace(node, ts.isJsxAttribute(parent) ? `{${JSON.stringify(value)}}` : JSON.stringify(value));
      return;
    }
    if (ts.isTemplateExpression(node)) {
      if (isRoute(node.head.text) && !(ts.isCallExpression(node.parent) && ["localePath", "languageAlternates"].includes(node.parent.expression.getText()))) {
        changes.push({ start: node.getStart() + 1, end: node.getStart() + 1, value: `/${locale}` });
      } else if (!/^\s*(?:[\/#@?]|https?:|mailto:|tel:)/.test(node.head.text)) {
        for (const part of [node.head, ...node.templateSpans.map(span => span.literal)]) {
          if (!/\p{L}/u.test(part.text) || !/\s/.test(part.text) || /^\s*(?:[=&?]|[a-z-]+:)/.test(part.text)) continue;
          const value = lookup(part.text);
          if (value !== part.text) {
            const start = part.getStart(source) + 1;
            const end = part.end - (part.kind === ts.SyntaxKind.TemplateTail ? 1 : 2);
            changes.push({ start, end, value: value.replace(/[\\`]/g, "\\$&").replace(/\$\{/g, "\\${") });
          }
        }
      }
      for (const span of node.templateSpans) visit(span.expression);
      return;
    }
    ts.forEachChild(node, visit);
  }

  visit(source);
  return changes.sort((a, b) => b.start - a.start).reduce(
    (output, change) => output.slice(0, change.start) + change.value + output.slice(change.end),
    input,
  );
}

function write(file, content) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

for (const locale of locales) {
  const extract = process.argv.includes("--extract");
  const dictionary = extract ? {} : JSON.parse(readFileSync(`content/locales/${locale}.json`, "utf8"));
  for (const file of modules) {
    const output = transform(file, locale, dictionary);
    if (!extract) write(`lib/localized/${locale}/${file}`, output);
  }
  for (const page of pages) {
    const output = transform(routeSource(page), locale, dictionary);
    if (!extract) write(`app/${locale}/${immersive.has(page) ? "" : "(localized)/"}${page}/page.jsx`, output);
  }
  if (!extract) {
    const chrome = transform(layoutSource, locale, dictionary).replace(
      "<div className=", `<div lang={${JSON.stringify(locale === "pt" ? "pt-BR" : locale)}} className=`,
    );
    write(`app/${locale}/(localized)/layout.jsx`, chrome);
    write(`app/${locale}/(localized)/blog/page.jsx`, `import { BlogHome, blogMetadata } from "@/components/travel-guide";

export const metadata = blogMetadata("${locale}");
export default function Page() { return <BlogHome locale="${locale}" />; }
`);
    write(`app/${locale}/(localized)/blog/[slug]/page.jsx`, `import { notFound } from "next/navigation";
import TravelGuide, { guideMetadata } from "@/components/travel-guide";
import { articles, getArticle } from "@/lib/blog";

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) { return guideMetadata((await params).slug, "${locale}"); }
export default async function Page({ params }) {
  const article = getArticle((await params).slug, "${locale}");
  if (!article) notFound();
  return <TravelGuide article={article} />;
}
`);
    const [title, description] = homeMetadata[locale];
    write(`app/${locale}/(localized)/page.jsx`, `import HomePage from "@/app/(main)/page";
import { homeLanguages } from "@/lib/i18n";
import { NewsletterBand } from "@/lib/localized/${locale}/components/layout/newsletter";

export const metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  alternates: { canonical: "/${locale}", languages: homeLanguages },
};

export default function Page() {
  return <HomePage locale="${locale}" Newsletter={NewsletterBand} />;
}
`);

  }
  if (extract) {
    console.log(JSON.stringify([...inventory].sort(), null, 2));
    break;
  }
}
