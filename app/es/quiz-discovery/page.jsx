import QuizDiscoveryClient from "@/components/quiz-discovery-client";

export const metadata = {
  title: "¿Qué Brasil te está llamando?",
  alternates: { canonical: "/es/quiz-discovery", languages: { en: "/quiz-discovery", "es-ES": "/es/quiz-discovery" } },
};

export default function Page() {
  return <QuizDiscoveryClient locale="es" />;
}
