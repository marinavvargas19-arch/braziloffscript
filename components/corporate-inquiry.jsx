"use client";
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SITE } from '@/lib/data';

const COPY = {
  en: { name: 'Your name', company: 'Company', email: 'Work email', phone: 'Phone or WhatsApp', type: 'What are you planning?', typeHint: 'Event format or occasion', people: 'Estimated number of guests', start: 'Preferred start date', end: 'Preferred end date', destination: 'Destination in Brazil', destinationHint: 'A city, a region, or still open to ideas', budget: 'Estimated total budget', budgetHint: 'Amount and currency, if already defined', note: 'Tell us about your event', noteHint: 'Your objectives, audience and the support you are looking for.', submit: 'Send event inquiry', sending: 'Sending…', sent: 'Thank you. Your inquiry is with us.', sentBody: 'Our team will review your brief and contact you using the details you provided.', error: 'We could not send your inquiry. Your details are still here — please try again or contact us on WhatsApp.', datesError: 'The end date must be on or after the start date.', privacy: 'We will use these details to respond to your event inquiry.', optional: 'optional', fallback: 'Contact us on WhatsApp' },
  es: { name: 'Tu nombre', company: 'Empresa', email: 'Email de trabajo', phone: 'Teléfono o WhatsApp', type: '¿Qué estás organizando?', typeHint: 'Formato del evento u ocasión', people: 'Número estimado de participantes', start: 'Fecha de inicio preferida', end: 'Fecha de finalización preferida', destination: 'Destino en Brasil', destinationHint: 'Una ciudad, una región o abierto a sugerencias', budget: 'Presupuesto total estimado', budgetHint: 'Importe y moneda, si ya están definidos', note: 'Cuéntanos sobre tu evento', noteHint: 'Tus objetivos, el público y el apoyo que necesitas.', submit: 'Enviar consulta sobre el evento', sending: 'Enviando…', sent: 'Gracias. Hemos recibido tu consulta.', sentBody: 'Nuestro equipo revisará la información y se pondrá en contacto contigo a través de los datos que nos has facilitado.', error: 'No hemos podido enviar tu consulta. Tus datos siguen aquí: inténtalo de nuevo o contáctanos por WhatsApp.', datesError: 'La fecha de finalización no puede ser anterior a la de inicio.', privacy: 'Utilizaremos estos datos para responder a tu consulta sobre el evento.', optional: 'opcional', fallback: 'Contáctanos por WhatsApp' },
};
const inputClass = 'w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-leaf/30 focus:border-leaf';

export default function CorporateInquiry({ locale = 'en' }) {
  const c = COPY[locale] || COPY.en;
  const [data, setData] = useState({ name:'', company:'', email:'', phone:'', eventType:'', guests:'', startDate:'', endDate:'', destination:'', budget:'', note:'' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  function update(e) { setData(old => ({ ...old, [e.target.name]: e.target.value })); }
  async function submit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    if (data.startDate && data.endDate && data.endDate < data.startDate) { setError(c.datesError); return; }
    setStatus('sending'); setError('');
    const details = [`Company: ${data.company}`, `Event: ${data.eventType}`, `Guests: ${data.guests || 'To be confirmed'}`, `Dates: ${data.startDate || 'Flexible'}${data.endDate ? ` — ${data.endDate}` : ''}`, `Destination: ${data.destination || 'Open to suggestions'}`, `Total budget: ${data.budget || 'To be discussed'}`, '', data.note].join('\n');
    try {
      const response = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ ...data, source:'corporate-events', leadOrigin:'corporate-events-page', locale, contactMethod:'Email', when:[data.startDate,data.endDate].filter(Boolean).join(' — '), travelers:data.guests, interests:data.destination, note:details }) });
      if (!response.ok) throw new Error('Inquiry not saved');
      setStatus('sent');
    } catch { setStatus('idle'); setError(c.error); }
  }
  function field(name, label, { required=false, type='text', placeholder='', min } = {}) {
    const id = `corporate-${name}`;
    return <div><label htmlFor={id} className="block text-sm font-semibold mb-2">{label}{required ? ' *' : <span className="font-normal text-muted"> · {c.optional}</span>}</label><input id={id} name={name} type={type} min={min} required={required} maxLength={type === 'number' ? undefined : 250} value={data[name]} onChange={update} placeholder={placeholder} className={inputClass} autoComplete={name === 'name' ? 'name' : name === 'company' ? 'organization' : name === 'email' ? 'email' : name === 'phone' ? 'tel' : undefined} /></div>;
  }
  if (status === 'sent') return <div role="status" className="bg-paper border border-line rounded-2xl p-8 sm:p-12"><Check className="text-leaf mb-5" size={36} /><h3 className="font-serif text-3xl">{c.sent}</h3><p className="mt-4 text-ink-soft leading-relaxed">{c.sentBody}</p></div>;
  return <form onSubmit={submit} className="bg-paper border border-line rounded-2xl p-6 sm:p-9 space-y-5" aria-label={locale === 'es' ? 'Consulta sobre eventos corporativos' : 'Corporate event inquiry'}>
    <div className="grid sm:grid-cols-2 gap-5">{field('name',c.name,{required:true})}{field('company',c.company,{required:true})}</div>
    <div className="grid sm:grid-cols-2 gap-5">{field('email',c.email,{required:true,type:'email'})}{field('phone',c.phone,{type:'tel'})}</div>
    <div className="grid sm:grid-cols-2 gap-5">{field('eventType',c.type,{required:true,placeholder:c.typeHint})}{field('guests',c.people,{type:'number',min:1})}</div>
    <div className="grid sm:grid-cols-2 gap-5">{field('startDate',c.start,{type:'date'})}{field('endDate',c.end,{type:'date',min:data.startDate || undefined})}</div>
    {field('destination',c.destination,{placeholder:c.destinationHint})}
    {field('budget',c.budget,{placeholder:c.budgetHint})}
    <div><label htmlFor="corporate-note" className="block text-sm font-semibold mb-2">{c.note} *</label><textarea id="corporate-note" name="note" required rows={5} maxLength={6000} value={data.note} onChange={update} className={inputClass} placeholder={c.noteHint} /></div>
    <p className="text-xs text-muted leading-relaxed">{c.privacy}</p>
    {error && <p role="alert" className="text-vermelho text-sm">{error}</p>}
    <button disabled={status === 'sending'} type="submit" className="inline-flex gap-3 items-center justify-center rounded-full bg-leaf text-cream-50 px-6 py-3.5 font-semibold disabled:opacity-60 hover:bg-leaf-d">{status === 'sending' ? c.sending : c.submit}<ArrowRight size={18}/></button>
    <p><a className="text-sm text-leaf-d underline underline-offset-4" href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(locale === 'es' ? 'Hola, me gustaría hablar sobre un evento corporativo en Brasil.' : 'Hello, I would like to discuss a corporate event in Brazil.')}`}>{c.fallback}</a></p>
  </form>;
}
