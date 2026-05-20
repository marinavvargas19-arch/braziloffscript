import { cn } from "@/lib/utils";

export function Avatar({ src, alt = "", size = 48, className }) {
  return (
    <div
      className={cn("rounded-full bg-cover bg-center flex-none", className)}
      style={{ width: size, height: size, backgroundImage: `url('${src}')` }}
      role="img"
      aria-label={alt}
    />
  );
}
