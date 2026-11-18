import QuizDiscoveryClient from "@/components/quiz-discovery-client";

export const metadata = { title: "Which Brazil is calling you?", alternates: { canonical: "/quiz-discovery", languages: { en: "/quiz-discovery", "es-ES": "/es/quiz-discovery" } } };

export default function Page() {
  return <QuizDiscoveryClient />;
}
