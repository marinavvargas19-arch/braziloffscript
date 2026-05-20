export const SITE = {
  name: "Brazil Off Script",
  description: "Brazil Off Script — tailor-made journeys, planned by local experts.",
  url: "https://braziloffscript.com",
  phone: "+55 11 99999-0000",
  whatsapp: "5511999990000",
  email: "ola@braziloffscript.com",
  instagram: "@braziloffscript",
};

const IMG = {
  rioSugar:   "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1600&q=80&auto=format&fit=crop",
  rioChrist:  "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1600&q=80&auto=format&fit=crop",
  saoPaulo:   "https://images.unsplash.com/photo-1554168848-228452c09d60?w=1600&q=80&auto=format&fit=crop",
  iguazu:     "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1600&q=80&auto=format&fit=crop",
  paraty:     "https://images.unsplash.com/photo-1591019479261-1a103585c559?w=1600&q=80&auto=format&fit=crop",
  beach:      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80&auto=format&fit=crop",
  amazon:     "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1600&q=80&auto=format&fit=crop",
  noronha:    "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=1600&q=80&auto=format&fit=crop",
  lencois:    "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1600&q=80&auto=format&fit=crop",
  pantanal:   "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80&auto=format&fit=crop",
  jalapao:    "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1600&q=80&auto=format&fit=crop",
  salvador:   "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=1600&q=80&auto=format&fit=crop",
  food:       "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1600&q=80&auto=format&fit=crop",
  market:     "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1600&q=80&auto=format&fit=crop",
  ribbons:    "https://images.unsplash.com/photo-1583321500900-82807e458f3c?w=1600&q=80&auto=format&fit=crop",
  bossa:      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1600&q=80&auto=format&fit=crop",
  surfer:     "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1600&q=80&auto=format&fit=crop",
  cup:        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&q=80&auto=format&fit=crop",
  hammock:    "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1600&q=80&auto=format&fit=crop",
  helena:     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop",
  rafael:     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  juliana:    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
  marcos:     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  guestSarah: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
  guestJames: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&q=80&auto=format&fit=crop",
  guestAnna:  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80&auto=format&fit=crop",
};

export { IMG };

export const CATEGORIES = [
  { slug:"beyond-the-obvious", name:"Beyond the Obvious", color:"terra",
    tagline:"The Brazil everyone dreams about — experienced differently.",
    desc:"We reimagine Brazil's most iconic destinations through curated journeys, hidden gems, authentic local culture, and meaningful experiences that go far beyond traditional tourism." },
  { slug:"the-explorer", name:"The Explorer", color:"leaf",
    tagline:"Wild nature. Raw beauty. Real connection.",
    desc:"For travelers seeking adventure, wildlife, and immersive experiences in Brazil's most extraordinary natural landscapes." },
  { slug:"paradise-found", name:"Paradise Found", color:"azul",
    tagline:"Warm oceans, hidden beaches, crystal-clear lagoons.",
    desc:"A curated collection of Brazil's most breathtaking escapes, where barefoot luxury meets untouched nature." },
];

export const DESTINATIONS = [
  { slug:"rio", name:"Rio Off Script", region:"Rio de Janeiro", category:"beyond-the-obvious", img:IMG.rioSugar, blurb:"Iconic energy, coastal escapes, boat days, hidden beaches, and local experiences beyond the city." },
  { slug:"bahia", name:"Bahia Off Script", region:"Bahia & the Northeast", category:"beyond-the-obvious", img:IMG.ribbons, blurb:"Afro-Brazilian culture, barefoot luxury, music, gastronomy, and slow coastal living." },
  { slug:"amazon", name:"Amazon Off Script", region:"Amazônia", category:"beyond-the-obvious", img:IMG.amazon, blurb:"Luxury jungle lodges, river experiences, indigenous culture, and immersive nature." },
  { slug:"foz", name:"Foz do Iguaçu", region:"Paraná", category:"the-explorer", img:IMG.iguazu, blurb:"Both sides of the world's most cinematic waterfall, plus the wild rainforest around it." },
  { slug:"pantanal", name:"Pantanal & Bonito", region:"Mato Grosso do Sul", category:"the-explorer", img:IMG.pantanal, blurb:"The world's largest wetland — jaguars, caiman-spotting, ecolodges and crystal-clear rivers." },
  { slug:"jalapao", name:"Jalapão", region:"Tocantins", category:"the-explorer", img:IMG.jalapao, blurb:"Otherworldly dunes, natural springs, and table mountains in Brazil's least-visited frontier." },
  { slug:"noronha", name:"Fernando de Noronha", region:"Pernambuco (Atlantic)", category:"paradise-found", img:IMG.noronha, blurb:"The protected archipelago — the closest Brazil comes to a private island." },
  { slug:"lencois", name:"Lençóis Maranhenses", region:"Maranhão", category:"paradise-found", img:IMG.lencois, blurb:"White-sand dunes laced with freshwater lagoons — a landscape unlike anywhere else on earth." },
  { slug:"northeast", name:"Northeastern Brazil", region:"Alagoas, Ceará, RN", category:"paradise-found", img:IMG.beach, blurb:"Endless coastlines, fishing villages, kitesurf havens, and the warmest waters in the country." },
];

