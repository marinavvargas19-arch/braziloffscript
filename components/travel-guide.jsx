import Link from "next/link";
import { guides, cover, slug, published } from "@/lib/travel-guide";
import { localePath } from "@/lib/i18n";
import { IMG } from "@/lib/data";

const photos = [
[[IMG.rioSugar,"Rio de Janeiro"],["/bahia-day-6-trancoso.jpg","Trancoso"]],
[["/amazon.jpg","Amazon rainforest"]],
[[cover,"Lençóis Maranhenses"],["/jaguar.jpg","Pantanal"]],
[["/noronha.jpg","Fernando de Noronha"],["/alagoas-day-8-maragogi.jpg","Maragogi"]]
];
const gallery = [[IMG.rioSugar,"Rio de Janeiro"],["/jaguar.jpg","Pantanal"],[cover,"Lençóis Maranhenses"],["/bahia-day-6-trancoso.jpg","Trancoso"]];
function Photo({src,alt}) {return <figure><img src={src} alt={alt} loading="lazy" className="w-full aspect-[16/10] object-cover rounded-xl"/><figcaption className="text-xs mt-1 text-muted">{alt}</figcaption></figure>}
function Gallery({items}) {return <div className="grid grid-cols-2 gap-3 my-5">{items.map(([src,alt])=><Photo key={src} src={src} alt={alt}/>)}</div>}
export function guideMetadata(locale="en"){
 const g=guides[locale]; const path=localePath("/blog/"+slug,locale);
 return {title:g.title,description:g.description,alternates:{canonical:path,languages:{en:"/blog/"+slug,"es-ES":"/es/blog/"+slug}},openGraph:{title:g.title,description:g.description,type:"article",publishedTime:published,authors:[g.author],images:[cover]}};
}
export function BlogHome({locale="en"}){
 const g=guides[locale];return <section className="max-w-6xl mx-auto px-5 py-12 sm:py-20"><div className="text-terra uppercase tracking-widest text-xs font-bold">{g.blog}</div><h1 className="font-serif text-5xl mt-3 text-ink">{locale==="es"?"Brasil, más allá de lo evidente":"Brazil, beyond the obvious"}</h1><p className="mt-4 text-ink-soft">{locale==="es"?"Inspiración y consejos de viaje con mirada local.":"Travel inspiration and practical advice from a local perspective."}</p><Link href={localePath("/blog/"+slug,locale)} className="grid md:grid-cols-2 gap-7 items-center mt-10 group"><img src={cover} alt="Lençóis Maranhenses" className="w-full aspect-[16/10] object-cover rounded-2xl"/><div><div className="text-terra text-xs uppercase tracking-widest font-bold">{g.category} · {g.read}</div><h2 className="font-serif text-4xl mt-3 group-hover:text-leaf">{g.title}</h2><p className="mt-4 leading-relaxed text-ink-soft">{g.description}</p><p className="mt-4 text-sm font-semibold">{g.author} · {g.date}</p><span className="inline-block mt-5 underline text-leaf-d">{locale==="es"?"Leer artículo":"Read article"} →</span></div></Link></section>
}
export default function TravelGuide({locale="en"}){
 const g=guides[locale], href=p=>localePath(p,locale);
 const h=i=><h2 id={"section-"+(i+1)} className="font-serif text-3xl sm:text-4xl leading-tight mt-12 mb-4 text-ink">{i+1}. {g.headings[i]}</h2>;
 const list=items=><ul className="list-disc pl-5 space-y-2 my-4">{items.map(([a,b])=><li key={a}><strong>{a}:</strong> {b}</li>)}</ul>;
 const schema={"@context":"https://schema.org","@type":"BlogPosting",headline:g.title,description:g.description,datePublished:published,author:{"@type":"Person",name:g.author},publisher:{"@type":"Organization",name:"Brazil Off Script"},image:"https://braziloffscript.com"+cover,mainEntityOfPage:"https://braziloffscript.com"+href("/blog/"+slug),inLanguage:locale};
 return <article className="max-w-5xl mx-auto px-5 py-8 sm:py-12"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><Link href={href("/blog")} className="text-sm underline text-leaf-d">← {g.blog}</Link><header className="max-w-3xl mx-auto mt-8"><div className="text-terra uppercase tracking-widest text-xs font-bold">{g.category}</div><h1 className="font-serif text-4xl sm:text-6xl leading-tight mt-3">{g.title}</h1><p className="mt-4 text-lg text-ink-soft">{g.description}</p><p className="mt-4 text-sm font-semibold">{g.author} · {g.date} · {g.read}</p></header><img src={cover} alt="White dunes and freshwater lagoons in Lençóis Maranhenses, Brazil" className="w-full aspect-[16/9] rounded-2xl object-cover mt-8"/><div className="max-w-3xl mx-auto text-[16px] sm:text-[17px] leading-[1.75] text-ink-soft space-y-4 mt-8">
 {g.intro.map(p=><p key={p}>{p}</p>)}
 <nav aria-label={g.blog} className="bg-paper border border-line rounded-xl p-5"><ol className="list-decimal pl-5 space-y-1">{g.headings.map((s,i)=><li key={s}><a href={"#section-"+(i+1)} className="underline underline-offset-2">{s}</a></li>)}</ol></nav>
 {h(0)}<p>{g.styleIntro}</p><Gallery items={gallery}/>{list(g.styles)}<p>{g.styleEnd}</p>
 {h(1)}<p>{g.seasonIntro}</p>{g.seasons.map(([title,intro,items,note],i)=><section key={title} className="mt-7"><h3 className="font-serif text-2xl text-ink mb-2">{title}</h3><Gallery items={photos[i]}/><p>{intro}</p>{list(items)}<p className="text-sm">{note}</p></section>)}<p>{g.seasonEnd}</p>
 {h(2)}{g.durationIntro.map(p=><p key={p}>{p}</p>)}<Photo src="/lencois-day-7-sunrise-dunes.jpg" alt="Lençóis Maranhenses"/>{g.durations.map(([title,desc,items])=><section key={title} className="mt-5"><h3 className="font-serif text-2xl text-ink">{title}</h3><p>{desc}</p>{items.length>0&&<ul className="list-disc pl-5">{items.map(s=><li key={s}>{s}</li>)}</ul>}</section>)}<p className="text-sm">{g.durationNote}</p><blockquote className="border-l-4 border-terra pl-5 my-8 font-serif text-2xl italic text-ink">{g.quote}</blockquote>
 {h(3)}<p>{g.itineraryIntro}</p><div className="grid sm:grid-cols-2 gap-5 my-5">{g.routes.map(([title,places,desc,src,path])=><section key={title} className="bg-paper rounded-xl overflow-hidden border border-line"><img src={src} alt={places} loading="lazy" className="w-full aspect-[16/10] object-cover"/><div className="p-4"><h3 className="font-serif text-2xl text-ink">{title}</h3><p className="font-semibold">{places}</p><p className="text-sm mt-2">{desc}</p><Link href={href(path)} className="text-sm underline text-leaf-d">{g.explore} →</Link></div></section>)}</div>
 {h(4)}<p>{g.transportIntro}</p>{list(g.transport)}<Photo src="/northeast-buggy.jpg" alt="Lençóis Maranhenses"/><p>{g.transportEnd}</p>
 <section className="bg-leaf-d text-cream-50 rounded-2xl p-7 mt-10"><h2 className="font-serif text-3xl">{g.ctaTitle}</h2><p className="mt-3">{g.ctaBody}</p><Link href={href("/start")} className="inline-block bg-cream text-leaf-d rounded-full px-5 py-3 mt-5 font-semibold">{g.cta} →</Link></section><p className="text-sm border-t border-line pt-5"><strong>{g.author}</strong> — {g.authorBio}</p></div></article>
}
