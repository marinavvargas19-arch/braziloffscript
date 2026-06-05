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
  { slug:"rio",           name:"Rio Off Script",              region:"Rio de Janeiro",          category:"beyond-the-obvious", img:IMG.rioSugar,            blurb:"Iconic energy, coastal escapes, boat days, hidden beaches, and local experiences beyond the city." },
  { slug:"bahia",         name:"Bahia Off Script",            region:"Bahia & the Northeast",   category:"beyond-the-obvious", img:"/bahia-farol.jpg",       blurb:"Afro-Brazilian culture, barefoot luxury, music, gastronomy, and slow coastal living — choose a 10- or 15-day pace." },
  { slug:"amazon",        name:"Amazon Off Script",           region:"Amazônia",                category:"beyond-the-obvious", img:"/amazon.jpg",            blurb:"Luxury jungle lodges, river experiences, indigenous culture, and immersive nature." },
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
    intro:"Rio is loud, warm and impossibly scenic — but the version most travelers see barely scratches the surface. Six days in the city pair its world-famous icons with living neighborhoods, hidden viewpoints and an urban rainforest few visitors reach. Then the pace shifts entirely: Búzios, the sun-drenched peninsula that Brigitte Bardot put on the map, where cobblestone lanes, crystal-clear coves and boat days make the second half of the journey feel like a different country." },
  bahia:          { days:10, price:4200, regions:["Salvador","Trancoso","Caraíva"],
    intro:"Designed for travelers who want to experience Bahia's many sides without rushing — balancing culture, paradise beaches, gastronomy and authenticity. Four unhurried nights in Salvador, the soul of Afro-Brazilian culture, then south down the Discovery Coast to the design-hamlet of Trancoso and the car-free river village of Caraíva." },
  "bahia-extended":{ days:15, price:6200, regions:["Salvador","Boipeba","Trancoso","Caraíva"],
    heroImg:"/bahia-corumbau.jpg",
    intro:"For travelers who want to know Bahia in depth — without rushing and without too much moving around. Four unhurried nights each in Salvador and on the car-free island of Boipeba, then four more in Trancoso and three in the river village of Caraíva. This is the more exploratory side of the coast: near-empty beaches, local communities, preserved nature, and a real sense of discovery." },
  amazon:         { days:6,  price:3800, regions:["Manaus","Anavilhanas","Rio Negro"],
    intro:"Trade the city for the world's greatest rainforest. From Manaus you slip up the Rio Negro into the Anavilhanas archipelago, staying in sustainable jungle lodges, canoeing flooded forest at dawn, and spending time with the communities who know these waters best." },
  foz:            { days:4,  price:2200, regions:["Foz do Iguaçu","Puerto Iguazú"],
    intro:"One of the planet's most cinematic sights, seen properly — both the panoramic Brazilian side and the up-close Argentine catwalks over the Devil's Throat — with time for the wild rainforest, birdlife and the giant Itaipu dam around it." },
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
  { slug:"foz-iguacu-extended-5-days",title:"Foz do Iguaçu Extended",       days:5,  price:2200, category:"the-explorer",       regions:["Foz do Iguaçu","Puerto Iguazú"],                    img:"/iguazu-falls.jpg",     tags:["Nature","Family-friendly"],         blurb:"Both sides of the falls, a private helicopter loop, and the wild rainforest around it." },
  { slug:"noronha-escape-5-days",     title:"Fernando de Noronha Escape",    days:5,  price:4900, category:"paradise-found",     regions:["Fernando de Noronha"],                              img:"/noronha-beach.jpg",    tags:["Beach","Diving","Honeymoon"],       blurb:"The archipelago at its quietest: dive sites, beach trails, and serious downtime." },
  { slug:"lencois-and-northeast-9-days", title:"Lençóis & the Northeast",   days:9,  price:4400, category:"paradise-found",     regions:["São Luís","Lençóis Maranhenses","Jericoacoara"],    img:"/northeast-buggy.jpg",  tags:["Beach","Adventure","Nature"],       blurb:"Dunes, lagoons, fishing villages, and Jeri's barefoot dunes at sunset." },
  { slug:"southern-brazil-route-8-days", title:"Southern Brazil Wine Route", days:8,  price:3700, category:"beyond-the-obvious", regions:["Porto Alegre","Vale dos Vinhedos","Gramado"],       img:"/resort-pool.jpg",      tags:["Food & wine","Mountains"],          blurb:"Brazilian sparkling wine country, european-style mountain towns, and surprising gastronomy." },
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

