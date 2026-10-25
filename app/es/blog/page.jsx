import BlogList from "@/components/blog-list";

export const metadata = {
  title: "Historias",
  alternates: { canonical: "/es/blog", languages: { en: "/blog", "es-ES": "/es/blog" } },
};

export default function Page() {
  return <BlogList locale="es" />;
}
