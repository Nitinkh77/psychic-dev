"use client";
import { MessageCircle } from "lucide-react";
import { BRAND, waLink } from "@/data/content";
import AskBox from "./AskBox";
import { allServices } from "@/data/services-all";
import { Img, Reveal, Backdrop, SpringA } from "./Media";
const btn = "inline-block rounded-full bg-gold px-8 py-4 font-medium text-night";
const link = "mt-8 inline-block border-b border-gold pb-1 text-gold transition hover:text-lgold";

export function About() {
  return <Backdrop src="/images/about/about-background.png" op={.35} overlay="linear-gradient(to bottom,#080711,rgba(8,7,17,.8) 50%,#080711)">
    <section id="about" className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-14 px-6 py-24 md:grid-cols-[5fr_6fr] md:gap-20 md:px-10 md:py-36">
      <Reveal className="relative mx-auto w-full max-w-md"><div className="group relative">
        <div className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2rem] border border-gold/30 transition duration-700 group-hover:translate-x-6 group-hover:translate-y-6"/>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/40 shadow-[0_0_80px_rgba(212,175,106,.18)]">
          <Img src="/images/about/spiritual-expert.png" fb="/images/advisor.svg" alt="Professional spiritual advisor" fill sizes="(max-width:768px) 90vw,450px" className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]" style={{ objectPosition: "center top" }}/></div>
        <div className="absolute -bottom-6 -left-4 rounded-2xl border border-gold/40 bg-night/80 px-6 py-4 backdrop-blur-md md:-left-10"><p className="font-serif text-4xl text-lgold">10+</p><p className="text-xs text-muted">Years of experience</p></div></div></Reveal>
      <div><h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">Clarity begins when you understand the unseen.</h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">For years, we have helped individuals navigate relationships, career decisions, financial uncertainty and personal challenges through personalized spiritual guidance and astrology. Every conversation is private, unhurried and free of judgment.</p>
        <a href="/contact" className={link}>Book a private consultation</a><p className="mt-10 font-serif text-3xl italic text-lgold/80" aria-hidden>{BRAND.name}</p></div></section></Backdrop>;
}

