import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, ArrowRight } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { BLOG_POSTS, IMG } from "@/lib/data-es";

export function generateStaticParams() { return BLOG_POSTS.map(post => ({ slug: post.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(item => item.slug === slug);
  return {
    title: post?.title || "Historia",
    alternates: { canonical: `/es/blog/${slug}`, languages: { en: `/blog/${slug}`, "es-ES": `/es/blog/${slug}` } },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(item => item.slug === slug);
  if (!post) notFound();
  const related = BLOG_POSTS.filter(item => item.slug !== post.slug).slice(0, 3);

  return <>
    <Container className="pt-8 text-[13px] text-muted"><Link href="/es" className="text-leaf underline underline-offset-2">Inicio</Link><span className="mx-2 opacity-50">/</span><Link href="/es/blog" className="text-leaf underline underline-offset-2">Historias</Link><span className="mx-2 opacity-50">/</span><span className="text-ink-soft">{post.title}</span></Container>
    <Container className="pt-8"><Badge variant="terra">{post.category}</Badge><h1 className="font-serif text-[clamp(34px,5vw,64px)] leading-[1.05] text-ink mt-4 max-w-4xl">{post.title}</h1><div className="mt-5 flex items-center gap-4 text-[14px] text-ink-soft"><Avatar src={IMG.helena} size={42}/><div><div className="font-semibold text-ink">{post.author}</div><div className="text-[12.5px] text-muted">{post.date} · {post.read} de lectura</div></div></div></Container>
    <Container className="mt-8"><div className="aspect-[16/9] rounded-2xl overflow-hidden"><img src={post.img} alt="" className="w-full h-full object-cover"/></div></Container>

    <article className="py-12"><Container className="max-w-[720px]"><p className="font-serif text-[22px] leading-[1.55] text-ink mb-8 italic">{post.excerpt}</p><p className="text-ink-soft text-[17px] leading-[1.75] mb-6">Casi todas las personas que viajan con nosotros empiezan con la misma pregunta: «¿Qué debería ver?». En Brasil, esa no siempre es la pregunta adecuada. El país es demasiado grande, diverso y generoso para reducirlo a una lista de lugares. La pregunta que más nos interesa es otra: <em>¿qué quieres sentir?</em></p><p className="text-ink-soft text-[17px] leading-[1.75] mb-6">A continuación compartimos tres rincones del país que rara vez aparecen en un primer itinerario y las razones por las que seguimos recomendándolos a quienes sienten curiosidad por ir más allá.</p><h2 className="font-serif text-[28px] text-ink mt-10 mb-4">1. El lado más tranquilo de Maranhão: Caburé, no solo Atins.</h2><p className="text-ink-soft text-[17px] leading-[1.75] mb-6">La mayoría de quienes visitan Lençóis Maranhenses duerme en Atins. A unos cuarenta minutos hacia el norte aparece Caburé: unas pocas pousadas y las dunas llegando hasta el río. Merece al menos dos noches y un paseo al amanecer.</p><blockquote className="border-l-4 border-terra pl-5 my-10 font-serif text-[22px] italic text-ink-soft leading-relaxed">«Los mejores destinos brasileños no se revelan el primer día. Caburé empieza a mostrar su verdadera esencia cuando le das tiempo».</blockquote><h2 className="font-serif text-[28px] text-ink mt-10 mb-4">2. La Costa do Dendê: al sur de Salvador y al norte de Itacaré.</h2><p className="text-ink-soft text-[17px] leading-[1.75] mb-6">Boipeba, Barra Grande y Maraú forman una franja de Bahía a la que no llega la carretera. Es ese tipo de viaje en el que dejas de contar los días y vuelves a escuchar tu propio ritmo.</p><h2 className="font-serif text-[28px] text-ink mt-10 mb-4">3. Chapada dos Veadeiros, con la persona adecuada como guía.</h2><p className="text-ink-soft text-[17px] leading-[1.75] mb-6">Además de las cascadas más conocidas, existen cañones y campos de cuarzo que muchas personas pasan por alto. Chapada recompensa la profundidad: una gran guía y un mínimo de tres noches.</p><div className="mt-10 p-7 bg-paper border border-line rounded-2xl"><div className="text-[12px] tracking-[.16em] uppercase text-terra font-bold">¿Quieres salir del guion?</div><h3 className="font-serif text-[26px] text-ink mt-2">Cuéntanos qué estás imaginando.</h3><p className="mt-2 text-ink-soft">Planificación real, personas reales, el Brasil real.</p><div className="mt-5 flex gap-3 flex-wrap"><Button href="/es/quiz">Diseña tu viaje <Sparkles size={16}/></Button><Button variant="ghost" href="/es/contact">O envíanos un mensaje <ArrowRight size={16}/></Button></div></div></Container></article>

    <section className="py-12 bg-paper border-t border-line"><Container><SectionHead eyebrow="Sigue leyendo" title="Más historias del diario."/><div className="grid md:grid-cols-3 gap-7 mt-8">{related.map(item => <Link key={item.slug} href={`/es/blog/${item.slug}`} className="group"><div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4"><img src={item.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/></div><div className="text-[11.5px] tracking-[.16em] uppercase text-terra font-semibold">{item.category}</div><h3 className="font-serif text-[20px] mt-1.5 text-ink group-hover:text-leaf-d transition">{item.title}</h3></Link>)}</div></Container></section>
  </>;
}
