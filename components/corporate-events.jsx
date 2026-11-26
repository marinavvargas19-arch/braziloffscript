import { ArrowRight, Building2, Car, Compass, SlidersHorizontal } from 'lucide-react';
import BahiaOffsites from '@/components/bahia-offsites';
import CorporateInquiry from '@/components/corporate-inquiry';
import { Container, SectionHead } from '@/components/ui/section';
import { corporateCopy, CORPORATE_PATH } from '@/lib/corporate-events';

const icons = [Building2,Car,Compass,SlidersHorizontal];
export default function CorporateEvents({ locale = 'en' }) {
  const c = corporateCopy[locale] || corporateCopy.en, es = locale === 'es';
  const schema = { '@context':'https://schema.org', '@type':'Service', name:c.heading, serviceType:es?'Planificación de offsites y eventos corporativos':'Corporate event and team offsite planning', url:'https://www.braziloffscript.com'+(es?'/es':'')+CORPORATE_PATH, areaServed:{'@type':'Country',name:'Brazil'}, provider:{'@type':'TravelAgency',name:'Brazil Off Script',url:'https://www.braziloffscript.com'} };
  return <div lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
    <section className="bg-leaf-d text-cream-50">
      <Container className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 py-12 sm:py-16 lg:py-20 items-center">
        <div><p className="text-xs font-semibold tracking-[.2em] uppercase text-terra-l">{c.eyebrow}</p>
          <h1 className="font-serif text-[clamp(42px,5vw,68px)] leading-[1.03] mt-5">{c.heading}</h1>
          <p className="text-[16px] sm:text-[17px] leading-relaxed mt-6 max-w-xl text-cream-50/90">{c.intro}</p>
          <div className="flex flex-wrap items-center gap-5 mt-8"><a href="#event-inquiry" className="inline-flex items-center gap-4 bg-terra text-ink rounded-full px-6 py-3.5 font-semibold hover:bg-terra-l">{c.cta}<ArrowRight size={18}/></a><a href="#event-process" className="text-sm underline underline-offset-4">{c.secondary}</a></div>
        </div>
        <figure className="relative"><div className="aspect-[4/3] overflow-hidden rounded-xl"><img src="/corporate/blindpay-boat-offsite-960.webp" srcSet="/corporate/blindpay-boat-offsite-640.webp 640w, /corporate/blindpay-boat-offsite-960.webp 960w, /corporate/blindpay-boat-offsite-1600.webp 1600w" sizes="(max-width:1023px) 100vw, 560px" width={1600} height={900} alt={es?'Vista aérea del equipo de Blindpay brindando en el agua durante un paseo en barco de su offsite':'Aerial view of the Blindpay team raising a toast in the water during their offsite boat trip'} fetchPriority="high" className="w-full h-full object-cover object-[53%_42%] scale-[1.25] translate-y-[8%] origin-[53%_42%]"/></div><figcaption className="mt-3 text-xs text-cream-50/75">{es?'Paseo en barco · Offsite de Blindpay':'Boat trip · Blindpay offsite'}</figcaption></figure>
      </Container>
      <div className="border-t border-cream-50/20"><Container className="py-5 text-center text-xs sm:text-sm leading-relaxed tracking-wide">{c.strap}</Container></div>
    </section>

    <section className="py-14 sm:py-20"><Container>
      <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-end"><SectionHead eyebrow={c.promiseEyebrow} title={c.promiseTitle}/><p className="text-ink-soft leading-relaxed">{c.promise}</p></div>
      <h2 className="font-serif text-3xl mt-12 mb-7">{c.formatsTitle}</h2>
      <div className="grid md:grid-cols-3 gap-6">{c.formats.map(([title,body],i)=><section key={title} className="border-t border-line pt-6"><span className="text-terra-d text-xs font-bold tracking-widest">0{i+1}</span><h3 className="font-serif text-[28px] mt-3 mb-3">{title}</h3><p className="text-sm leading-relaxed text-ink-soft">{body}</p></section>)}</div>
    </Container></section>

    <BahiaOffsites locale={locale} />

    <section id="event-process" className="scroll-mt-32 bg-paper border-y border-line py-14 sm:py-20"><Container>
      <SectionHead eyebrow={c.processEyebrow} title={c.processTitle} className="max-w-3xl"/>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">{c.steps.map(([title,body],i)=><li key={title} className="border-t border-line pt-6"><span className="font-serif text-5xl text-terra-d">0{i+1}</span><h3 className="font-serif text-2xl mt-5 mb-3">{title}</h3><p className="text-sm leading-relaxed text-ink-soft">{body}</p></li>)}</ol>
      <a href="#event-inquiry" className="inline-flex items-center gap-3 mt-10 text-sm font-semibold text-leaf-d underline underline-offset-4">{c.cta}<ArrowRight size={16}/></a>
    </Container></section>

    <section className="py-14 sm:py-20"><Container className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      <img src="/blog/optimized/caraiva-960.webp" srcSet="/blog/optimized/caraiva-640.webp 640w, /blog/optimized/caraiva-960.webp 960w" sizes="(max-width:767px) 100vw, 560px" width={960} height={640} loading="lazy" alt={es?'Embarcaciones y un banco de arena junto a la desembocadura del río Caraíva, Bahía':'Boats and a sandbar at the mouth of the Caraíva River, Bahia'} className="w-full aspect-[4/3] object-cover rounded-xl"/>
      <div><SectionHead eyebrow={c.experienceEyebrow} title={c.experienceTitle} sub={c.experienceBody}/><a href="#event-inquiry" className="inline-flex gap-3 mt-6 font-semibold text-sm text-leaf-d underline underline-offset-4">{c.cta}<ArrowRight size={16}/></a></div>
    </Container></section>

    <section id="event-support" className="scroll-mt-32 bg-leaf-d text-cream-50 py-14 sm:py-20"><Container>
      <div className="w-20 h-1 rounded-full bg-terra-l mb-7" aria-hidden="true"/>
      <p className="text-xs uppercase tracking-[.18em] text-terra-l font-semibold">{c.servicesEyebrow}</p>
      <h2 className="font-serif text-4xl sm:text-5xl mt-4 max-w-3xl">{c.servicesTitle}</h2>
      <p className="mt-5 max-w-3xl text-cream-50/80 leading-relaxed">{c.servicesIntro}</p>
      <ol className="mt-10 sm:mt-14">{c.services.map(([title,body],i)=>{const Icon=icons[i];return <li key={title} className="grid grid-cols-[42px_1fr] sm:grid-cols-[64px_1fr_100px] gap-5 sm:gap-8 items-center py-8 sm:py-10 border-t border-cream-50/20 last:border-b">
        <span className="font-serif text-4xl sm:text-5xl text-terra-l">0{i+1}</span>
        <div className="sm:border-l border-cream-50/25 sm:pl-8"><h3 className="font-serif text-[28px] sm:text-4xl leading-tight">{title}</h3><p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-cream-50/75">{body}</p></div>
        <div className="hidden sm:flex w-24 h-24 rounded-2xl bg-cream-50/5 items-center justify-center"><Icon size={36} strokeWidth={1.25} className="text-terra-l" aria-hidden="true"/></div>
      </li>})}</ol>
      <a className="inline-flex gap-3 items-center mt-8 rounded-full border border-cream-50/50 px-6 py-3 text-sm font-semibold hover:bg-cream-50/10" href="#event-inquiry">{c.cta}<ArrowRight size={16}/></a>
    </Container></section>

    <section id="event-inquiry" className="scroll-mt-28 py-14 sm:py-20"><Container className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16 items-start">
      <div className="lg:sticky lg:top-32"><SectionHead eyebrow={c.inquiryEyebrow} title={c.inquiryTitle} sub={c.inquiryBody}/><p className="mt-8 pt-5 border-t border-line text-sm font-semibold text-leaf-d">{c.contactLine}</p></div>
      <CorporateInquiry locale={locale}/>
    </Container></section>

    <section className="pb-16 sm:pb-24"><Container className="max-w-3xl"><h2 className="font-serif text-3xl sm:text-4xl mb-6">{c.faqTitle}</h2>{c.faqs.map(([q,a])=><details key={q} className="border-b border-line py-5"><summary className="cursor-pointer font-semibold text-sm sm:text-base">{q}</summary><p className="mt-4 text-ink-soft text-sm leading-relaxed">{a}</p></details>)}</Container></section>
  </div>;
}
