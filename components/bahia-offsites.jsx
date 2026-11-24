import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Container, SectionHead } from '@/components/ui/section';

const copy = {
  en: {
    eyebrow: 'Signature offsites', title: 'Bring your team to Brazil',
    intro: 'Explore Rio de Janeiro, Cumbuco and Porto Seguro, or let us find another setting that fits your team. We tailor the programme, accommodation and logistics to your objectives, dates and group.',
    duration: 'Tailored duration', details: 'Explore the idea', cta: 'Plan an offsite in Brazil',
    note: 'Each programme is designed on request. Venues, activities and timing are confirmed as part of your proposal.',
    cards: [
      { destination: 'Rio de Janeiro', region: 'Rio de Janeiro', title: 'Space to think. Time to connect.', description: 'An executive offsite in Rio de Janeiro, combining focused conversations with shared meals, coastal scenery and time together.', image: '/blog/optimized/rio', alt: 'Sugarloaf Mountain and Guanabara Bay at sunset in Rio de Janeiro', ideas: ['Focused planning sessions in a setting selected for your team.', 'Time to unwind by the beach between conversations.', 'Shared dinners and local experiences woven into the agenda.'] },
      { destination: 'Cumbuco', region: 'Ceará', title: 'A slower rhythm. A closer team.', description: 'A coastal retreat in Cumbuco, with space for team conversations, beach time and shared local experiences.', image: '/corporate/cumbuco-offsite', alt: 'Palm trees and sandy shoreline at Cumbuco Beach, Ceará', ideas: ['Space for small-group conversations and team reflection.', 'Time by the sea, with outdoor experiences chosen around your group.', 'Airport arrivals and local transfers coordinated with your programme.'] },
      { destination: 'Porto Seguro', region: 'Bahia', title: 'Fresh ideas. Shared discoveries.', description: 'Combine your corporate agenda with the food, culture and coastal setting of Porto Seguro.', image: '/corporate/porto-seguro-offsite', alt: 'Praia do Espelho beach and coastal cliffs in the municipality of Porto Seguro, Bahia', ideas: ['Meeting spaces and accommodation selected around your agenda.', 'Cultural discoveries and shared meals beyond the meeting room.', 'Arrival logistics and local transfers coordinated for your team.'] },
    ],
  },
  es: {
    eyebrow: 'Offsites con identidad', title: 'Reúne a tu equipo en Brasil.',
    intro: 'Explora Río de Janeiro, Cumbuco y Porto Seguro, o déjanos encontrar otro entorno que encaje con tu equipo. Adaptamos el programa, el alojamiento y la logística a tus objetivos, fechas y grupo.',
    duration: 'Duración a medida', details: 'Descubre la propuesta', cta: 'Planifica un offsite en Brasil',
    note: 'Cada programa se diseña bajo petición. Los espacios, las actividades y los horarios se confirman como parte de la propuesta.',
    cards: [
      { destination: 'Rio de Janeiro', region: 'Rio de Janeiro', title: 'Espacio para pensar. Tiempo para conectar.', description: 'Un offsite ejecutivo en Río de Janeiro que combina conversaciones con propósito, comidas compartidas, paisajes costeros y tiempo en equipo.', image: '/blog/optimized/rio', alt: 'El Pan de Azúcar y la bahía de Guanabara al atardecer en Río de Janeiro', ideas: ['Sesiones de planificación en un entorno elegido para tu equipo.', 'Tiempo para descansar en la playa entre conversaciones.', 'Cenas compartidas y experiencias locales integradas en la agenda.'] },
      { destination: 'Cumbuco', region: 'Ceará', title: 'Un ritmo más lento. Un equipo más unido.', description: 'Un retiro junto al mar en Cumbuco, con espacio para conversaciones de equipo, tiempo en la playa y experiencias locales compartidas.', image: '/corporate/cumbuco-offsite', alt: 'Palmeras y orilla de arena en la playa de Cumbuco, Ceará', ideas: ['Espacio para conversaciones en grupos pequeños y reflexión en equipo.', 'Tiempo junto al mar, con experiencias al aire libre adaptadas al grupo.', 'Llegadas al aeropuerto y traslados locales coordinados con el programa.'] },
      { destination: 'Porto Seguro', region: 'Bahia', title: 'Nuevas ideas. Descubrimientos compartidos.', description: 'Combina tu agenda corporativa con la gastronomía, la cultura y el entorno costero de Porto Seguro.', image: '/corporate/porto-seguro-offsite', alt: 'Playa de Espelho y acantilados costeros en el municipio de Porto Seguro, Bahía', ideas: ['Espacios de reunión y alojamiento elegidos según tu agenda.', 'Descubrimientos culturales y comidas compartidas fuera de la sala de reuniones.', 'Llegadas y traslados locales coordinados para tu equipo.'] },
    ],
  },
};

