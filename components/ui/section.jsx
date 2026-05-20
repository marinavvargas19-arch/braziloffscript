import { cn } from "@/lib/utils";

export function Container({ children, className }) {
  return (
    <div className={cn("max-w-[1240px] mx-auto px-5 sm:px-7", className)}>{children}</div>
  );
}

export function SectionHead({ eyebrow, title, sub, center, className, eyebrowColor = "terra" }) {
  return (
    <div className={cn(center && "text-center mx-auto max-w-3xl", className)}>
      {eyebrow && (
        <div
          className={cn(
            "text-[11px] tracking-[.22em] uppercase font-semibold mb-3",
            eyebrowColor === "terra" ? "text-terra" : "text-leaf"
          )}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="font-serif text-[clamp(30px,3.4vw,46px)] font-medium leading-[1.08] tracking-tight text-ink text-balance">
          {title}
        </h2>
      )}
      {sub && <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{sub}</p>}
    </div>
  );
}
