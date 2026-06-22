export const SITE = {
  name: "Brazil Off Script",
  description: "Brazil Off Script — tailor-made journeys, planned by local experts.",
  url: "https://braziloffscript.com",
  phone: "+55 11 99999-0000",
  whatsapp: "5511999990000",
  email: "ola@braziloffscript.com",
  instagram: "@braziloffscript",
  calendly: "https://calendly.com/braziloffscript/30min",
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
  { slug:"rio",           name:"Rio Off Script",              region:"Rio de Janeiro",          category:"beyond-the-obvious", img:IMG.rioSugar,            blurb:"Rio's icons, hidden viewpoints, vibrant neighborhoods, urban rainforest, and a slower coastal escape through Búzios and Arraial do Cabo." },
  { slug:"bahia",         name:"Bahia Off Script",            region:"Bahia & the Northeast",   category:"beyond-the-obvious", img:"/bahia-farol.jpg",       blurb:"Afro-Brazilian culture, barefoot luxury, music, gastronomy, and slow coastal living — choose a 10- or 15-day pace." },
  { slug:"amazon",        name:"Amazon Off Script",           region:"Amazônia",                category:"beyond-the-obvious", img:"/amazon.jpg",            blurb:"A journey through the Amazon's most iconic landscapes and its best-kept secrets." },
  { slug:"foz",           name:"Foz do Iguaçu",              region:"Paraná",                  category:"the-explorer",       img:"/iguazu.jpg",            blurb:"Both sides of the world's most cinematic waterfall, plus the wild rainforest around it." },
  { slug:"pantanal",      name:"Pantanal & Bonito",           region:"Mato Grosso do Sul",      category:"the-explorer",       img:"/pantanal.jpg",          blurb:"The world's largest wetland — jaguars, caiman-spotting, ecolodges and crystal-clear rivers." },
  { slug:"jalapao",       name:"Jalapão",                    region:"Tocantins",               category:"the-explorer",       img:"/central-brazil.jpg",    blurb:"Otherworldly dunes, natural springs, and table mountains in Brazil's least-visited frontier." },
  { slug:"noronha",       name:"Fernando de Noronha",         region:"Pernambuco (Atlantic)",   category:"paradise-found",     img:"/noronha.jpg",           blurb:"The protected archipelago — the closest Brazil comes to a private island." },
  { slug:"lencois",       name:"Lençóis Maranhenses",        region:"Maranhão",                category:"paradise-found",     img:IMG.lencois,              blurb:"White-sand dunes laced with freshwater lagoons — a landscape unlike anywhere else on earth." },
  { slug:"northeast",     name:"Northeastern Brazil",         region:"Alagoas, Ceará, RN",      category:"paradise-found",     img:"/quiz-style.jpg",        blurb:"Endless coastlines, fishing villages, kitesurf havens, and the warmest waters in the country." },
];

// Adapter: gives each Journey/DESTINATION the fields the tour-detail layout needs
export const DEST_TRIP = {
  rio:            { days:12, price:3400, regions:["Rio de Janeiro","Búzios"],
    intro:"Rio de Janeiro is one of the world's most recognizable cities, yet its true character extends far beyond its famous landmarks. This journey combines Rio's iconic sights with hidden viewpoints, vibrant neighborhoods, tropical rainforest, and stories that many visitors never hear. The second half of the trip unfolds along the coastline of Búzios and Arraial do Cabo, where crystal-clear waters, quiet coves, and a slower pace reveal another side of Brazil entirely." },
  bahia:          { days:10, price:4200, regions:["Salvador","Trancoso","Caraíva"],
    intro:"Designed for travelers who want to experience Bahia's many sides without rushing — balancing culture, paradise beaches, gastronomy and authenticity. Four unhurried nights in Salvador, the soul of Afro-Brazilian culture, then south down the Discovery Coast to the design-hamlet of Trancoso and the car-free river village of Caraíva." },
  "bahia-extended":{ days:15, price:6200, regions:["Salvador","Boipeba","Trancoso","Caraíva"],
    heroImg:"/boipeba-aerial.jpg",
    intro:"For travelers who want to know Bahia in depth — without rushing and without too much moving around. Four unhurried nights each in Salvador and on the car-free island of Boipeba, then four more in Trancoso and three in the river village of Caraíva. This is the more exploratory side of the coast: near-empty beaches, local communities, preserved nature, and a real sense of discovery." },
  amazon:         { days:12,  price:3800, regions:["Manaus","Novo Airão","Rio Negro","Presidente Figueiredo"],
    intro:"Trade the city for the world's greatest rainforest. From Manaus you slip up the Rio Negro into the Anavilhanas archipelago, staying in sustainable jungle lodges, canoeing flooded forest at dawn, and spending time with the communities who know these waters best." },
  foz:            { days:6,  price:2200, regions:["Foz do Iguaçu"],
    intro:"Most travelers visit Iguaçu for the waterfalls. And they should. But beyond the iconic viewpoints lies a much larger story — one of rivers, forests, wildlife, and the conservation efforts that help protect one of the last great strongholds of the Atlantic Forest." },
  pantanal:       { days:8,  price:4600, regions:["Cuiabá","North Pantanal","Bonito"],
    intro:"The Pantanal is South America's premier wildlife stage — the best place on earth to see jaguars in the wild, alongside caiman, giant otters and hundreds of birds. Pair it with Bonito's crystal-clear rivers for snorkeling among fish in water like glass." },
  jalapao:        { days:7,  price:3900, regions:["Palmas","Mateiros","Jalapão"],
    intro:"Brazil's wildest frontier: orange dunes, fizzing natural springs you float in, and table-top mountains in a state almost no foreign traveler reaches. A true expedition — rustic, remote, and unforgettable." },
  noronha:        { days:5,  price:4900, regions:["Fernando de Noronha"],
    intro:"A protected volcanic archipelago two hundred miles offshore — the closest Brazil comes to a private island. Visitor numbers are capped, the diving is world-class, and the beaches are routinely voted the most beautiful in the country." },
  lencois:        { days:9,  price:4400, regions:["São Luís","Lençóis Maranhenses","Jericoacoara"],
    intro:"A landscape unlike anywhere on earth: endless white dunes laced with rainwater lagoons you can swim in. Bookended by the colonial tiles of São Luís and the laid-back dunes-and-kitesurf village of Jericoacoara." },
  northeast:      { days:8,  price:3600, regions:["Jericoacoara","Lençóis Maranhenses","Fernando de Noronha"],
    intro:"The Northeast is one long ribbon of coastline — fishing villages, kitesurf bays, warm clear water and an unhurried pace. This journey strings together its most beautiful stretches, from windswept dune villages to a protected island finale." },
};