export const TOURS = [
  { slug:"best-of-brazil-10-days", title:"Best of Brazil in 10 Days", days:10, price:5000, category:"beyond-the-obvious", regions:["Rio","São Paulo","Iguaçu","Paraty","Ilha Grande"], img:IMG.rioSugar, tags:["Culture","Cities","Nature"], blurb:"Three iconic cities, one extraordinary waterfall, and the quiet rhythm of the Costa Verde." },
  { slug:"rio-and-the-green-coast-7-days", title:"Rio & the Green Coast", days:7, price:3400, category:"beyond-the-obvious", regions:["Rio","Paraty","Ilha Grande"], img:IMG.paraty, tags:["Beach","Culture","Slow travel"], blurb:"Rio's energy paired with the dreamy colonial coast and a wild island detour." },
  { slug:"bahia-deep-dive-9-days", title:"Bahia Deep Dive", days:9, price:4200, category:"beyond-the-obvious", regions:["Salvador","Chapada Diamantina","Trancoso"], img:IMG.ribbons, tags:["Culture","Hiking","Beach"], blurb:"Afro-Brazilian history, hidden waterfalls, and the bohemian coast in one trip." },
  { slug:"amazon-immersion-6-days", title:"Amazon Immersion", days:6, price:3800, category:"the-explorer", regions:["Manaus","Anavilhanas","Rio Negro"], img:IMG.amazon, tags:["Wildlife","Indigenous","Eco-lodge"], blurb:"Riverboat days, jungle nights, and time with indigenous communities along the Rio Negro." },
  { slug:"pantanal-wildlife-8-days", title:"Pantanal Wildlife Safari", days:8, price:4600, category:"the-explorer", regions:["Cuiabá","North Pantanal","Bonito"], img:IMG.pantanal, tags:["Wildlife","Birdwatching","Adventure"], blurb:"Jaguar tracking on the Transpantaneira, plus the crystal rivers of Bonito." },
  { slug:"jalapao-expedition-7-days", title:"Jalapão Expedition", days:7, price:3900, category:"the-explorer", regions:["Palmas","Mateiros","Jalapão"], img:IMG.jalapao, tags:["Adventure","Off-road","Nature"], blurb:"4x4 through golden dunes, natural pools, and the cerrado's quietest corners." },
  { slug:"foz-iguacu-extended-5-days", title:"Foz do Iguaçu Extended", days:5, price:2200, category:"the-explorer", regions:["Foz do Iguaçu","Puerto Iguazú"], img:IMG.iguazu, tags:["Nature","Family-friendly"], blurb:"Both sides of the falls, a private helicopter loop, and the wild rainforest around it." },
  { slug:"noronha-escape-5-days", title:"Fernando de Noronha Escape", days:5, price:4900, category:"paradise-found", regions:["Fernando de Noronha"], img:IMG.noronha, tags:["Beach","Diving","Honeymoon"], blurb:"The archipelago at its quietest: dive sites, beach trails, and serious downtime." },
  { slug:"lencois-and-northeast-9-days", title:"Lençóis & the Northeast", days:9, price:4400, category:"paradise-found", regions:["São Luís","Lençóis Maranhenses","Jericoacoara"], img:IMG.lencois, tags:["Beach","Adventure","Nature"], blurb:"Dunes, lagoons, fishing villages, and Jeri's barefoot dunes at sunset." },
  { slug:"southern-brazil-route-8-days", title:"Southern Brazil Wine Route", days:8, price:3700, category:"beyond-the-obvious", regions:["Porto Alegre","Vale dos Vinhedos","Gramado"], img:IMG.surfer, tags:["Food & wine","Mountains"], blurb:"Brazilian sparkling wine country, european-style mountain towns, and surprising gastronomy." },
];