export default function BahiaOffsites({ locale = 'en' }) {
  const c = copy[locale] || copy.en;
  return <section id="bahia-offsites" className="scroll-mt-28 py-14 sm:py-20 bg-cream border-y border-line">
    <Container>
      <div className="w-16 h-1 rounded-full bg-terra mb-6" aria-hidden="true" />
      <SectionHead eyebrow={c.eyebrow} title={c.title} sub={c.intro} className="max-w-3xl" />
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {c.cards.map(card => <article key={card.destination} className="min-w-0 flex flex-col bg-paper rounded-[28px] overflow-hidden border border-line/60 shadow-sm">
          <img src={`${card.image}-960.webp`} srcSet={`${card.image}-640.webp 640w, ${card.image}-960.webp 960w`} sizes="(min-width:1024px) 380px, (min-width:640px) 90vw, 100vw" width={960} height={640} loading="lazy" decoding="async" alt={card.alt} className="w-full aspect-[4/3] object-cover" />
          <div className="p-6 sm:p-7 flex flex-col flex-1">
            <p className="text-xs uppercase tracking-[.15em] font-semibold text-terra-d">{locale === 'es' && card.destination === 'Rio de Janeiro' ? 'Río de Janeiro' : card.destination} · {locale === 'es' && card.region === 'Bahia' ? 'Bahía' : card.region}</p>
            <h3 className="font-serif text-3xl leading-tight mt-3">{card.title}</h3>
            <p className="text-sm leading-relaxed text-ink-soft mt-4 mb-6">{card.description}</p>
            <div className="mt-auto">
              <p className="text-xs uppercase tracking-[.12em] text-ink-soft font-semibold border-b border-line pb-5">{c.duration}</p>
              <details className="group py-5 border-b border-line">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sm font-semibold text-leaf-d [&::-webkit-details-marker]:hidden">{c.details}<ChevronDown size={16} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true"/></summary>
                <ul className="list-disc pl-5 space-y-3 mt-5 text-sm leading-relaxed text-ink-soft">{card.ideas.map(idea => <li key={idea}>{idea}</li>)}</ul>
              </details>
              <a href="#event-inquiry" aria-label={`${c.cta} — ${card.destination}`} className="flex items-center justify-center gap-2 w-full mt-6 px-4 py-3 rounded-full border border-leaf text-leaf-d hover:bg-leaf-d hover:text-cream-50 transition text-sm font-semibold text-center">{c.cta}<ArrowUpRight size={18} className="shrink-0" aria-hidden="true"/></a>
            </div>
          </div>
        </article>)}
      </div>
      <p className="mt-5 text-[11px] text-ink-soft">{locale === 'es' ? 'Foto de Cumbuco' : 'Cumbuco photo'}: <a className="underline" href="https://commons.wikimedia.org/wiki/File:Cumbuco_beach.jpeg" target="_blank" rel="noreferrer">Adrian Michael</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noreferrer">CC BY-SA 3.0</a> · {locale === 'es' ? 'Redimensionada y recortada para el diseño.' : 'Resized and cropped for the layout.'}</p>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-soft">{c.note}</p>
    </Container>
  </section>;
}
