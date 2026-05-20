"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Sparkles, Users, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, inputCls } from "@/components/ui/field";
import { QUIZ_STEPS, TOURS } from "@/lib/data";

export default function QuizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [extra, setExtra] = useState({});
  const [done, setDone] = useState(false);
  const total = QUIZ_STEPS.length;
  const s = QUIZ_STEPS[step];
  const isLast = step === total - 1;

  const canContinue = useMemo(()=>{
    if (s.type==="contact"){
      const c = answers.contact || {};
      return c.name && c.email && /\S+@\S+\.\S+/.test(c.email);
    }
    if (!s.required) return true;
    const v = answers[s.id];
    if (s.type==="multi") return Array.isArray(v) && v.length>0;
    return v != null && v !== "";
  }, [s, answers]);

  function toggle(value){
    setAnswers(a => {
      if (s.type==="multi"){
        const cur = a[s.id] || [];
        const next = cur.includes(value) ? cur.filter(x=>x!==value) : [...cur, value];
        return {...a, [s.id]: next};
      }
      return {...a, [s.id]: value};
    });
  }

  const matched = useMemo(()=>{
    const regions = answers.region || [];
    const styles = answers.style || [];
    const dur = answers.duration;
    let arr = TOURS.slice();
    arr = arr.map(t => {
      let score = 0;
      const text = (t.title + " " + t.regions.join(" ") + " " + t.tags.join(" ") + " " + t.blurb).toLowerCase();
      const regionWords = { rio:"rio", bahia:"bahia", pantanal:"pantanal", foz:"iguaçu iguacu foz", south:"south florianópolis porto", central:"chapada jalapão", amazon:"amazon manaus", noronha:"noronha lençóis" };
      const styleWords = { culture:"culture history", food:"food wine", nature:"wildlife nature", beach:"beach island", adventure:"adventure off-road hiking", slow:"slow", city:"city", family:"family" };
      regions.forEach(r=>{ if (regionWords[r] && regionWords[r].split(" ").some(w=>text.includes(w))) score+=3; });
      styles.forEach(st=>{ if (styleWords[st] && styleWords[st].split(" ").some(w=>text.includes(w))) score+=1; });
      if (dur==="short" && t.days<=7) score+=1;
      if (dur==="mid" && t.days>=7 && t.days<=12) score+=1;
      if (dur==="long" && t.days>=12) score+=1;
      return {...t, _score:score};
    }).sort((a,b)=>b._score-a._score);
    return arr.slice(0,3);
  }, [answers, done]);

  if (done) {
    const contact = answers.contact || {};
    return (
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-leaf text-cream-50 flex items-center justify-center mx-auto mb-6"><Check size={28}/></div>
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">Your match is on the way</div>
          <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-tight text-ink">
            Thanks{contact.name?`, ${contact.name.split(" ")[0]}`:""} — your journey is taking shape.
          </h1>
          <p className="mt-5 text-ink-soft text-[17px] leading-relaxed max-w-2xl mx-auto">
            One of our destination experts will reach out within 48 hours with a personalized proposal{contact.email?` at ${contact.email}`:""}. Here are three journeys most aligned with your answers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {matched.map((t,i)=>(
            <Link key={t.slug} href={`/tours/${t.slug}`} className="group">
              <Card>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={t.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="light">{t.days} days</Badge>
                    {i===0 && <Badge variant="terra">Best match</Badge>}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[22px] text-ink leading-tight">{t.title}</h3>
                  <div className="text-[12.5px] text-muted mt-1">{t.regions.join(" · ")}</div>
                  <p className="mt-2 text-[14.5px] text-ink-soft">{t.blurb}</p>
                  <div className="mt-4 text-terra font-semibold text-[13.5px] inline-flex items-center gap-1.5">See itinerary <ArrowRight size={16}/></div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button variant="ghost" href="/journeys">Browse all journeys</Button>
        </div>
      </Container>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="lg:w-2/5 relative lg:sticky lg:top-0 lg:h-screen overflow-hidden">
        <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-d/35 via-transparent to-leaf-d/65"></div>
        <div className="relative h-full flex flex-col p-7 md:p-10 text-cream-50">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold opacity-90 hover:opacity-100"><ArrowLeft size={16}/> Back to Brazil Off Script</Link>
          <div className="mt-auto">
            <div className="text-[11px] tracking-[.22em] uppercase opacity-85 mb-3">60-second quiz</div>
            <h2 className="font-serif text-[clamp(28px,3vw,42px)] leading-tight max-w-md">Discover your version of Brazil.</h2>
            <p className="mt-4 max-w-md text-cream-50/85">A real local expert will reply within 48 hours with a personalized proposal — no obligation.</p>
          </div>
        </div>
      </aside>

      <main className="lg:w-3/5 flex flex-col bg-cream">
        <div className="sticky top-0 z-10 bg-cream/95 backdrop-blur border-b border-line">
          <div className="max-w-2xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between text-[12px] text-muted">
              <span>Step {step+1} of {total}</span>
              <Link href="/" className="hover:text-leaf-d underline underline-offset-4">Cancel</Link>
            </div>
            <div className="h-1.5 bg-line rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-leaf transition-all duration-500" style={{width:`${((step+1)/total)*100}%`}}/>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-2xl mx-auto px-6 py-12">
            <h1 className="font-serif text-[clamp(28px,3.4vw,42px)] leading-tight text-ink">{s.title}</h1>
            {s.sub && <p className="mt-3 text-ink-soft text-[16.5px]">{s.sub}</p>}

            <div className="mt-10">
              {s.type==="contact" ? (
                <ContactStep value={answers.contact||{}} onChange={v=>setAnswers(a=>({...a, contact:v}))}/>
              ) : s.options[0]?.img ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {s.options.map(o=>{
                    const selected = s.type==="multi" ? (answers[s.id]||[]).includes(o.value) : answers[s.id]===o.value;
                    return (
                      <button key={o.value} onClick={()=>toggle(o.value)} className={`relative group text-left rounded-xl overflow-hidden border transition ${selected?"border-leaf ring-2 ring-leaf/30":"border-line hover:border-leaf"}`}>
                        <div className="aspect-square overflow-hidden bg-line">
                          <img src={o.img} alt="" className="w-full h-full object-cover transition group-hover:scale-105"/>
                        </div>
                        {selected && <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-leaf text-cream-50 flex items-center justify-center shadow"><Check size={16}/></div>}
                        <div className={`p-3 text-[13.5px] leading-tight font-medium ${selected?"bg-leaf/8 text-leaf-d":"bg-paper text-ink-soft"}`}>{o.label}</div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {s.options.map(o=>{
                    const selected = s.type==="multi" ? (answers[s.id]||[]).includes(o.value) : answers[s.id]===o.value;
                    return (
                      <button key={o.value} onClick={()=>toggle(o.value)} className={`text-left rounded-xl p-5 border transition ${selected?"border-leaf bg-leaf/8":"border-line bg-paper hover:border-leaf"}`}>
                        <div className="flex items-center gap-3">
                          {o.icon && <span className="text-[22px] leading-none">{o.icon}</span>}
                          <div className="font-semibold text-ink">{o.label}</div>
                          {selected && <span className="ml-auto w-6 h-6 rounded-full bg-leaf text-cream-50 flex items-center justify-center"><Check size={14}/></span>}
                        </div>
                        {o.desc && <p className="mt-1.5 text-[13.5px] text-ink-soft">{o.desc}</p>}
                      </button>
                    );
                  })}
                </div>
              )}

              {s.extra && (
                <div className="mt-10">
                  <div className="font-serif text-[20px] text-ink">{s.extra.label}</div>
                  <textarea
                    value={extra[s.id]||""}
                    onChange={e=>setExtra(x=>({...x,[s.id]:e.target.value}))}
                    placeholder={s.extra.placeholder}
                    rows={4}
                    className="mt-3 w-full border border-line bg-white rounded-xl p-4 outline-none focus:border-leaf focus:shadow-[0_0_0_3px_rgba(31,74,47,.10)] text-[14.5px] leading-relaxed"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-line bg-cream sticky bottom-0">
          <div className="max-w-2xl mx-auto px-6 py-4 flex gap-3">
            <button onClick={()=>step>0 && setStep(step-1)} disabled={step===0} className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 font-semibold text-[14px] transition ${step===0?"opacity-40 cursor-not-allowed border-line text-muted":"border-ink-soft text-ink hover:bg-ink hover:text-cream-50"}`}>
              <ArrowLeft size={16}/> Back
            </button>
            {isLast ? (
              <button onClick={()=>canContinue && setDone(true)} disabled={!canContinue} className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-[14px] transition ${canContinue?"bg-terra hover:bg-terra-d text-cream-50":"bg-line text-muted cursor-not-allowed"}`}>
                Get my journey match <Sparkles size={16}/>
              </button>
            ) : (
              <button onClick={()=>canContinue && setStep(step+1)} disabled={!canContinue} className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-[14px] transition ${canContinue?"bg-leaf hover:bg-leaf-d text-cream-50":"bg-line text-muted cursor-not-allowed"}`}>
                Continue <ArrowRight size={16}/>
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function ContactStep({ value, onChange }){
  function set(k,v){ onChange({...value, [k]:v}); }
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Your name</label>
          <Field icon={<Users size={16}/>}><input className={inputCls} value={value.name||""} onChange={e=>set("name",e.target.value)} placeholder="Helena Silva"/></Field>
        </div>
        <div>
          <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Email</label>
          <Field icon={<Mail size={16}/>}><input type="email" className={inputCls} value={value.email||""} onChange={e=>set("email",e.target.value)} placeholder="you@yourdomain.com"/></Field>
        </div>
      </div>
      <div>
        <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Phone or WhatsApp (optional)</label>
        <Field icon={<Phone size={16}/>}><input className={inputCls} value={value.phone||""} onChange={e=>set("phone",e.target.value)} placeholder="+1 555 000 0000"/></Field>
      </div>
      <div>
        <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Anything else we should know?</label>
        <textarea value={value.note||""} onChange={e=>set("note",e.target.value)} rows={3} placeholder="Special dates, occasions, dietary needs, mobility considerations…" className="w-full border border-line bg-white rounded-xl p-4 outline-none focus:border-leaf focus:shadow-[0_0_0_3px_rgba(31,74,47,.10)] text-[14.5px] leading-relaxed"/>
      </div>
      <div className="bg-paper border border-line rounded-xl p-4 text-[13px] text-ink-soft leading-relaxed">
        We use your details only to send you a personalized proposal. No newsletters unless you opt in, no resale, ever.
      </div>
    </div>
  );
}
