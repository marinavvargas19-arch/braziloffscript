import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQS, SITE } from "@/lib/data";

export const metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <section className="bg-paper border-b border-line">
        <Container className="py-16">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">FAQ</div>
          <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-tight text-ink">Common questions, honest answers.</h1>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="font-serif text-[22px] text-ink">Still have questions?</h3>
            <p className="mt-3 text-ink-soft text-[15px] leading-relaxed">There&apos;s a real human at the other end. We answer everything within one business day — usually the same hour.</p>
            <div className="mt-6 space-y-3">
              <Button href="/contact" className="w-full justify-center">Send us a message</Button>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 transition">WhatsApp us</a>
            </div>
            <div className="mt-7 pt-6 border-t border-line text-[13.5px] text-ink-soft">
              <div className="flex items-center gap-2 mb-2"><Mail size={16}/> {SITE.email}</div>
              <div className="flex items-center gap-2"><Phone size={16}/> {SITE.phone}</div>
            </div>
          </div>
          <div className="md:col-span-8">
            <Accordion items={FAQS}/>
          </div>
        </Container>
      </section>
    </>
  );
}
