"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items, className }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((it, i) => (
        <div key={i} className="border-b border-line">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full text-left flex items-center justify-between py-5 gap-4"
          >
            <span className="font-semibold text-ink text-[17px]">{it.q}</span>
            <span
              className={cn(
                "flex-none w-6 h-6 rounded-full border border-ink-soft flex items-center justify-center transition-transform",
                open === i && "rotate-180"
              )}
            >
              <ChevronDown size={16} />
            </span>
          </button>
          {open === i && <div className="pb-6 pr-10 text-ink-soft leading-relaxed">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
