import { Sparkles, Users, Compass, Heart, Shield, Phone, ArrowRight } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = { title: "How it works" };

const steps = [
  { n:"01", t:"Tell us your dream", d:"Take our 60-second quiz, or send us a note. We'll learn about your style, pace, and what kind of Brazil you're imagining." },
  { n:"02", t:"Meet your local expert", d:"You're matched with a Brazil-based destination expert in the region(s) you want to explore. Real human, not a chatbot — and never a call center." },
  { n:"03", t:"We design a draft", d:"Within 48 hours, your expert sends a personalized proposal — accommodations, transfers, experiences, costs. Transparent, no obligation." },
  { n:"04", t:"Refine it together", d:"Unlimited revisions until it feels right. Move days, swap stays, add or remove experiences — we iterate as long as you need." },
  { n:"05", t:"Pay & relax", d:"Confirm with a deposit through a secure payment link. We book and confirm everything, send your final document, and stay on call." },
  { n:"06", t:"Travel, fully supported", d:"24/7 in-country contact during your trip. Things change, weather happens, plans flex. We handle it — you keep traveling." },
];

const stepIcons = [Sparkles, Users, Compass, Heart, Shield, Phone];

export default function HowPage() {
  return (
    <>
      <section className="bg-paper border-b border-line">
        <Container className="py-16 md:py-24">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">How it works</div>
          <h1 className="font-serif text-[clamp(36px,5vw,68px)] leading-[1.04] text-ink max-w-3xl">From &quot;I&apos;m thinking about Brazil&quot; to <em className="not-italic text-leaf">&quot;I can&apos;t believe that just happened&quot;</em> in six steps.</h1>
          <p className="mt-5 max-w-2xl text-ink-soft text-[17px] leading-relaxed">Designing a tailor-made trip should feel like working with a curious friend who happens to know everyone — not like filling out an online form. Here&apos;s the process.</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="space-y-5">
            {steps.map((s,i)=>{
              const Icon = stepIcons[i];
              return (
                <div key={s.n} className="grid md:grid-cols-12 gap-6 bg-paper border border-line rounded-2xl p-7 md:p-9">
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
                    <div className="font-serif text-[44px] leading-none text-terra">{s.n}</div>
                    <div className="w-10 h-10 rounded-full bg-leaf/10 text-leaf-d flex items-center justify-center"><Icon size={18}/></div>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-serif text-[clamp(22px,2.4vw,30px)] text-ink leading-tight">{s.t}</h3>
                    <p className="mt-3 text-ink-soft text-[16.5px] leading-relaxed max-w-3xl">{s.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 border-y border-line">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <SectionHead eyebrow="Transparent pricing" title="What does a tailor-made trip cost?"/>
              <p className="mt-5 text-ink-soft text-[16.5px] leading-relaxed">Most clients spend US$ 350–750 per person per day depending on style of stay and how much private guiding is included. We always send a transparent breakdown — line by line — before you commit anything.</p>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-3 gap-4">
              {[
                {l:"Comfort", from:"350", d:"Boutique 4★ stays, mix of group and private experiences"},
                {l:"Premium", from:"550", d:"Hand-picked 5★ & design hotels, mostly private"},
                {l:"Luxury",  from:"950", d:"Top of market, fully private, premium add-ons"},
              ].map(t=>(
                <div key={t.l} className="bg-cream-50 border border-line rounded-2xl p-6">
                  <div className="font-serif text-[22px] text-ink">{t.l}</div>
                  <div className="font-serif text-[34px] mt-2 text-leaf-d">US$ {t.from}<span className="text-[14px] text-muted font-sans"> /pp/day</span></div>
                  <p className="mt-3 text-[14px] text-ink-soft leading-relaxed">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="text-center">
          <h2 className="font-serif text-[clamp(28px,3.4vw,42px)] text-ink">Ready when you are.</h2>
          <p className="mt-3 text-ink-soft max-w-xl mx-auto">Take the 60-second quiz, browse our journeys, or talk to a human.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/quiz" size="lg">Take the quiz <Sparkles size={16}/></Button>
            <Button variant="ghost" size="lg" href="/contact">Talk to a human <ArrowRight size={16}/></Button>
          </div>
        </Container>
      </section>
    </>
  );
}
