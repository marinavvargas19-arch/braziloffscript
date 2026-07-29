import { Container, SectionHead } from "@/components/ui/section";
import { NewsletterBand } from "@/components/layout/newsletter";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data-es";
import { Sparkles, Users, Compass, Heart, Shield, Phone, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sobre nosotros — Brazil Off Script",
  alternates: { canonical: "/es/about", languages: { en: "/about", "es-ES": "/es/about" } },
};

const STEPS = [
  ["01", "Cuéntanos tu sueño", "Haz nuestro test de 60 segundos o escríbenos. Queremos conocer tu estilo, tu ritmo y el Brasil que imaginas.", Sparkles],
  ["02", "Conoce a tu experta local", "Te pondremos en contacto con una especialista en Brasil que conoce de primera mano las regiones que quieres explorar. Una persona real, nunca un centro de llamadas.", Users],
  ["03", "Diseñamos una propuesta", "En un máximo de 48 horas recibirás una propuesta personalizada con alojamientos, traslados, experiencias y costes, sin compromiso.", Compass],
  ["04", "La perfeccionamos contigo", "Hacemos todas las revisiones necesarias hasta que encaje contigo: cambiamos días, alojamientos y experiencias a tu ritmo.", Heart],
  ["05", "Confirma y relájate", "Confirma el viaje mediante un enlace de pago seguro. Reservamos cada detalle, te enviamos la documentación final y seguimos a tu lado.", Shield],
  ["06", "Viaja con asistencia completa", "Tendrás asistencia local las 24 horas durante el viaje. Si cambia el tiempo o los planes, nosotros nos ocupamos.", Phone],
];

const DIFFERENCES = [
  ["Destinos ocultos y experiencias únicas", "Te llevamos más allá de lo evidente para descubrir el Brasil real."],
  ["Alojamientos boutique cuidadosamente seleccionados", "Estancias elegidas por su encanto y su conexión con cada región."],
  ["Itinerarios flexibles y personalizados", "Cada viaje se adapta a tu estilo, tu ritmo y tus intereses."],
  ["Cultura y forma de vida brasileñas", "Conecta con comunidades locales y sumérgete en tradiciones llenas de vida."],
  ["Equilibrio entre sofisticación y aventura", "Combinamos comodidad y exploración en la medida adecuada para ti."],
  ["Viajar sin prisas y con sentido", "Creemos que los mejores viajes son los que permanecen contigo para siempre."],
];

const GALLERY = ["/start-beach.jpg", "/iguazu.jpg", "/the-explorer.jpg", "/noronha.jpg", "/pantanal.jpg", "/jaguar.jpg", "/paradise-found.jpg", "/central-brazil.jpg"];

export default function AboutPage() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0"><img src="/quiz-region-left.jpg" className="w-full h-full object-cover" alt="Dunas y lagunas de Lençóis Maranhenses"/><div className="absolute inset-0 bg-leaf-d/55"/></div>
        <Container className="relative py-16 md:py-20 text-cream-50">
          <div className="text-[11px] tracking-[.22em] uppercase opacity-85 mb-3">Sobre nosotros</div>
          <h1 className="font-serif font-medium text-[clamp(32px,4vw,54px)] leading-[1.06] tracking-tight">Brasil, fuera de guion.</h1>
          <p className="mt-5 max-w-2xl text-cream-50/90 text-[17px] leading-relaxed">Creamos viajes inmersivos para revelar una cara de Brasil más auténtica, emotiva y <strong>llena de sentido</strong>, con lugares, historias y experiencias que incluso muchas personas brasileñas aún desconocen.</p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5"><SectionHead eyebrow="Nuestra filosofía" title="Viajar más allá de lo evidente."/></div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
            <div><div className="text-terra font-bold text-[14px] tracking-wide uppercase mb-2">Más allá de lo evidente</div><p className="text-ink-soft text-[16.5px] leading-relaxed">Diseñamos viajes alrededor de ese Brasil que no suele aparecer en un primer itinerario y añadimos los grandes iconos con calma y en el momento adecuado.</p></div>
            <div><div className="text-terra font-bold text-[14px] tracking-wide uppercase mb-2">Conexiones reales, a tu medida</div><p className="text-ink-soft text-[16.5px] leading-relaxed">Sin listas turísticas, itinerarios genéricos ni experiencias previsibles. Tu viaje debe hablar de ti.</p></div>
          </div>
        </Container>
        <Container className="mt-12"><div className="grid grid-cols-3 md:grid-cols-4 gap-3">{GALLERY.map((src, index) => <div key={src} className="overflow-hidden rounded-xl aspect-square"><img src={src} alt="" className="w-full h-full object-cover transition duration-700 hover:scale-105"/></div>)}</div></Container>
      </section>

      <section className="bg-leaf-d text-cream-50 py-20">
        <Container>
          <SectionHead eyebrow="Lo que nos hace diferentes" title="A diferencia de una agencia de viajes tradicional, Brazil Off Script se centra en:" center eyebrowColor="terra" titleClassName="!text-cream-50"/>
          <div className="grid md:grid-cols-3 gap-5 mt-10">{DIFFERENCES.map(([title, description], index) => <div key={title} className="rounded-2xl bg-cream-50/5 border border-cream-50/10 p-7"><div className="font-serif text-[48px] leading-none text-gold">{index + 1}</div><div className="font-semibold mt-3 text-cream-50 text-[16.5px]">{title}</div><p className="mt-2 text-cream-50/80 text-[14.5px] leading-relaxed">{description}</p></div>)}</div>
        </Container>
      </section>

      <section id="how" className="bg-paper border-y border-line">
        <Container className="py-12 md:py-20"><div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">Cómo funciona</div><h2 className="font-serif text-[clamp(34px,4.6vw,60px)] leading-[1.04] text-ink max-w-3xl">De «estoy pensando en Brasil» a <em className="not-italic text-leaf">«no puedo creer que haya vivido esto»</em> en seis pasos.</h2><p className="mt-5 max-w-2xl text-ink-soft text-[17px] leading-relaxed">Diseñar un viaje a medida debe sentirse como planificarlo con una amiga curiosa que conoce a todo el mundo, no como rellenar un formulario.</p></Container>
      </section>

      <section className="py-16"><Container><div className="space-y-5">{STEPS.map(([number, title, description, Icon]) => <div key={number} className="grid md:grid-cols-12 gap-6 bg-paper border border-line rounded-2xl p-7 md:p-9"><div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3"><div className="font-serif text-[44px] leading-none text-terra">{number}</div><div className="w-10 h-10 rounded-full bg-leaf/10 text-leaf-d flex items-center justify-center"><Icon size={18}/></div></div><div className="md:col-span-10"><h3 className="font-serif text-[clamp(22px,2.4vw,30px)] text-ink leading-tight">{title}</h3><p className="mt-3 text-ink-soft text-[16.5px] leading-relaxed max-w-3xl">{description}</p></div></div>)}</div></Container></section>

      <section className="pb-16"><Container className="text-center"><h2 className="font-serif text-[clamp(28px,3.4vw,42px)] text-ink">Cuando tú quieras.</h2><p className="mt-3 text-ink-soft max-w-xl mx-auto">Haz el test de 60 segundos, explora nuestros viajes o habla con una persona.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Button href="/es/start" size="lg">Haz el test <Sparkles size={16}/></Button><Button variant="ghost" size="lg" href={`https://wa.me/${SITE.whatsapp}`}>Habla con nosotros <ArrowRight size={16}/></Button></div></Container></section>
      <NewsletterBand locale="es"/>
    </>
  );
}
