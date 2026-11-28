import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "@/lib/data";

const serif = localFont({
  src: [
    { path: './fonts/cormorant-garamond-latin.woff2', weight: '400 600', style: 'normal' },
    { path: './fonts/cormorant-garamond-italic-latin.woff2', weight: '400 600', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
});
const sans = localFont({
  src: './fonts/quicksand-latin.woff2',
  weight: '400 700',
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — Tailor-made Brazil, planned by locals`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    url: SITE.url,
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
