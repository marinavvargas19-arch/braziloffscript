"use client";
import { useState } from "react";
import { Calendar, Users, ArrowRight, Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field, inputCls } from "@/components/ui/field";
import { IMG, SITE } from "@/lib/data";

export default function BookingPanel({ tour }) {
  const [sent, setSent] = useState(false);
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [comfort, setComfort] = useState("comfort");

  return (
    <div>
      <div className="rounded-t-2xl bg-gradient-to-br from-leaf-d to-leaf p-6 flex items-center gap-4 text-cream-50 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-gold/20 blur-2xl"></div>
        <Avatar src={IMG.helena} size={64} alt="Marina" className="border-[3px] border-cream-50/25 relative"/>
        <div className="relative">
          <div className="text-[13px] opacity-90">Plan with your local expert</div>
          <div className="font-serif text-[26px] leading-none mt-1">Marina</div>
          <div className="text-[12px] opacity-80 mt-1">Espírito Santo · 12+ years</div>
        </div>
      </div>

      <form onSubmit={e=>{e.preventDefault();setSent(true);}} className="bg-paper border border-line border-t-0 rounded-b-2xl p-6 shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]">
        <div className="font-serif text-[24px] text-ink pb-4 border-b border-line">
          Request a personalized quote
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
            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">Ideal start date</label>
            <Field icon={<Calendar size={16}/>}><input type="date" required value={date} onChange={e=>setDate(e.target.value)} className={inputCls}/></Field>

            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">Travelers</label>
            <Field icon={<Users size={16}/>}>
              <select value={travelers} onChange={e=>setTravelers(e.target.value)} className={inputCls + " appearance-none"}>
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5">5+ Travelers</option>
              </select>
            </Field>

            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">Comfort level</label>
            <div className="grid grid-cols-2 gap-2">
              {[{v:"comfort",l:"Comfort"},{v:"premium",l:"Premium"},{v:"luxury",l:"Luxury"},{v:"mix",l:"Mix it up"}].map(o=>(
                <button type="button" key={o.v} onClick={()=>setComfort(o.v)} className={`py-2 rounded-lg text-[13px] font-semibold border transition ${comfort===o.v?"bg-leaf border-leaf text-cream-50":"border-line text-ink-soft hover:border-leaf"}`}>{o.l}</button>
              ))}
            </div>

            <div className="mt-4 bg-[#fbf5e6] border border-[#ecdfbc] text-[#6b572a] rounded-xl p-3 text-[12.5px] leading-relaxed flex gap-2">
              <span>⚠</span><span>Trips to Brazil should be planned at least 2 weeks before departure — accommodation and experiences book up quickly.</span>
            </div>

            <Button type="submit" className="w-full justify-center mt-5">Request this trip <ArrowRight size={16}/></Button>

            <a href={`https://wa.me/${SITE.whatsapp}?text=Hi,%20I%20want%20to%20plan%20a%20Brazil%20trip`} target="_blank" rel="noreferrer"
               className="w-full justify-center mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 transition">
              Or chat on WhatsApp
            </a>

            <p className="mt-4 text-[12px] text-muted text-center leading-relaxed">Free no-obligation quote · Reply within 48 hours · Real human, not a chatbot</p>

            <div className="mt-5 pt-5 border-t border-line flex justify-between gap-3 text-[12px] text-muted">
              {["100% tailor-made", "Local experts", "ABAV registered"].map(x=>(
                <span key={x} className="flex items-center gap-1.5"><Check size={14} className="text-leaf"/>{x}</span>
              ))}
            </div>
          </>
        )}
      </form>
    </div>
  );
}