export const TOURS = [
  { slug:"best-of-brazil-10-days",    title:"Best of Brazil in 10 Days",     days:10, price:5000, category:"beyond-the-obvious", regions:["Rio","São Paulo","Iguaçu","Paraty","Ilha Grande"], img:IMG.rioSugar,           tags:["Culture","Cities","Nature"],        blurb:"Three iconic cities, one extraordinary waterfall, and the quiet rhythm of the Costa Verde." },
  { slug:"rio-and-the-green-coast-7-days", title:"Rio & the Green Coast",    days:7,  price:3400, category:"beyond-the-obvious", regions:["Rio","Paraty","Ilha Grande"],                      img:"/rio-green-coast.jpg",  tags:["Beach","Culture","Slow travel"],    blurb:"Rio's energy paired with the dreamy colonial coast and a wild island detour." },
  { slug:"bahia-deep-dive-9-days",    title:"Bahia Deep Dive",               days:9,  price:4200, category:"beyond-the-obvious", regions:["Salvador","Chapada Diamantina","Trancoso"],         img:"/bahia-chapada.jpg",    tags:["Culture","Hiking","Beach"],         blurb:"Afro-Brazilian history, hidden waterfalls, and the bohemian coast in one trip." },
  { slug:"amazon-immersion-6-days",   title:"Amazon Immersion",              days:6,  price:3800, category:"the-explorer",       regions:["Manaus","Anavilhanas","Rio Negro"],                  img:"/amazon-aerial.jpg",    tags:["Wildlife","Indigenous","Eco-lodge"],blurb:"Riverboat days, jungle nights, and time with indigenous communities along the Rio Negro." },
  { slug:"pantanal-wildlife-8-days",  title:"Pantanal Wildlife Safari",      days:8,  price:4600, category:"the-explorer",       regions:["Cuiabá","North Pantanal","Bonito"],                  img:"/bonito-river.jpg",     tags:["Wildlife","Birdwatching","Adventure"],blurb:"Jaguar tracking on the Transpantaneira, plus the crystal rivers of Bonito." },
  { slug:"jalapao-expedition-7-days", title:"Jalapão Expedition",            days:7,  price:3900, category:"the-explorer",       regions:["Palmas","Mateiros","Jalapão"],                       img:"/jalapao-waterfall.jpg",tags:["Adventure","Off-road","Nature"],    blurb:"4x4 through golden dunes, natural pools, and the cerrado's quietest corners." },
  { slug:"foz-iguacu-extended-5-days",title:"Foz Off Script",              days:6,  price:2200, category:"the-explorer",       regions:["Foz do Iguaçu"],                                    img:"/iguazu-falls.jpg",     tags:["Nature","Conservation"],            hotelChanges:0, blurb:"The legendary falls, plus the rivers, forests, wildlife, and conservation work that make this region one of Brazil's great natural treasures.",
    intro:"Most travelers visit Iguaçu for the waterfalls. And they should. But beyond the iconic viewpoints lies a much larger story — one of rivers, forests, wildlife, and the conservation efforts that help protect one of the last great strongholds of the Atlantic Forest. This journey combines the legendary falls with the ecosystems, landscapes, and initiatives that make this region one of Brazil's most important natural treasures." },
  { slug:"noronha-escape-5-days",     title:"Fernando de Noronha Escape",    days:5,  price:4900, category:"paradise-found",     regions:["Fernando de Noronha"],                              img:"/noronha-beach.jpg",    tags:["Beach","Diving","Honeymoon"],       blurb:"The archipelago at its quietest: dive sites, beach trails, and serious downtime." },
  { slug:"lencois-and-northeast-9-days", title:"Lençóis & the Northeast",   days:9,  price:4400, category:"paradise-found",     regions:["São Luís","Lençóis Maranhenses","Jericoacoara"],    img:"/northeast-buggy.jpg",  tags:["Beach","Adventure","Nature"],       blurb:"Dunes, lagoons, fishing villages, and Jeri's barefoot dunes at sunset." },
];

export const EXPERTS = [
  { name:"Marina Vargas", base:"Espírito Santo", img:IMG.helena, specialty:"Rio, São Paulo, gastronomy", bio:"Born in Belo Horizonte, twelve years curating private journeys across the country. Talks to chefs before tourists." },
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
  { slug:"the-brazil-most-tourists-miss", title:"The Brazil most tourists miss", date:"April 14, 2026", read:"7 min", category:"Stories", img:"/bahia.jpg", author:"Marina Vargas", excerpt:"Three regions that almost never show up on a first-time itinerary — and why we send our most curious travelers there first." },
  { slug:"how-we-design-a-trip", title:"How we design a trip: behind the curtain", date:"March 28, 2026", read:"9 min", category:"Method", img:"/central-brazil.jpg", author:"Rafael Lima", excerpt:"From the first call to the final confirmation, the unglamorous craft behind a Brazil Off Script itinerary." },
  { slug:"jaguar-spotting-pantanal", title:"Jaguar spotting in the Pantanal, ethically", date:"March 9, 2026", read:"6 min", category:"Wildlife", img:"/jaguar.jpg", author:"Juliana Rocha", excerpt:"What good wildlife travel looks like — and the few practices we refuse to participate in." },
  { slug:"bahia-food-trail", title:"A four-day food trail through Bahia", date:"February 17, 2026", read:"8 min", category:"Food & wine", img:IMG.food, author:"Rafael Lima", excerpt:"Acarajé, moqueca, dendê, cacao. Where to actually eat in Salvador, Itaparica, and along the Dendê Coast." },
  { slug:"slow-travel-manifesto", title:"In defense of slow travel", date:"January 30, 2026", read:"5 min", category:"Method", img:IMG.hammock, author:"Marina Vargas", excerpt:"Why our shortest trips are 6 nights — and what happens to your trip when you stop trying to see everything." },
];

