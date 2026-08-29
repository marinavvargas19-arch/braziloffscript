"use client";
import { useState } from "react";
import { Mail, Phone, Calendar, Users, ArrowRight, Check, Clock, MapPin, MessageCircle, Video } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Field, inputCls } from "@/components/ui/field";
import { Avatar } from "@/components/ui/avatar";
import * as EN from "@/lib/data";
import * as ES from "@/lib/data-es";
import { localePath } from "@/lib/i18n";

export default function ContactClient({ locale = "en", leadOrigin = "contact-page", humanFlow = false }) {
  const es = locale === "es";
  const content = es ? ES : EN;
  const { SITE, DESTINATIONS } = content;
  const href = path => localePath(path, locale);
  const destinations = [...DESTINATIONS.map(destination => destination.name), es ? "Aún no lo sé" : "Not sure yet"];
  const budgetOptions = es
    ? ["Aún no lo sé", "US$3.000–5.000 por persona", "US$5.000–8.000 por persona", "US$8.000+ por persona"]
    : ["Not sure yet", "US$3,000–5,000 per person", "US$5,000–8,000 per person", "US$8,000+ per person"];
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [data, setData] = useState({name:"",email:"",phone:"",when:"",travelers:"2",interests:"",budget:"",contactMethod:"",note:""});
  function set(k,v){ setData(d=>({...d,[k]:v})); }
  function toggleDestination(value) {
    const selected = data.interests ? data.interests.split("|||" ).filter(Boolean) : [];
    const next = selected.includes(value) ? selected.filter(item => item !== value) : [...selected, value];
    set("interests", next.join("|||"));
  }

  async function submit(e){
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const payload = { ...data, interests: data.interests.split("|||").filter(Boolean).join(", "), source: "contact", leadOrigin };
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Could not send contact request");
      setSent(true);
    } catch {
      setSubmitError(es ? "No hemos podido enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp." : "We couldn't send your request. Please try again or contact us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-paper border-b border-line">
        <Container className="py-12">
          <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">{humanFlow ? (es ? "Habla con una experta local" : "Talk to a local expert") : (es ? "Contacta con nosotros" : "Get in touch")}</div>
          <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-tight text-ink max-w-3xl">{humanFlow ? (es ? "Cuéntanos cómo imaginas tu viaje." : <>Tell us how you&apos;re imagining your trip.</>) : (es ? "Cuéntanos qué estás imaginando." : <>Tell us what you&apos;re imagining.</>)}</h1>
          <p className="mt-4 text-ink-soft text-[17px] max-w-2xl leading-relaxed">{es ? "Una experta local en Brasil te responderá en un máximo de 48 horas, normalmente el mismo día laborable. Sin llamadas comerciales ni compromiso." : "A real Brazilian destination expert replies within 48 hours — usually the same business day. No newsletters, no sales calls, no obligation."}</p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            {sent ? (
              <div className="bg-paper border border-line rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-leaf text-cream-50 flex items-center justify-center mx-auto mb-5"><Check size={28}/></div>
                <h2 className="font-serif text-[28px] text-ink">{es ? "Mensaje recibido." : "Message received."}</h2>
                <p className="mt-3 text-ink-soft max-w-md mx-auto">{es ? `Nos pondremos en contacto contigo en un máximo de 48 horas${data.email ? ` en ${data.email}` : ""}.` : <>We&apos;ll be in touch within 48 hours{data.email?` at ${data.email}`:""}.</>}</p>
                <div className="mt-6 flex justify-center gap-3 flex-wrap">
                  <Button variant="ghost" href={href("/journeys")}>{es ? "Explorar viajes" : "Explore journeys"}</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-paper border border-line rounded-2xl p-7 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">{es ? "Nombre" : "Your name"}</label>
                    <Field icon={<Users size={16}/>}><input required className={inputCls} value={data.name} onChange={e=>set("name",e.target.value)} placeholder={es ? "Sofía García" : "Emily Johnson"}/></Field>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Email</label>
                    <Field icon={<Mail size={16}/>}><input type="email" required className={inputCls} value={data.email} onChange={e=>set("email",e.target.value)} placeholder="you@yourdomain.com"/></Field>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">{es ? "Teléfono o WhatsApp" : "Phone or WhatsApp"} *</label>
                  <Field icon={<Phone size={16}/>}><input required className={inputCls} value={data.phone} onChange={e=>set("phone",e.target.value)} placeholder="+1 555 000 0000"/></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">{es ? "¿Cuándo quieres viajar?" : "When are you traveling?"}</label>
                    <Field icon={<Calendar size={16}/>}><input type="month" className={inputCls} value={data.when} onChange={e=>set("when",e.target.value)}/></Field>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">{es ? "Viajeros" : "Travelers"}</label>
                    <Field icon={<Users size={16}/>}>
                      <select className={inputCls + " appearance-none"} value={data.travelers} onChange={e=>set("travelers",e.target.value)}>
                        <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                      </select>
                    </Field>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">{es ? "Destinos que te interesan" : "Destinations you're interested in"}</label>
                  <div className="flex flex-wrap gap-2">
                    {destinations.map(destination=>{
                      const selected = data.interests.split("|||").filter(Boolean).includes(destination);
                      return <button type="button" key={destination} onClick={()=>toggleDestination(destination)} className={`px-3 py-1.5 rounded-full text-[13px] border transition ${selected?"bg-leaf border-leaf text-cream-50":"bg-cream-50 border-line text-ink-soft hover:border-leaf"}`}>{destination}</button>;
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">{es ? "Inversión estimada" : "Estimated investment"}</label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {budgetOptions.map(option => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => set("budget", option)}
                        className={`rounded-xl border px-4 py-3 text-left text-[13.5px] font-semibold transition ${data.budget === option ? "border-leaf bg-leaf/10 text-leaf-d" : "border-line bg-white text-ink-soft hover:border-leaf"}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">{es ? "¿Cómo prefieres que contactemos contigo?" : "How would you like us to reach out?"}</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "E-mail", label: "E-mail", icon: <Mail size={18}/> },
                      { value: "WhatsApp", label: "WhatsApp", icon: <MessageCircle size={18}/> },
                      { value: "Phone call", label: es ? "Llamada" : "Phone call", icon: <Phone size={18}/> },
                      { value: "Video call", label: es ? "Videollamada" : "Video call", icon: <Video size={18}/> },
                    ].map(option => {
                      const selected = data.contactMethod === option.value;
                      return (
                        <button
                          type="button"
                          key={option.value}
                          onClick={() => set("contactMethod", option.value)}
                          className={`flex flex-col items-center justify-center gap-2 rounded-xl border px-3 py-4 text-center transition ${selected ? "border-leaf bg-leaf/10 text-leaf-d" : "border-line bg-white text-ink-soft hover:border-leaf"}`}
                        >
                          <span className={selected ? "text-leaf-d" : "text-muted"}>{option.icon}</span>
                          <span className="text-[13.5px] font-semibold leading-tight">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">{es ? "¿Hay algo más que debamos saber?" : "Anything else we should know?"}</label>
                  <textarea rows={4} className="w-full border border-line bg-white rounded-xl p-4 outline-none focus:border-leaf focus:shadow-[0_0_0_3px_rgba(31,74,47,.10)]" value={data.note} onChange={e=>set("note",e.target.value)} placeholder={es ? "Fechas especiales, celebraciones, necesidades alimentarias o de movilidad…" : "Special dates, occasions, dietary needs, mobility considerations…"}/>
                </div>
                <div className="bg-cream border border-line rounded-xl p-4 text-[13px] text-ink-soft leading-relaxed">
                  {es ? "Solo utilizaremos tus datos para preparar una propuesta personalizada. No recibirás newsletters salvo que lo autorices y nunca cederemos tu información." : "We use your details only to prepare a personalized proposal. No newsletters unless you opt in, no resale, ever."}
                </div>
                {submitError && <p className="text-[13px] text-terra-d">{submitError}</p>}
                <div className="flex justify-end">
                  <Button type="submit" size="lg" disabled={submitting || !data.phone || !data.contactMethod}>
                    {submitting ? (es ? "Enviando…" : "Sending…") : (es ? "Solicitar mi propuesta personalizada" : "Request my personalized proposal")} <ArrowRight size={16}/>
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside className="md:col-span-4">
            <div className="bg-leaf-d text-cream-50 rounded-2xl p-7">
              <h3 className="font-serif text-[24px] mb-4">{es ? "Otras formas de contactar" : "Other ways to reach us"}</h3>
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
                  <span>{es ? "Lun–Vie, 9:00–19:00 (BRT)" : "Mon–Fri, 9am–7pm BRT"}</span>
                </div>
              </div>
            </div>

            <div className="bg-paper border border-line rounded-2xl p-6 mt-5">
              <div className="flex items-center gap-3">
                <Avatar
                  src="/marina-vargas-contact.jpeg"
                  alt="Marina Vargas"
                  size={52}
                  className="[background-size:220%] [background-position:50%_72%]"
                />
                <div>
                  <div className="font-semibold text-ink">Marina Vargas</div>
                  <div className="text-[12.5px] text-muted">{es ? "Experta principal en destinos · Espírito Santo" : "Lead destination expert · Espírito Santo"}</div>
                </div>
              </div>
              <p className="mt-4 text-[14px] text-ink-soft leading-relaxed">{es ? "«Escríbeme, aunque todavía no lo tengas claro. Los mejores viajes suelen empezar con “aún no lo sé, pero…”»." : <>&quot;Drop me a note — even if it&apos;s vague. The best trips usually start with &apos;I don&apos;t know yet, but...&apos;&quot;</>}</p>
            </div>

            <div className="bg-paper border border-line rounded-2xl p-6 mt-5">
              <h4 className="font-serif text-[20px] text-ink mb-3">{es ? "Estamos en Brasil" : "We're in Brazil"}</h4>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-leaf/30 to-leaf-d/40 flex items-center justify-center text-leaf-d text-[12px] uppercase tracking-wide"><MapPin size={28}/></div>
              <ul className="mt-4 space-y-1.5 text-[13.5px] text-ink-soft">
                <li>Espírito Santo - Brasil</li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
