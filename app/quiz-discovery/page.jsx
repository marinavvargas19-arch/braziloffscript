import { languageAlternates } from "@/lib/i18n";
import QuizDiscoveryClient from "@/components/quiz-discovery-client";

export const metadata = { title: "Which Brazil is calling you?", alternates: { canonical: "/quiz-discovery", languages: languageAlternates("/quiz-discovery") } };

export default function Page() {
  return <QuizDiscoveryClient />;
}
