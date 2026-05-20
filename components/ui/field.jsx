import { cn } from "@/lib/utils";

export function Field({ icon, children, className }) {
  return (
    <div className={cn(
      "flex items-center gap-2.5 border border-line bg-white rounded-xl px-3.5 py-3 transition",
      "focus-within:border-leaf focus-within:shadow-[0_0_0_3px_rgba(31,74,47,.10)]",
      className
    )}>
      {icon && <span className="text-muted flex-none">{icon}</span>}
      {children}
    </div>
  );
}

export const inputCls = "bg-transparent outline-none border-0 w-full text-[15px] text-ink placeholder:text-muted/70";
