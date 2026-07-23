import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-leaf-d text-[#cfc8a8] pt-16 pb-7 px-5">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="font-serif text-cream-50 text-[36px] leading-[0.95]">Brazil<br/>Off Script</div>
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed opacity-90">
            Tailor-made journeys planned by local experts in Brazil. Slow travel, real stays, real people — the country, off the obvious path.
          </p>
          <div className="flex gap-2 mt-6">
            <a href="https://instagram.com/braziloffscript" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-cream-50/8 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition"><Instagram size={16}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-cream-50/8 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition"><Facebook size={16}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-cream-50/8 hover:bg-cream-50/20 flex items-center justify-center text-cream-50 transition"><Twitter size={16}/></a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-serif text-cream-50 text-[22px] mb-3">Explore</h5>
          <ul className="space-y-2 text-[14.5px]">
            <li><Link href="/journeys" className="hover:text-cream-50">Our Journeys</Link></li>
            <li><Link href="/tours" className="hover:text-cream-50">All Tours</Link></li>
            <li><Link href="/quiz" className="hover:text-cream-50">Find my journey</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-serif text-cream-50 text-[22px] mb-3">Company</h5>
          <ul className="space-y-2 text-[14.5px]">
            <li><Link href="/about" className="hover:text-cream-50">About us</Link></li>
            <li><Link href="/about#how" className="hover:text-cream-50">How it works</Link></li>
            <li><Link href="/faq" className="hover:text-cream-50">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-cream-50">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h5 className="font-serif text-cream-50 text-[22px] mb-3">Get in touch</h5>
          <ul className="space-y-2 text-[14.5px]">
            <li className="flex items-center gap-2"><Mail size={16}/> {SITE.email}</li>
            <li className="flex items-center gap-2"><Phone size={16}/> {SITE.phone}</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Espírito Santo - Brasil</li>
          </ul>
          <Button variant="ghostLight" size="sm" href="/contact" className="mt-5">Start a conversation <ArrowRight size={16}/></Button>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-10 pt-6 border-t border-cream-50/12 flex flex-wrap gap-3 justify-between text-[12.5px] opacity-70">
        <span>© {new Date().getFullYear()} Brazil Off Script — Tailor-made journeys.</span>
        <span>Made with care in Espírito Santo - Brasil.</span>
      </div>
    </footer>
  );
}
