import { Container } from "@/components/ui/section";
import { SITE } from "@/lib/data";

export function TopBar() {
  return (
    <div className="bg-leaf-d text-[#e7dfc4] text-[13px]">
      <Container className="flex items-center justify-between gap-4 py-2">
        <div className="hidden md:flex items-center whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mr-2"></span>
          Talk to a Brazil specialist · {SITE.phone}
        </div>
        <div className="md:hidden">Local experts. Real Brazil.</div>
        <div className="flex items-center gap-4 text-[#e7dfc4]/80">
          <a href="/about" className="hover:text-cream-50">About</a>
          <a href="/contact" className="hover:text-cream-50">Contact</a>
          <span className="hidden sm:inline opacity-50">|</span>
          <span className="hidden sm:inline">EN</span>
        </div>
      </Container>
    </div>
  );
}
