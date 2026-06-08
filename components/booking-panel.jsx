"use client";
import { useState } from "react";
import { Users, ArrowRight, Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field, inputCls } from "@/components/ui/field";
import { IMG, SITE } from "@/lib/data";

function cn(...c) { return c.filter(Boolean).join(" "); }

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function BookingPanel({ tour }) {
  const [sent, setSent]         = useState(false);
  const [month, setMonth]       = useState(null);   // 0–11 or null
  const [flexible, setFlexible] = useState(false);
  const [travelers, setTravelers] = useState("2");
  const [tripLength, setTripLength] = useState("10-14");
  const [comfort, setComfort]   = useState("comfort");

  function selectMonth(i) {
    setMonth(i === month ? null : i);
    setFlexible(false);
  }
  function toggleFlexible() {
    setFlexible(f => !f);
    setMonth(null);
  }

  return (
    <div>
      <div className="rounded-t-2xl bg-gradient-to-br from-leaf-d to-leaf p-6 flex items-center gap-4 text-cream-50 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-gold/20 blur-2xl"/>
        <Avatar src={IMG.helena} size={64} alt="Marina" className="border-[3px] border-cream-50/25 relative"/>
        <div className="relative">
          <div className="text-[13px] opacity-90">Plan with your local expert</div>
          <div className="font-serif text-[26px] leading-none mt-1">Marina Vargas</div>
          <div className="text-[12px] opacity-80 mt-1">Local Expert & Trip Designer</div>
        </div>
      </div>

      <form
        onSubmit={e => { e.preventDefault(); if (month === null && !flexible) {
    alert("Please select an ideal month or choose 'I'm flexible'.");
    return;
  } setSent(true); }}
        className="bg-paper border border-line border-t-0 rounded-b-2xl p-6 shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]"
      >
        <div className="font-serif text-[24px] text-ink pb-4 border-b border-line">
          Start Planning Your Journey
        </div>

        {sent ? (
          <div className="py-6">
            <div className="w-12 h-12 rounded-full bg-leaf text-cream-50 flex items-center justify-center mb-4"><Check size={20}/></div>
            <h4 className="font-serif text-[22px] text-ink leading-tight">Request received.</h4>
            <p className="mt-2 text-[14.5px] text-ink-soft">Marina will be in touch within 48 hours with a personalized proposal.</p>
            <Button variant="ghost" href="/journeys" className="mt-5 w-full justify-center">Keep exploring</Button>
          </div>
        ) : (
          <>
            {/* Month picker */}
            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">
              Ideal month
            </label>
            <div className="grid grid-cols-4 gap-1.5 mb-2">
              {MONTHS.map((m, i) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => selectMonth(i)}
                  className={cn(
                    "py-2 rounded-lg text-[13px] font-semibold border transition",
                    month === i
                      ? "bg-leaf border-leaf text-cream-50"
                      : "border-line text-ink-soft hover:border-leaf"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleFlexible}
              className={cn(
                "w-full mt-1 py-2.5 rounded-lg text-[13px] font-semibold border transition",
                flexible
                  ? "bg-terra/10 border-terra text-terra-d"
                  : "border-line text-muted hover:border-terra hover:text-terra-d"
              )}
            >
              {flexible ? "✓ I'm flexible — no fixed date yet" : "I don't have a date yet"}
            </button>

            {/* Travelers */}
            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">Travelers</label>
            <Field icon={<Users size={16}/>}>
              <select value={travelers} onChange={e => setTravelers(e.target.value)} className={inputCls + " appearance-none"}>
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5">5+ Travelers</option>
              </select>
            </Field>
            
            {/* Duration */}
<label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">
  Trip length
</label>

<div className="grid grid-cols-2 gap-2">
  {[
    { v: "7-10", l: "7–10 days" },
    { v: "10-14", l: "10–14 days" },
    { v: "14-18", l: "14–18 days" },
    { v: "18+", l: "18+ days" },
    { v: "not-sure", l: "Not sure yet" },
  ].map(o => (
    <button
      type="button"
      key={o.v}
      onClick={() => setTripLength(o.v)}
      className={cn(
        "py-2 rounded-lg text-[13px] font-semibold border transition",
        tripLength === o.v
          ? "bg-leaf border-leaf text-cream-50"
          : "border-line text-ink-soft hover:border-leaf"
      )}
    >
      {o.l}
    </button>
  ))}
</div>

            {/* Comfort level */}
            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">Comfort level</label>
            <div className="grid grid-cols-2 gap-2">
              {[{v:"comfort",l:"Comfort"},{v:"premium",l:"Premium"},{v:"luxury",l:"Luxury"},{v:"mix",l:"A mix of both"}].map(o => (
                <button
                  type="button"
                  key={o.v}
                  onClick={() => setComfort(o.v)}
                  className={cn(
                    "py-2 rounded-lg text-[13px] font-semibold border transition",
                    comfort === o.v ? "bg-leaf border-leaf text-cream-50" : "border-line text-ink-soft hover:border-leaf"
                  )}
                >
                  {o.l}
                </button>
              ))}
            </div>

            <Button type="submit" className="w-full justify-center mt-5">
              Request this trip <ArrowRight size={16}/>
            </Button>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hi,%20I%20want%20to%20plan%20a%20Brazil%20trip`}
              target="_blank" rel="noreferrer"
              className="w-full justify-center mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 transition"
            >
              Or chat on WhatsApp
            </a>

            <p className="mt-4 text-[12px] text-muted text-center leading-relaxed">
              Free no-obligation quote · Reply within 48 hours · Real human, not a chatbot
            </p>

            <div className="mt-5 pt-5 border-t border-line flex justify-between gap-3 text-[12px] text-muted">
              {["100% tailor-made", "Local experts", "Financially protected"].map(x => (
                <span key={x} className="flex items-center gap-1.5">
                  <Check size={14} className="text-leaf"/>{x}
                </span>
              ))}
            </div>
          </>
        )}
      </form>
    </div>
  );
}
