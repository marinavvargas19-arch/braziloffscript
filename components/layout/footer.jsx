import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";
import { localePath } from "@/lib/i18n";

const COPY = {
  en: {
    intro: "Tailor-made journeys planned by local experts in Brazil. Slow travel, real stays, real people — the country, off the obvious path.",
    explore: "Explore", journeys: "Our Journeys", tours: "All Tours", find: "Find my journey",
    company: "Company", about: "About us", how: "How it works", faq: "FAQ", contact: "Contact",
    touch: "Get in touch", conversation: "Start a conversation", copyright: "Tailor-made journeys.", care: "Made with care in Espírito Santo - Brasil.",
  },
  es: {
    intro: "Viajes a medida diseñados por expertos locales en Brasil. Viajes sin prisas, alojamientos auténticos y personas reales: el país más allá de las rutas habituales.",
    explore: "Explora", journeys: "Nuestros viajes", tours: "Todos los circuitos", find: "Encuentra tu viaje",
    company: "Empresa", about: "Quiénes somos", how: "Cómo funciona", faq: "Preguntas frecuentes", contact: "Contacto",
    touch: "Ponte en contacto", conversation: "Empezar una conversación", copyright: "Viajes a medida.", care: "Creado con cariño en Espírito Santo, Brasil.",
  },
};

export function Footer({ locale = "en" }) {
  const copy = COPY[locale] || COPY.en;
  return (
    <footer className="bg-leaf-d text-[#cfc8a8] pt-12 pb-7 px-5">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <div className="font-serif text-cream-50 text-[36px] leading-[0.95]">Brazil<br/>Off Script</div>
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed opacity-90">
            {copy.intro}
          </p>
          <div className="flex gap-2 mt-6">
            <a href="https://instagram.com/braziloffscript" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-cream-50/8 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition"><Instagram size={16}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-cream-50/8 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition"><Facebook size={16}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-cream-50/8 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition"><Twitter size={16}/></a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-serif text-cream-50 text-[22px] mb-3">{copy.explore}</h5>
          <ul className="space-y-2 text-[14.5px]">
            <li><Link href={localePath("/journeys", locale)} className="hover:text-cream-50">{copy.journeys}</Link></li>
            <li><Link href={localePath("/tours", locale)} className="hover:text-cream-50">{copy.tours}</Link></li>
            <li><Link href={localePath("/quiz", locale)} className="hover:text-cream-50">{copy.find}</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-serif text-cream-50 text-[22px] mb-3">{copy.company}</h5>
          <ul className="space-y-2 text-[14.5px]">
            <li><Link href={localePath("/about", locale)} className="hover:text-cream-50">{copy.about}</Link></li>
            <li><Link href={`${localePath("/about", locale)}#how`} className="hover:text-cream-50">{copy.how}</Link></li>
            <li><Link href={localePath("/faq", locale)} className="hover:text-cream-50">{copy.faq}</Link></li>
            <li><Link href={localePath("/contact", locale)} className="hover:text-cream-50">{copy.contact}</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h5 className="font-serif text-cream-50 text-[22px] mb-3">{copy.touch}</h5>
          <ul className="space-y-2 text-[14.5px]">
            <li className="flex items-center gap-2"><Mail size={16}/> {SITE.email}</li>
            <li className="flex items-center gap-2"><Phone size={16}/> {SITE.phone}</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Espírito Santo - Brasil</li>
          </ul>
          <Button variant="ghostLight" size="sm" href={localePath("/contact", locale)} className="mt-5">{copy.conversation} <ArrowRight size={16}/></Button>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-8 pt-6 border-t border-cream-50/12 flex flex-wrap gap-3 justify-between text-[12.5px] opacity-70">
        <span>© {new Date().getFullYear()} Brazil Off Script — {copy.copyright}</span>
        <span>{copy.care}</span>
      </div>
    </footer>
  );
}
