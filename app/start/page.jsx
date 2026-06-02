import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { IMG, SITE } from "@/lib/data";

export const metadata = { title: "Start your journey — Brazil Off Script" };

export default function StartPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">

      {/* Left — sticky image panel */}
      <aside className="lg:w-2/5 relative lg:sticky lg:top-0 lg:h-screen overflow-hidden min-h-[280px]">
        <img
          src={IMG.rioChrist}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(20,53,33,.35), rgba(20,53,33,.1) 40%, rgba(20,53,33,.75))" }}
        />
        <div className="relative h-full flex flex-col p-7 md:p-10 text-cream-50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold opacity-90 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={16}/> Back to Brazil Off Script
          </Link>
          <div className="mt-auto pt-10">
            <div className="text-[11px] tracking-[.22em] uppercase opacity-85 mb-3">Start your journey</div>
            <h2 className="font-serif text-[clamp(28px,3vw,42px)] leading-tight max-w-md">
              There&apos;s no single way to experience Brazil.<br/>
              <em className="not-italic text-gold">Let&apos;s find yours.</em>
            </h2>
            <p className="mt-4 max-w-md text-cream-50/85 text-[15.5px] leading-relaxed">
              Whether you already have destinations in mind or want help discovering the perfect journey, we&apos;ll curate a version of Brazil that feels personal, seamless, and unforgettable.
            </p>
          </div>
        </div>
      </aside>

      {/* Right — choice panel */}
      <main className="lg:w-3/5 flex flex-col bg-cream">
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl mx-auto w-full px-6 py-16 md:py-24">

            <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-4">Choose your path</div>
            <h1 className="font-serif text-[clamp(30px,3.6vw,46px)] leading-[1.1] tracking-tight text-ink text-balance">
              Some travelers come with a destination.<br/>
              <em className="not-italic text-leaf">Others come searching for a feeling.</em>
            </h1>
            <p className="mt-5 text-ink-soft text-[16.5px] leading-relaxed max-w-lg">
              Wherever you are in your journey planning, we&apos;ll help design a version of Brazil tailored to you.
            </p>

            <div className="mt-12 grid gap-4">

              {/* Option A — I know where I want to go */}
              <Link
                href="/quiz"
                className="group block rounded-2xl border border-line bg-paper p-7 md:p-8 transition hover:border-leaf hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-none w-12 h-12 rounded-full bg-leaf/10 text-leaf-d flex items-center justify-center group-hover:bg-leaf group-hover:text-cream-50 transition">
                    <MapPin size={20}/>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[26px] md:text-[28px] leading-tight text-ink">
                      I already know where I want to go
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft max-w-md">
                      Select the destinations that interest you most and we&apos;ll design a journey tailored to your travel style, pace, and preferences.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-leaf-d font-semibold text-[14px] group-hover:gap-3 transition-all">
                      Build my journey <ArrowRight size={16}/>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Option B — Guide me */}
              <Link
                href="/quiz-discovery"
                className="group block rounded-2xl border border-terra/40 bg-terra/[.06] p-7 md:p-8 transition hover:border-terra hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-22px_rgba(224,122,78,.45)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-none w-12 h-12 rounded-full bg-terra/15 text-terra-d flex items-center justify-center group-hover:bg-terra group-hover:text-cream-50 transition">
                    <Sparkles size={20}/>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[26px] md:text-[28px] leading-tight text-ink">
                      Not sure where to start?
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft max-w-md">
                      Take our 60-second travel quiz and we&apos;ll help uncover the version of Brazil that&apos;s right for you.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-terra-d font-semibold text-[14px] group-hover:gap-3 transition-all">
                      Start the quiz <ArrowRight size={16}/>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-12 pt-7 border-t border-line text-[13.5px] text-ink-soft text-center">
              Still not sure?{" "}
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-leaf-d font-semibold underline underline-offset-4 hover:text-leaf transition-colors"
              >
                Talk to a Brazil specialist on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
