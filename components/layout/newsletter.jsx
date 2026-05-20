"use client";
import { useState } from "react";
import { Container } from "@/components/ui/section";

export function NewsletterBand() {
  const [done, setDone] = useState(false);
  return (
    <section className="bg-terra text-cream-50 py-14">
      <Container className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-[11px] tracking-[.22em] uppercase font-bold opacity-80">Newsletter</div>
          <h3 className="font-serif text-[clamp(28px,3vw,38px)] mt-2 leading-tight">
            Curated inspiration, authentic Brazil, and journeys designed beyond the ordinary.
          </h3>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          className="flex flex-col sm:flex-row gap-3"
        >
          {done ? (
            <div className="bg-cream-50/20 rounded-full px-6 py-3.5">Thanks — you're on the list.</div>
          ) : (
            <>
              <input type="email" required placeholder="you@yourdomain.com"
                className="flex-1 bg-cream-50/95 text-ink placeholder:text-ink/40 rounded-full px-5 py-3.5 outline-none border border-transparent focus:border-leaf"/>
              <button className="rounded-full bg-leaf-d hover:bg-leaf text-cream-50 font-semibold px-7 py-3.5 transition">
                Join the list
              </button>
            </>
          )}
        </form>
      </Container>
    </section>
  );
}