export const QUIZ_STEPS = [
  { id:"region", type:"multi", required:true, image:"/quiz-region-left.jpg",
    title:"Where would you like to explore in Brazil?",
    sub:"Pick everything that calls you. We'll shape the trip around it.",
    options:[
      {value:"rio",    label:"Rio de Janeiro & coast",        img:IMG.rioChrist},
      {value:"bahia",  label:"Bahia & the Northeast",         img:"/bahia.jpg"},
      {value:"pantanal",label:"Pantanal & wildlife",          img:"/pantanal.jpg"},
      {value:"foz",    label:"Foz do Iguaçu",                 img:"/iguazu.jpg"},
      {value:"central",label:"Central Brazil & Chapadas",     img:"/central-brazil.jpg"},
      {value:"amazon", label:"The Amazon",                    img:"/amazon.jpg"},
      {value:"noronha",label:"Fernando de Noronha & islands", img:"/noronha.jpg"},
      {value:"lencois",label:"Lençóis Maranhenses & dunes",   img:"/northeast-buggy.jpg"},
    ],
    extra:{ label:"Anywhere specific you want to visit? (optional)", placeholder:"e.g. I've been to Rio before and want to explore smaller cities this time" } },
  { id:"style", type:"multi", required:true, image:"/quiz-style.jpg",
    title:"What style of journey speaks to you?",
    sub:"Pick the ones that resonate — we'll mix and match.",
    options:[
      {value:"culture",   label:"Culture & history",        icon:"🏛"},
      {value:"food",      label:"Food & wine",              icon:"🍽"},
      {value:"nature",    label:"Wild nature & wildlife",   icon:"🌿"},
      {value:"beach",     label:"Beaches & islands",        icon:"🏝"},
      {value:"adventure", label:"Adventure & active",       icon:"🥾"},
      {value:"slow",      label:"Slow travel & wellbeing",  icon:"☕"},
      {value:"city",      label:"City life & nightlife",    icon:"🌃"},
      {value:"family",    label:"Family-friendly",          icon:"👨‍👩‍👧"},
    ] },
  { id:"duration", type:"single", required:true, image:"/jaguar.jpg",
    title:"How long do you have?", sub:"Including travel days.",
    options:[
      {value:"short", label:"5–7 days",    desc:"One region, focused"},
      {value:"mid",   label:"8–12 days",   desc:"Two to three regions"},
      {value:"long",  label:"13–18 days",  desc:"A full Brazilian arc"},
      {value:"open",  label:"3+ weeks",    desc:"Slow, deep, immersive"},
    ] },
  { id:"travelers", type:"single", required:true, image:"/quiz-travelers.jpg",
    title:"Who's traveling?",
    options:[
      {value:"solo",     label:"Solo",                icon:"🧍"},
      {value:"couple",   label:"Couple",              icon:"❤️"},
      {value:"family",   label:"Family with kids",    icon:"👨‍👩‍👧"},
      {value:"friends",  label:"Group of friends",    icon:"👥"},
      {value:"multigen", label:"Multi-generational",  icon:"🧑‍🤝‍🧑"},
    ] },
  { id:"pace", type:"single", required:true, image:"/quiz-pace.jpg",
    title:"What pace feels right?",
    options:[
      {value:"slow",     label:"Slow",     desc:"Stay put. Sink in."},
      {value:"balanced", label:"Balanced", desc:"Mix of move and stay."},
      {value:"active",   label:"Active",   desc:"See as much as we can."},
    ] },
  { id:"comfort", type:"single", required:true, image:"/quiz-comfort.jpg",
    title:"What level of comfort?", sub:"This shapes the kind of stays we'll suggest.",
    options:[
      {value:"comfort", label:"Comfort",    desc:"Boutique 4★ feel"},
      {value:"premium", label:"Premium",    desc:"Hand-picked 5★ & design hotels"},
      {value:"luxury",  label:"Luxury",     desc:"Top of the market, private services"},
      {value:"mix",     label:"Mix it up",  desc:"Splurge in some places, simple in others"},
    ] },
  { id:"contact", type:"contact", required:true, image:"/quiz-contact.jpg",
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
  { route:"São Paulo — Iguaçu Airport — Puerto Iguazú", city:"Foz do Iguaçu → Argentina", img:IMG.iguazu, meals:"Breakfast",
    blocks:[
      {kind:"Flight", title:"São Paulo to Foz do Iguaçu", desc:"Private transfer to the morning flight. On arrival, your local guide crosses with you into Argentina; by sunset you're on the Puerto Iguazú side, ready for tomorrow."},
      {kind:"Evening", title:"Welcome dinner overlooking the river", desc:"A casual welcome dinner, where your guide walks you through tomorrow's logistics."},
    ]},
  { route:"Iguazú Falls — Argentina", city:"Puerto Iguazú → Foz do Iguaçu", img:IMG.iguazu, meals:"Breakfast",
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
  { route:"Arraial do Cabo", city:"Rio de Janeiro · day trip", img:IMG.beach, meals:"Breakfast",
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
  { route:"Ilha Grande", city:"Ilha Grande", img:IMG.hammock, meals:"Breakfast",
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
        meals: "Breakfast",
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

// ---- Foz Off Script — 5-night itinerary ----
export const FOZ_ITIN = [
  { route:"Arrival in Foz do Iguaçu", city:"Arrival at the Triple Frontier", img:"/iguazu.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Arrival", title:"Arrival in Foz do Iguaçu", desc:"Arrive in Foz do Iguaçu and transfer privately to your hotel. After check-in, the afternoon is dedicated to discovering the unique geography that defines the region."},
      {kind:"Excursion", title:"The Triple Frontier", desc:"At the meeting point of Brazil, Argentina, and Paraguay, the Paraná and Iguaçu Rivers converge to create one of South America's most fascinating border landscapes."},
      {kind:"Evening", title:"Sunset over the rivers", desc:"As the sun begins to set, take in panoramic views over the rivers and gain a first introduction to the ecosystems and cultures that shape life along the Triple Frontier. Welcome dinner and overnight in Foz do Iguaçu."},
    ]},
  { route:"Iguaçu National Park · Brazil", city:"The Power of the Falls", img:"/iguazu-falls.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Brazilian side of Iguaçu Falls", desc:"Explore the Brazilian side of Iguaçu Falls, where panoramic walkways reveal sweeping views of hundreds of waterfalls cascading through the Atlantic Forest."},
      {kind:"Adventure", title:"Macuco Safari", desc:"Continue with the Macuco Safari, navigating the waters beneath the falls for an unforgettable close-up perspective of their immense power."},
      {kind:"Nature", title:"Time inside the national park", desc:"The afternoon offers time to further explore the national park and appreciate the scale of the ecosystem that surrounds this extraordinary landscape. Overnight in Foz do Iguaçu."},
    ]},
  { route:"Argentina side of Iguaçu Falls", city:"The Falls from Another Perspective", img:IMG.iguazu, meals:"Breakfast",
    blocks:[
      {kind:"Border crossing", title:"Cross into Argentina", desc:"Cross into Argentina to experience a completely different perspective of the falls."},
      {kind:"Excursion", title:"Forest trails and waterfall walkways", desc:"A network of trails and walkways leads through subtropical forest, revealing dramatic viewpoints above and alongside the waterfalls."},
      {kind:"Conservation", title:"A shared protected landscape", desc:"Throughout the day, discover how the protected landscapes of Brazil and Argentina work together to preserve one of South America's most significant natural environments. Return to Brazil in the afternoon, with the evening at leisure."},
    ]},
  { route:"Atlantic Forest conservation", city:"Guardians of the Atlantic Forest", img:"/toucan.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Conservation", title:"Beyond the waterfalls", desc:"Beyond the waterfalls lies one of the most important conservation landscapes in Brazil. Today focuses on understanding the ecosystems that sustain the region and the ongoing efforts to protect them."},
      {kind:"Visit", title:"Wildlife and habitat initiatives", desc:"Visit conservation initiatives dedicated to preserving native wildlife and restoring Atlantic Forest habitats. Learn about the challenges facing one of the world's most threatened biodiversity hotspots and the work being done to safeguard its future."},
      {kind:"Nature", title:"Guided biodiversity experiences", desc:"In the afternoon, continue exploring the region's remarkable biodiversity through guided nature experiences, with opportunities to observe birds, wildlife, and native forest environments. This is a deeper look at the natural world that exists beyond the iconic viewpoints."},
    ]},
  { route:"Itaipu Binacional · Paraná River", city:"Rivers, Energy & Conservation", img:IMG.iguazu, meals:"Breakfast",
    blocks:[
      {kind:"Context", title:"The rivers behind Iguaçu", desc:"The rivers that create Iguaçu have shaped far more than the waterfalls themselves. Today explores the relationship between nature, conservation, and sustainable development in the region."},
      {kind:"Visit", title:"Itaipu Binacional", desc:"Visit Itaipu Binacional, one of the most ambitious environmental and infrastructure projects in South America. Beyond its engineering achievements, discover the extensive conservation programs, habitat restoration initiatives, and ecological corridors that help protect thousands of hectares of Atlantic Forest."},
      {kind:"Evening", title:"Final sunset over the Paraná River", desc:"Learn how energy production, environmental stewardship, and biodiversity conservation intersect within this unique landscape. In the evening, enjoy a final sunset overlooking the Paraná River, followed by a farewell dinner."},
    ]},
  { route:"Foz do Iguaçu Airport", city:"Departure", img:"/iguazu.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Departure", title:"Relaxed morning and airport transfer", desc:"Enjoy a relaxed morning before your private transfer to the airport. Departure from Foz do Iguaçu."},
    ]},
];