// ---- Rio Off Script — 12-day itinerary ----
export const RIO_ITIN = [
  { route:"Rio de Janeiro Int'l Airport (GIG/GRU) → Ipanema", city:"First Glimpse of Rio", img:"/rio-sunset.jpg", meals:"",
    blocks:[
      {kind:"Arrival", title:"Arrival & private transfer", desc:"A private driver meets you at the airport and brings you to your boutique hotel in Ipanema or Leblon. Time to settle in and take your first steps in Rio."},
      {kind:"Evening", title:"Arpoador & welcome dinner", desc:"A walk along the beachfront to Arpoador for one of Rio's most celebrated sunsets, followed by a welcome dinner at a neighborhood restaurant beloved by locals."},
    ]},
  { route:"Rio de Janeiro · Corcovado, Santa Teresa & Sugarloaf", city:"Rio's Greatest Icons", img:IMG.rioChrist, meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Christ the Redeemer & Corcovado", desc:"An early timed-entry visit to Christ the Redeemer — before the tour buses arrive — with a local guide who puts the panorama into historical context."},
      {kind:"Excursion", title:"Santa Teresa & Selarón Steps", desc:"Wander the bohemian hilltop neighborhood of Santa Teresa, its tram lines, art studios and colonial houses, then descend through the famous Selarón Steps."},
      {kind:"Excursion", title:"Historic Center & Sugarloaf Mountain", desc:"A walk through Rio's colonial center — Largo da Carioca, the Royal Portuguese Reading Room — before a sunset cable car to Sugarloaf with a glass of something cold."},
    ]},
  { route:"Rio de Janeiro · Botanical Garden, Lage & hidden viewpoints", city:"Beyond the Postcards", img:"/parque-lage-arch.jpg", imgPosition:"center 65%", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Botanical Garden & Parque Lage", desc:"A morning among over 6,500 plant species in one of the world's most beautiful botanical gardens, followed by coffee in the café at the neo-gothic mansion of Parque Lage."},
      {kind:"Excursion", title:"Vista Chinesa & Mirante Dona Marta", desc:"Two of Rio's most rewarding hidden viewpoints, reached through the Tijuca forest. The Chinese Pavilion offers a framed view of the whole city; Dona Marta shows you the favela-to-skyline panorama."},
      {kind:"At leisure", title:"São Conrado & late afternoon", desc:"A coastal drive through São Conrado and an afternoon at leisure to explore the neighbourhood at your own pace."},
    ]},
  { route:"Rio de Janeiro · Tijuca National Park", city:"The Urban Rainforest", img:"/rio-tijuca.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Tijuca National Park — trails & waterfalls", desc:"Deep inside the world's largest urban rainforest: Atlantic Rainforest trails with a naturalist guide, waterfall swims and the chance to spot toucans, monkeys and rare orchids — all within city limits."},
      {kind:"Lunch", title:"Picnic in the forest", desc:"A locally sourced picnic lunch prepared by your guide, eaten beside a waterfall in the forest."},
    ]},
  { route:"Rio de Janeiro · Carioca life", city:"Living Like a Carioca", img:IMG.rioSugar, meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Specialty coffee & local markets", desc:"A slow morning at the Cobal market in Leblon, a stop at Rio's best specialty coffee roaster, and free time to walk the beach neighborhoods like a local."},
      {kind:"Gastronomy", title:"Gastronomy experience", desc:"A hands-on cooking session or a guided tasting through Rio's contemporary food scene — from street food to the restaurant kitchens changing the city's culinary identity."},
      {kind:"Evening", title:"Live music & samba experience", desc:"An evening at a traditional samba venue — not a tourist show, but the real thing — with your guide to introduce you to the musicians and the rhythm."},
    ]},
  { route:"Rio de Janeiro · your choice", city:"Rio, Your Way", img:IMG.rioSugar, meals:"Breakfast",
    blocks:[
      {kind:"Flexible", title:"A day shaped around you", desc:"Choose your adventure: a sailing trip across Guanabara Bay with a stop at Ilha Fiscal; a ferry to Niterói to visit Oscar Niemeyer's MAC museum; an extra beach day in Barra or Prainha; or a morning in Rio's vibrant gallery and art district."},
    ]},
  { route:"Rio de Janeiro → Búzios", city:"From City to Sea", img:IMG.beach, meals:"Breakfast",
    blocks:[
      {kind:"Transfer", title:"Scenic coastal drive to Búzios", desc:"A private scenic drive along the coast road (around 2.5 hours) to the charming peninsula of Búzios — once a quiet fishing village, discovered by Brigitte Bardot in 1964 and still carrying that unhurried magic."},
      {kind:"Arrival", title:"Check-in & Praia da Ferradura", desc:"Check in to a boutique property on the peninsula, then a short walk to Praia da Ferradura — horseshoe-shaped, calm and clear."},
      {kind:"Evening", title:"Orla Bardot & Rua das Pedras", desc:"Sunset drinks along the Orla Bardot coastal path, then dinner on Rua das Pedras — the main cobblestone street lined with restaurants and bars."},
    ]},
  { route:"Búzios · peninsula beaches", city:"The Búzios Peninsula", img:IMG.beach, meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Beach-hopping by buggy or boat", desc:"Explore the peninsula's collection of distinct beaches: the sheltered coves of João Fernandes and João Fernandinho, the wilder surf of Brava, and the intimate Azeda and Azedinha — each with its own personality and crowd."},
      {kind:"Lunch", title:"Beachfront lunch", desc:"A fresh seafood lunch at one of the simple but excellent beachside restaurants that make Búzios so hard to leave."},
    ]},
  { route:"Búzios · Arraial do Cabo", city:"The Brazilian Caribbean", img:IMG.beach, meals:"Breakfast",
    blocks:[
      {kind:"Day trip", title:"Arraial do Cabo by boat", desc:"A boat excursion to Arraial do Cabo — one of Brazil's most pristine coastal destinations, with water so clear it seems unreal. Snorkeling at the Gruta Azul sea cave, swimming at Ilha do Farol, and a walk to the Pontal do Atalaia viewpoint."},
      {kind:"Lunch", title:"Lunch aboard or dockside", desc:"A fresh seafood lunch on the boat or at a harbourside restaurant before returning to Búzios in the late afternoon."},
    ]},
  { route:"Búzios · salt, sun and sea breeze", city:"Slow Travel at Its Best", img:IMG.beach, meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Your pace, your choice", desc:"A day for slowing down completely. Options include a private boat charter for the afternoon, time at one of the beach clubs, kayaking or stand-up paddle in the calm coves, or nothing more than a long seaside lunch and a book."},
    ]},
  { route:"Búzios · a day with no plans", city:"A Day With No Plans", img:IMG.beach, meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Embrace the Búzios rhythm", desc:"One final unhurried day to do whatever the moment calls for — a spa treatment at the hotel, boutique shopping along the Orla, beach-hopping at your own pace, or sunset cocktails by the sea. Your guide is available but won't push an agenda."},
    ]},
  { route:"Búzios → Rio de Janeiro Int'l Airport · Departure", city:"Until Next Time", img:IMG.beach, meals:"Breakfast",
    blocks:[
      {kind:"Departure", title:"A final morning by the ocean", desc:"A slow breakfast at the hotel, time for a last walk along the beach or the Orla, and a private transfer back to Rio de Janeiro airport for your departure."},
    ]},
];