export const EXPERTS = [
  { name:"Helena Cardoso", base:"São Paulo", img:IMG.helena, specialty:"Rio, São Paulo, gastronomy", bio:"Born in Belo Horizonte, twelve years curating private journeys across the country. Talks to chefs before tourists." },
  { name:"Rafael Lima", base:"Salvador", img:IMG.rafael, specialty:"Bahia, Northeast, music", bio:"Bahian-born, lifelong percussionist. Builds itineraries that move with rhythm — markets, terreiros, secret beaches." },
  { name:"Juliana Rocha", base:"Manaus", img:IMG.juliana, specialty:"Amazon, Pantanal, wildlife", bio:"Biologist turned travel curator. Has spent more nights in jungle lodges than in her own apartment." },
  { name:"Marcos Vasconcelos", base:"Florianópolis", img:IMG.marcos, specialty:"Southern Brazil, surf, wine", bio:"Former pro surfer, now a serious wine nerd. Maps Brazil's south like a local who refuses to gatekeep." },
];

export const REVIEWS = [
  { quote:"They built us a Brazil we couldn't have found alone. Two weeks, zero tourist traps, and the kind of meals you remember years later.", name:"Sarah & Tom Whitfield", where:"London · 14-day private", img:IMG.guestSarah },
  { quote:"I asked for 'real Brazil, not the Instagram version' and they delivered. Our Bahian host felt like family by day three.", name:"James Park", where:"New York · 10-day Bahia", img:IMG.guestJames },
  { quote:"The Pantanal portion alone was worth the trip. Pro guides, ethical lodges, and a jaguar sighting on day two.", name:"Anna Lindqvist", where:"Stockholm · 8-day Pantanal", img:IMG.guestAnna },
];

export const FAQS = [
  { q:"How far in advance should I plan?", a:"For most regions, 8–12 weeks is comfortable. For Carnival, New Year in Rio, and high season (Dec–Feb) we recommend 4–6 months. We can still pull together short-notice trips when there's availability." },
  { q:"Is Brazil safe for foreign travelers?", a:"Generally yes, with sensible precautions. Every itinerary we design includes airport-to-hotel transfers, vetted local guides, neighborhoods chosen with safety in mind, and a 24/7 in-country contact during your trip." },
  { q:"How much does a tailor-made trip cost?", a:"Most clients spend between US$ 350 and US$ 750 per person, per day, depending on style of stay and how much private guiding is included. We always send a transparent breakdown before you commit." },
  { q:"Do you handle international flights?", a:"We focus on the in-country experience: domestic flights, transfers, accommodations, guiding, and activities. We're happy to suggest reliable booking partners for your international flights." },
  { q:"Can you accommodate dietary restrictions?", a:"Absolutely. Brazilian cuisine is unusually flexible — vegetarian, vegan, gluten-free, allergies. We brief every chef and guide in advance." },
  { q:"What about families with kids?", a:"Many of our trips work beautifully for families. We adjust pace, choose family-friendly lodges, and build in flexibility — kids get a private guide who actually likes kids." },
  { q:"Refunds and cancellations?", a:"Deposits are partially refundable depending on timing. We work with travel insurance partners and always disclose individual supplier policies (lodges, internal flights) upfront." },
  { q:"What's the 'off script' part really mean?", a:"We stop optimizing for the photo and start optimizing for the feeling. Real homes, real meals, less rushing between landmarks, more time staying put. Brazil rewards travelers who slow down." },
];

