"use client";
import { useState } from "react";

export default function RouteMap({ days }) {
  const [active, setActive] = useState(1);

  const cityCoords = {
    "São Paulo":{x:540,y:380}, "Foz do Iguaçu":{x:430,y:415}, "Rio de Janeiro":{x:600,y:380},
    "Paraty":{x:580,y:390}, "Ilha Grande":{x:585,y:395}, "Salvador":{x:640,y:280},
    "Manaus":{x:340,y:175}, "Pantanal":{x:380,y:325}, "Bonito":{x:380,y:355},
    "Cuiabá":{x:380,y:300}, "Fernando de Noronha":{x:720,y:225},
    "Lençóis Maranhenses":{x:610,y:200}, "Jericoacoara":{x:670,y:200},
    "Jalapão":{x:520,y:265}, "Florianópolis":{x:495,y:430}, "Porto Alegre":{x:475,y:455},
  };
  function findCoord(city){
    const k = Object.keys(cityCoords).find(k => city.includes(k));
    return k ? cityCoords[k] : null;
  }
  const points = days.map((d,i)=>{
    const main = d.city.split(/[\s→\-,/]/).filter(Boolean)[0];
    const candidates = [main, ...d.city.split(/[\s→\-,/]/)].map(s=>s.trim()).filter(Boolean);
    let p=null; for (const c of candidates){ if(!p) p = findCoord(c); }
    return p ? {i:i+1, p} : null;
  }).filter(Boolean);
  const path = points.reduce((acc,cur)=>{
    if (!acc.length || acc[acc.length-1].p.x!==cur.p.x || acc[acc.length-1].p.y!==cur.p.y) acc.push(cur);
    return acc;
  }, []);

  return (
    <div className="mt-7 bg-paper border border-line rounded-2xl p-5">
      <div className="aspect-[16/10] w-full relative">
        <svg viewBox="0 0 800 500" className="w-full h-full">
          <defs>
            <linearGradient id="brz" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#cfe2cc"/>
              <stop offset="100%" stopColor="#9bc0a3"/>
            </linearGradient>
          </defs>
          <path d="M 300 90 C 330 70, 420 60, 500 95 L 580 110 C 660 130, 720 170, 745 250 C 760 320, 720 380, 680 410 C 640 440, 590 450, 540 460 C 480 475, 430 475, 380 460 C 320 445, 270 410, 240 360 C 210 310, 200 250, 230 190 C 250 145, 270 110, 300 90 Z" fill="url(#brz)" stroke="#1f4a2f" strokeWidth="1.5" opacity="0.5"/>
          {path.length>1 && path.map((p,i)=> i<path.length-1 ? (
            <line key={i} x1={p.p.x} y1={p.p.y} x2={path[i+1].p.x} y2={path[i+1].p.y} stroke="#e07a4e" strokeWidth="2.5" strokeDasharray="6 5"/>
          ) : null)}
          {path.map(({i,p})=>(
            <g key={i} onClick={()=>setActive(i)} className="cursor-pointer">
              <circle cx={p.x} cy={p.y} r={active===i?14:9} fill={active===i?"#e07a4e":"#1f4a2f"} stroke="#fbf5e7" strokeWidth="3"/>
              <text x={p.x} y={p.y+(active===i?5:4)} textAnchor="middle" fontSize={active===i?13:10} fontWeight="700" fill="#fbf5e7">{i}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {days.map((d,i)=>(
          <button key={i} onClick={()=>setActive(i+1)} className={`px-3 py-1.5 rounded-full text-[12px] font-semibold border transition ${active===i+1?"bg-leaf text-cream-50 border-leaf":"bg-cream-50 border-line text-ink-soft hover:border-leaf"}`}>
            Day {i+1} · {d.city.split(/[→\-,/]/)[0].trim()}
          </button>
        ))}
      </div>
    </div>
  );
}
