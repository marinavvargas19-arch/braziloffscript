"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function cn(...classes) { return classes.filter(Boolean).join(" "); }

export function QuizImagePanel({ image, eyebrow, title, body }) {
  return (
    <aside className="lg:w-2/5 relative lg:sticky lg:top-0 lg:h-screen overflow-hidden min-h-[340px]">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-ink/35"/>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,53,33,.66), rgba(20,53,33,.18) 28%, rgba(20,53,33,.82) 74%, rgba(20,53,33,.96))",
        }}
      />
      <div className="relative h-full flex flex-col p-7 md:p-10 text-cream-50">
        <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-cream-50 drop-shadow-[0_2px_8px_rgba(0,0,0,.45)] hover:text-gold transition-colors">
          <ArrowLeft size={16}/> Back to Brazil Off Script
        </Link>
        <div className="mt-auto pt-10 max-w-md">
          <div className="rounded-lg bg-ink/68 px-5 py-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,.75)] backdrop-blur-[2px] ring-1 ring-cream-50/15">
            <div className="text-[11px] tracking-[.22em] uppercase text-cream-50/85 mb-3">{eyebrow}</div>
            <h2 className="font-serif text-[clamp(28px,3vw,42px)] leading-tight text-cream-50">
              {title}
            </h2>
            {body && (
              <p className="mt-4 text-cream-50/90 text-[15.5px] leading-relaxed">
                {body}
              </p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export function QuizResultGallery({ title = "More Brazil to picture next", intro, images }) {
  if (!images?.length) return null;

  return (
    <section className="mt-12 pt-10 border-t border-line">
      <h3 className="font-serif text-[24px] text-ink leading-tight">{title}</h3>
      {intro && <p className="mt-2 text-[14.5px] text-ink-soft">{intro}</p>}
      <div className="mt-7 grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, i) => (
          <figure
            key={`${image.src}-${image.label}`}
            className={cn(
              "relative overflow-hidden rounded-lg bg-line",
              i === 0 ? "col-span-2 md:col-span-1 aspect-[16/10] md:aspect-square" : "aspect-square"
            )}
          >
            <img src={image.src} alt="" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent"/>
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[12px] font-bold uppercase tracking-[.12em] text-cream-50 drop-shadow">
              {image.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
