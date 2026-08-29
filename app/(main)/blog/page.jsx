import BlogList from "@/components/blog-list";

export const metadata = { title: "Stories", alternates: { canonical: "/blog", languages: { en: "/blog", "es-ES": "/es/blog" } } };

export default function Page() {
  return <BlogList />;
}
