"use client";

import { useRef, useState } from "react";
import { Users, ArrowRight, Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field, inputCls } from "@/components/ui/field";
import { SITE } from "@/lib/data";
import { localePath } from "@/lib/i18n";

function cn(...c) {
  return c.filter(Boolean).join(" ");
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_ES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export default function BookingPanel({ tour, locale = "en" }) {
  const es = locale === "es";
  const months = es ? MONTHS_ES : MONTHS;
  const [sent, setSent] = useState(false);
  const [month, setMonth] = useState(null);
  const [flexible, setFlexible] = useState(false);
  const [travelers, setTravelers] = useState("2");
  const [tripLength, setTripLength] = useState("10-14");
  const [comfort, setComfort] = useState("comfort");

  const [errors, setErrors] = useState({});
  const monthRef = useRef(null);

  function selectMonth(i) {
    setMonth(i === month ? null : i);
    setFlexible(false);
    setErrors({});
  }

  function toggleFlexible() {
    setFlexible((f) => !f);
    setMonth(null);
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (month === null && !flexible) {
      setErrors({
        month: es ? "Selecciona un mes ideal o indica que tus fechas son flexibles." : "Please select an ideal month or choose flexible.",
      });

      monthRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    setErrors({});
    setSent(true);
  }

  return (
    <div>
      <div className="rounded-t-2xl bg-gradient-to-br from-leaf-d to-leaf p-6 flex items-center gap-4 text-cream-50 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-gold/20 blur-2xl" />
        <Avatar
          src="/marina-vargas-contact.jpeg"
          size={64}
          alt="Marina Vargas"
          className="border-[3px] border-cream-50/25 relative [background-size:220%] [background-position:50%_72%]"
        />
        <div className="relative">
          <div className="text-[13px] opacity-90">{es ? "Planifica con tu experta local" : "Plan with your local expert"}</div>
          <div className="font-serif text-[26px] leading-none mt-1">Marina Vargas</div>
          <div className="text-[12px] opacity-80 mt-1">{es ? "Experta local y diseñadora de viajes" : "Local Expert & Trip Designer"}</div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-paper border border-line border-t-0 rounded-b-2xl p-6 shadow-[0_18px_42px_-22px_rgba(25,40,30,.28)]"
      >
        <div className="font-serif text-[24px] text-ink pb-4 border-b border-line">
          {es ? "Empieza a planificar tu viaje" : "Start Planning Your Journey"}
        </div>

        {sent ? (
          <div className="py-6">
            <div className="w-12 h-12 rounded-full bg-leaf text-cream-50 flex items-center justify-center mb-4">
              <Check size={20} />
            </div>
            <h4 className="font-serif text-[22px] text-ink leading-tight">{es ? "Solicitud recibida." : "Request received."}</h4>
            <p className="mt-2 text-[14.5px] text-ink-soft">
              {es ? "Marina se pondrá en contacto contigo en un máximo de 48 horas con una propuesta personalizada." : "Marina will be in touch within 48 hours with a personalized proposal."}
            </p>
            <Button variant="ghost" href={localePath("/journeys", locale)} className="mt-5 w-full justify-center">
              {es ? "Seguir explorando" : "Keep exploring"}
            </Button>
          </div>
        ) : (
          <>
            <label
              ref={monthRef}
              className={cn(
                "block text-[11px] tracking-[.14em] uppercase font-bold mt-4 mb-2",
                errors.month ? "text-red-600" : "text-muted"
              )}
            >
              {es ? "Mes ideal" : "Ideal month"} *
            </label>

            <div className="grid grid-cols-4 gap-1.5 mb-2">
              {months.map((m, i) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => selectMonth(i)}
                  className={cn(
                    "py-2 rounded-lg text-[13px] font-semibold border transition",
                    month === i
                      ? "bg-leaf border-leaf text-cream-50"
                      : errors.month
                      ? "border-red-500 text-ink-soft hover:border-red-600"
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
                  : errors.month
                  ? "border-red-500 text-red-600 hover:border-red-600"
                  : "border-line text-muted hover:border-terra hover:text-terra-d"
              )}
            >
              {flexible ? (es ? "✓ Tengo flexibilidad: aún no hay una fecha fija" : "✓ I'm flexible — no fixed date yet") : (es ? "Todavía no tengo fecha" : "I don't have a date yet")}
            </button>

            {errors.month && (
              <p className="mt-2 text-[12px] text-red-600">
                {errors.month}
              </p>
            )}

            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">
              {es ? "Viajeros" : "Travelers"}
            </label>
            <Field icon={<Users size={16} />}>
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className={inputCls + " appearance-none"}
              >
                <option value="1">1 {es ? "viajero" : "Traveler"}</option>
                <option value="2">2 {es ? "viajeros" : "Travelers"}</option>
                <option value="3">3 {es ? "viajeros" : "Travelers"}</option>
                <option value="4">4 {es ? "viajeros" : "Travelers"}</option>
                <option value="5">5+ {es ? "viajeros" : "Travelers"}</option>
              </select>
            </Field>

            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">
              {es ? "Duración del viaje" : "Trip length"}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { v: "7-10", l: `7–10 ${es ? "días" : "days"}` },
                { v: "10-14", l: `10–14 ${es ? "días" : "days"}` },
                { v: "14-18", l: `14–18 ${es ? "días" : "days"}` },
                { v: "18+", l: `18+ ${es ? "días" : "days"}` },
                { v: "not-sure", l: es ? "Aún no lo sé" : "Not sure yet" },
              ].map((o) => (
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

            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mt-4 mb-2">
              {es ? "Nivel de comodidad" : "Comfort level"}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { v: "comfort", l: es ? "Confort" : "Comfort" },
                { v: "premium", l: "Premium" },
                { v: "luxury", l: es ? "Lujo" : "Luxury" },
                { v: "mix", l: es ? "Una combinación" : "A mix of both" },
              ].map((o) => (
                <button
                  type="button"
                  key={o.v}
                  onClick={() => setComfort(o.v)}
                  className={cn(
                    "py-2 rounded-lg text-[13px] font-semibold border transition",
                    comfort === o.v
                      ? "bg-leaf border-leaf text-cream-50"
                      : "border-line text-ink-soft hover:border-leaf"
                  )}
                >
                  {o.l}
                </button>
              ))}
            </div>

            <Button type="submit" className="w-full justify-center mt-5">
              {es ? "Solicitar este viaje" : "Request this trip"} <ArrowRight size={16} />
            </Button>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(es ? "Hola, quiero planificar un viaje a Brasil" : "Hi, I want to plan a Brazil trip")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full justify-center mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 transition"
            >
              {es ? "O escríbenos por WhatsApp" : "Or chat on WhatsApp"}
            </a>

            <p className="mt-4 text-[12px] text-muted text-center leading-relaxed">
              {es ? "Viajes a medida · Respuesta en 48 horas · Diseñados por expertas locales" : "Tailor-made journeys · Reply within 48 hours · Designed by local experts"}
            </p>

            <div className="mt-5 pt-5 border-t border-line flex justify-between gap-3 text-[12px] text-muted">
              {(es ? ["100 % a medida", "Expertas locales", "Protección financiera"] : ["100% tailor-made", "Local experts", "Financially protected"]).map((x) => (
                <span key={x} className="flex items-center gap-1.5">
                  <Check size={14} className="text-leaf" />
                  {x}
                </span>
              ))}
            </div>
          </>
        )}
      </form>
    </div>
  );
}