export const BLOG_POSTS = [
  { slug:"the-brazil-most-tourists-miss", title:"The Brazil most tourists miss", date:"April 14, 2026", read:"7 min", category:"Stories", img:IMG.paraty, author:"Helena Cardoso", excerpt:"Three regions that almost never show up on a first-time itinerary — and why we send our most curious travelers there first." },
  { slug:"how-we-design-a-trip", title:"How we design a trip: behind the curtain", date:"March 28, 2026", read:"9 min", category:"Method", img:IMG.market, author:"Rafael Lima", excerpt:"From the first call to the final confirmation, the unglamorous craft behind a Brazil Off Script itinerary." },
  { slug:"jaguar-spotting-pantanal", title:"Jaguar spotting in the Pantanal, ethically", date:"March 9, 2026", read:"6 min", category:"Wildlife", img:IMG.pantanal, author:"Juliana Rocha", excerpt:"What good wildlife travel looks like — and the few practices we refuse to participate in." },
  { slug:"bahia-food-trail", title:"A four-day food trail through Bahia", date:"February 17, 2026", read:"8 min", category:"Food & wine", img:IMG.food, author:"Rafael Lima", excerpt:"Acarajé, moqueca, dendê, cacao. Where to actually eat in Salvador, Itaparica, and along the Dendê Coast." },
  { slug:"slow-travel-manifesto", title:"In defense of slow travel", date:"January 30, 2026", read:"5 min", category:"Method", img:IMG.hammock, author:"Helena Cardoso", excerpt:"Why our shortest trips are 6 nights — and what happens to your trip when you stop trying to see everything." },
];

export const QUIZ_STEPS = [
  { id:"region", type:"multi", required:true, image:IMG.jalapao,
    title:"Where would you like to explore in Brazil?",
    sub:"Pick everything that calls you. We'll shape the trip around it.",
    options:[
      {value:"rio", label:"Rio de Janeiro & coast", img:IMG.rioChrist},
      {value:"bahia", label:"Bahia & the Northeast", img:IMG.ribbons},
      {value:"pantanal", label:"Pantanal & wildlife", img:IMG.pantanal},
      {value:"foz", label:"Foz do Iguaçu", img:IMG.iguazu},
      {value:"south", label:"Southern Brazil (RS & SC)", img:IMG.surfer},
      {value:"central", label:"Central Brazil & Chapadas", img:IMG.jalapao},
      {value:"amazon", label:"The Amazon", img:IMG.amazon},
      {value:"noronha", label:"Fernando de Noronha & islands", img:IMG.noronha},
    ],
    extra:{ label:"Anywhere specific you want to visit? (optional)", placeholder:"e.g. I've been to Rio before and want to explore smaller cities this time" } },
  { id:"style", type:"multi", required:true, image:IMG.beach,
    title:"What style of journey speaks to you?",
    sub:"Pick the ones that resonate — we'll mix and match.",
    options:[
      {value:"culture", label:"Culture & history", icon:"🏛"},
      {value:"food", label:"Food & wine", icon:"🍽"},
      {value:"nature", label:"Wild nature & wildlife", icon:"🌿"},
      {value:"beach", label:"Beaches & islands", icon:"🏝"},
      {value:"adventure", label:"Adventure & active", icon:"🥾"},
      {value:"slow", label:"Slow travel & wellbeing", icon:"☕"},
      {value:"city", label:"City life & nightlife", icon:"🌃"},
      {value:"family", label:"Family-friendly", icon:"👨‍👩‍👧"},
    ] },
  { id:"duration", type:"single", required:true, image:IMG.paraty,
    title:"How long do you have?", sub:"Including travel days.",
    options:[
      {value:"short", label:"5–7 days", desc:"One region, focused"},
      {value:"mid",   label:"8–12 days", desc:"Two to three regions"},
      {value:"long",  label:"13–18 days", desc:"A full Brazilian arc"},
      {value:"open",  label:"3+ weeks", desc:"Slow, deep, immersive"},
    ] },
  { id:"travelers", type:"single", required:true, image:IMG.bossa,
    title:"Who's traveling?",
    options:[
      {value:"solo", label:"Solo", icon:"🧍"},
      {value:"couple", label:"Couple", icon:"❤️"},
      {value:"family", label:"Family with kids", icon:"👨‍👩‍👧"},
      {value:"friends", label:"Group of friends", icon:"👥"},
      {value:"multigen", label:"Multi-generational", icon:"🧑‍🤝‍🧑"},
    ] },
  { id:"pace", type:"single", required:true, image:IMG.hammock,
    title:"What pace feels right?",
    options:[
      {value:"slow", label:"Slow", desc:"Stay put. Sink in."},
      {value:"balanced", label:"Balanced", desc:"Mix of move and stay."},
      {value:"active", label:"Active", desc:"See as much as we can."},
    ] },
  { id:"comfort", type:"single", required:true, image:IMG.cup,
    title:"What level of comfort?", sub:"This shapes the kind of stays we'll suggest.",
    options:[
      {value:"comfort", label:"Comfort", desc:"Boutique 4★ feel"},
      {value:"premium", label:"Premium", desc:"Hand-picked 5★ & design hotels"},
      {value:"luxury", label:"Luxury", desc:"Top of the market, private services"},
      {value:"mix", label:"Mix it up", desc:"Splurge in some places, simple in others"},
    ] },
  { id:"contact", type:"contact", required:true, image:IMG.market,
    title:"Where should we send your suggestions?",
    sub:"A real local expert will reply within 48 hours with a personalized proposal — no obligation, no sales calls." },
];

