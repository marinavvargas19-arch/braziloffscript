"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Container, SectionHead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { NewsletterBand } from "@/components/layout/newsletter";
import { BLOG_POSTS, IMG } from "@/lib/data";

export default function BlogList() {
  const [cat, setCat] = useState("all");
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);
  const cats = useMemo(() => ["all", ...Array.from(new Set(BLOG_POSTS.map(p=>p.category)))], []);
  const filtered = cat==="all" ? rest : rest.filter(p=>p.category===cat);

  return (
    <>
      <section className="bg-paper border-b border-line">
        <Container className="py-16">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">Stories</div>
          <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-tight text-ink max-w-3xl">Travel notes from inside Brazil.</h1>
          <p className="mt-4 text-ink-soft text-[17px] max-w-2xl leading-relaxed">Our experts write occasionally — about a region they&apos;re obsessed with, a meal they can&apos;t stop thinking about, or a quiet rant about how trips should be designed.</p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden">
              <img src={featured.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]" alt=""/>
            </div>
            <div className="md:col-span-5">
              <Badge variant="terra">Featured</Badge>
              <div className="text-[12.5px] tracking-[.14em] uppercase text-muted font-semibold mt-4">{featured.category} · {featured.read} · {featured.date}</div>
              <h2 className="font-serif text-[clamp(28px,3.4vw,40px)] mt-2 leading-tight text-ink group-hover:text-leaf-d transition">{featured.title}</h2>
              <p className="mt-3 text-ink-soft text-[16.5px] leading-relaxed">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-3">
                <Avatar src={IMG.helena} size={36}/>
                <div className="text-[13px] text-ink-soft">By <strong>{featured.author}</strong></div>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="flex flex-wrap gap-2 mb-8">
            {cats.map(c=>(
              <button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition capitalize ${cat===c?"bg-leaf border-leaf text-cream-50":"border-line text-ink-soft hover:border-leaf"}`}>{c==="all"?"All stories":c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {filtered.map(p=>(
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img src={p.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/>
                </div>
                <div className="text-[11.5px] tracking-[.16em] uppercase text-terra font-semibold">{p.category} · {p.read}</div>
                <h3 className="font-serif text-[22px] mt-1.5 text-ink group-hover:text-leaf-d transition">{p.title}</h3>
                <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed">{p.excerpt}</p>
                <div className="mt-3 text-[12.5px] text-muted">{p.date} · {p.author}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <NewsletterBand/>
    </>
  );
}