function Split({ id, img, fb, alt, pos = "center", label, title, text, cta, flip, warm }: { id: string; img: string; fb?: string; alt: string; pos?: string; label: string; title: string; text: string; cta: string; flip?: boolean; warm?: boolean }) {
  return <div className={warm ? "bg-gradient-to-b from-night via-[#1a0f1c] to-night" : ""}><section id={id} className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
    <Reveal className={flip ? "md:order-2" : ""}><div className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20 ${warm ? "shadow-[0_0_80px_rgba(232,150,60,.2)]" : "shadow-[0_0_60px_rgba(212,175,106,.12)]"}`}>
      <Img src={img} fb={fb} alt={alt} fill sizes="(max-width:768px) 100vw,600px" className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]" style={{ objectPosition: pos }}/></div></Reveal>
    <div className={flip ? "md:order-1" : ""}><p className="text-sm tracking-widest text-gold">{label}</p>
      <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-6xl">{title}</h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{text}</p>
      <a href="/contact" className={link}>{cta} →</a></div></section></div>;
}
export const Relationship = () => <Split id="relationship" img="/images/services/relationship.png" fb="/images/relationship.svg" alt="Relationship guidance" label="LOVE & RELATIONSHIPS" title="Clarity for matters of the heart." text="Whether you are building, rebuilding or letting go, a calm and private conversation can help you see your situation with more perspective." cta="Explore Relationship Guidance"/>;
export const Career = () => <Split flip id="career" img="/images/services/career.png" fb="/images/career.svg" alt="Career and business guidance" label="CAREER & BUSINESS" title="Direction for the work you are building." text="Reflect on timing, decisions and direction with an advisor who listens first. This is perspective and support, not financial advice." cta="Explore Career Guidance"/>;
export const Pooja = () => <Split warm id="rituals" img="/images/services/pooja.png" fb="/images/pooja.svg" alt="Traditional pooja ritual" label="TRADITIONAL RITUALS" title="Ancient traditions, approached with care." text="Learn what traditional rituals mean and how they may fit your situation, explained respectfully and without pressure." cta="Explore Ritual Services"/>;

export function Protection() {
  return <Backdrop src="/images/services/protection.png" fb="/images/protection.svg" op={1} pos="70% center" overlay="linear-gradient(90deg,#080711 5%,rgba(8,7,17,.75) 50%,rgba(8,7,17,.25))">
    <section id="protection" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10 md:py-44"><div className="max-w-xl"><p className="text-sm tracking-widest text-gold">SPIRITUAL PROTECTION</p>
      <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-6xl">Feel steady, safe and supported.</h2>
      <p className="mt-6 text-lg leading-relaxed text-cream/75">Explore traditional spiritual practices and personalized guidance designed around your concerns.</p><a href="/contact" className={link}>Learn More →</a></div></section></Backdrop>;
}
export function Meditation() {
  return <Backdrop src="/images/services/meditation.png" fb="/images/meditation.svg" op={1} pos="center 60%" overlay="linear-gradient(to bottom,#080711,rgba(8,7,17,.45) 40%,rgba(8,7,17,.65) 70%,#080711)">
    <section className="mx-auto flex min-h-[32rem] max-w-3xl flex-col items-center justify-center px-6 py-32 text-center md:min-h-[44rem]"><h2 className="font-serif text-4xl font-light md:text-7xl">Find a moment of clarity.</h2>
      <p className="mt-6 max-w-lg text-lg text-cream/75">Step away from the noise and talk through what matters, at your own pace.</p><SpringA href="/contact" className={`${btn} mt-10`}>Book a Consultation</SpringA></section></Backdrop>;
}
export function ConsultCTA() {
  return <Backdrop src="/images/sections/consultation.png" fb="/images/consultation.svg" op={1} overlay="radial-gradient(circle at 50% 100%,rgba(212,175,106,.28),transparent 60%),linear-gradient(rgba(33,23,53,.7),rgba(8,7,17,.75))">
    <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-44"><h2 className="font-serif text-4xl font-light md:text-7xl">Your questions deserve a private conversation.</h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-cream/70">Connect with us for a confidential consultation tailored to your situation.</p>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><SpringA href="/contact" className={btn}>Book Consultation</SpringA><a href={waLink()} className="rounded-full border border-cream/30 px-8 py-4 hover:border-gold">Chat on WhatsApp</a></div></div></Backdrop>;
}

export function AskSection() {
  return <section id="ask" className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
    <div><p className="text-sm tracking-widest text-gold">ASK THE QUESTION</p><h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-6xl">Seek clear, caring guidance.</h2>
      <p className="mt-6 max-w-lg text-lg text-muted">Share what is on your mind and choose the area you need help with. We will reply privately, 24×7.</p>
      <div className="mt-10 rounded-2xl border border-gold/25 bg-dusk/60 p-7"><h3 className="font-serif text-2xl text-lgold">Click here to chat on WhatsApp</h3>
        <SpringA href={waLink()} className="mt-4 inline-block rounded-full bg-gold px-8 py-4 font-medium text-night">WhatsApp · {BRAND.phone}</SpringA></div></div>
    <AskBox service={allServices[0].t} services={allServices.map(s => s.t)}/></section>;
}
const tiles = ["black-magic-removal", "get-your-love-back", "financial-business-problem", "health-issues-problem"];
export function QuickContact() {
  const items = tiles.map(t => allServices.find(x => x.slug === t)!);
  return <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(s => <Reveal key={s.slug}>
    <a href={waLink(`Hello, I would like to know more about ${s.t}.`)} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-gold/20">
      <Img src={s.img} alt={s.t} fill sizes="(max-width:768px) 100vw,300px" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent"/>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5"><div><h3 className="font-serif text-xl">{s.t}</h3><p className="text-sm text-lgold">Contact Now</p></div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-night transition group-hover:scale-110"><MessageCircle size={20}/></span></div></a></Reveal>)}</div></section>;
}
