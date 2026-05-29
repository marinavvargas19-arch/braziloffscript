import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, ArrowRight } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { BLOG_POSTS, IMG } from "@/lib/data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = BLOG_POSTS.find((x) => x.slug === params.slug);
  return { title: p ? p.title : "Story" };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find(p=>p.slug===params.slug);
  if (!post) return notFound();
  const related = BLOG_POSTS.filter(p=>p.slug!==post.slug).slice(0,3);
  return (
    <>
      <Container className="pt-8 text-[13px] text-muted">
        <Link href="/" className="text-leaf underline underline-offset-2">Home</Link>
        <span className="mx-2 opacity-50">/</span>
        <Link href="/blog" className="text-leaf underline underline-offset-2">Stories</Link>
        <span className="mx-2 opacity-50">/</span>
        <span className="text-ink-soft">{post.title}</span>
      </Container>

      <Container className="pt-8">
        <Badge variant="terra">{post.category}</Badge>
        <h1 className="font-serif text-[clamp(34px,5vw,64px)] leading-[1.05] text-ink mt-4 max-w-4xl">{post.title}</h1>
        <div className="mt-5 flex items-center gap-4 text-[14px] text-ink-soft">
          <Avatar src={IMG.helena} size={42}/>
          <div>
            <div className="font-semibold text-ink">{post.author}</div>
            <div className="text-[12.5px] text-muted">{post.date} · {post.read} read</div>
          </div>
        </div>
      </Container>

      <Container className="mt-10">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden">
          <img src={post.img} alt="" className="w-full h-full object-cover"/>
        </div>
      </Container>

      <article className="py-16">
        <Container className="max-w-[720px]">
          <p className="font-serif text-[22px] leading-[1.55] text-ink mb-8 italic">{post.excerpt}</p>
          <p className="text-ink-soft text-[17px] leading-[1.75] mb-6">
            We hear the same first question from almost every traveler: &quot;What should I see?&quot; It&apos;s the wrong question — at least in Brazil. The country is too big, too varied, and too generous to be optimized for landmarks. The better question is one we kept coming back to last summer: <em>what should I feel?</em>
          </p>
          <p className="text-ink-soft text-[17px] leading-[1.75] mb-6">
            What follows are three corners of the country that almost never appear on a first-time itinerary — and the reasons we keep sending our most curious travelers to them first.
          </p>
          <h2 className="font-serif text-[28px] text-ink mt-12 mb-4">1. Maranhão&apos;s quieter side — Caburé, not Atins.</h2>
          <p className="text-ink-soft text-[17px] leading-[1.75] mb-6">
            Most travelers headed for Lençóis Maranhenses sleep in Atins. Drive forty minutes north and you reach Caburé — three pousadas, the dunes rolling right up to the river. Stay two nights. Walk the dunes at sunrise.
          </p>
          <blockquote className="border-l-4 border-terra pl-5 my-10 font-serif text-[22px] italic text-ink-soft leading-relaxed">
            &quot;The best Brazilian destinations don&apos;t reveal themselves on day one. Caburé is a place that becomes itself on day three.&quot;
          </blockquote>
          <h2 className="font-serif text-[28px] text-ink mt-12 mb-4">2. The Dendê Coast — south of Salvador, north of Itacaré.</h2>
          <p className="text-ink-soft text-[17px] leading-[1.75] mb-6">
            Boipeba, Barra Grande, and Maraú — a stretch of Bahia that the highway doesn&apos;t reach. The kind of trip where you forget what day it is by Wednesday and remember sometime around Sunday.
          </p>
          <h2 className="font-serif text-[28px] text-ink mt-12 mb-4">3. The Chapada dos Veadeiros — but with the right guide.</h2>
          <p className="text-ink-soft text-[17px] leading-[1.75] mb-6">
            The waterfalls everyone sees, plus the canyons and quartz fields most miss. The Chapada rewards depth: a strong guide, three nights minimum.
          </p>
          <div className="mt-12 p-7 bg-paper border border-line rounded-2xl">
            <div className="text-[12px] tracking-[.16em] uppercase text-terra font-bold">Want to go off script?</div>
            <h3 className="font-serif text-[26px] text-ink mt-2">Tell us what you&apos;re imagining.</h3>
            <p className="mt-2 text-ink-soft">Real planning, real humans, real Brazil.</p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <Button href="/quiz">Take the quiz <Sparkles size={16}/></Button>
              <Button variant="ghost" href="/contact">Or send a note <ArrowRight size={16}/></Button>
            </div>
          </div>
        </Container>
      </article>

      <section className="py-16 bg-paper border-t border-line">
        <Container>
          <SectionHead eyebrow="Keep reading" title="More from the journal."/>
          <div className="grid md:grid-cols-3 gap-7 mt-8">
            {related.map(p=>(
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img src={p.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/>
                </div>
                <div className="text-[11.5px] tracking-[.16em] uppercase text-terra font-semibold">{p.category}</div>
                <h3 className="font-serif text-[20px] mt-1.5 text-ink group-hover:text-leaf-d transition">{p.title}</h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
