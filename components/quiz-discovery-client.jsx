"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles, Mail, MessageCircle, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuizImagePanel } from "@/components/quiz-visuals";
import { DISCO_DESTINATIONS, DISCO_QUESTIONS, DESTINATIONS, DEST_TRIP, SITE } from "@/lib/data";

function cn(...classes) { return classes.filter(Boolean).join(" "); }

const LS_KEY = "disco-quiz-v2";

function tallyWinner(answers) {
  const totals = {};
  Object.keys(DISCO_DESTINATIONS).forEach(k => (totals[k] = 0));
  DISCO_QUESTIONS.forEach(q => {
    const idx = answers[q.id];
    if (idx == null) return;
    const sc = q.options[idx].score || {};
    Object.entries(sc).forEach(([k, v]) => { totals[k] = (totals[k] || 0) + v; });
  });
  const ranked = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  return {
    winner: ranked[0][0],
    runnerUp: ranked[1] && ranked[1][1] > 0 ? ranked[1][0] : null,
  };
}

function matchSignatureJourneys(regionWords) {
  const words = (regionWords || "").toLowerCase().split(" ").filter(Boolean);
  return DESTINATIONS
    .map(destination => {
      const trip = DEST_TRIP[destination.slug] || {};
      const journey = {
        slug: destination.slug,
        title: destination.name,
        days: trip.days || 7,
        regions: trip.regions || [destination.region],
        img: trip.heroImg || destination.img,
        blurb: destination.blurb,
      };
      const text = (journey.title + " " + journey.regions.join(" ") + " " + journey.blurb).toLowerCase();
      const score = words.reduce((acc, w) => acc + (text.includes(w) ? 1 : 0), 0);
      return { ...journey, _s: score };
    })
    .sort((a, b) => b._s - a._s)
    .slice(0, 2);
}

