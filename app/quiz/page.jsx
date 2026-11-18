import QuizClient from "@/components/quiz-client";

export const metadata = { title: "Find your journey", alternates: { canonical: "/quiz", languages: { en: "/quiz", "es-ES": "/es/quiz" } } };

export default function Page() {
  return <QuizClient />;
}