// ---- Rio Off Script — 12-day itinerary ----
export const RIO_ITIN = [
  { route:"Rio de Janeiro Int'l Airport (GIG/GRU) → Ipanema", city:"First Glimpse of Rio", img:"/rio-sunset.jpg", meals:"",
    blocks:[
      {kind:"Arrival", title:"Private airport transfer", desc:"Arrival in Rio de Janeiro. After a private transfer and check-in in Ipanema or Leblon, take time to settle into the rhythm of the city."},
      {kind:"Neighborhood", title:"Ipanema or Leblon beachfront walk", desc:"Stroll along the beachfront and watch locals gather by the ocean as you get your first feel for Rio's beachside life."},
      {kind:"Evening", title:"Arpoador sunset & welcome dinner", desc:"Experience your first sunset at Arpoador, one of Rio's most beloved traditions, followed by a relaxed welcome dinner."},
    ]},
  { route:"Rio de Janeiro · Corcovado, Santa Teresa & Sugarloaf", city:"Rio's Greatest Icons", img:IMG.rioChrist, meals:"Breakfast",
    blocks:[
      {kind:"Icon", title:"Christ the Redeemer", desc:"A day dedicated to the landmarks that made Rio famous around the world, beginning from the heights of Corcovado."},
      {kind:"Neighborhood", title:"Santa Teresa & Selarón Steps", desc:"Explore the colorful streets of Santa Teresa and descend through the famous Selarón Steps."},
      {kind:"History", title:"Historic Center", desc:"Walk through the historic heart of Rio, tracing the city's colonial architecture, cultural landmarks, and layered stories."},
      {kind:"Icon", title:"Sugarloaf Mountain", desc:"End the day at the summit of Sugarloaf Mountain, taking in one of Rio's most celebrated views."},
    ]},
  { route:"Rio de Janeiro · Botanical Garden, Lage & hidden viewpoints", city:"Beyond the Postcards", img:"/parque-lage-arch.jpg", imgPosition:"center 65%", meals:"Breakfast",
    blocks:[
      {kind:"Garden", title:"Botanical Garden", desc:"Today reveals a quieter and more unexpected side of Rio, beginning among elegant gardens and tropical species."},
      {kind:"Art & nature", title:"Parque Lage", desc:"Explore one of the city's most atmospheric artistic spaces, where architecture, forest, and mountain views meet."},
      {kind:"Viewpoint", title:"Mirante Dona Marta", desc:"Take in a hidden viewpoint that frames Rio's mountains, neighborhoods, and ocean from a different angle."},
      {kind:"Scenic drive", title:"São Conrado & Atlantic coastline views", desc:"Follow the coastline through São Conrado and discover neighborhoods where daily life unfolds against a backdrop of mountains and ocean."},
    ]},
  { route:"Rio de Janeiro · Tijuca National Park", city:"How a City Rebuilt a Forest", img:"/rio-tijuca.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Forest", title:"Tijuca National Park", desc:"Few visitors realize that Rio is home to one of the world's largest urban forests."},
      {kind:"Viewpoint", title:"Vista Chinesa", desc:"Explore a forest viewpoint that reveals how dramatically the Atlantic Rainforest shapes and protects the city."},
      {kind:"Waterfall", title:"Cascatinha Taunay", desc:"Visit one of Tijuca's most iconic waterfalls while learning how this landscape was once cleared for coffee plantations."},
      {kind:"Conservation", title:"Atlantic Rainforest conservation story", desc:"Today's journey follows one of the earliest large-scale reforestation efforts in modern history, with native wildlife, forest viewpoints, and a deeper look at Rio's living rainforest."},
    ]},
  { route:"Rio de Janeiro · Carioca life", city:"The Carioca Way of Life", img:"/rio-day-5-carioca.jpg", imgPosition:"center 45%", meals:"Breakfast",
    blocks:[
      {kind:"Coffee", title:"Specialty coffee experience", desc:"Rio is often defined by its landmarks, but its true character is found in the rituals of everyday life. Today is dedicated to experiencing the city the way locals do — through coffee, food, music, conversation, and the simple pleasure of spending time outdoors."},
      {kind:"Neighborhood", title:"Local neighborhood exploration", desc:"The morning begins in one of Rio's most vibrant neighborhoods, where specialty coffee shops, local bakeries, and street life offer a glimpse into the city's daily rhythm."},
      {kind:"Local life", title:"Markets and cultural spaces", desc:"Continue through lively markets and cultural spaces where residents gather, shop, and socialize, before tasting traditional Brazilian gastronomy."},
      {kind:"Beach", title:"Beach culture and seaside lifestyle", desc:"In the afternoon, embrace one of Rio's most cherished traditions: time by the beach. Whether walking along the shoreline, relaxing at a beachfront kiosk, or simply observing the city's unique relationship with the ocean, this is an opportunity to experience Rio at a slower pace."},
      {kind:"Evening", title:"Live samba performance", desc:"As the sun sets, the city comes alive through music. End the day with an authentic samba experience, where live musicians, dancing, and local culture create an atmosphere that captures the spirit of Rio more than any monument ever could."},
    ]},
  { route:"Rio de Janeiro · your choice", city:"Rio, Your Way", img:"/rio-day-6-sailing.jpg", imgPosition:"center 55%", meals:"Breakfast",
    blocks:[
      {kind:"Flexible", title:"A day shaped around you", desc:"A flexible day designed around your interests. Whether you prefer architecture, culture, sailing, or simply another day by the ocean, Rio offers countless possibilities for a personalized experience."},
      {kind:"Options", title:"Sailing, Niterói, beaches or art", desc:"Choose from sailing Guanabara Bay, Niterói and architecture, an additional beach day, or art and culture experiences."},
    ]},
  { route:"Rio de Janeiro → Búzios", city:"From City to Sea", img:"/buzios-aerial.jpg", imgPosition:"center 25%", meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"Scenic coastal drive", desc:"Leave the energy of Rio behind and journey toward the laid-back atmosphere of Búzios."},
      {kind:"Arrival", title:"Boutique hotel check-in & Praia da Ferradura", desc:"Upon arrival, settle into your boutique hotel before enjoying a relaxed afternoon by the sea at Praia da Ferradura."},
      {kind:"Evening", title:"Orla Bardot & Rua das Pedras", desc:"As evening approaches, stroll along the waterfront and discover the village that became one of Brazil's most beloved coastal destinations, with seaside dining along Rua das Pedras."},
    ]},
  { route:"Búzios · peninsula beaches", city:"The Búzios Peninsula", img:"/buzios-stairs.jpg", imgPosition:"center 40%", meals:"Breakfast",
    blocks:[
      {kind:"Beach", title:"João Fernandes & João Fernandinho", desc:"A day dedicated to exploring the many faces of Búzios, beginning with calm turquoise bays."},
      {kind:"Beach", title:"Azeda & Azedinha", desc:"Visit intimate coves framed by native vegetation and clear water."},
      {kind:"Beach", title:"Brava Beach", desc:"Continue to a more dramatic stretch of coastline shaped by rocky cliffs and Atlantic views."},
    ]},
  { route:"Búzios · Arraial do Cabo", city:"The Brazilian Caribbean", img:"/arraial-do-cabo.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Day trip", title:"Pontal do Atalaia", desc:"Travel to nearby Arraial do Cabo, a region famous for some of the clearest waters in South America."},
      {kind:"Boat", title:"Ilha do Farol & Gruta Azul", desc:"Spend the day exploring remote beaches, hidden coves, and marine landscapes accessible only by boat."},
      {kind:"Water", title:"Boat experience & snorkeling opportunities", desc:"Swim and snorkel in crystal-clear water before returning to Búzios in the late afternoon."},
    ]},
  { route:"Búzios · salt, sun and sea breeze", city:"Salt, Sun and Sea Breeze", img:"/buzios-sunset-sail.jpg", imgPosition:"center 80%", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Choose your pace", desc:"A day with no fixed agenda, designed for slow travel and complete relaxation."},
      {kind:"Options", title:"Boat, beach clubs or paddle", desc:"Choose between a private boat charter, beach clubs, kayaking, stand-up paddle, or simply embracing a long seaside lunch."},
    ]},
  { route:"Búzios · a day with no plans", city:"A Day With No Plans", img:"/buzios-spa.jpg", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"One final day in Búzios", desc:"One final day to enjoy Búzios exactly as you wish."},
      {kind:"Suggestions", title:"Spa, shopping, beaches or sunset cocktails", desc:"Wander through boutique shops, discover another hidden beach, enjoy a spa treatment, or simply spend the day with your feet in the sand."},
    ]},
  { route:"Búzios → Rio de Janeiro Int'l Airport · Departure", city:"Until Next Time", img:"/rio-ipanema-sunset.jpg", imgPosition:"center 60%", meals:"Breakfast",
    blocks:[
      {kind:"Departure", title:"Relaxed breakfast & beach walk", desc:"Enjoy one last morning by the ocean with a relaxed breakfast and a final beach walk."},
      {kind:"Transfer", title:"Private transfer & departure", desc:"Your private transfer brings you back to Rio de Janeiro airport for departure."},
    ]},
];

