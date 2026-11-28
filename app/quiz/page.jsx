import { languageAlternates } from "@/lib/i18n";
import QuizClient from "@/components/quiz-client";

export const metadata = { title: "Find your journey", alternates: { canonical: "/quiz", languages: languageAlternates("/quiz") } };

export default function Page() {
  return <QuizClient />;
}
