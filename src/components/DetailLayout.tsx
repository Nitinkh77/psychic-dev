import Link from "next/link";
import PageShell from "./PageShell";
import AskBox from "./AskBox";
import Gallery from "./Gallery";
import { SpringA, Img, Reveal } from "./Media";
import { waLink, BRAND, disclaimer } from "@/data/content";
type Item = { slug: string; t: string; d: string; img: string };
const DEFAULT_BG = "/images/backgrounds/temple-glow.png";
const expect = ["A private, unhurried conversation about your situation and the questions that matter most.", "Traditional insight and astrology where relevant, explained in plain language.", "Compassionate perspective and suggested next steps. No outcome is promised or guaranteed."];
export default function DetailLayout({ label, title, text, body, img, pos = "center", note, gallery, bg, base, others }: { gallery?: string[]; bg?: string; label: string; title: string; text: string; body: string[]; img: string; pos?: string; note?: string; base: string; others: Item[] }) {
  return <PageShell label={label} title={title} text={text} bg={bg ?? DEFAULT_BG}>
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-[3fr_2fr] md:gap-16 md:px-10 md:pb-28">
      <div>
        <Reveal><div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gold/20"><Img src={img} alt={title} fill priority sizes="(max-width:768px) 100vw,720px" className="object-cover" style={{ objectPosition: pos }}/><div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent"/></div></Reveal>
        <h2 className="mt-12 font-serif text-3xl font-light text-lgold md:text-5xl">{title}</h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">{body.map(p => <p key={p}>{p}</p>)}</div>
        {gallery && <Gallery images={gallery} title={title}/>}
        {note && <p className="mt-8 border-l border-gold/40 pl-4 text-sm text-cream/80">{note}</p>}
        <h3 className="mt-12 font-serif text-2xl md:text-3xl">What to expect</h3>
        <ul className="mt-4 space-y-3 text-muted">{expect.map(e => <li key={e} className="border-t border-gold/20 pt-3">{e}</li>)}</ul>
        <div className="mt-12 rounded-2xl border border-gold/25 bg-dusk/60 p-7 md:p-9"><h3 className="font-serif text-2xl text-lgold md:text-3xl">Prefer to talk on WhatsApp?</h3>
          <p className="mt-2 text-muted">Message us for a private conversation about {title}.</p>
          <SpringA href={waLink(`Hello, I would like to know more about ${title}.`)} className="mt-5 inline-block rounded-full bg-gold px-8 py-4 font-medium text-night">Chat on WhatsApp · {BRAND.phone}</SpringA></div>
        <p className="mt-6 text-xs text-muted">{disclaimer}</p></div>
      <aside className="space-y-6 md:sticky md:top-32 md:self-start"><AskBox service={title}/>
        <Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20"><Img src="/images/sections/consultation.png" alt="Private consultation" fill sizes="(max-width:768px) 100vw,420px" className="object-cover"/></div></Reveal></aside></section>
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10"><h2 className="font-serif text-3xl md:text-4xl">More to explore</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{others.map(m => <Link key={m.slug} href={`${base}/${m.slug}`} className="group overflow-hidden rounded-2xl border border-gold/20 bg-night transition hover:border-gold/60">
        <div className="relative aspect-[16/9] overflow-hidden"><Img src={m.img} alt={m.t} fill sizes="(max-width:768px) 100vw,380px" className="object-cover transition duration-700 group-hover:scale-105"/></div>
        <div className="p-5"><h3 className="font-serif text-xl">{m.t}</h3><p className="mt-2 text-sm text-muted">{m.d}</p></div></Link>)}</div></section>
  </PageShell>;
}