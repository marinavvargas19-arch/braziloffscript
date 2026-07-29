import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default", className = "" }) {
  const map = {
    default:    "bg-leaf/10 text-leaf-d",
    terra:      "bg-terra/15 text-terra-d",
    gold:       "bg-[#e8b53d]/20 text-[#8a6918]",
    azul:       "bg-[#2d5a8a]/14 text-azul",
    light:      "bg-cream-50/90 text-ink",
    // Solid variants for use over images (strong shadow for legibility)
    lightSolid: "bg-cream-50 text-ink shadow-[0_6px_16px_-6px_rgba(0,0,0,.5)]",
    inkSolid:   "bg-ink/85 text-cream-50 backdrop-blur-sm shadow-[0_6px_16px_-6px_rgba(0,0,0,.6)]",
    terraSolid: "bg-terra text-cream-50 shadow-[0_6px_16px_-6px_rgba(0,0,0,.5)]",
    leafSolid:  "bg-leaf-d text-cream-50 shadow-[0_6px_16px_-6px_rgba(0,0,0,.5)]",
    azulSolid:  "bg-azul text-cream-50 shadow-[0_6px_16px_-6px_rgba(0,0,0,.5)]",
    goldSolid:  "bg-[#b8860b] text-cream-50 shadow-[0_6px_16px_-6px_rgba(0,0,0,.5)]",
  };
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] tracking-[.12em] uppercase font-bold",
      map[variant], className
    )}>
      {children}
    </span>
  );
}