// ---- Bahia Off Script — 10-day itinerary ----
export const BAHIA_ITIN = [
  { route:"Salvador Int'l Airport (SSA) → Rio Vermelho", city:"Welcome to Bahia", img:"/bahia-day-1-farol.jpg", meals:"",
    blocks:[
      {kind:"Arrival", title:"Arrival in Salvador", desc:"A private transfer meets you at the airport and brings you to your hotel, with time to settle in and embrace Bahia's relaxed rhythm."},
      {kind:"Evening", title:"Sunset in Rio Vermelho", desc:"A sunset stroll through the vibrant streets of the Rio Vermelho neighborhood, followed by a welcome dinner featuring contemporary Bahian flavors."},
    ]},
  { route:"Salvador · Pelourinho & Barra", city:"The Soul of Salvador", img:"/bahia-day-2-barra.jpg", imgPosition:"center 55%", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Salvador's Historic Center", desc:"A private guided exploration of the historic heart of Salvador — wander the colorful streets of Pelourinho, visit iconic baroque churches and colonial landmarks, ride the Elevador Lacerda for panoramic bay views, and browse local crafts at Mercado Modelo."},
      {kind:"Evening", title:"Sunset at Farol da Barra", desc:"Experience one of Brazil's most iconic sunsets at Farol da Barra, where locals gather to watch the sun melt into the Atlantic."},
    ]},
  { route:"Salvador · Santo Antônio Além do Carmo", city:"Salvador at Your Own Pace", img:"/bahia-day-2-pelourinho.jpg", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"A slow morning, your way", desc:"Explore the charming streets of Santo Antônio Além do Carmo, discovering local galleries, artisan shops and hidden cafés, with lunch over views of the Bay of All Saints."},
      {kind:"At leisure", title:"Afternoon & evening free", desc:"The afternoon is at leisure for cultural or culinary experiences, with the evening free to enjoy Salvador's vibrant atmosphere."},
    ]},
  { route:"Salvador · Ilha dos Frades", city:"A Private Day on the Bay", img:"/bahia-ilha-dos-frades-beach.jpeg", imgPosition:"center 55%", meals:"Breakfast",
    blocks:[
      {kind:"Day trip", title:"Sailing the Bay of All Saints", desc:"A private boat excursion across the Baía de Todos-os-Santos to the pristine shores of Ilha dos Frades — swimming in crystal-clear waters and relaxing at Ponta de Nossa Senhora beach."},
      {kind:"Food", title:"Seafood by the sea", desc:"A fresh seafood lunch by the water before a leisurely cruise back to Salvador in the afternoon."},
    ]},
  { route:"Salvador → Trancoso", city:"Trancoso, Uncovered", img:"/bahia-day-5-trancoso.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"South along the coast", desc:"A scenic journey along Bahia's southern coast to the charming village of Trancoso, with the afternoon free at Praia dos Nativos."},
      {kind:"Evening", title:"The Quadrado by lantern-light", desc:"Explore the iconic Quadrado and its colorful façades, watch the sunset over the coastline, and dine beneath the glow of lantern-lit trees."},
    ]},
  { route:"Trancoso · Praia dos Coqueiros & dos Nativos", city:"Barefoot Luxury", img:"/bahia-day-6-trancoso.jpg", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Beach days", desc:"A relaxed morning by the sea and time between Praia dos Coqueiros and Praia dos Nativos, with a beachfront lunch of fresh local ingredients."},
      {kind:"At leisure", title:"Spa, beach clubs & dining", desc:"Afternoon at leisure for spa treatments, beach clubs or quiet relaxation, a sunset in the Quadrado, and an evening to enjoy Trancoso's renowned dining scene."},
    ]},
  { route:"Trancoso · Praia do Espelho", city:"The Colors of Espelho", img:"/bahia-praia-do-espelho.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Day trip", title:"Praia do Espelho", desc:"A journey to the legendary Praia do Espelho — swimming in calm turquoise waters, walking along dramatic cliffs and coconut groves, and relaxing on one of Brazil's most beautiful beaches."},
      {kind:"Food", title:"Lunch over the ocean", desc:"A seaside lunch overlooking the water before returning to Trancoso in the late afternoon."},
    ]},
  { route:"Trancoso → Caraíva", city:"The Rhythm of Caraíva", img:"/bahia-caraiva-aerial.jpeg", meals:"Breakfast",
    blocks:[
      {kind:"Arrival", title:"A car-free village", desc:"Arrival in the laid-back village of Caraíva — a walk through its car-free sandy streets to discover the unique blend of river, ocean and local culture."},
      {kind:"Evening", title:"Where the river meets the sea", desc:"Sunset at the meeting point of the Caraíva River and the Atlantic, followed by a candlelit dinner in one of the village's charming restaurants."},
    ]},
  { route:"Caraíva · Corumbau", city:"The Hidden Coast", img:"/bahia-corumbau-aerial.jpeg", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"The remote shores of Corumbau", desc:"A boat excursion to the remote shores of Corumbau, navigating one of Brazil's most untouched coastlines and walking across vast sandbanks revealed by the tides, with a swim in warm, crystal-clear waters."},
      {kind:"Culture", title:"The Pataxó communities", desc:"Learn about the traditions of the local Pataxó communities before a sunset return to Caraíva."},
    ]},
  { route:"Caraíva → Porto Seguro Airport (BPS) · Departure", city:"One Last Swim", img:"/bahia-caraiva.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Departure", title:"A slow farewell", desc:"A slow morning by the beach with time for a final swim or riverside walk, and a leisurely breakfast surrounded by nature."},
      {kind:"Transfer", title:"Onward journey", desc:"A farewell to Bahia's southern coast and a private transfer to Porto Seguro Airport for your onward flight."},
    ]},
];

