import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition active:translate-y-px whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:     "bg-terra text-cream-50 hover:bg-terra-d shadow-[0_10px_24px_-14px_rgba(224,122,78,.8)]",
        green:       "bg-leaf text-cream-50 hover:bg-leaf-d",
        ghost:       "bg-transparent text-leaf-d border border-leaf-d hover:bg-leaf-d hover:text-cream-50",
        ghostLight:  "bg-transparent text-cream-50 border border-cream-50/45 hover:bg-cream-50 hover:text-leaf-d hover:border-cream-50",
        outline:     "bg-cream-50 text-ink border border-line hover:border-ink",
        link:        "p-0 text-terra hover:text-terra-d hover:underline underline-offset-4",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export function Button({ variant, size, className, href, children, ...rest }) {
  const cls = cn(buttonVariants({ variant, size }), variant === "link" && "px-0 py-0", className);
  if (href) {
    const external = /^https?:\/\//.test(href);
    if (external) return <a href={href} target="_blank" rel="noreferrer" className={cls} {...rest}>{children}</a>;
    return <a href={href} className={cls} {...rest}>{children}</a>;
  }
  return <button className={cls} {...rest}>{children}</button>;
}

export { buttonVariants };
