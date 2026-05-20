import { cn } from "@/lib/utils";

export function Card({ className, children, ...rest }) {
  return (
    <div
      className={cn(
        "bg-paper border border-line rounded-2xl overflow-hidden",
        "shadow-[0_1px_0_rgba(25,40,30,.04),0_6px_14px_-10px_rgba(25,40,30,.18)]",
        "transition hover:shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)] hover:-translate-y-0.5",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