// ---- Bahia Off Script Extended — 15-day itinerary ----
export const BAHIA_EXT_ITIN = [
  { route:"Salvador Int'l Airport (SSA) → Rio Vermelho", city:"Welcome to Bahia", img:"/bahia-day-1-farol.jpg", meals:"",
    blocks:[
      {kind:"Arrival", title:"Arrival in Salvador", desc:"A private transfer meets you at the airport and brings you to your hotel, with time to settle into Bahia's relaxed rhythm."},
      {kind:"Evening", title:"Sunset in Rio Vermelho", desc:"A sunset stroll through the streets of Rio Vermelho, followed by a welcome dinner featuring contemporary Bahian cuisine."},
    ]},
  { route:"Salvador · Pelourinho & Barra", city:"The Soul of Salvador", img:"/bahia-day-2-barra.jpg", imgPosition:"center 55%", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Salvador's Historic Center", desc:"A private guided exploration of the historic heart of Salvador — the colorful streets of Pelourinho, iconic baroque churches and colonial landmarks, a ride on the Elevador Lacerda for panoramic bay views, and the local crafts of Mercado Modelo."},
      {kind:"Evening", title:"Sunset at Farol da Barra", desc:"Experience one of Brazil's most iconic sunsets at Farol da Barra, where locals gather to watch the sun melt into the Atlantic."},
    ]},
  { route:"Salvador · Santo Antônio Além do Carmo", city:"Salvador Beyond the Postcards", img:"/bahia-day-2-pelourinho.jpg", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"The creative side of the city", desc:"A slow morning, then explore Santo Antônio Além do Carmo — local galleries, ateliers and artisan workshops — with lunch overlooking the Baía de Todos-os-Santos."},
      {kind:"Evening", title:"An afternoon & evening free", desc:"The afternoon is yours to discover Salvador's creative side, with the evening free for culinary and cultural experiences."},
    ]},
  { route:"Salvador · Ilha dos Frades", city:"A Private Day on the Bay", img:"/bahia-ilha-dos-frades-beach.jpeg", imgPosition:"center 55%", meals:"Breakfast",
    blocks:[
      {kind:"Day trip", title:"Sailing the Bay of All Saints", desc:"A private boat excursion across the Baía de Todos-os-Santos to the pristine shores of Ilha dos Frades — swimming in crystal-clear waters and relaxing at Ponta de Nossa Senhora beach."},
      {kind:"Food", title:"Seafood by the sea", desc:"A fresh seafood lunch by the water before a leisurely cruise back to Salvador in the afternoon."},
    ]},
  { route:"Salvador → Boipeba", city:"Island Time Begins", img:"/boipeba-aerial.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"Journey to Boipeba", desc:"Travel south to the car-free island of Boipeba and check in, with time to unwind and a first walk through the village's sandy streets."},
      {kind:"Evening", title:"Into island life", desc:"A sunset by the ocean and a quiet evening immersed in the unhurried rhythm of the island."},
    ]},
  { route:"Boipeba · Moreré", city:"The Waters of Moreré", img:"/morere.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Day trip", title:"The natural pools of Moreré", desc:"A boat excursion to Moreré to swim in the natural pools formed by the reefs and discover one of Bahia's most untouched coastlines."},
      {kind:"Food", title:"Lunch on the sand", desc:"A fresh seafood lunch by the beach, with the afternoon at leisure."},
    ]},
  { route:"Boipeba · Cueira", city:"Coconut Groves & Empty Shores", img:"/tassimirim1.jpg", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Cueira Beach", desc:"Explore Cueira Beach and walk beneath endless coconut groves — time to swim, relax and disconnect on the quiet sand."},
      {kind:"Evening", title:"A slow afternoon by the sea", desc:"An unhurried afternoon by the ocean, with the evening at leisure."},
    ]},
  { route:"Boipeba · island circuit", city:"Hidden Corners of Boipeba", img:"/tassimirim.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Around the island by boat", desc:"A boat tour around the island, navigating through mangroves and estuaries to remote beaches and sandbanks."},
      {kind:"Culture", title:"Traditional fishing communities", desc:"Visit the island's traditional fishing communities and experience the untouched side of Bahia."},
    ]},
  { route:"Boipeba → Trancoso", city:"Trancoso, Uncovered", img:"/bahia-day-5-trancoso.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"South to the Discovery Coast", desc:"Travel down the coast to the charming village of Trancoso, with the afternoon free at Praia dos Nativos."},
      {kind:"Evening", title:"Dinner in the Quadrado", desc:"As the lanterns come on, dinner in the famous Quadrado — the loveliest open-air living room in Brazil."},
    ]},
  { route:"Trancoso · Praia dos Nativos", city:"Barefoot Luxury", img:"/bahia-day-6-trancoso.jpg", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Beach & the Quadrado", desc:"An afternoon at Praia dos Nativos and time to explore the iconic Quadrado and its colorful façades, with a sunset overlooking the coastline."},
      {kind:"Evening", title:"Dinner beneath lantern-lit trees", desc:"Dinner in the Quadrado beneath the glow of the lantern-lit trees."},
    ]},
  { route:"Trancoso · Praia do Espelho", city:"The Colors of Espelho", img:"/bahia-praia-do-espelho.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Day trip", title:"Praia do Espelho", desc:"A journey to the legendary Praia do Espelho — swimming in calm turquoise waters, walking along dramatic cliffs and coconut groves, and relaxing on one of Brazil's most beautiful beaches."},
      {kind:"Food", title:"Lunch over the ocean", desc:"A seaside lunch overlooking the water before returning to Trancoso."},
    ]},
  { route:"Trancoso · Rio da Barra", city:"Where River Meets Sea", img:"/bahia-caraiva-aerial.jpeg", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Discovering Rio da Barra", desc:"Time to relax at Rio da Barra, between the freshwater lagoons and the ocean, with lunch by the beach."},
      {kind:"At leisure", title:"Trancoso at your own pace", desc:"A free afternoon to enjoy Trancoso your way, and a final sunset in the Quadrado."},
    ]},
  { route:"Trancoso → Caraíva", city:"The Rhythm of Caraíva", img:"/bahia-caraiva.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Arrival", title:"A car-free village", desc:"Arrival in the charming village of Caraíva — a walk through its car-free sandy streets to discover the unique blend of river, ocean and local culture."},
      {kind:"Evening", title:"Where the river meets the sea", desc:"Sunset at the meeting point of the river and the sea, followed by a candlelit dinner under the stars."},
    ]},
  { route:"Caraíva · Corumbau", city:"The Hidden Coast", img:"/bahia-corumbau-aerial.jpeg", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"The remote shores of Corumbau", desc:"A boat excursion to the remote shores of Corumbau, navigating one of Brazil's most untouched coastlines and walking across vast sandbanks revealed by the tides, with a swim in warm, crystal-clear waters."},
      {kind:"Culture", title:"The Pataxó communities", desc:"Learn about the traditions of the local Pataxó communities before a sunset return to Caraíva."},
    ]},
  { route:"Caraíva → Porto Seguro Airport (BPS) · Departure", city:"One Last Swim", img:"/bahia-caraiva.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Departure", title:"A slow farewell", desc:"A slow morning by the beach with time for a final swim or riverside walk, and a leisurely breakfast surrounded by nature."},
      {kind:"Transfer", title:"Onward journey", desc:"A farewell to Bahia's southern coast and a private transfer to Porto Seguro Airport for your onward flight."},
    ]},
];
// ---- Amazon Off Script — 12-day itinerary ----

export const AMAZON_ITIN = [
{ route:"Manaus Int'l Airport (MAO) → Historic Center", city:"Arrival in the Heart of the Forest", img:"/amazon.jpg", meals:"",
blocks:[
{kind:"Arrival", title:"Arrival in Manaus", desc:"After check-in, the afternoon is dedicated to understanding the city that became one of the wealthiest places in the world during the Rubber Boom."},
{kind:"Excursion", title:"The Belle Époque of the Amazon", desc:"Explore Teatro Amazonas, Largo de São Sebastião, historic mansions from the rubber era, and enjoy a sunset walk along the Rio Negro waterfront."},
{kind:"Dinner", title:"Amazonian flavors", desc:"Dinner at a contemporary Amazonian restaurant featuring ingredients such as tucupi, jambu, pirarucu, and regional fruits."},
]},

{ route:"Manaus · Meeting of the Waters", city:"Where Rivers Become the Amazon", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Excursion", title:"Markets, fruits & forest canopy", desc:"Visit Mercado Adolpho Lisboa, taste local fruits such as cupuaçu, bacuri, taperebá and graviola, then explore MUSA and its observation towers above the rainforest canopy."},
{kind:"Boat excursion", title:"The Meeting of the Waters", desc:"A private boat excursion explores the waterways surrounding Manaus, including the famous Meeting of the Waters, where the Rio Negro and Solimões run side by side."},
{kind:"Evening", title:"Sunset on the Rio Negro", desc:"End the day with a sunset cruise along the Rio Negro — a perfect introduction to the scale and beauty of the Amazon."},
]},

