import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NewsletterBand } from "@/components/layout/newsletter";
import { DESTINATIONS, CATEGORIES, TOURS, DESTINATION_HIGHLIGHTS, IMG } from "@/lib/data";

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = DESTINATIONS.find((x) => x.slug === params.slug);
  return { title: d ? d.name : "Destination" };
}

export default function DestinationPage({ params }) {
  const d = DESTINATIONS.find(x=>x.slug===params.slug);
  if (!d) return notFound();
  const cat = CATEGORIES.find(c=>c.slug===d.category);
  const highlights = DESTINATION_HIGHLIGHTS[d.slug] || [];
  const relatedTours = TOURS.filter(t => t.category===d.category || t.regions.some(r=>r.toLowerCase().includes(d.name.split(" ")[0].toLowerCase()))).slice(0,3);

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={d.img} className="w-full h-full object-cover" alt=""/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-leaf-d/65"></div>
        </div>
        <Container className="relative pt-20 pb-24 md:pt-28 md:pb-32 text-cream-50">
          <div className="text-[13px] mb-6 opacity-85">
            <Link href="/" className="underline underline-offset-4">Home</Link>
            <span className="mx-2 opacity-50">/</span>
            <Link href="/journeys" className="underline underline-offset-4">Journeys</Link>
            <span className="mx-2 opacity-50">/</span>
            <span>{d.name}</span>
          </div>
          <Badge variant="light" className="mb-5">{cat.name}</Badge>
          <h1 className="font-serif font-medium text-[clamp(40px,6.4vw,84px)] leading-[1.02] tracking-tight">{d.name}</h1>
          <p className="mt-4 max-w-2xl text-[17.5px] text-cream-50/90">{d.blurb}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/quiz" size="lg">Plan a {d.name.split(" ")[0]} trip <ArrowRight size={16}/></Button>
            <Button variant="ghostLight" size="lg" href="/contact">Talk to a local expert</Button>
          </div>
        </Container>
      </section>

      <section className="bg-paper border-b border-line">
        <Container className="py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {k:"4–9", v:"recommended days"},
            {k:"Apr–Oct", v:"best season"},
            {k:"Tailor-made", v:"every itinerary"},
            {k:cat.name, v:"collection"},
          ].map((s,i)=>(
            <div key={i} className={`${i<3?"md:border-r border-line":""} py-2`}>
              <div className="font-serif text-[28px] leading-tight text-leaf-d">{s.k}</div>
              <div className="text-[11.5px] tracking-[.14em] uppercase text-muted mt-1.5">{s.v}</div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">Why here</div>
            <h2 className="font-serif text-[clamp(28px,3.4vw,44px)] leading-tight text-ink">A region that rewards travelers who slow down.</h2>
            <p className="mt-5 text-ink-soft text-[16.5px] leading-relaxed">
              {d.name} is one of the most photographed corners of Brazil — and one of the most misunderstood. Beyond the postcards, there&apos;s a daily rhythm: family-run kitchens, river-side mornings, music that begins as background and ends as the entire room. We design trips that find that rhythm.
            </p>
            <p className="mt-4 text-ink-soft text-[16.5px] leading-relaxed">
              Every itinerary is shaped privately with one of our local experts who lives, eats, and works in the region — not a remote desk.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-3 gap-2.5">
            <img src={IMG.beach} className="rounded-xl aspect-square object-cover col-span-1" alt=""/>
            <img src={IMG.market} className="rounded-xl aspect-square object-cover col-span-1" alt=""/>
            <img src={IMG.food} className="rounded-xl aspect-square object-cover col-span-1" alt=""/>
            <img src={d.img} className="rounded-xl col-span-2 aspect-[2/1] object-cover" alt=""/>
            <img src={IMG.bossa} className="rounded-xl aspect-square object-cover col-span-1" alt=""/>
          </div>
        </Container>
      </section>

      {highlights.length>0 && (
        <section className="bg-paper py-20">
          <Container>
            <SectionHead eyebrow="Off-script highlights" title="The things we'd build your trip around." />
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {highlights.map((h, i)=>(
                <div key={i} className="bg-cream-50 border border-line rounded-2xl p-6 flex gap-5">
                  <div className="flex-none w-10 h-10 rounded-full bg-terra/15 text-terra-d flex items-center justify-center font-serif text-[20px]">{i+1}</div>
                  <div>
                    <div className="font-semibold text-ink text-[16.5px]">{h.t}</div>
                    <p className="mt-1.5 text-[14.5px] text-ink-soft leading-relaxed">{h.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <SectionHead eyebrow="Sample itineraries" title={`Starting points for ${d.name}`} sub="Every trip is custom — these show the shape of what's possible."/>
            <Button variant="ghost" href="/tours">All tours <ArrowRight size={16}/></Button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {(relatedTours.length?relatedTours:TOURS.slice(0,3)).map(t=>(
              <Link key={t.slug} href={`/tours/${t.slug}`} className="group">
                <Card>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={t.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] tracking-[.16em] uppercase text-terra font-semibold">{t.days} days</div>
                    <h3 className="font-serif text-[22px] text-ink mt-1.5">{t.title}</h3>
                    <p className="mt-1.5 text-[14.5px] text-ink-soft leading-relaxed">{t.blurb}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <NewsletterBand/>
    </>
  );
}