// ---- Itinerary for the flagship 10-day tour ----
export const FULL_ITIN = [
  { route:"São Paulo Int'l Airport (GRU) — Downtown São Paulo", city:"São Paulo", img:IMG.saoPaulo, meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"From São Paulo International Airport (GRU) to your hotel", desc:"Upon arrival you'll be met at the airport by a friendly driver and transferred by private vehicle to your hotel. Estimated transfer length: 1 hour."},
      {kind:"Excursion", title:"Morning around the city", desc:"Take an enriching half-day tour tailored to your interests. Foodies go market-to-restaurant; history buffs trace São Paulo's past through architecture and museums; the artistically inclined explore the city's alternative arts scene."},
      {kind:"Evening", title:"Free evening in São Paulo", desc:"A curated guide to the best restaurants, bars, and after-hours spots — personalized to your group's budget and interests."},
    ]},
  { route:"São Paulo — Iguaçu Airport — Puerto Iguazú", city:"Foz do Iguaçu → Argentina", img:IMG.iguazu, meals:"Breakfast · Dinner",
    blocks:[
      {kind:"Flight", title:"São Paulo to Foz do Iguaçu", desc:"Private transfer to the morning flight. On arrival, your local guide crosses with you into Argentina; by sunset you're on the Puerto Iguazú side, ready for tomorrow."},
      {kind:"Evening", title:"Welcome dinner overlooking the river", desc:"A casual welcome dinner, where your guide walks you through tomorrow's logistics."},
    ]},
  { route:"Iguazú Falls — Argentina", city:"Puerto Iguazú → Foz do Iguaçu", img:IMG.iguazu, meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Excursion", title:"Argentine side of Iguazú Falls", desc:"A full day on the Argentine side: Devil's Throat catwalks, the Upper and Lower trails, time at quieter viewpoints between groups. Optional zodiac under the cataracts."},
      {kind:"Transfer", title:"Border crossing to Brazil", desc:"Late afternoon, your driver handles the border formalities and brings you to your Brazil-side hotel inside the national park."},
    ]},
  { route:"Itaipu Dam — Iguaçu Airport — Rio de Janeiro", city:"Foz do Iguaçu → Rio de Janeiro", img:IMG.rioSugar, meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Itaipu Dam visit", desc:"Morning visit to one of the world's largest hydroelectric dams — an unexpectedly cinematic engineering site at the Brazil-Paraguay border."},
      {kind:"Flight", title:"To Rio de Janeiro", desc:"Afternoon flight to Rio; transfer to a boutique hotel in Ipanema. Evening free to find your bearings along the beachfront."},
    ]},
  { route:"Rio's Downtown — Christ the Redeemer", city:"Rio de Janeiro", img:IMG.rioChrist, meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Historic downtown walk", desc:"A morning walk through the colonial center with a local historian-guide: Largo da Carioca, the Royal Portuguese Reading Room, Confeitaria Colombo for a long café break."},
      {kind:"Excursion", title:"Corcovado & Christ the Redeemer", desc:"Afternoon train up Corcovado for the iconic view. Timed entry to avoid the worst crowds, with a sunset descent."},
    ]},
  { route:"Arraial do Cabo", city:"Rio de Janeiro · day trip", img:IMG.beach, meals:"Breakfast · Lunch on the boat",
    blocks:[
      {kind:"Day trip", title:"The Brazilian Caribbean", desc:"Day excursion to Arraial do Cabo for crystalline coves, a small-boat schooner tour, and time at the wild Praia do Farol. Back in Rio by evening."},
    ]},
  { route:"Rio de Janeiro — Paraty", city:"Paraty", img:IMG.paraty, meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"Coastal drive to Paraty", desc:"Scenic drive along the Costa Verde (~4 hours with stops). Check into a historic pousada inside Paraty's colonial center."},
      {kind:"Excursion", title:"Walking the old town at dusk", desc:"An informal walking tour of the UNESCO-listed center as the lamps come on — old churches, cachaça distilleries, a stop for fresh fish at a local casa de farinha."},
    ]},
  { route:"Paraty — Ilha Grande", city:"Paraty → Ilha Grande", img:IMG.noronha, meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"Speedboat crossing", desc:"Late-morning private speedboat from Paraty's bay across to Vila do Abraão — about 90 minutes through one of the most picturesque archipelagos on the Atlantic coast."},
      {kind:"Stay", title:"Eco-pousada at Praia do Abraão", desc:"Settle in to a small, sustainable beachfront pousada. No cars on the island. Free afternoon to swim or hike short loops behind the village."},
    ]},
  { route:"Ilha Grande", city:"Ilha Grande", img:IMG.hammock, meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Excursion", title:"Lopes Mendes beach hike or schooner tour", desc:"Pick your day: a guided hike through Atlantic Forest to Lopes Mendes (consistently among the world's finest beaches), or a slower schooner loop with stops at Lagoa Azul and Saco do Céu."},
    ]},
  { route:"Ilha Grande — Rio de Janeiro", city:"Departure · Rio de Janeiro", img:IMG.rioSugar, meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"Boat + private car to Rio (GIG)", desc:"Morning speedboat back to the mainland; private transfer to Rio de Janeiro / Galeão International Airport for your onward flight. Late-departure travelers can add a final lunch in Urca on request."},
    ]},
];

