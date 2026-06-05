"use client";
import { useState } from "react";
import { Mail, Phone, Calendar, Users, ArrowRight, Check, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Field, inputCls } from "@/components/ui/field";
import { Avatar } from "@/components/ui/avatar";
import { IMG, SITE } from "@/lib/data";

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({first:"",last:"",email:"",phone:"",when:"",travelers:"2",interests:"",note:""});
  function set(k,v){ setData(d=>({...d,[k]:v})); }

  async function submit(e){
    e.preventDefault();
    // Optionally POST to /api/contact — see README for how to wire it up.
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch {}
    setSent(true);
  }

  return (
    <>
      <section className="bg-paper border-b border-line">
        <Container className="py-16">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">Get in touch</div>
          <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-tight text-ink max-w-3xl">Tell us what you&apos;re imagining.</h1>
          <p className="mt-4 text-ink-soft text-[17px] max-w-2xl leading-relaxed">A real Brazilian destination expert replies within 48 hours — usually the same business day. No newsletters, no sales calls, no obligation.</p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            {sent ? (
              <div className="bg-paper border border-line rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-leaf text-cream-50 flex items-center justify-center mx-auto mb-5"><Check size={28}/></div>
                <h2 className="font-serif text-[28px] text-ink">Message received.</h2>
                <p className="mt-3 text-ink-soft max-w-md mx-auto">We&apos;ll be in touch within 48 hours{data.email?` at ${data.email}`:""}.</p>
                <div className="mt-6 flex justify-center gap-3 flex-wrap">
                  <Button variant="ghost" href="/journeys">Explore journeys</Button>
                  <Button variant="ghost" href="/blog">Read stories</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-paper border border-line rounded-2xl p-7 md:p-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">First name</label>
                    <Field icon={<Users size={16}/>}><input required className={inputCls} value={data.first} onChange={e=>set("first",e.target.value)}/></Field>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Last name</label>
                    <Field icon={<Users size={16}/>}><input required className={inputCls} value={data.last} onChange={e=>set("last",e.target.value)}/></Field>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Email</label>
                    <Field icon={<Mail size={16}/>}><input type="email" required className={inputCls} value={data.email} onChange={e=>set("email",e.target.value)}/></Field>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Phone / WhatsApp (optional)</label>
                    <Field icon={<Phone size={16}/>}><input className={inputCls} value={data.phone} onChange={e=>set("phone",e.target.value)}/></Field>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">When are you traveling?</label>
                    <Field icon={<Calendar size={16}/>}><input type="month" className={inputCls} value={data.when} onChange={e=>set("when",e.target.value)}/></Field>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Travelers</label>
                    <Field icon={<Users size={16}/>}>
                      <select className={inputCls + " appearance-none"} value={data.travelers} onChange={e=>set("travelers",e.target.value)}>
                        <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                      </select>
                    </Field>
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">What&apos;s pulling you to Brazil?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Culture & history","Food & wine","Wildlife","Beaches & islands","Adventure","Slow travel","Family","Honeymoon"].map(t=>{
                      const on = data.interests.includes(t);
                      return <button type="button" key={t} onClick={()=>set("interests", on ? data.interests.replace(new RegExp(`,?\\s*${t}`,'g'),'').replace(/^,\s*/,'') : (data.interests?data.interests+", "+t:t))} className={`px-3 py-1.5 rounded-full text-[13px] border transition ${on?"bg-leaf border-leaf text-cream-50":"bg-cream-50 border-line text-ink-soft hover:border-leaf"}`}>{t}</button>;
                    })}
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Tell us anything else</label>
                  <textarea rows={5} className="w-full border border-line bg-white rounded-xl p-4 outline-none focus:border-leaf focus:shadow-[0_0_0_3px_rgba(31,74,47,.10)]" value={data.note} onChange={e=>set("note",e.target.value)} placeholder="Special dates, occasions, dietary or mobility considerations…"/>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[12.5px] text-muted max-w-md">By submitting, you agree to be contacted about your trip. We never resell your info.</p>
                  <Button type="submit" size="lg">Send message <ArrowRight size={16}/></Button>
                </div>
              </form>
            )}
          </div>

          <aside className="md:col-span-4">
            <div className="bg-leaf-d text-cream-50 rounded-2xl p-7">
              <h3 className="font-serif text-[24px] mb-4">Other ways to reach us</h3>
              <div className="space-y-3 text-[14.5px]">
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white">W</span>
                  <span className="group-hover:text-cream-50">{SITE.phone} (WhatsApp)</span>
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-cream-50/10 flex items-center justify-center"><Mail size={16}/></span>
                  <span>{SITE.email}</span>
                </a>
                <div className="flex items-center gap-3 opacity-90">
                  <span className="w-9 h-9 rounded-full bg-cream-50/10 flex items-center justify-center"><Clock size={16}/></span>
                  <span>Mon–Fri, 9am–7pm BRT</span>
                </div>
              </div>
            </div>

            <div className="bg-paper border border-line rounded-2xl p-6 mt-5">
              <div className="flex items-center gap-3">
                <Avatar src={IMG.helena} size={52}/>
                <div>
                  <div className="font-semibold text-ink">Marina Vargas</div>
                  <div className="text-[12.5px] text-muted">Lead destination expert · Espírito Santo</div>
                </div>
              </div>
              <p className="mt-4 text-[14px] text-ink-soft leading-relaxed">&quot;Drop me a note — even if it&apos;s vague. The best trips usually start with &apos;I don&apos;t know yet, but...&apos;&quot;</p>
            </div>

            <div className="bg-paper border border-line rounded-2xl p-6 mt-5">
              <h4 className="font-serif text-[20px] text-ink mb-3">We&apos;re in Brazil</h4>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-leaf/30 to-leaf-d/40 flex items-center justify-center text-leaf-d text-[12px] uppercase tracking-wide"><MapPin size={28}/></div>
              <ul className="mt-4 space-y-1.5 text-[13.5px] text-ink-soft">
                <li>São Paulo · HQ</li>
                <li>Salvador · Northeast hub</li>
                <li>Manaus · Amazon hub</li>
                <li>Florianópolis · South hub</li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