// ---- Bahia Off Script — 10-day itinerary ----
export const BAHIA_ITIN = [
  { route:"Salvador Int'l Airport (SSA) → Rio Vermelho", city:"Welcome to Bahia", img:"/bahia-farol.jpg", meals:"",
    blocks:[
      {kind:"Arrival", title:"Arrival in Salvador", desc:"A private transfer meets you at the airport and brings you to your hotel, with time to settle in and embrace Bahia's relaxed rhythm."},
      {kind:"Evening", title:"Sunset in Rio Vermelho", desc:"A sunset stroll through the vibrant streets of the Rio Vermelho neighborhood, followed by a welcome dinner featuring contemporary Bahian flavors."},
    ]},
  { route:"Salvador · Pelourinho & Barra", city:"The Soul of Salvador", img:"/bahia-salvador.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Salvador's Historic Center", desc:"A private guided exploration of the historic heart of Salvador — wander the colorful streets of Pelourinho, visit iconic baroque churches and colonial landmarks, ride the Elevador Lacerda for panoramic bay views, and browse local crafts at Mercado Modelo."},
      {kind:"Evening", title:"Sunset at Farol da Barra", desc:"Experience one of Brazil's most iconic sunsets at Farol da Barra, where locals gather to watch the sun melt into the Atlantic."},
    ]},
  { route:"Salvador · Santo Antônio Além do Carmo", city:"Salvador at Your Own Pace", img:"/bahia-salvador.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"At leisure", title:"A slow morning, your way", desc:"Explore the charming streets of Santo Antônio Além do Carmo, discovering local galleries, artisan shops and hidden cafés, with lunch over views of the Bay of All Saints."},
      {kind:"At leisure", title:"Afternoon & evening free", desc:"The afternoon is at leisure for cultural or culinary experiences, with the evening free to enjoy Salvador's vibrant atmosphere."},
    ]},
  { route:"Salvador · Ilha dos Frades", city:"A Private Day on the Bay", img:"/bahia-ilha-frades.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Day trip", title:"Sailing the Bay of All Saints", desc:"A private boat excursion across the Baía de Todos-os-Santos to the pristine shores of Ilha dos Frades — swimming in crystal-clear waters and relaxing at Ponta de Nossa Senhora beach."},
      {kind:"Food", title:"Seafood by the sea", desc:"A fresh seafood lunch by the water before a leisurely cruise back to Salvador in the afternoon."},
    ]},
  { route:"Salvador → Trancoso", city:"Trancoso, Uncovered", img:"/bahia-trancoso.jpg", meals:"Breakfast · Dinner",
    blocks:[
      {kind:"Transfer", title:"South along the coast", desc:"A scenic journey along Bahia's southern coast to the charming village of Trancoso, with the afternoon free at Praia dos Nativos."},
      {kind:"Evening", title:"The Quadrado by lantern-light", desc:"Explore the iconic Quadrado and its colorful façades, watch the sunset over the coastline, and dine beneath the glow of lantern-lit trees."},
    ]},
  { route:"Trancoso · Praia dos Coqueiros & dos Nativos", city:"Barefoot Luxury", img:"/bahia-trancoso.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"At leisure", title:"Beach days", desc:"A relaxed morning by the sea and time between Praia dos Coqueiros and Praia dos Nativos, with a beachfront lunch of fresh local ingredients."},
      {kind:"At leisure", title:"Spa, beach clubs & dining", desc:"Afternoon at leisure for spa treatments, beach clubs or quiet relaxation, a sunset in the Quadrado, and an evening to enjoy Trancoso's renowned dining scene."},
    ]},
  { route:"Trancoso · Praia do Espelho", city:"The Colors of Espelho", img:"/bahia-trancoso.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Day trip", title:"Praia do Espelho", desc:"A journey to the legendary Praia do Espelho — swimming in calm turquoise waters, walking along dramatic cliffs and coconut groves, and relaxing on one of Brazil's most beautiful beaches."},
      {kind:"Food", title:"Lunch over the ocean", desc:"A seaside lunch overlooking the water before returning to Trancoso in the late afternoon."},
    ]},
  { route:"Trancoso → Caraíva", city:"The Rhythm of Caraíva", img:"/bahia-caraiva.jpg", meals:"Breakfast · Dinner",
    blocks:[
      {kind:"Arrival", title:"A car-free village", desc:"Arrival in the laid-back village of Caraíva — a walk through its car-free sandy streets to discover the unique blend of river, ocean and local culture."},
      {kind:"Evening", title:"Where the river meets the sea", desc:"Sunset at the meeting point of the Caraíva River and the Atlantic, followed by a candlelit dinner in one of the village's charming restaurants."},
    ]},
  { route:"Caraíva · Corumbau", city:"The Hidden Coast", img:"/bahia-corumbau.jpg", meals:"Breakfast · Lunch",
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
  { route:"Salvador Int'l Airport (SSA) → Rio Vermelho", city:"Welcome to Bahia", img:"/bahia-salvador.jpg", meals:"",
    blocks:[
      {kind:"Arrival", title:"Arrival in Salvador", desc:"A private transfer meets you at the airport and brings you to your hotel, with time to settle into Bahia's relaxed rhythm."},
      {kind:"Evening", title:"Sunset in Rio Vermelho", desc:"A sunset stroll through the streets of Rio Vermelho, followed by a welcome dinner featuring contemporary Bahian cuisine."},
    ]},
  { route:"Salvador · Pelourinho & Barra", city:"The Soul of Salvador", img:"/bahia-salvador.jpg", meals:"Breakfast",
    blocks:[
      {kind:"Excursion", title:"Salvador's Historic Center", desc:"A private guided exploration of the historic heart of Salvador — the colorful streets of Pelourinho, iconic baroque churches and colonial landmarks, a ride on the Elevador Lacerda for panoramic bay views, and the local crafts of Mercado Modelo."},
      {kind:"Evening", title:"Sunset at Farol da Barra", desc:"Experience one of Brazil's most iconic sunsets at Farol da Barra, where locals gather to watch the sun melt into the Atlantic."},
    ]},
  { route:"Salvador · Santo Antônio Além do Carmo", city:"Salvador Beyond the Postcards", img:"/bahia-salvador.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"At leisure", title:"The creative side of the city", desc:"A slow morning, then explore Santo Antônio Além do Carmo — local galleries, ateliers and artisan workshops — with lunch overlooking the Baía de Todos-os-Santos."},
      {kind:"Evening", title:"An afternoon & evening free", desc:"The afternoon is yours to discover Salvador's creative side, with the evening free for culinary and cultural experiences."},
    ]},
  { route:"Salvador · Ilha dos Frades", city:"A Private Day on the Bay", img:"/bahia-ilha-frades.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Day trip", title:"Sailing the Bay of All Saints", desc:"A private boat excursion across the Baía de Todos-os-Santos to the pristine shores of Ilha dos Frades — swimming in crystal-clear waters and relaxing at Ponta de Nossa Senhora beach."},
      {kind:"Food", title:"Seafood by the sea", desc:"A fresh seafood lunch by the water before a leisurely cruise back to Salvador in the afternoon."},
    ]},
  { route:"Salvador → Boipeba", city:"Island Time Begins", img:"/paradise-found.jpg", meals:"Breakfast · Dinner",
    blocks:[
      {kind:"Transfer", title:"Journey to Boipeba", desc:"Travel south to the car-free island of Boipeba and check in, with time to unwind and a first walk through the village's sandy streets."},
      {kind:"Evening", title:"Into island life", desc:"A sunset by the ocean and a quiet evening immersed in the unhurried rhythm of the island."},
    ]},
  { route:"Boipeba · Moreré", city:"The Waters of Moreré", img:"/start-beach.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Day trip", title:"The natural pools of Moreré", desc:"A boat excursion to Moreré to swim in the natural pools formed by the reefs and discover one of Bahia's most untouched coastlines."},
      {kind:"Food", title:"Lunch on the sand", desc:"A fresh seafood lunch by the beach, with the afternoon at leisure."},
    ]},
  { route:"Boipeba · Cueira", city:"Coconut Groves & Empty Shores", img:"/paradise-found.jpg", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Cueira Beach", desc:"Explore Cueira Beach and walk beneath endless coconut groves — time to swim, relax and disconnect on the quiet sand."},
      {kind:"Evening", title:"A slow afternoon by the sea", desc:"An unhurried afternoon by the ocean, with the evening at leisure."},
    ]},
  { route:"Boipeba · island circuit", city:"Hidden Corners of Boipeba", img:"/start-beach.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Excursion", title:"Around the island by boat", desc:"A boat tour around the island, navigating through mangroves and estuaries to remote beaches and sandbanks."},
      {kind:"Culture", title:"Traditional fishing communities", desc:"Visit the island's traditional fishing communities and experience the untouched side of Bahia."},
    ]},
  { route:"Boipeba → Trancoso", city:"Trancoso, Uncovered", img:"/bahia-trancoso.jpg", meals:"Breakfast · Dinner",
    blocks:[
      {kind:"Transfer", title:"South to the Discovery Coast", desc:"Travel down the coast to the charming village of Trancoso, with the afternoon free at Praia dos Nativos."},
      {kind:"Evening", title:"Dinner in the Quadrado", desc:"As the lanterns come on, dinner in the famous Quadrado — the loveliest open-air living room in Brazil."},
    ]},
  { route:"Trancoso · Praia dos Nativos", city:"Barefoot Luxury", img:"/bahia-trancoso.jpg", meals:"Breakfast",
    blocks:[
      {kind:"At leisure", title:"Beach & the Quadrado", desc:"An afternoon at Praia dos Nativos and time to explore the iconic Quadrado and its colorful façades, with a sunset overlooking the coastline."},
      {kind:"Evening", title:"Dinner beneath lantern-lit trees", desc:"Dinner in the Quadrado beneath the glow of the lantern-lit trees."},
    ]},
  { route:"Trancoso · Praia do Espelho", city:"The Colors of Espelho", img:"/bahia-trancoso.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Day trip", title:"Praia do Espelho", desc:"A journey to the legendary Praia do Espelho — swimming in calm turquoise waters, walking along dramatic cliffs and coconut groves, and relaxing on one of Brazil's most beautiful beaches."},
      {kind:"Food", title:"Lunch over the ocean", desc:"A seaside lunch overlooking the water before returning to Trancoso."},
    ]},
  { route:"Trancoso · Rio da Barra", city:"Where River Meets Sea", img:"/bahia-trancoso.jpg", meals:"Breakfast · Lunch",
    blocks:[
      {kind:"Excursion", title:"Discovering Rio da Barra", desc:"Time to relax at Rio da Barra, between the freshwater lagoons and the ocean, with lunch by the beach."},
      {kind:"At leisure", title:"Trancoso at your own pace", desc:"A free afternoon to enjoy Trancoso your way, and a final sunset in the Quadrado."},
    ]},
  { route:"Trancoso → Caraíva", city:"The Rhythm of Caraíva", img:"/bahia-caraiva.jpg", meals:"Breakfast · Dinner",
    blocks:[
      {kind:"Arrival", title:"A car-free village", desc:"Arrival in the charming village of Caraíva — a walk through its car-free sandy streets to discover the unique blend of river, ocean and local culture."},
      {kind:"Evening", title:"Where the river meets the sea", desc:"Sunset at the meeting point of the river and the sea, followed by a candlelit dinner under the stars."},
    ]},
  { route:"Caraíva · Corumbau", city:"The Hidden Coast", img:"/bahia-corumbau.jpg", meals:"Breakfast · Lunch",
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
