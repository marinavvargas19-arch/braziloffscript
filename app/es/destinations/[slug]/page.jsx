import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container, SectionHead } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NewsletterBand } from "@/components/layout/newsletter";
import { DESTINATIONS, CATEGORIES, TOURS, DESTINATION_HIGHLIGHTS, IMG } from "@/lib/data-es";

export function generateStaticParams() { return DESTINATIONS.map(destination => ({ slug: destination.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = DESTINATIONS.find(item => item.slug === slug);
  return {
    title: destination?.name || "Destino",
    alternates: { canonical: `/es/destinations/${slug}`, languages: { en: `/destinations/${slug}`, "es-ES": `/es/destinations/${slug}` } },
  };
}

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const destination = DESTINATIONS.find(item => item.slug === slug);
  if (!destination) notFound();
  const category = CATEGORIES.find(item => item.slug === destination.category);
  const highlights = DESTINATION_HIGHLIGHTS[destination.slug] || [];
  const related = TOURS.filter(tour => tour.category === destination.category || tour.regions.some(region => region.toLowerCase().includes(destination.name.split(" ")[0].toLowerCase()))).slice(0, 3);

  return <>
    <section className="relative"><div className="absolute inset-0"><img src={destination.img} className="w-full h-full object-cover" alt=""/><div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-leaf-d/65"/></div><Container className="relative pt-16 pb-20 md:pt-20 md:pb-24 text-cream-50"><div className="text-[13px] mb-6 opacity-85"><Link href="/es" className="underline underline-offset-4">Inicio</Link><span className="mx-2 opacity-50">/</span><Link href="/es/journeys" className="underline underline-offset-4">Viajes</Link><span className="mx-2 opacity-50">/</span><span>{destination.name}</span></div><Badge variant="light" className="mb-5">{category.name}</Badge><h1 className="font-serif font-medium text-[clamp(40px,6.4vw,84px)] leading-[1.02] tracking-tight">{destination.name}</h1><p className="mt-4 max-w-2xl text-[17.5px] text-cream-50/90">{destination.blurb}</p><div className="mt-7 flex flex-wrap gap-3"><Button href={`/es/tours/${destination.slug}`} size="lg">Planificar un viaje a {destination.name} <ArrowRight size={16}/></Button><Button variant="ghostLight" size="lg" href="/es/contact">Habla con una experta local</Button></div></Container></section>

    <section className="bg-paper border-b border-line"><Container className="py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">{[["4–9", "días recomendados"], ["Abr–Oct", "mejor época"], ["A medida", "todos los itinerarios"], [category.name, "colección"]].map(([value, label], index) => <div key={label} className={`${index < 3 ? "md:border-r border-line" : ""} py-2`}><div className="font-serif text-[28px] leading-tight text-leaf-d">{value}</div><div className="text-[11.5px] tracking-[.14em] uppercase text-muted mt-1.5">{label}</div></div>)}</Container></section>

    <section className="py-16"><Container className="grid md:grid-cols-12 gap-8"><div className="md:col-span-5"><div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">Por qué viajar aquí</div><h2 className="font-serif text-[clamp(28px,3.4vw,44px)] leading-tight text-ink">Una región que recompensa a quienes viajan sin prisas.</h2><p className="mt-5 text-ink-soft text-[16.5px] leading-relaxed">{destination.name} es uno de los rincones más fotografiados de Brasil y también uno de los menos comprendidos. Más allá de las postales existe un ritmo cotidiano hecho de cocinas familiares, mañanas junto al río y música que comienza de fondo y termina llenándolo todo. Diseñamos viajes que encuentran ese ritmo.</p><p className="mt-4 text-ink-soft text-[16.5px] leading-relaxed">Cada itinerario se diseña de forma privada junto a una experta local que vive, come y trabaja en la región.</p></div><div className="md:col-span-7 grid grid-cols-3 gap-2.5"><img src={IMG.beach} className="rounded-xl aspect-square object-cover" alt=""/><img src={IMG.market} className="rounded-xl aspect-square object-cover" alt=""/><img src={IMG.food} className="rounded-xl aspect-square object-cover" alt=""/><img src={destination.img} className="rounded-xl col-span-2 aspect-[2/1] object-cover" alt=""/><img src={IMG.bossa} className="rounded-xl aspect-square object-cover" alt=""/></div></Container></section>

    {highlights.length > 0 && <section className="bg-paper py-16"><Container><SectionHead eyebrow="Experiencias fuera de guion" title="Los momentos alrededor de los que diseñaríamos tu viaje."/><div className="grid md:grid-cols-2 gap-5 mt-8">{highlights.map((highlight, index) => <div key={index} className="bg-cream-50 border border-line rounded-2xl p-6 flex gap-5"><div className="flex-none w-10 h-10 rounded-full bg-terra/15 text-terra-d flex items-center justify-center font-serif text-[20px]">{index + 1}</div><div><div className="font-semibold text-ink text-[16.5px]">{highlight.t}</div><p className="mt-1.5 text-[14.5px] text-ink-soft leading-relaxed">{highlight.d}</p></div></div>)}</div></Container></section>}

    <section className="py-16"><Container><div className="flex flex-wrap justify-between items-end gap-4 mb-8"><SectionHead eyebrow="Itinerarios de ejemplo" title={`Puntos de partida para ${destination.name}`} sub="Cada viaje es único; estas propuestas muestran lo que podemos crear."/><Button variant="ghost" href="/es/tours">Todos los viajes <ArrowRight size={16}/></Button></div><div className="grid md:grid-cols-3 gap-5">{(related.length ? related : TOURS.slice(0, 3)).map(tour => <Link key={tour.slug} href={`/es/tours/${tour.slug}`} className="group"><Card><div className="aspect-[4/3] overflow-hidden"><img src={tour.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/></div><div className="p-6"><div className="text-[11px] tracking-[.16em] uppercase text-terra font-semibold">{tour.days} días</div><h3 className="font-serif text-[22px] text-ink mt-1.5">{tour.title}</h3><p className="mt-1.5 text-[14.5px] text-ink-soft leading-relaxed">{tour.blurb}</p></div></Card></Link>)}</div></Container></section>
    <NewsletterBand locale="es"/>
  </>;
}
