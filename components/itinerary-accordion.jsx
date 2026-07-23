"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

function cn(...classes) { return classes.filter(Boolean).join(" "); }

export default function ItineraryAccordion({ days }) {
  const [open, setOpen] = useState(0); // first day open by default

  return (
    <div className="mt-7 border-t border-line">
      {days.map((d, i) => {
        const isOpen = open === i;
        return (
          <div key={i} id={`day-${i + 1}`} className="border-b border-line scroll-mt-24">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={cn(
                "w-full text-left grid grid-cols-[70px_1fr_auto] md:grid-cols-[110px_1fr_auto] gap-5 py-5 items-start transition hover:bg-terra/5",
                isOpen && "bg-terra/[.04]"
              )}
            >
              <div className="font-serif text-[20px] text-ink self-center">Day {i + 1}</div>
              <div>
                <div className="text-[13.5px] text-muted">{d.route}</div>
                <div className="font-semibold text-ink text-[16px] mt-0.5">{d.city}</div>
              </div>
              <span className={cn(
                "self-center text-terra transition-transform duration-300",
                isOpen && "rotate-90"
              )}>
                <ChevronRight size={20}/>
              </span>
            </button>

            <div className={cn(
              "grid transition-all duration-300 ease-out",
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}>
              <div className="overflow-hidden">
                <div className="pb-8 md:pl-[110px]">
                  <div className="rounded-xl overflow-hidden aspect-[21/9] mb-6 shadow-[0_12px_30px_-18px_rgba(25,40,30,.4)]">
                    <img src={d.img} className="w-full h-full object-cover" style={d.imgPosition ? {objectPosition: d.imgPosition} : undefined} alt=""/>
                  </div>
                  {d.blocks.map((b, j) => (
                    <div key={j} className="mt-5 first:mt-0 border-l-2 border-line pl-5">
                      <div className="font-semibold text-ink flex items-center gap-3 flex-wrap">
                        <span className="text-[11px] tracking-[.16em] uppercase text-terra font-bold">{b.kind}</span>
                        <span>{b.title}</span>
                      </div>
                      <p className="mt-2 text-[15px] text-ink-soft leading-[1.7] max-w-[64ch]">{b.desc}</p>
                    </div>
                  ))}
                  {d.meals && (
                    <div className="mt-6 pt-5 border-t border-dashed border-line flex items-center gap-2 text-[13.5px] text-muted">
                      Meals included: {d.meals}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