export function buildLightItin(tour){
  const out=[];
  const regions = tour.regions;
  const perRegion = Math.ceil(tour.days / regions.length);
  const imgMap = { "Rio":IMG.rioChrist, "Salvador":IMG.ribbons, "Manaus":IMG.amazon, "Cuiabá":IMG.pantanal, "Bonito":IMG.pantanal, "Mateiros":IMG.jalapao, "Foz":IMG.iguazu, "Fernando":IMG.noronha, "São Luís":IMG.lencois, "Jericoacoara":IMG.beach, "Porto Alegre":IMG.surfer, "Vale":IMG.surfer, "Gramado":IMG.surfer, "Chapada":IMG.jalapao, "Trancoso":IMG.beach, "Paraty":IMG.paraty, "Ilha":IMG.noronha, "Anavilhanas":IMG.amazon, "Rio Negro":IMG.amazon, "Puerto":IMG.iguazu, "São Paulo":IMG.saoPaulo, "Palmas":IMG.jalapao, "Jalapão":IMG.jalapao, "North Pantanal":IMG.pantanal };
  function imgFor(r){ const k = Object.keys(imgMap).find(k=>r.startsWith(k) || r.includes(k)); return imgMap[k] || tour.img; }
  let day=1;
  for (let r=0; r<regions.length; r++){
    const reg = regions[r];
    const daysHere = (r===regions.length-1) ? tour.days - day + 1 : perRegion;
    for (let i=0; i<daysHere && day<=tour.days; i++){
      out.push({
        route: i===0 && r>0 ? `${regions[r-1]} → ${reg}` : reg,
        city: reg, img: imgFor(reg),
        meals: i===daysHere-1 && r===regions.length-1 ? "Breakfast" : "Breakfast · Lunch",
        blocks: i===0 ? [
          {kind:"Arrival", title:`Welcome to ${reg}`, desc:`Private transfer and check-in to a hand-picked stay. Brief from your local guide; the rest of the day is yours to settle in.`},
          {kind:"Optional", title:"Sunset stroll", desc:"A short orientation walk with your guide if you've got energy — otherwise, a long shower and an unhurried dinner."},
        ] : i===daysHere-1 ? [
          {kind:"Excursion", title:`A signature ${reg} day`, desc:`Curated around your interests — a hands-on workshop, a half-day in nature, or a slower day for swimming and reading. Your guide flexes the day around the weather and your mood.`},
          {kind:"Transfer", title:r<regions.length-1?`Travel to ${regions[r+1]}`:"Departure prep", desc: r<regions.length-1 ? "Private transfer or short domestic flight to the next region.":"Final dinner in town. Bags packed for tomorrow's transfer to the airport."},
        ] : [
          {kind:"Excursion", title:`Exploring ${reg}`, desc:`A full day around ${reg}'s highlights and quiet corners — designed by your local expert and adjusted as you go.`},
        ]
      });
      day++;
    }
  }
  return out;
}