export default function QuizDiscoveryClient() {
  const total = DISCO_QUESTIONS.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const q = DISCO_QUESTIONS[step];
  const isLast = step === total - 1;
  const canContinue = answers[q.id] != null;

  // Restore from localStorage after hydration
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (typeof s.step === "number") setStep(s.step);
        if (s.answers) setAnswers(s.answers);
        if (s.done) setDone(true);
      }
    } catch (e) {}
    setHydrated(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(LS_KEY, JSON.stringify({ step, answers, done })); } catch (e) {}
  }, [step, answers, done, hydrated]);

  const result = useMemo(() => tallyWinner(answers), [answers, done]);

  function select(idx) { setAnswers(a => ({ ...a, [q.id]: idx })); }
  function reset() {
    setAnswers({}); setStep(0); setDone(false);
    try { localStorage.removeItem(LS_KEY); } catch (e) {}
  }

  /* ── RESULT SCREEN ──────────────────────────────────────────── */
  if (done) {
    const d = DISCO_DESTINATIONS[result.winner];
    const runner = result.runnerUp ? DISCO_DESTINATIONS[result.runnerUp] : null;
    const tours = matchSignatureJourneys(d.regionWords);

    return (
      <div className="flex flex-col lg:flex-row min-h-screen">

        <QuizImagePanel
          image={d.img}
          eyebrow="Your Brazil match"
          title={<>{d.emoji} {d.name}</>}
          body={d.tagline}
        />

        {/* Right content panel */}
        <main className="lg:w-3/5 flex flex-col bg-cream">
          <div className="flex-1 overflow-auto">
            <div className="max-w-2xl mx-auto px-6 py-14 md:py-20">

              <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra mb-3">
                Quiz complete · your result
              </div>
              <h1 className="font-serif text-[clamp(30px,3.6vw,46px)] leading-[1.1] text-ink text-balance">
                You&apos;re made for {d.name}.
              </h1>
              <p className="mt-5 text-ink-soft text-[16.5px] leading-relaxed">{d.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {d.traits.map(t => (
                  <span key={t} className="bg-leaf/10 text-leaf-d text-[11px] tracking-[.1em] uppercase font-bold px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {runner && (
                <div className="mt-8 rounded-xl border border-line bg-paper p-4 text-[14px] text-ink-soft">
                  Also a strong fit:{" "}
                  <span className="font-bold text-leaf-d">{runner.emoji} {runner.name}</span>
                  {" "}— we can easily blend both into one journey.
                </div>
              )}

              {tours.length > 0 && (
                <div className="mt-12 pt-10 border-t border-line">
                  <h3 className="font-serif text-[24px] text-ink leading-tight">Journeys made for this</h3>
                  <p className="mt-2 text-[14.5px] text-ink-soft">A preview to get you dreaming — we&apos;ll tailor everything to you.</p>
                  <div className="grid sm:grid-cols-2 gap-5 mt-7">
                    {tours.map((t, i) => (
                      <Link key={t.slug} href={`/tours/${t.slug}`} className="group block">
                        <Card>
                          <div className="relative overflow-hidden aspect-[4/3]">
                            <img src={t.img} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt=""/>
                            <div className="absolute top-3 left-3 flex gap-2">
                              <Badge variant="light">{t.days} days</Badge>
                              {i === 0 && <Badge variant="terra">Top pick</Badge>}
                            </div>
                          </div>
                          <div className="p-5">
                            <h4 className="font-serif text-[20px] text-ink leading-tight">{t.title}</h4>
                            <div className="text-[12.5px] text-muted mt-1">{t.regions.join(" · ")}</div>
                            <div className="mt-3 text-terra font-semibold text-[13.5px] inline-flex items-center gap-1.5">
                              See itinerary <ArrowRight size={16}/>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact options */}
              <div className="mt-12 pt-10 border-t border-line">
                <h3 className="font-serif text-[24px] text-ink leading-tight">Ready to talk it through?</h3>
                <p className="mt-2 text-[14.5px] text-ink-soft">Reach a Brazil specialist directly — pick whatever&apos;s easiest for you.</p>
                <div className="grid sm:grid-cols-3 gap-3 mt-7">
                  <a
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Planning my Brazil trip — ${d.name}`)}&body=${encodeURIComponent(`Hi! I just took the quiz and my match is ${d.name}. I'd love to start planning.`)}`}
                    className="group flex flex-col gap-2 rounded-xl border border-line bg-paper p-4 transition hover:border-leaf hover:shadow-[0_14px_34px_-20px_rgba(25,40,30,.4)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf/10 text-leaf-d">
                      <Mail size={18}/>
                    </span>
                    <span className="font-semibold text-ink text-[14.5px]">Email us</span>
                    <span className="text-[12.5px] text-muted">{SITE.email}</span>
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi! My quiz match is ${d.name} — I'd love to plan a trip.`)}`}
                    target="_blank" rel="noreferrer"
                    className="group flex flex-col gap-2 rounded-xl border border-line bg-paper p-4 transition hover:border-leaf hover:shadow-[0_14px_34px_-20px_rgba(25,40,30,.4)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf/10 text-leaf-d">
                      <MessageCircle size={18}/>
                    </span>
                    <span className="font-semibold text-ink text-[14.5px]">WhatsApp</span>
                    <span className="text-[12.5px] text-muted">Chat with a specialist</span>
                  </a>
                  <a
                    href={SITE.calendly}
                    target="_blank" rel="noreferrer"
                    className="group flex flex-col gap-2 rounded-xl border border-line bg-paper p-4 transition hover:border-leaf hover:shadow-[0_14px_34px_-20px_rgba(25,40,30,.4)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf/10 text-leaf-d">
                      <Calendar size={18}/>
                    </span>
                    <span className="font-semibold text-ink text-[14.5px]">Schedule a meeting</span>
                    <span className="text-[12.5px] text-muted">Book a 30-min call</span>
                  </a>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/quiz">Plan this exact trip</Button>
                <Button variant="ghost" href="/journeys">Browse all journeys</Button>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-semibold text-[14px] text-ink-soft hover:border-ink hover:text-ink transition"
                >
                  Retake the quiz
                </button>
              </div>

            </div>
          </div>
        </main>
      </div>
    );
  }

  /* ── QUESTION SCREEN ────────────────────────────────────────── */
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">

      <QuizImagePanel
        image={q.image}
        eyebrow="60-second quiz"
        title="Which Brazil is calling you?"
        body="Answer a few quick questions and we'll reveal the corner of Brazil you were made for."
      />

      {/* Right form panel */}
      <main className="lg:w-3/5 flex flex-col bg-cream">

        {/* Progress bar */}
        <div className="sticky top-0 z-10 bg-cream/95 backdrop-blur border-b border-line">
          <div className="max-w-2xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between text-[12px] text-muted">
              <span className="whitespace-nowrap">Question {step + 1} of {total}</span>
              <Link href="/" className="hover:text-leaf-d underline underline-offset-4">Cancel</Link>
            </div>
            <div className="h-1.5 bg-line rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-leaf transition-all duration-500" style={{ width: `${((step + 1) / total) * 100}%` }}/>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-2xl mx-auto px-6 py-12">
            <div className="text-[40px] leading-none mb-4">{q.emoji}</div>
            <h1 className="font-serif text-[clamp(28px,3.4vw,42px)] leading-tight text-ink text-balance">
              {q.title}
            </h1>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {q.options.map((o, i) => {
                const selected = answers[q.id] === i;
                return (
                  <button
                    key={i}
                    onClick={() => select(i)}
                    className={cn(
                      "text-left rounded-xl p-5 border transition",
                      selected ? "border-leaf bg-leaf/10" : "border-line bg-paper hover:border-leaf"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[24px] leading-none flex-none">{o.emoji}</span>
                      <div className="font-semibold text-ink leading-snug">{o.label}</div>
                      {selected && (
                        <span className="ml-auto flex-none w-6 h-6 rounded-full bg-leaf text-cream-50 flex items-center justify-center">
                          <Check size={14}/>
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-line bg-cream sticky bottom-0">
          <div className="max-w-2xl mx-auto px-6 py-4 flex gap-3">
            <button
              onClick={() => step > 0 && setStep(step - 1)}
              disabled={step === 0}
              className={cn(
                "flex-1 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 font-semibold text-[14px] transition",
                step === 0
                  ? "opacity-40 cursor-not-allowed border-line text-muted"
                  : "border-ink-soft text-ink hover:bg-ink hover:text-cream-50"
              )}
            >
              <ArrowLeft size={16}/> Back
            </button>
            {isLast ? (
              <button
                onClick={() => canContinue && setDone(true)}
                disabled={!canContinue}
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-[14px] transition",
                  canContinue ? "bg-terra hover:bg-terra-d text-cream-50" : "bg-line text-muted cursor-not-allowed"
                )}
              >
                Reveal my Brazil <Sparkles size={16}/>
              </button>
            ) : (
              <button
                onClick={() => canContinue && setStep(step + 1)}
                disabled={!canContinue}
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-[14px] transition",
                  canContinue ? "bg-leaf hover:bg-leaf-d text-cream-50" : "bg-line text-muted cursor-not-allowed"
                )}
              >
                Continue <ArrowRight size={16}/>
              </button>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
