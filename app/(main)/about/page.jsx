import { Container, SectionHead } from "@/components/ui/section";
import { NewsletterBand } from "@/components/layout/newsletter";
import { IMG } from "@/lib/data";

export const metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={IMG.beach} className="w-full h-full object-cover" alt=""/>
          <div className="absolute inset-0 bg-leaf-d/55"></div>
        </div>
        <Container className="relative py-24 md:py-32 text-cream-50">
          <div className="text-[11px] tracking-[.22em] uppercase opacity-85 mb-3">About us</div>
          <h1 className="font-serif text-[clamp(40px,5.8vw,76px)] leading-[1.02] tracking-tight">Brazil, off script.</h1>
          <p className="mt-5 max-w-2xl text-cream-50/90 text-[17px] leading-relaxed">
            We create immersive journeys designed to reveal a more authentic, emotional, and <strong>meaningful side of Brazil</strong> — uncovering places, stories, and experiences hidden even from many Brazilians.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionHead eyebrow="Our Philosophy" title="Travel beyond the obvious."/>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
            <div>
              <div className="text-terra font-bold text-[14px] tracking-wide uppercase mb-2">Beyond the obvious</div>
              <p className="text-ink-soft text-[16.5px] leading-relaxed">We design journeys around the parts of Brazil that don&apos;t make it onto first-time itineraries — and then we layer in the icons, but quieter and at the right hour.</p>
            </div>
            <div>
              <div className="text-terra font-bold text-[14px] tracking-wide uppercase mb-2">Real connections, tailored for you</div>
              <p className="text-ink-soft text-[16.5px] leading-relaxed">Beyond tourist checklists. Beyond generic itineraries. Beyond the expected. Beyond what your friend posted on Instagram last summer.</p>
            </div>
          </div>
        </Container>

        <Container className="mt-16">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {[IMG.ribbons, IMG.beach, IMG.bossa, IMG.market, IMG.iguazu, IMG.food, IMG.rioSugar, IMG.salvador, IMG.surfer, IMG.lencois, IMG.amazon, IMG.pantanal].map((src,i)=>(
              <div key={i} className="overflow-hidden rounded-xl aspect-square">
                <img src={src} alt="" className="w-full h-full object-cover transition duration-700 hover:scale-105"/>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-leaf-d text-cream-50 py-24">
        <Container>
          <SectionHead eyebrow="What makes us different" title="Unlike traditional travel agencies, Brazil Off Script focuses on:" center eyebrowColor="terra" className="!text-cream-50"/>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              {n:"1", t:"Hidden destinations and unique experiences", d:"We take you beyond the obvious to discover the real Brazil." },
              {n:"2", t:"Boutique and carefully selected accommodations", d:"Handpicked stays that reflect the charm and authenticity of each region." },
              {n:"3", t:"Flexible and personalized itineraries", d:"Every trip is tailored to your style, pace, and interests." },
              {n:"4", t:"Authentic Brazilian culture and lifestyle", d:"Connect with local communities and immerse yourself in vibrant traditions." },
              {n:"5", t:"A balance between sophistication and adventure", d:"From luxury to exploration, we craft the perfect balance for you." },
              {n:"6", t:"Slow travel and meaningful experiences", d:"We believe the best journeys are the ones that stay with you forever." },
            ].map((it,i)=>(
              <div key={i} className="rounded-2xl bg-cream-50/5 border border-cream-50/10 p-7">
                <div className="font-serif text-[48px] leading-none text-gold">{it.n}</div>
                <div className="font-semibold mt-3 text-cream-50 text-[16.5px]">{it.t}</div>
                <p className="mt-2 text-cream-50/80 text-[14.5px] leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <NewsletterBand/>
    </>
  );
}