{ route:"Manaus → Novo Airão", city:"Into the World's Largest River Archipelago", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Transfer", title:"Journey to Novo Airão", desc:"Transfer to Novo Airão, gateway to Anavilhanas. The journey itself becomes part of the experience as the city slowly disappears and the forest takes over."},
{kind:"Excursion", title:"First encounters with the river", desc:"Navigate narrow igarapés, observe flooded forests, look for river dolphins, and stop at seasonal river beaches."},
{kind:"Evening", title:"Canoe at sunset", desc:"At sunset, a canoe excursion reveals the silence and scale of the Rio Negro."},
]},

{ route:"Novo Airão · Anavilhanas", city:"Lost Among the Islands", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Excursion", title:"The maze of Anavilhanas", desc:"Explore the maze of islands that makes Anavilhanas one of the most unique landscapes in South America."},
{kind:"Boat day", title:"Hidden channels & river beaches", desc:"Travel by motorized canoe through hidden channels inaccessible to larger boats, stop on remote white-sand beaches, and swim in the warm dark waters of the Rio Negro."},
{kind:"Lunch", title:"Lunch on a secluded riverbank", desc:"Lunch is served on a secluded riverbank while guides share stories about the seasonal cycles that transform the landscape every year."},
]},

{ route:"Novo Airão · riverside communities", city:"Life Between Water and Forest", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Culture", title:"Riverside community visit", desc:"A day focused on understanding Amazonian culture and daily life through visits to a traditional riverside community, family-run cassava flour production, community gardens, local schools and gathering spaces."},
{kind:"Food", title:"Regional lunch", desc:"Lunch is prepared using regional ingredients and traditional recipes."},
{kind:"Excursion", title:"Forest trails with local guides", desc:"Spend the afternoon exploring nearby forest trails while learning how local families adapt to dramatic water level changes throughout the year."},
]},

{ route:"Novo Airão · rainforest", city:"When the Forest Wakes Up", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Excursion", title:"Guided jungle walk", desc:"Explore the rainforest with local guides, learning about medicinal plants, survival techniques, wildlife tracking, and forest ecology."},
{kind:"Culture", title:"Reading the forest", desc:"Guests learn how Indigenous and riverside communities interpret and navigate the rainforest."},
{kind:"Night safari", title:"The forest after dark", desc:"After dinner, head out by canoe in search of caimans, nocturnal birds, tree frogs, and the extraordinary sounds of the forest after dark."},
]},

{ route:"Novo Airão → Rio Negro Expedition", city:"Into the Deep Amazon", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Transfer", title:"Beyond the traditional routes", desc:"Travel deeper into the Rio Negro basin, a region that receives very few visitors and offers a stronger sense of remoteness."},
{kind:"Navigation", title:"Remote river landscapes", desc:"Spend the day on long scenic navigation, exploring untouched channels, observing wildlife, stopping at isolated beaches, and watching for birds along the way."},
{kind:"Arrival", title:"Remote riverside lodge or expedition camp", desc:"By afternoon, arrive at a remote riverside lodge or expedition camp for sunset over the Rio Negro."},
]},

{ route:"Rio Negro Expedition", city:"Sunset on a Hidden Sandbank", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Excursion", title:"Remote waterways", desc:"Today unfolds at the pace of the river, with navigation through hidden channels, canoeing along flooded forests, wildlife observation, birdwatching opportunities, and stops on seasonal white-sand beaches."},
{kind:"Nature", title:"The rhythm of the Rio Negro", desc:"Along the way, guides share stories about the unique ecology of the Rio Negro and the seasonal rhythms that shape life in the Amazon."},
{kind:"Evening", title:"Private sunset on a sandbank", desc:"As the afternoon unfolds, navigate to a secluded sandbank accessible only by boat for swimming, Amazonian-inspired drinks, local snacks, panoramic river views, and sunset over one of the largest river systems on Earth."},
]},

{ route:"Rio Negro Expedition", city:"Life Along the River", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Culture", title:"People, traditions & flavors", desc:"Today focuses on the people, traditions, and flavors that define life in the Amazon."},
{kind:"Visit", title:"A riverside community", desc:"Visits may include a traditional riverside community, family gardens, native fruit tasting, traditional fishing practices, and conversations with local residents."},
{kind:"Food", title:"Farewell dinner in the Amazon", desc:"Lunch is prepared using regional ingredients and traditional Amazonian recipes. As the day ends, a special farewell dinner celebrates the flavors, culture, and enduring spirit of the Amazon."},
]},

{ route:"Rio Negro → Presidente Figueiredo", city:"The Amazon of Waterfalls", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Transfer", title:"To Presidente Figueiredo", desc:"Transfer to Presidente Figueiredo, a region that reveals a completely different side of the Amazon."},
{kind:"Excursion", title:"Waterfalls & natural pools", desc:"Highlights may include Cachoeira da Iracema, Cachoeira das Araras, natural swimming pools, and sandstone formations."},
{kind:"At leisure", title:"Swim, photograph, relax", desc:"Afternoon at leisure for swimming, photography, and relaxation."},
]},

{ route:"Presidente Figueiredo", city:"Caves, Canyons & Hidden Trails", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Excursion", title:"A different Amazon landscape", desc:"Explore Gruta do Refúgio do Maroaga, ancient sandstone formations, rainforest trails, hidden waterfalls, and natural viewpoints."},
{kind:"Nature", title:"Beyond the river", desc:"This landscape feels surprisingly different from the river-focused experiences of the previous days."},
{kind:"Discovery", title:"For curious travelers", desc:"A perfect day for travelers seeking variety and a true sense of discovery."},
]},

{ route:"Presidente Figueiredo → Manaus Int'l Airport (MAO)", city:"Farewell to the Forest", img:"/amazon.jpg", meals:"Breakfast",
blocks:[
{kind:"Transfer", title:"Return to Manaus", desc:"Return to Manaus for your onward flight."},
{kind:"Optional", title:"One last taste of the Amazon", desc:"Depending on flight schedules, enjoy a final visit to local markets, regional coffee tasting, or shopping for artisan crafts."},
{kind:"Departure", title:"The journey ends", desc:"Transfer to the airport. The journey ends, but the Amazon remains long after the trip is over."},
]},
];


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

// ── Discovery Quiz ────────────────────────────────────────────────
// "Which Brazil is calling you?" personality quiz.
// Each answer scores points toward a destination; highest total wins.

