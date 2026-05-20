import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <div className="font-serif text-[120px] leading-none text-leaf-d/30">404</div>
      <h1 className="font-serif text-[34px] mt-4 text-ink">This page wandered off script.</h1>
      <p className="mt-3 text-ink-soft max-w-md mx-auto">The page you&apos;re looking for doesn&apos;t exist (or it&apos;s still in our heads). Head home and try again.</p>
      <Button href="/" className="mt-8">Back home <ArrowRight size={16}/></Button>
    </Container>
  );
}
