import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default", className = "" }) {
  const map = {
    default:    "bg-leaf/10 text-leaf-d",
    terra:      "bg-terra/15 text-terra-d",
    gold:       "bg-[#e8b53d]/20 text-[#8a6918]",
    azul:       "bg-[#2d5a8a]/14 text-azul",
    light:      "bg-cream-50/90 text-ink",
    // Solid variants for use over images
    terraSolid: "bg-terra text-cream-50 shadow-sm",
    leafSolid:  "bg-leaf-d text-cream-50 shadow-sm",
    azulSolid:  "bg-azul text-cream-50 shadow-sm",
    goldSolid:  "bg-[#b8860b] text-cream-50 shadow-sm",
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
