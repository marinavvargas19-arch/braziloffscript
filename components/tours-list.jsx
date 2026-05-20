"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, inputCls } from "@/components/ui/field";
import { TOURS, CATEGORIES } from "@/lib/data";

export default function ToursList() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [dur, setDur] = useState("all");
  const [price, setPrice] = useState(8000);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(()=>{
    let arr = TOURS.filter(t => {
      if (cat !== "all" && t.category !== cat) return false;
      if (t.price > price) return false;
      if (dur === "short" && t.days > 7) return false;
      if (dur === "mid" && (t.days < 7 || t.days > 10)) return false;
      if (dur === "long" && t.days < 10) return false;
      if (q && !(t.title.toLowerCase().includes(q.toLowerCase()) || t.regions.join(" ").toLowerCase().includes(q.toLowerCase()) || t.tags.join(" ").toLowerCase().includes(q.toLowerCase()))) return false;
      return true;
    });
    if (sort === "price-asc") arr = arr.slice().sort((a,b)=>a.price-b.price);
    if (sort === "price-desc") arr = arr.slice().sort((a,b)=>b.price-a.price);
    if (sort === "duration-asc") arr = arr.slice().sort((a,b)=>a.days-b.days);
    if (sort === "duration-desc") arr = arr.slice().sort((a,b)=>b.days-a.days);
    return arr;
  }, [q, cat, dur, price, sort]);

  return (
    <>
      <section className="bg-paper border-b border-line">
        <Container className="py-16 md:py-20">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">All Tours</div>
          <h1 className="font-serif text-[clamp(38px,5vw,64px)] leading-[1.04] text-ink max-w-3xl">Ten starting points. <em className="not-italic text-leaf">Infinite variations.</em></h1>
          <p className="mt-4 max-w-2xl text-ink-soft text-[17px] leading-relaxed">Every itinerary is fully tailor-made. Browse the shape of what&apos;s possible, then we shape it around you.</p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <div className="bg-paper border border-line rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-ink">Filters</h3>
                  <button onClick={()=>{setQ("");setCat("all");setDur("all");setPrice(8000);setSort("featured");}} className="text-[12.5px] text-terra hover:underline">Reset</button>
                </div>

                <Field icon={<Search size={16}/>} className="mb-5">
                  <input className={inputCls} placeholder="Search regions, tags…" value={q} onChange={e=>setQ(e.target.value)}/>
                </Field>

                <div className="mb-5">
                  <div className="text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Collection</div>
                  <div className="flex flex-col gap-1.5">
                    {[{v:"all",l:"All collections"}, ...CATEGORIES.map(c=>({v:c.slug,l:c.name}))].map(o=>(
                      <button key={o.v} onClick={()=>setCat(o.v)} className={`text-left px-3 py-2 rounded-lg text-[13.5px] transition ${cat===o.v?"bg-leaf text-cream-50":"text-ink-soft hover:bg-leaf/8"}`}>{o.l}</button>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Duration</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[{v:"all",l:"Any"},{v:"short",l:"≤ 7 days"},{v:"mid",l:"7-10 days"},{v:"long",l:"10+ days"}].map(o=>(
                      <button key={o.v} onClick={()=>setDur(o.v)} className={`px-3 py-2 rounded-lg text-[13px] transition border ${dur===o.v?"bg-leaf border-leaf text-cream-50":"border-line text-ink-soft hover:border-leaf"}`}>{o.l}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Max price / person</div>
                  <input type="range" min="2000" max="8000" step="100" value={price} onChange={e=>setPrice(+e.target.value)} className="w-full accent-leaf"/>
                  <div className="flex justify-between text-[12.5px] text-muted mt-1">
                    <span>US$ 2,000</span>
                    <span className="font-semibold text-ink">US$ {price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="flex justify-between items-center mb-6">
              <div className="text-[14px] text-muted">{filtered.length} tour{filtered.length===1?"":"s"} found</div>
              <div className="relative">
                <select value={sort} onChange={e=>setSort(e.target.value)} className="appearance-none bg-paper border border-line rounded-full pl-4 pr-9 py-2 text-[13.5px] font-semibold text-ink cursor-pointer">
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price (low → high)</option>
                  <option value="price-desc">Price (high → low)</option>
                  <option value="duration-asc">Duration (short → long)</option>
                  <option value="duration-desc">Duration (long → short)</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink"><ChevronDown size={16}/></span>
              </div>
            </div>

            {filtered.length===0 ? (
              <div className="bg-paper border border-line rounded-2xl p-10 text-center">
                <h3 className="font-serif text-2xl text-ink">Nothing matches just yet.</h3>
                <p className="text-ink-soft mt-2">Try widening the filters — or let us design something completely custom.</p>
                <Button href="/quiz" className="mt-5">Plan something custom</Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {filtered.map(t=>{
                  const c = CATEGORIES.find(c=>c.slug===t.category);
                  return (
                    <Link key={t.slug} href={`/tours/${t.slug}`} className="group">
                      <Card>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img src={t.img} alt="" className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"/>
                          <div className="absolute top-4 left-4 flex gap-2">
                            <Badge variant="light">{t.days} days</Badge>
                            <Badge variant={c.color==="terra"?"terra":c.color==="leaf"?"default":"azul"}>{c.name}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-serif text-[24px] text-ink leading-tight">{t.title}</h3>
                          <div className="text-[12.5px] text-muted mt-1.5">{t.regions.join(" · ")}</div>
                          <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{t.blurb}</p>
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {t.tags.map(tag=>(
                              <span key={tag} className="text-[11px] tracking-wider uppercase px-2 py-1 rounded-full bg-leaf/10 text-leaf-d font-semibold">{tag}</span>
                            ))}
                          </div>
                          <div className="mt-5 pt-5 border-t border-line flex items-center justify-between">
                            <div className="text-[13px] text-muted">From <span className="text-ink font-semibold">US$ {t.price.toLocaleString()}</span></div>
                            <span className="inline-flex items-center gap-1.5 text-terra font-semibold text-[14px] group-hover:gap-2.5 transition-all">Discover <ArrowRight size={16}/></span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
