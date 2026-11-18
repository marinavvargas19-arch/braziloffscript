import QuizClient from "@/components/quiz-client";

export const metadata = {
  title: "Diseña tu viaje",
  alternates: { canonical: "/es/quiz", languages: { en: "/quiz", "es-ES": "/es/quiz" } },
};

export default function Page() {
  return <QuizClient locale="es" />;
}
