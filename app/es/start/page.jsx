import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { IMG, SITE } from "@/lib/data-es";

export const metadata = {
  title: "Empieza tu viaje — Brazil Off Script",
  alternates: { canonical: "/es/start", languages: { en: "/start", "es-ES": "/es/start" } },
};

export default function StartPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <aside className="lg:w-2/5 relative lg:sticky lg:top-0 lg:h-screen overflow-hidden min-h-[280px]">
        <img src={IMG.rioChrist} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,53,33,.35), rgba(20,53,33,.1) 40%, rgba(20,53,33,.75))" }}/>
        <div className="relative h-full flex flex-col p-7 md:p-10 text-cream-50">
          <Link href="/es" className="inline-flex items-center gap-2 text-[13px] font-semibold opacity-90 hover:opacity-100 transition-opacity"><ArrowLeft size={16}/> Volver a Brazil Off Script</Link>
          <div className="mt-auto pt-10">
            <div className="text-[11px] tracking-[.22em] uppercase opacity-85 mb-3">Empieza tu viaje</div>
            <h2 className="font-serif text-[clamp(28px,3vw,42px)] leading-tight max-w-md">No existe una única forma de vivir Brasil.<br/><em className="not-italic text-gold">Encontremos la tuya.</em></h2>
            <p className="mt-4 max-w-md text-cream-50/85 text-[15.5px] leading-relaxed">Tanto si ya tienes destinos en mente como si quieres ayuda para descubrir el viaje perfecto, diseñaremos un Brasil personal, fluido e inolvidable.</p>
          </div>
        </div>
      </aside>

      <main className="lg:w-3/5 flex flex-col bg-cream">
        <div className="flex-1 flex items-center"><div className="max-w-2xl mx-auto w-full px-6 py-12 md:py-20">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-4">Elige tu camino</div>
          <h1 className="font-serif text-[clamp(30px,3.6vw,46px)] leading-[1.1] tracking-tight text-ink text-balance">Algunas personas llegan con un destino.<br/><em className="not-italic text-leaf">Otras buscan una emoción.</em></h1>
          <p className="mt-5 text-ink-soft text-[16.5px] leading-relaxed max-w-lg">Estés donde estés en la planificación, te ayudaremos a diseñar una versión de Brasil hecha a tu medida.</p>

          <div className="mt-10 grid gap-4">
            <Link href="/es/quiz" className="group block rounded-2xl border border-line bg-paper p-7 md:p-8 transition hover:border-leaf hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]">
              <div className="flex items-start gap-5"><div className="flex-none w-12 h-12 rounded-full bg-leaf/10 text-leaf-d flex items-center justify-center group-hover:bg-leaf group-hover:text-cream-50 transition"><MapPin size={20}/></div><div className="flex-1"><h3 className="font-serif text-[26px] md:text-[28px] leading-tight text-ink">Ya sé adónde quiero ir</h3><p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft max-w-md">Selecciona los destinos que más te interesan y diseñaremos un viaje adaptado a tu estilo, tu ritmo y tus preferencias.</p><span className="mt-5 inline-flex items-center gap-2 text-leaf-d font-semibold text-[14px] group-hover:gap-3 transition-all">Diseñar mi viaje <ArrowRight size={16}/></span></div></div>
            </Link>
            <Link href="/es/quiz-discovery" className="group block rounded-2xl border border-terra/40 bg-terra/[.06] p-7 md:p-8 transition hover:border-terra hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-22px_rgba(224,122,78,.45)]">
              <div className="flex items-start gap-5"><div className="flex-none w-12 h-12 rounded-full bg-terra/15 text-terra-d flex items-center justify-center group-hover:bg-terra group-hover:text-cream-50 transition"><Sparkles size={20}/></div><div className="flex-1"><h3 className="font-serif text-[26px] md:text-[28px] leading-tight text-ink">¿No sabes por dónde empezar?</h3><p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft max-w-md">Haz nuestro test de viaje de 60 segundos y te ayudaremos a descubrir el Brasil que encaja contigo.</p><span className="mt-5 inline-flex items-center gap-2 text-terra-d font-semibold text-[14px] group-hover:gap-3 transition-all">Empezar el test <ArrowRight size={16}/></span></div></div>
            </Link>
          </div>

          <div className="mt-10 pt-7 border-t border-line text-[13.5px] text-ink-soft text-center">¿Aún tienes dudas? <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, me gustaría hablar con una especialista sobre un viaje a Brasil")}`} target="_blank" rel="noreferrer" className="text-leaf-d font-semibold underline underline-offset-4 hover:text-leaf transition-colors">Habla con una especialista en Brasil por WhatsApp</a></div>
        </div></div>
      </main>
    </div>
  );
}
