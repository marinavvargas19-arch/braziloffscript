import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Users, Leaf, Shield, MapPin, Calendar, ChevronRight, Check } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TOURS, CATEGORIES, FULL_ITIN, buildLightItin, IMG } from "@/lib/data";
import BookingPanel from "@/components/booking-panel";
import RouteMap from "@/components/route-map";

export function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const t = TOURS.find((x) => x.slug === params.slug);
  return { title: t ? t.title : "Tour" };
}

export default function TourPage({ params }) {
  const tour = TOURS.find(t=>t.slug===params.slug);
  if (!tour) return notFound();
  const cat  = CATEGORIES.find(c=>c.slug===tour.category);
  const dayPlan = tour.slug === "best-of-brazil-10-days" ? FULL_ITIN : buildLightItin(tour);

  return (
    <>
      <Container>
        <div className="pt-6 text-[13px] text-muted">
          <Link href="/" className="text-leaf underline underline-offset-2">Home</Link>
          <span className="mx-2 opacity-50">/</span>
          <Link href="/tours" className="text-leaf underline underline-offset-2">All Tours</Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-ink-soft">{tour.title}</span>
        </div>
      </Container>

      <Container className="grid lg:grid-cols-12 gap-10 pt-4 pb-24">
        <div className="lg:col-span-8">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]">
            <img src={tour.img} alt="" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-leaf-d/55 via-transparent to-transparent"></div>
            <div className="absolute top-5 left-5 flex flex-wrap gap-2">
              <Badge variant="light">Tailor-made · Private</Badge>
              <Badge variant="light">{tour.days} days</Badge>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-cream-50 flex flex-wrap justify-between gap-3 text-[13px]">
              <span className="flex items-center gap-2"><MapPin size={16}/> {tour.regions.join(" · ")}</span>
              <span className="flex items-center gap-2"><Calendar size={16}/> Departs any day</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2.5 mt-3">
            {[tour.img, IMG.beach, IMG.food, IMG.market].map((src,i)=>(
              <div key={i} className={`aspect-[4/3] rounded-lg overflow-hidden ring-2 transition ${i===0?"ring-terra":"ring-transparent"}`}>
                <img src={src} alt="" className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">{cat.name}</div>
            <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-ink">{tour.title}</h1>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-soft">
              <span className="flex items-center gap-2"><Clock size={16}/> {tour.days} days</span>
              <span className="flex items-center gap-2"><Users size={16}/> Private trip</span>
              <span className="flex items-center gap-2"><Leaf size={16}/> Sustainable stays</span>
              <span className="flex items-center gap-2"><Shield size={16}/> Financially protected</span>
            </div>

            <p className="mt-7 text-[18px] leading-[1.7] text-ink-soft max-w-2xl">
              <strong className="text-ink">Discover the heart of Brazil</strong> on a journey that blends urban energy with serene escapes. This immersive trip invites you to explore iconic regions, diving deep into the local culture and meeting the people who make this country so fascinating. Between <strong className="text-ink">sustainable stays and guided excursions through lush nature</strong>, you will gain a genuine perspective on Brazil&apos;s many layers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 mt-8 border border-line bg-paper rounded-2xl overflow-hidden">
            {[
              {k:`${tour.days}d`, v:"duration"},
              {k:"Balanced", v:"pace"},
              {k:`${Math.max(2, tour.regions.length-1)}`, v:"hotel changes"},
              {k:"May–Oct", v:"best season"},
            ].map((s,i)=>(
              <div key={i} className={`p-5 ${i<3?"md:border-r":""} ${i%2===0?"border-r md:border-r":""} ${i<2?"border-b md:border-b-0":""} border-line`}>
                <div className="font-serif text-[26px] leading-tight text-leaf-d">{s.k}</div>
                <div className="text-[11.5px] tracking-[.14em] uppercase text-muted mt-1">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <SectionHead eyebrow="Trip at a glance" title="The shape of your days." />
            <div className="mt-7 border-t border-line">
              {dayPlan.map((d,i)=>(
                <a key={i} href={`#day-${i+1}`} className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[110px_1fr_auto] gap-5 py-5 border-b border-line items-start hover:bg-terra/5 transition">
                  <div className="font-serif text-[20px] text-ink">Day {i+1}</div>
                  <div>
                    <div className="text-[13.5px] text-muted">{d.route}</div>
                    <div className="font-semibold text-ink text-[16px] mt-0.5">{d.city}</div>
                  </div>
                  <span className="text-terra text-[13px] font-semibold whitespace-nowrap self-center hidden md:inline-flex items-center gap-1.5">Read more <ChevronRight size={16}/></span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <SectionHead eyebrow="The route" title="Your trip on the map." sub="Click a day to see where you'll be."/>
            <RouteMap days={dayPlan}/>
          </div>

          <div className="mt-14">
            <SectionHead eyebrow="Day by day" title="Detailed itinerary." sub="A walkthrough of each day — every detail is fully customizable." />
            <div className="mt-8 space-y-7">
              {dayPlan.map((d,i)=>(
                <article key={i} id={`day-${i+1}`} className="bg-paper border border-line rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(25,40,30,.04),0_6px_14px_-10px_rgba(25,40,30,.18)]">
                  <div className="aspect-[21/9] overflow-hidden">
                    <img src={d.img} className="w-full h-full object-cover" alt=""/>
                  </div>
                  <div className="p-7 md:p-9">
                    <div className="text-[13px] text-muted">{d.route}</div>
                    <h3 className="font-serif text-[26px] mt-1.5 text-ink flex items-center gap-3 flex-wrap">
                      <span className="inline-block text-[11px] tracking-[.22em] uppercase text-terra font-bold border border-terra px-2.5 py-1 rounded-full">Day {String(i+1).padStart(2,"0")}</span>
                      {d.city}
                    </h3>
                    {d.blocks.map((b,j)=>(
                      <div key={j} className="mt-6 border-l-2 border-line pl-5">
                        <div className="font-semibold text-ink flex items-center gap-3 flex-wrap">
                          <span className="text-[11px] tracking-[.16em] uppercase text-terra font-bold">{b.kind}</span>
                          <span>{b.title}</span>
                        </div>
                        <p className="mt-2 text-[15px] text-ink-soft leading-[1.7] max-w-[64ch]">{b.desc}</p>
                      </div>
                    ))}
                    {d.meals && (
                      <div className="mt-7 pt-5 border-t border-dashed border-line flex items-center gap-2 text-[13.5px] text-muted">
                        Meals included: {d.meals}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-5">
            <div className="bg-paper border border-line rounded-2xl p-7">
              <h3 className="font-serif text-[22px] text-ink mb-4">Included</h3>
              <ul className="space-y-2.5 text-[14.5px] text-ink-soft">
                {["All private transfers and domestic flights within Brazil","Hand-picked boutique or eco-luxury accommodation","Private local guides for every excursion","24/7 in-country support during your trip","All listed meals and tasting experiences","Curated experiences booked in advance"].map(x=>(
                  <li key={x} className="flex gap-3"><span className="text-leaf mt-0.5"><Check size={16}/></span><span>{x}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-paper border border-line rounded-2xl p-7">
              <h3 className="font-serif text-[22px] text-ink mb-4">Not included</h3>
              <ul className="space-y-2.5 text-[14.5px] text-ink-soft">
                {["International flights to / from Brazil","Travel insurance (we'll recommend trusted providers)","Personal expenses & gratuities","Meals not specifically listed","Optional add-on experiences"].map(x=>(
                  <li key={x} className="flex gap-3"><span className="text-muted mt-0.5">×</span><span>{x}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <SectionHead eyebrow="You might also love" title="Related journeys."/>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {TOURS.filter(x=>x.slug!==tour.slug).slice(0,3).map(t=>(
                <Link key={t.slug} href={`/tours/${t.slug}`} className="group">
                  <Card>
                    <div className="aspect-[4/3] overflow-hidden"><img src={t.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/></div>
                    <div className="p-5">
                      <div className="text-[11.5px] tracking-[.16em] uppercase text-terra font-semibold">{t.days} days</div>
                      <h4 className="font-serif text-[19px] mt-1.5 text-ink">{t.title}</h4>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <BookingPanel tour={tour}/>
          </div>
        </aside>
      </Container>
    </>
  );
}