export const DESTINATION_HIGHLIGHTS = {
  rio: [
    {t:"Christ the Redeemer at off-peak hours", d:"Private timed-entry to avoid the worst crowds, with sunset descent."},
    {t:"Hidden boat day around Angra dos Reis", d:"Private skipper, secluded coves, lunch on board, swim stops."},
    {t:"Santa Teresa with a local host", d:"Bohemian hilltop neighborhood — bars, art studios, samba bars locals actually go to."},
    {t:"Favela visit with a community-led NGO", d:"Ethical, immersive, and entirely on the community's terms."},
  ],
  bahia: [
    {t:"Pelourinho at dusk with a local historian", d:"Colonial center walked at the right hour with someone who lives the history."},
    {t:"Cooking with a Bahian master cook", d:"Dendê, acarajé, moqueca — hands-on in a home kitchen."},
    {t:"Trancoso & Caraíva slow days", d:"Barefoot luxury, river crossings, and the dreamiest stretch of the southern Bahia coast."},
    {t:"A Candomblé terreiro visit (when invited)", d:"Respectful, rare, life-changing for the right traveler."},
  ],
  amazon: [
    {t:"Anavilhanas Archipelago by riverboat", d:"Igarapés, freshwater dolphins, hammock-strung nights on the Rio Negro."},
    {t:"Stay at an indigenous-led eco-lodge", d:"Profits and decision-making stay with the community."},
    {t:"Pre-dawn jungle walk", d:"Sound first, sight second. The forest at 5am is another country."},
  ],
  foz: [
    {t:"Both sides of the falls in two days", d:"Argentine catwalks one day, Brazilian panorama the next."},
    {t:"Helicopter loop at sunrise", d:"15 minutes of disbelief."},
    {t:"Itaipu Dam — quietly cinematic", d:"An unexpectedly stunning piece of mid-century engineering."},
  ],
  pantanal: [
    {t:"Jaguar tracking on the Transpantaneira", d:"Best in the dry season — Jun to Oct."},
    {t:"Bonito's crystal rivers", d:"Snorkel the Rio Sucuri, swim Gruta do Lago Azul."},
    {t:"Caiman & capybara nights", d:"Boat safaris after dark when the bigger animals come out."},
  ],
  jalapao: [
    {t:"Fervedouro spring swims", d:"Natural blue pools that bubble from the sand."},
    {t:"Sand dunes at golden hour", d:"Mateiros dunes, lit gold, almost no one else around."},
    {t:"Capim dourado weaving", d:"A craft tradition unique to this region."},
  ],
  noronha: [
    {t:"Praia do Sancho at dawn", d:"The best beach in Brazil before anyone else gets there."},
    {t:"Diving with sea turtles & rays", d:"Visibility 30m+. The protected park makes it special."},
    {t:"Hidden beach walks", d:"Long quiet stretches by foot, often with a local naturalist."},
  ],
  lencois: [
    {t:"Lagoons by 4x4 + barefoot trek", d:"Different lagoons, different moods, different times of day."},
    {t:"Caburé fishing village stay", d:"The least-visited corner of the park."},
    {t:"Atins for kitesurfing", d:"World-class wind from July to December."},
  ],
  northeast: [
    {t:"Jericoacoara dune sunsets", d:"Climb the duna pôr-do-sol; stay for the moqueca."},
    {t:"Maragogi's natural pools", d:"Boat out to the 'Caribbean of Brazil' offshore reefs."},
    {t:"São Miguel dos Milagres", d:"Slow, unfiltered Alagoas. Days dissolve."},
  ],
};