export const DISCO_DESTINATIONS = {
  rio: {
    key: "rio",
    name: "Rio & the Green Coast",
    emoji: "🎶",
    tagline: "Where the city sings and the coast unwinds.",
    desc: "You're drawn to energy with a soul. Rio gives you samba-soaked nights, postcard mountains, and a dreamy colonial coast just down the road — culture and beach in one breath.",
    traits: ["City energy", "Iconic views", "Beach & culture"],
    img: IMG.rioSugar,
    regionWords: "rio paraty ilha grande costa verde",
  },
  bahia: {
    key: "bahia",
    name: "Bahia & the Northeast",
    emoji: "🥥",
    tagline: "Warm water, warmer people, endless rhythm.",
    desc: "You travel for the feeling. Bahia is barefoot days, Afro-Brazilian history, drumbeats at dusk and a coastline of hidden beaches — the free-spirit's Brazil.",
    traits: ["Good vibes", "Culture & music", "Hidden beaches"],
    img: "/bahia.jpg",
    regionWords: "bahia salvador trancoso chapada northeast",
  },
  pantanal: {
    key: "pantanal",
    name: "The Pantanal",
    emoji: "🐆",
    tagline: "The greatest wildlife show on Earth.",
    desc: "You want the wild, up close. The Pantanal delivers jaguars, caimans and a sky full of birds across the world's largest wetland — raw nature with a front-row seat.",
    traits: ["Wildlife", "Big skies", "Adventure"],
    img: "/pantanal.jpg",
    regionWords: "pantanal wildlife jaguar",
  },
  foz: {
    key: "foz",
    name: "Foz do Iguaçu",
    emoji: "💦",
    tagline: "Stand in the mist of something colossal.",
    desc: "You chase the jaw-drop moment. Iguaçu's 275 falls thunder through the jungle — pure spectacle, rainbows and spray, nature at full volume.",
    traits: ["Natural wonder", "Wow factor", "Easy adventure"],
    img: "/iguazu.jpg",
    regionWords: "iguaçu iguacu foz falls waterfall",
  },
  central: {
    key: "central",
    name: "Chapada Diamantina",
    emoji: "🥾",
    tagline: "Canyons, waterfalls, and trails that earn the view.",
    desc: "You want to move through your trip. Central Brazil's chapadas are tabletop mountains, hidden falls and turquoise swimming holes — the active explorer's playground.",
    traits: ["Hiking", "Waterfalls", "Off the radar"],
    img: "/central-brazil.jpg",
    regionWords: "chapada diamantina central hiking trails",
  },
  amazon: {
    key: "amazon",
    name: "The Amazon",
    emoji: "🦜",
    tagline: "Wake up inside the world's wildest place.",
    desc: "You crave deep immersion. The Amazon is riverboat days, jungle nights, pink dolphins and time with communities along the Rio Negro — slow, soulful, alive.",
    traits: ["Rainforest", "Wildlife", "Immersive"],
    img: "/amazon.jpg",
    regionWords: "amazon manaus rio negro jungle rainforest",
  },
  noronha: {
    key: "noronha",
    name: "Fernando de Noronha",
    emoji: "🏝️",
    tagline: "Brazil's most beautiful islands, all to yourself.",
    desc: "You're here for paradise. Noronha is crystal lagoons, sea turtles, dolphins at dawn and the kind of beaches that don't feel real — barefoot luxury at the edge of the map.",
    traits: ["Islands", "Snorkeling", "Slow paradise"],
    img: "/noronha.jpg",
    regionWords: "noronha island beach snorkel",
  },
};

export const DISCO_QUESTIONS = [
  {
    id: "imagine",
    emoji: "🌍",
    image: "/quiz-region-left.jpg",
    title: "When you imagine your perfect vacation, what's the first thing that comes to mind?",
    options: [
      { emoji: "🏖️", label: "Sun, sand and turquoise water",        score: { noronha: 3, bahia: 2 } },
      { emoji: "🎶", label: "A city alive with music and energy",   score: { rio: 3, bahia: 1 } },
      { emoji: "🐾", label: "Untouched wilderness and wild animals", score: { pantanal: 3, amazon: 2 } },
      { emoji: "😍", label: "Standing before something jaw-dropping", score: { foz: 3, central: 2 } },
    ],
  },
  {
    id: "time",
    emoji: "⏳",
    image: "/quiz-style.jpg",
    title: "How do you like to spend most of your time on a trip?",
    options: [
      { emoji: "🍹", label: "Lounging by the water, no agenda",       score: { noronha: 3, bahia: 2 } },
      { emoji: "🛍️", label: "Exploring streets, markets and nightlife", score: { rio: 3, bahia: 1 } },
      { emoji: "🧗", label: "Hiking, paddling, getting a little muddy", score: { central: 3, foz: 1 } },
      { emoji: "🔭", label: "Spotting wildlife in quiet, wild places", score: { amazon: 3, pantanal: 2 } },
    ],
  },
  {
    id: "climate",
    emoji: "🌤️",
    image: "/iguazu.jpg",
    title: "What's your ideal travel climate?",
    options: [
      { emoji: "🌴", label: "Hot and tropical",                     score: { noronha: 2, bahia: 2, amazon: 1 } },
      { emoji: "🌊", label: "Warm with a sea breeze",               score: { rio: 3, foz: 1 } },
      { emoji: "⛰️", label: "Cooler highlands and canyons",          score: { central: 3 } },
      { emoji: "🌿", label: "Humid jungle, the wilder the better",  score: { amazon: 3, pantanal: 2 } },
    ],
  },
  {
    id: "wildlife",
    emoji: "🐆",
    image: "/jaguar.jpg",
    title: "How do you feel about wildlife encounters?",
    options: [
      { emoji: "🐆", label: "Bring on the jaguars and caimans!",       score: { pantanal: 4 } },
      { emoji: "🐬", label: "Monkeys, dolphins and birds, yes please", score: { amazon: 3, noronha: 1 } },
      { emoji: "🐢", label: "A few sea turtles while I snorkel",       score: { noronha: 3 } },
      { emoji: "🌅", label: "I'd rather watch the sunset than a snake", score: { rio: 2, bahia: 2 } },
    ],
  },
  {
    id: "traveler",
    emoji: "🧭",
    image: "/quiz-travelers.jpg",
    title: "Which traveler are you, really?",
    options: [
      { emoji: "✌️", label: "The free spirit chasing good vibes",  score: { bahia: 3, noronha: 1 } },
      { emoji: "🏛️", label: "The culture seeker",                   score: { rio: 3 } },
      { emoji: "🔥", label: "The explorer / adrenaline lover",      score: { central: 2, foz: 2 } },
      { emoji: "🍃", label: "The nature lover / quiet observer",    score: { amazon: 2, pantanal: 2 } },
    ],
  },
  {
    id: "comfort",
    emoji: "🪂",
    image: "/quiz-pace.jpg",
    title: "What's your adventure comfort level?",
    options: [
      { emoji: "🚀", label: "Go big — cliffs, rapids, the works",     score: { central: 3, foz: 2 } },
      { emoji: "⚖️", label: "Active but balanced",                    score: { rio: 2, bahia: 2 } },
      { emoji: "🧘", label: "Gentle adventures only",                  score: { noronha: 3 } },
      { emoji: "🛻", label: "Wildlife from a safe, comfy distance",   score: { pantanal: 2, amazon: 2 } },
    ],
  },
  {
    id: "stay",
    emoji: "🏨",
    image: "/quiz-comfort.jpg",
    title: "What kind of stay feels most like you?",
    options: [
      { emoji: "🛖", label: "Barefoot beach bungalow",                 score: { noronha: 2, bahia: 2 } },
      { emoji: "🏙️", label: "Design hotel in the heart of the action", score: { rio: 3 } },
      { emoji: "🌳", label: "Eco-lodge deep in nature",                 score: { amazon: 3, pantanal: 2 } },
      { emoji: "🏡", label: "Cozy pousada near the trails",             score: { central: 3 } },
    ],
  },
  {
    id: "flight",
    emoji: "✈️",
    image: "/quiz-contact.jpg",
    title: "You're booking your flight to Brazil right now. What excites you most?",
    options: [
      { emoji: "🏖️", label: "Toes in the sand by sunset",              score: { noronha: 2, bahia: 2 } },
      { emoji: "💃", label: "Dancing to live samba tonight",           score: { rio: 3, bahia: 1 } },
      { emoji: "🦜", label: "Waking up to bird calls in the jungle",  score: { amazon: 3 } },
      { emoji: "💦", label: "The mist of a giant waterfall on my face", score: { foz: 4 } },
    ],
  },
];
