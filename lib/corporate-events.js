export const CORPORATE_PATH = '/corporate-events';
const origin = 'https://www.braziloffscript.com';
export function corporateMetadata(locale = 'en') {
  const es = locale === 'es';
  const title = es ? 'Eventos corporativos y offsites en Brasil | Brazil Off Script' : 'Corporate Events & Team Offsites in Brazil | Brazil Off Script';
  const description = es ? 'Organizamos tu offsite o evento corporativo en Brasil de principio a fin: vuelos, hoteles, transfers, espacios, experiencias y coordinación local. Nos ocupamos de todo.' : 'End-to-end planning for corporate events and team offsites in Brazil. We handle flights, hotels, transfers, venues, experiences and local coordination, so you can relax.';
  const url = origin + (es ? '/es' : '') + CORPORATE_PATH;
  return { title:{absolute:title}, description, alternates:{ canonical:url, languages:{ en:origin+CORPORATE_PATH, es:origin+'/es'+CORPORATE_PATH, 'x-default':origin+CORPORATE_PATH } }, openGraph:{ title,description,url,type:'website',siteName:'Brazil Off Script',locale:es?'es_ES':'en_US',images:[{url:origin+'/corporate/blindpay-boat-offsite-1600.webp',width:1600,height:900,alt:es?'Paseo en barco · Offsite de Blindpay':'Boat trip · Blindpay offsite'}] }, twitter:{card:'summary_large_image',title,description,images:[origin+'/corporate/blindpay-boat-offsite-1600.webp']} };
}
export const corporateCopy = {
  en: {
    eyebrow:'Brazil, for your people', title:'A different setting. A shared purpose.',
    heading:'Offsites & corporate events in Brazil',
    intro:'Bring your team together somewhere that invites a fresh perspective. We plan and coordinate your offsite or corporate event in Brazil from start to finish, taking care of every detail so you can focus on your people.',
    cta:'Plan your event', secondary:'Explore our support',
    strap:'Flights · Hotels · Transfers · Event spaces · Experiences · Local support',
    promiseEyebrow:'Your event, taken care of from start to finish', promiseTitle:'We handle the details. You enjoy the event.',
    promise:'From the first idea to the final transfer, we organise your entire event: flights, hotels, event spaces, transport, experiences and on-the-ground coordination. One local team brings everything together, so you can leave the logistics to us and be fully present for your event.',
    formatsTitle:'Different reasons to come together.',
    formats:[['Team offsites','Step outside the everyday setting for planning sessions, team conversations and time together.'],['Corporate gatherings','Bring colleagues, partners or clients together around a clear purpose, with a setting and practical arrangements shaped around your brief.'],['Shared experiences','Make room for the moments around the event, from cultural discoveries to time outdoors and meals that bring people together.']],
    servicesEyebrow:'What we can arrange', servicesTitle:'The details behind a well-planned event.',
    services:[['Flights','Flight bookings coordinated with your group’s travel dates and event schedule.'],['Hotels','Accommodation selected around your location, group size, schedule and priorities.'],['Transfers','Airport arrivals and local transfers coordinated with your event itinerary.'],['Event spaces','Spaces suited to your format, whether you need room to meet, work together or gather.'],['Experiences','Local experiences that complement your agenda and give your group a connection to Brazil.'],['Local support','Accompaniment and coordination to help the different parts of your programme come together.']],
    experienceEyebrow:'Beyond the meeting room', experienceTitle:'Let Brazil be part of the experience.',
    experienceBody:'Your destination can be more than a backdrop. Make time for local food, culture and landscapes, with experiences chosen around your group and the rhythm of your event.',
    caption:'Rio de Janeiro · A fresh perspective on Brazil',
    processEyebrow:'From the first conversation', processTitle:'Built around your brief.',
    steps:[['Tell us what matters','Share the purpose of your event, your preferred dates, group size and the support you need.'],['Shape the plan together','We work through the destination, accommodation, spaces, transport and experiences that fit your brief.'],['Bring your people together','With the programme agreed, we coordinate the arrangements and local accompaniment for your time in Brazil.']],
    inquiryEyebrow:'Start the conversation', inquiryTitle:'What would you like to bring your team together for?',
    inquiryBody:'Tell us about your offsite or event. You do not need to have every detail decided — a starting point is enough for us to explore the possibilities together.',
    contactLine:'One local team. Your entire event taken care of.',
    faqTitle:'A few things you may be wondering.',
    faqs:[['Can you organise our entire event?','Yes. We take care of your event from start to finish, from planning and booking flights, hotels, transfers and event spaces to arranging experiences and coordinating everything on the ground. You have one local team looking after the details, so you can focus on your guests and the purpose of your event.'],['Do we need to choose a destination first?','No. Share your objectives, dates and group size, and we can explore a suitable setting together. If you already have a city or venue in mind, include it in your brief.'],['Can you help with only part of our event?','Tell us which arrangements you need support with: flights, hotels, transfers, event spaces, experiences or local accompaniment. We will shape the scope around your brief.'],['What information should we include?','Start with your company, the purpose of the event, approximate number of guests and preferred dates. A destination, budget range and any specific requirements are helpful if you already have them.']],
  },
  es: {
    eyebrow:'Brasil, para tu equipo', title:'Un entorno diferente. Un propósito compartido.',
    heading:'Offsites y eventos corporativos en Brasil',
    intro:'Reúne a tu equipo en un lugar que invite a mirar las cosas de otra manera. Planificamos y coordinamos tu offsite o evento corporativo en Brasil de principio a fin, cuidando cada detalle para que puedas centrarte en las personas.',
    cta:'Planifica tu evento', secondary:'Descubre nuestro apoyo',
    strap:'Vuelos · Hoteles · Transfers · Espacios para eventos · Experiencias · Acompañamiento local',
    promiseEyebrow:'Tu evento, en nuestras manos de principio a fin', promiseTitle:'Nosotros nos ocupamos. Tú disfrutas del evento.',
    promise:'Desde la primera idea hasta el último traslado, organizamos todo tu evento: vuelos, hoteles, espacios, transporte, experiencias y coordinación en destino. Un único equipo local se encarga de conectar cada detalle, para que puedas dejar la logística en nuestras manos y disfrutar del encuentro sin preocupaciones.',
    formatsTitle:'Distintas razones para reunirse.',
    formats:[['Offsites de equipo','Sal del entorno habitual para sesiones de planificación, conversaciones de equipo y tiempo compartido.'],['Encuentros corporativos','Reúne a colegas, socios o clientes en torno a un propósito claro, con un entorno y una organización adaptados a tus necesidades.'],['Experiencias compartidas','Deja espacio para los momentos que rodean al evento: descubrimientos culturales, actividades al aire libre y comidas que acercan a las personas.']],
    servicesEyebrow:'Lo que podemos organizar', servicesTitle:'Los detalles de un evento bien planificado.',
    services:[['Vuelos','Reservas de vuelos coordinadas con las fechas de viaje del grupo y el programa del evento.'],['Hoteles','Alojamientos seleccionados según la ubicación, el tamaño del grupo, el programa y tus prioridades.'],['Transfers','Llegadas al aeropuerto y traslados locales coordinados con el itinerario del evento.'],['Espacios para eventos','Espacios adecuados para tu formato, ya sea para reuniones, sesiones de trabajo o encuentros.'],['Experiencias','Experiencias locales que complementan la agenda y conectan a tu grupo con Brasil.'],['Acompañamiento local','Acompañamiento y coordinación para que las distintas partes del programa funcionen juntas.']],
    experienceEyebrow:'Más allá de la sala de reuniones', experienceTitle:'Haz que Brasil forme parte de la experiencia.',
    experienceBody:'El destino puede ser mucho más que un escenario. Reserva tiempo para la gastronomía, la cultura y los paisajes locales, con experiencias elegidas según tu grupo y el ritmo del evento.',
    caption:'Río de Janeiro · Otra perspectiva de Brasil',
    processEyebrow:'Desde la primera conversación', processTitle:'Un plan que nace de tus necesidades.',
    steps:[['Cuéntanos lo que importa','Comparte el propósito del evento, las fechas preferidas, el tamaño del grupo y el apoyo que necesitas.'],['Damos forma al plan juntos','Definimos el destino, los alojamientos, los espacios, el transporte y las experiencias que encajan con tu proyecto.'],['Reúne a tu equipo','Una vez acordado el programa, coordinamos los preparativos y el acompañamiento local durante tu estancia en Brasil.']],
    inquiryEyebrow:'Empecemos a conversar', inquiryTitle:'¿Para qué te gustaría reunir a tu equipo?',
    inquiryBody:'Cuéntanos sobre tu offsite o evento. No hace falta tener todos los detalles decididos: un punto de partida es suficiente para explorar juntos las posibilidades.',
    contactLine:'Un único equipo local. Todo tu evento en buenas manos.',
    faqTitle:'Algunas preguntas que quizá tengas.',
    faqs:[['¿Podéis organizar todo el evento?','Sí. Nos ocupamos del evento de principio a fin: planificación, reservas de vuelos, hoteles, transfers y espacios, experiencias y coordinación en destino. Un único equipo local cuida todos los detalles para que puedas centrarte en tus invitados y en el propósito del encuentro, sin preocuparte por la organización.'],['¿Tenemos que elegir primero el destino?','No. Comparte tus objetivos, fechas y el tamaño del grupo, y exploraremos juntos un entorno adecuado. Si ya tienes una ciudad o un espacio en mente, inclúyelo en tu consulta.'],['¿Podéis ayudar solo con una parte del evento?','Cuéntanos qué necesitas: vuelos, hoteles, transfers, espacios para eventos, experiencias o acompañamiento local. Definiremos el alcance según tu proyecto.'],['¿Qué información debemos incluir?','Empieza por la empresa, el propósito del evento, el número aproximado de participantes y las fechas preferidas. Si ya tienes un destino, un presupuesto estimado o necesidades específicas, también nos serán útiles.']],
  },
};
