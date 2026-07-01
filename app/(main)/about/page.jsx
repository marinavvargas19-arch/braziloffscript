import { Container, SectionHead } from "@/components/ui/section";
import { NewsletterBand } from "@/components/layout/newsletter";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";
import { Sparkles, Users, Compass, Heart, Shield, Phone, ArrowRight } from "lucide-react";

export const metadata = { title: "About us — Brazil Off Script" };

const HOW_STEPS = [
  { n: "01", t: "Tell us your dream",      d: "Take our 60-second quiz, or send us a note. We'll learn about your style, pace, and what kind of Brazil you're imagining.",                                                     icon: Sparkles },
  { n: "02", t: "Meet your local expert",  d: "You're matched with a Brazil-based destination expert in the region(s) you want to explore. Real human, not a chatbot — and never a call center.",                             icon: Users    },
  { n: "03", t: "We design a draft",       d: "Within 48 hours, your expert sends a personalized proposal — accommodations, transfers, experiences, costs. Transparent, no obligation.",                                      icon: Compass  },
  { n: "04", t: "Refine it together",      d: "Unlimited revisions until it feels right. Move days, swap stays, add or remove experiences — we iterate as long as you need.",                                                 icon: Heart    },
  { n: "05", t: "Pay & relax",             d: "Confirm with a deposit through a secure payment link. We book and confirm everything, send your final document, and stay on call.",                                            icon: Shield   },
  { n: "06", t: "Travel, fully supported", d: "24/7 in-country contact during your trip. Things change, weather happens, plans flex. We handle it — you keep traveling.",                                                    icon: Phone    },
];

const GALLERY = [
  "/start-beach.jpg", "/iguazu.jpg", "/the-explorer.jpg", "/noronha.jpg",
  "/pantanal.jpg",    "/jaguar.jpg", "/paradise-found.jpg", "/central-brazil.jpg",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="/quiz-region-left.jpg" className="w-full h-full object-cover" alt="Lençóis Maranhenses dunes and lagoons"/>
          <div className="absolute inset-0 bg-leaf-d/55"/>
        </div>
        <Container className="relative py-20 md:py-24 text-cream-50">
          <div className="text-[11px] tracking-[.22em] uppercase opacity-85 mb-3">About us</div>
          <h1 className="font-serif font-medium text-[clamp(32px,4vw,54px)] leading-[1.06] tracking-tight">Brazil, off script.</h1>
          <p className="mt-5 max-w-2xl text-cream-50/90 text-[17px] leading-relaxed">
            We create immersive journeys designed to reveal a more authentic, emotional, and <strong>meaningful side of Brazil</strong> — uncovering places, stories, and experiences hidden even from many Brazilians.
          </p>
        </Container>
      </section>

      {/* Philosophy + gallery */}
      <section className="py-24">
        <Container className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHead eyebrow="Our Philosophy" title="Travel beyond the obvious."/>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
            <div>
              <div className="text-terra font-bold text-[14px] tracking-wide uppercase mb-2">Beyond the obvious</div>
              <p className="text-ink-soft text-[16.5px] leading-relaxed">We design journeys around the parts of Brazil that don&apos;t make it onto first-time itineraries — and then we layer in the icons, but quieter and at the right hour.</p>
            </div>
            <div>
              <div className="text-terra font-bold text-[14px] tracking-wide uppercase mb-2">Real connections, tailored for you</div>
              <p className="text-ink-soft text-[16.5px] leading-relaxed">Beyond tourist checklists. Beyond generic itineraries. Beyond the expected. Beyond what your friend posted on Instagram last summer.</p>
            </div>
          </div>
        </Container>

        <Container className="mt-16">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl aspect-square">
                <img src={src} alt="" className="w-full h-full object-cover transition duration-700 hover:scale-105"/>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What makes us different */}
      <section className="bg-leaf-d text-cream-50 py-24">
        <Container>
          <SectionHead
            eyebrow="What makes us different"
            title="Unlike traditional travel agencies, Brazil Off Script focuses on:"
            center eyebrowColor="terra"
            titleClassName="!text-cream-50"
          />
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              { n:"1", t:"Hidden destinations and unique experiences",    d:"We take you beyond the obvious to discover the real Brazil." },
              { n:"2", t:"Boutique and carefully selected accommodations", d:"Handpicked stays that reflect the charm and authenticity of each region." },
              { n:"3", t:"Flexible and personalized itineraries",         d:"Every trip is tailored to your style, pace, and interests." },
              { n:"4", t:"Authentic Brazilian culture and lifestyle",      d:"Connect with local communities and immerse yourself in vibrant traditions." },
              { n:"5", t:"A balance between sophistication and adventure", d:"From luxury to exploration, we craft the perfect balance for you." },
              { n:"6", t:"Slow travel and meaningful experiences",        d:"We believe the best journeys are the ones that stay with you forever." },
            ].map((it, i) => (
              <div key={i} className="rounded-2xl bg-cream-50/5 border border-cream-50/10 p-7">
                <div className="font-serif text-[48px] leading-none text-gold">{it.n}</div>
                <div className="font-semibold mt-3 text-cream-50 text-[16.5px]">{it.t}</div>
                <p className="mt-2 text-cream-50/80 text-[14.5px] leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works — intro */}
      <section id="how" className="bg-paper border-y border-line">
        <Container className="py-16 md:py-24">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">How it works</div>
          <h2 className="font-serif text-[clamp(34px,4.6vw,60px)] leading-[1.04] text-ink max-w-3xl">
            From &ldquo;I&apos;m thinking about Brazil&rdquo; to{" "}
            <em className="not-italic text-leaf">&ldquo;I can&apos;t believe that just happened&rdquo;</em> in six steps.
          </h2>
          <p className="mt-5 max-w-2xl text-ink-soft text-[17px] leading-relaxed">
            Designing a tailor-made trip should feel like working with a curious friend who happens to know everyone — not like filling out an online form. Here&apos;s the process.
          </p>
        </Container>
      </section>

      {/* How it works — steps */}
      <section className="py-20">
        <Container>
          <div className="space-y-5">
            {HOW_STEPS.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.n} className="grid md:grid-cols-12 gap-6 bg-paper border border-line rounded-2xl p-7 md:p-9">
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
                    <div className="font-serif text-[44px] leading-none text-terra">{s.n}</div>
                    <div className="w-10 h-10 rounded-full bg-leaf/10 text-leaf-d flex items-center justify-center">
                      <Icon size={18}/>
                    </div>
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

      {/* How it works — CTA */}
      <section className="pb-20">
        <Container className="text-center">
          <h2 className="font-serif text-[clamp(28px,3.4vw,42px)] text-ink">Ready when you are.</h2>
          <p className="mt-3 text-ink-soft max-w-xl mx-auto">Take the 60-second quiz, browse our journeys, or talk to a human.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/start" size="lg">Take the quiz <Sparkles size={16}/></Button>
            <Button variant="ghost" size="lg" href={`https://wa.me/${SITE.whatsapp}`}>Talk to a human <ArrowRight size={16}/></Button>
          </div>
        </Container>
      </section>

      <NewsletterBand/>
    </>
  );
}
