import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, Shield, Leaf } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { NewsletterBand } from "@/components/layout/newsletter";
import { IMG, CATEGORIES, TOURS, EXPERTS, REVIEWS, BLOG_POSTS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image src={IMG.rioSugar} alt="" fill className="object-cover" priority sizes="100vw"/>
          <div className="absolute inset-0 bg-gradient-to-b from-leaf-d/30 via-leaf-d/15 to-leaf-d/65"></div>
        </div>
        <div className="relative">
          <Container className="pt-28 pb-32 md:pt-36 md:pb-44">
            <div className="max-w-3xl text-cream-50">
              <Badge variant="light" className="mb-6"><span className="w-1.5 h-1.5 rounded-full bg-terra"></span> Tailor-made Brazil, planned by locals</Badge>
              <h1 className="font-serif font-medium leading-[1.02] tracking-tight text-[clamp(40px,6.4vw,86px)]">
                Brazil is more <br/>than a destination <br/>— it&apos;s a <em className="not-italic text-gold">feeling.</em>
              </h1>
              <p className="mt-7 max-w-xl text-[17.5px] leading-relaxed text-cream-50/90">
                The warmth of the people, the spontaneity, the joy, the music, the flavors, the breathtaking natural beauty, the lifestyle, the emotional connection that make Brazil truly unique. <br/><span className="font-semibold">This is Brazil, off script.</span>
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/quiz" size="lg">Design your journey <ArrowRight size={16}/></Button>
                <Button variant="ghostLight" size="lg" href="/journeys">Explore our journeys</Button>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-6 text-cream-50/85 text-[13px]">
                <div className="flex items-center gap-2"><div className="flex">{[0,0,0,0,0].map((_,i)=><Star key={i} size={14} className="text-gold fill-gold"/>)}</div> <span>4.96 · 320+ guests</span></div>
                <div className="hidden sm:flex items-center gap-2"><Shield size={14}/> Financially protected</div>
                <div className="hidden md:flex items-center gap-2"><Leaf size={14}/> Sustainable stays</div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-paper border-b border-line">
        <Container className="py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {k:"12+", v:"years curating Brazil"},
            {k:"320+", v:"trips designed"},
            {k:"4.96 ★", v:"avg guest rating"},
            {k:"48h", v:"reply guarantee"},
          ].map((s,i)=>(
            <div key={i} className={`${i<3?"md:border-r border-line":""} py-2`}>
              <div className="font-serif text-[34px] leading-none text-leaf-d">{s.k}</div>
              <div className="text-[12px] tracking-[.14em] uppercase text-muted mt-1.5">{s.v}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* Method */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-7">
              <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-4">Our Essence</div>
              <h2 className="font-serif text-[clamp(34px,4.6vw,58px)] leading-[1.05] tracking-tight text-ink text-balance">
                The way we believe Brazil <em className="not-italic text-leaf">should be experienced.</em>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-[17px] leading-relaxed text-ink-soft max-w-xl">
                We go beyond the obvious to connect you with the real Brazil — crafted with care, soul, and local perspective. Every journey is built around six commitments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {n:"01", t:"Feel Brazil, not just visit", c:"terra", d:"We design experiences that leave you feeling Brazil — not just photographing it." },
              {n:"02", t:"Beyond the obvious",          c:"leaf",  d:"We move past checklists. Every itinerary is intentionally curated to reveal a more authentic country." },
              {n:"03", t:"Real connections",            c:"gold",  d:"Meaningful local encounters and memorable stories over mass tourism. Always." },
              {n:"04", t:"Tailored for you",            c:"azul",  d:"Built around your interests, pace, travel style, and desired level of comfort — no templates." },
              {n:"05", t:"Curated by locals",           c:"terra", d:"Itineraries are built from local knowledge, trusted connections, and real cultural immersion." },
              {n:"06", t:"Slow & meaningful",           c:"leaf",  d:"We believe the best journeys are the ones that stay with you forever — not the ones that exhaust you." },
            ].map((it)=>(
              <div key={it.n} className="bg-paper border border-line rounded-2xl p-7 flex gap-5 transition hover:shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)] hover:-translate-y-0.5">
                <div className={`font-serif text-[44px] leading-none ${it.c==="terra"?"text-terra":it.c==="leaf"?"text-leaf":it.c==="gold"?"text-[#b88a3f]":"text-azul"}`}>{it.n}</div>
                <div>
                  <div className="font-semibold text-ink text-[16.5px]">{it.t}</div>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Three collections */}
      <section className="bg-paper py-24">
        <Container>
          <SectionHead eyebrow="Our Journeys" title="Three ways to experience Brazil" sub="Signature collections, thoughtfully curated to reveal different sides of the country." center/>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {CATEGORIES.map((c, i)=>{
              const heroImg = i===0?IMG.rioSugar : i===1?IMG.amazon : IMG.noronha;
              const overlay = c.color==="terra" ? "from-terra/90" : c.color==="leaf" ? "from-leaf/90" : "from-azul/90";
              return (
                <Link key={c.slug} href={`/journeys/${c.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[3/4] block">
                  <Image src={heroImg} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.06]" sizes="(min-width: 768px) 33vw, 100vw"/>
                  <div className={`absolute inset-0 bg-gradient-to-t ${overlay} via-black/20 to-transparent`}></div>
                  <div className="absolute inset-0 p-7 flex flex-col justify-end text-cream-50">
                    <div className="text-[11px] tracking-[.22em] uppercase opacity-90 mb-2">Collection 0{i+1}</div>
                    <div className="font-serif text-[32px] leading-tight">{c.name}</div>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-cream-50/90 max-w-xs">{c.tagline}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold">Discover <ArrowRight size={16} className="transition group-hover:translate-x-1"/></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Quiz CTA */}
      <section className="bg-leaf-d text-cream-50 overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-center py-24">
            <div className="md:col-span-6">
              <Badge variant="light" className="!bg-cream-50/15 !text-cream-50">Quiz · 60 seconds</Badge>
              <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-tight mt-5">Start your <em className="not-italic text-gold">journey match.</em></h2>
              <p className="mt-5 text-cream-50/85 text-[17px] leading-relaxed max-w-lg">
                Discover the side of Brazil that matches your travel style. Answer a few quick questions and we&apos;ll curate the journeys, destinations, and experiences that fit you best.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/quiz" size="lg">Find my journey <Sparkles size={16}/></Button>
                <Button href="/journeys" variant="ghostLight" size="lg">Browse first</Button>
              </div>
            </div>
            <div className="md:col-span-6 grid grid-cols-3 gap-3 md:gap-4">
              <img src={IMG.rioChrist} className="rounded-xl col-span-1 row-span-2 h-full object-cover" alt=""/>
              <img src={IMG.beach} className="rounded-xl object-cover aspect-square" alt=""/>
              <img src={IMG.amazon} className="rounded-xl row-span-2 h-full object-cover" alt=""/>
              <img src={IMG.salvador} className="rounded-xl object-cover aspect-square" alt=""/>
              <img src={IMG.market} className="rounded-xl col-span-1 object-cover aspect-square" alt=""/>
              <img src={IMG.lencois} className="rounded-xl col-span-1 object-cover aspect-square" alt=""/>
              <img src={IMG.pantanal} className="rounded-xl col-span-1 object-cover aspect-square" alt=""/>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured tours */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <SectionHead eyebrow="Featured Tours" title="Hand-picked starting points" sub="Each itinerary is fully tailor-made — these are just a place to begin."/>
            <Button variant="ghost" href="/tours">See all 10 tours <ArrowRight size={16}/></Button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TOURS.slice(0,3).map(t=>(
              <Link key={t.slug} href={`/tours/${t.slug}`} className="group">
                <Card>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={t.img} alt="" className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"/>
                    <div className="absolute top-4 left-4"><Badge variant="light">{t.days} days</Badge></div>
                  </div>
                  <div className="p-6">
                    <div className="text-[11.5px] tracking-[.16em] uppercase text-terra font-semibold">{CATEGORIES.find(c=>c.slug===t.category).name}</div>
                    <h3 className="font-serif text-[24px] mt-1.5 text-ink leading-tight">{t.title}</h3>
                    <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed">{t.blurb}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="text-[13px] text-muted">From <span className="text-ink font-semibold">US$ {t.price.toLocaleString()}</span></div>
                      <span className="inline-flex items-center gap-1.5 text-terra font-semibold text-[14px] group-hover:gap-2.5 transition-all">Discover <ArrowRight size={16}/></span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Experts */}
      <section className="bg-paper py-24">
        <Container>
          <SectionHead eyebrow="Your local experts" title="Real people, in Brazil, designing your trip." sub="Not a call center. Each of our destination experts is a Brazilian who has spent their life knowing — and loving — a specific region."/>
          <div className="grid md:grid-cols-4 gap-5 mt-12">
            {EXPERTS.map(e=>(
              <div key={e.name} className="bg-cream-50 border border-line rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]">
                <div className="flex items-center gap-3">
                  <Avatar src={e.img} size={56} alt={e.name}/>
                  <div>
                    <div className="font-semibold text-ink">{e.name}</div>
                    <div className="text-[12.5px] text-muted">Based in {e.base}</div>
                  </div>
                </div>
                <div className="mt-4 text-[12px] tracking-[.14em] uppercase text-terra font-semibold">Specialty</div>
                <div className="text-[14px] text-ink-soft">{e.specialty}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft border-t border-line pt-3">{e.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <SectionHead eyebrow="What guests say" title="The trips that stay with you." center/>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {REVIEWS.map((r,i)=>(
              <div key={i} className="bg-paper border border-line rounded-2xl p-7 relative">
                <div className="absolute left-6 top-5 font-serif text-[80px] leading-[.55] text-terra/40">&ldquo;</div>
                <p className="font-serif text-[20px] leading-relaxed text-ink mt-8">{r.quote}</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-line">
                  <Avatar src={r.img} size={42} alt={r.name}/>
                  <div>
                    <div className="font-semibold text-ink text-[14.5px]">{r.name}</div>
                    <div className="text-[12.5px] text-muted">{r.where}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 text-muted text-[13px]">
              <div className="flex">{[0,0,0,0,0].map((_,i)=><Star key={i} size={14} className="text-gold fill-gold"/>)}</div>
              <strong className="text-ink">4.96 / 5</strong>
              <span>from 320+ verified guests</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Stories */}
      <section className="bg-paper py-24">
        <Container>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <SectionHead eyebrow="Travel stories" title="From our journal."/>
            <Button variant="ghost" href="/blog">All stories <ArrowRight size={16}/></Button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(0,3).map(p=>(
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 bg-line">
                  <img src={p.img} alt="" className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"/>
                </div>
                <div className="text-[11.5px] tracking-[.16em] uppercase text-terra font-semibold">{p.category} · {p.read}</div>
                <h3 className="font-serif text-[22px] mt-1.5 text-ink group-hover:text-leaf-d transition">{p.title}</h3>
                <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <NewsletterBand/>
    </>
  );
}
