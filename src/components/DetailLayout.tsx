import Link from "next/link";
import PageShell from "./PageShell";
import AskBox from "./AskBox";
import Gallery from "./Gallery";
import { SpringA, Img, Reveal } from "./Media";
import { waLink, BRAND, disclaimer } from "@/data/content";
type Item = { slug: string; t: string; d: string; img: string };
// Golden sprinkles around the zodiac wheel (decorative, deterministic positions)
const sparks = Array.from({ length: 34 }, (_, i) => {
  const a = i * 2.39996, r = 44 + ((i * 7) % 13) * 1.1, s = 0.9 + (i % 4) * 0.7, k = s * 1.6, q = s * 0.2;
  const f = (v: number) => Math.round(v * 100) / 100;
  return { x: f(50 + r * Math.cos(a)), y: f(50 + r * Math.sin(a)), s: f(s), d: f(2.2 + (i % 5) * 0.6), b: f((i % 7) * 0.5), star: i % 3 === 0,
    path: `M0 ${f(-k)}Q${f(q)} ${f(-q)} ${f(k)} 0Q${f(q)} ${f(q)} 0 ${f(k)}Q${f(-q)} ${f(q)} ${f(-k)} 0Q${f(-q)} ${f(-q)} 0 ${f(-k)}Z` };
});
function Sparkles() {
  return <svg aria-hidden viewBox="0 0 100 100" className="pointer-events-none absolute left-[-10%] top-[-10%] h-[120%] w-[120%] overflow-visible motion-reduce:hidden">
    {sparks.map((p, i) => <g key={i} transform={`translate(${p.x} ${p.y})`}>
      {p.star ? <path d={p.path} fill="#F1DEA6"><animate attributeName="opacity" values="0.1;1;0.1" dur={`${p.d}s`} begin={`${p.b}s`} repeatCount="indefinite"/></path>
        : <circle r={f2(p.s * 0.35)} fill="#D4AF6A"><animate attributeName="opacity" values="0.1;0.95;0.1" dur={`${p.d}s`} begin={`${p.b}s`} repeatCount="indefinite"/></circle>}</g>)}</svg>;
}
const f2 = (v: number) => Math.round(v * 100) / 100;
const DEFAULT_BG = "/images/backgrounds/temple-glow.png";
const expect = ["A private, unhurried conversation about your situation and the questions that matter most.", "Traditional insight and astrology where relevant, explained in plain language.", "Compassionate perspective and suggested next steps. No outcome is promised or guaranteed."];
export default function DetailLayout({ label, title, text, body, img, pos = "center", note, gallery, bg, base, others }: { gallery?: string[]; bg?: string; label: string; title: string; text: string; body: string[]; img: string; pos?: string; note?: string; base: string; others: Item[] }) {
  const wheel = img.includes("zodiac-wheel"); // zodiac wheel: show fully and rotate slowly
  return <PageShell label={label} title={title} text={text} bg={bg ?? DEFAULT_BG}>
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-[3fr_2fr] md:gap-16 md:px-10 md:pb-28">
      <div>
        {wheel ? <Reveal><div className="relative mx-auto w-full max-w-[30rem]"><Sparkles/><div className="relative aspect-square w-full overflow-hidden rounded-full shadow-[0_0_80px_rgba(212,175,106,.25)]">
          <div className="absolute inset-0 animate-[spin_150s_linear_infinite] will-change-transform"><Img src={img} alt={title} fill priority sizes="(max-width:768px) 100vw,480px" className="object-contain"/></div></div></div></Reveal>
        : <Reveal><div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gold/20"><Img src={img} alt={title} fill priority sizes="(max-width:768px) 100vw,720px" className="object-cover" style={{ objectPosition: pos }}/><div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent"/></div></Reveal>}
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