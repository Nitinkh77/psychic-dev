"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, MessageCircle, Phone, Mail, MapPin, Check, Star } from "lucide-react";
import { BRAND, services, testimonials, faqs, zodiac, waLink, disclaimer } from "@/data/content";
import { submitContactForm, requestCallback } from "@/lib/api/contact";
import { Logo } from "./Navbar";
import { Img, SpringA } from "./Media";
import { allServices } from "@/data/services-all";

const Wrap = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) =>
  <section id={id} className={`mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-36 ${className}`}>{children}</section>;
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">{children}</h2>;

export function Stats() {
  const s = [["10+","Years of experience"],["5,000+","Consultations"],["Private","and confidential"],["Worldwide","clients"]];
  return <div className="border-y border-gold/20 bg-dusk"><dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:px-10">
    {s.map(([a,b]) => <div key={a}><dt className="font-serif text-3xl text-lgold md:text-4xl">{a}</dt><dd className="text-sm text-muted">{b}</dd></div>)}</dl></div>;
}

export function Services() {
  const [first, ...rest] = allServices.slice(0, 9);
  return <Wrap id="services"><H2>Guidance for every chapter of life.</H2><p className="mt-4 text-muted">All religions are welcome.</p>
    <div className="mt-16 grid gap-px bg-gold/15 md:grid-cols-12">
      <a href={`/services/${first.slug}`} className="group relative min-h-[26rem] overflow-hidden bg-night md:col-span-6 md:row-span-2">
        <div className="absolute inset-0 bg-plum bg-cover bg-center transition duration-[1200ms] group-hover:scale-105" style={{ backgroundImage: `url(${first.img})` }}/>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-transparent"/>
        <div className="absolute bottom-0 p-8"><h3 className="font-serif text-4xl">{first.t}</h3><p className="mt-3 max-w-sm text-muted">{first.d}</p></div></a>
      {rest.map(s => <a key={s.slug} href={`/services/${s.slug}`} className="group relative flex min-h-[13rem] flex-col justify-between overflow-hidden bg-night p-7 md:col-span-3">
        <div className="absolute inset-0 bg-cover bg-center opacity-50 transition duration-[1200ms] group-hover:scale-110 group-hover:opacity-90" style={{ backgroundImage: `url(${s.img})` }}/><div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent"/><div className="absolute inset-0 opacity-0 shadow-[inset_0_0_0_1px_rgba(212,175,106,.7),inset_0_0_40px_rgba(212,175,106,.18)] transition duration-500 group-hover:opacity-100"/>
        <ArrowUpRight className="relative self-end text-gold/70 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" size={20}/>
        <div className="relative mt-10"><h3 className="font-serif text-2xl">{s.t}</h3><p className="mt-2 max-h-0 overflow-hidden text-sm text-muted opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 max-md:max-h-32 max-md:opacity-100">{s.d}</p></div></a>)}</div>
    <p className="mt-6 text-xs text-muted">{disclaimer}</p>
    <a href="/services" className="mr-8 mt-6 inline-block text-gold">View all services →</a><a href={waLink()} className="mt-6 inline-flex items-center gap-2 text-gold"><MessageCircle size={18}/>Ask about a service on WhatsApp</a></Wrap>;
}

export function Astrology() {
  const [a, setA] = useState(0);
  return <Wrap id="astrology" className="grid items-center gap-16 md:grid-cols-2">
    <div><H2>Written in the stars. Understood through insight.</H2>
      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-muted">{["Birth chart","Horoscope","Planetary influences","Compatibility","Career guidance","Life path"].map(i => <li key={i} className="border-t border-gold/20 pt-3">{i}</li>)}</ul>
      <div className="mt-10"><div role="group" aria-label="Zodiac signs" className="flex flex-wrap gap-2">{zodiac.map(([n], i) => <button key={n} onMouseEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)} className={`rounded-full border px-3 py-1 text-xs transition ${a === i ? "border-gold bg-gold/15 text-lgold" : "border-gold/20 text-muted hover:text-cream"}`}>{n}</button>)}</div>
        <p className="mt-4 min-h-[3rem] font-serif text-xl text-lgold" aria-live="polite">{zodiac[a][0]}: <span className="text-cream/80">{zodiac[a][1]}</span></p></div></div>
    <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md">
      <motion.div className="absolute inset-[11%]" animate={{ rotate: 360 }} transition={{ duration: 150, ease: "linear", repeat: Infinity }}>
        <Img src="/images/astrology/zodiac-wheel.png" fb="/images/astrology.svg" alt="Astrology zodiac wheel" fill sizes="(max-width:768px) 80vw,400px" className="object-contain drop-shadow-[0_0_40px_rgba(212,175,106,.3)]"/></motion.div>
      {[["12 Zodiac Signs", "left-0 top-0", 0], ["Birth Chart", "right-0 top-[4%]", 1.2], ["Planetary Guidance", "bottom-0 left-[4%]", 2.4]].map(([t, pos, d]) =>
        <motion.span key={t as string} animate={{ y: [0, -8, 0] }} transition={{ duration: 6, delay: d as number, repeat: Infinity, ease: "easeInOut" }} className={`absolute ${pos} rounded-full border border-gold/40 bg-night/70 px-4 py-1.5 text-xs text-lgold backdrop-blur`}>{t}</motion.span>)}</div>
  </Wrap>;
}

export function Process() {
  const st = ["Share your question","Choose your consultation","Receive personalized guidance","Move forward with clarity"];
  return <Wrap id="process"><H2>A private journey toward clarity.</H2>
    <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">{st.map((s, i) => <motion.li key={s} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:1,delay:i*.2}} className="relative border-l border-gold/30 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-6">
      <span className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-gold md:-top-1.5 md:left-0"/><span className="font-serif text-lg text-gold">{i + 1}</span><h3 className="mt-2 font-serif text-2xl">{s}</h3></motion.li>)}</ol></Wrap>;
}

export function Testimonials() {
  const [i, setI] = useState(0), t = testimonials[i];
  return <Wrap id="testimonials" className="text-center"><H2>Stories from people we've guided.</H2>
    <div className="mx-auto mt-14 min-h-[16rem] max-w-3xl" aria-live="polite"><AnimatePresence mode="wait"><motion.figure key={i} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.7}}>
      <blockquote className="font-serif text-2xl italic leading-relaxed md:text-3xl">“{t.q}”</blockquote>
      <div className="mt-5 flex justify-center gap-1 text-gold" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map(i => <Star key={i} size={18} fill="currentColor"/>)}</div>
      <figcaption className="mt-4 text-sm text-muted">{t.name} · {t.city} · {t.service}</figcaption></motion.figure></AnimatePresence></div>
    <div className="mt-8 flex justify-center gap-3">{testimonials.map((_, k) => <button key={k} aria-label={`Testimonial ${k + 1}`} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-gold/30"}`}/>)}</div></Wrap>;
}

export function FAQ() {
  const [o, setO] = useState<number | null>(0);
  return <Wrap id="faq" className="max-w-4xl"><H2>Questions, answered.</H2>
    <div className="mt-12 divide-y divide-gold/15 border-y border-gold/15">{faqs.map(([q, a], i) => <div key={q}>
      <button aria-expanded={o === i} onClick={() => setO(o === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-6 text-left font-serif text-xl md:text-2xl">{q}<ChevronDown className={`shrink-0 text-gold transition ${o === i ? "rotate-180" : ""}`}/></button>
      <AnimatePresence initial={false}>{o === i && <motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden pb-6 text-muted">{a}</motion.p>}</AnimatePresence></div>)}</div></Wrap>;
}

export function Contact() {
  const [st, setSt] = useState<"idle" | "busy" | "done">("idle"); const [err, setErr] = useState<Record<string, string>>({});
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>; const er: Record<string, string> = {};
    if (!d.name?.trim()) er.name = "Please enter your name."; if (!/^[+\d][\d\s-]{6,}$/.test(d.phone || "")) er.phone = "Enter a valid phone number.";
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) er.email = "Enter a valid email address."; setErr(er); if (Object.keys(er).length) return;
    setSt("busy"); await submitContactForm({ name: d.name, phone: d.phone, email: d.email || "", service: d.service, message: d.message || "" }); setSt("done");
  }
  const f = "w-full border-b border-gold/30 bg-transparent py-3 outline-none placeholder:text-muted/60 focus:border-gold";
  const E = ({ k }: { k: string }) => err[k] ? <p role="alert" className="mt-1 text-sm text-red-300">{err[k]}</p> : null;
  return <Wrap id="contact" className="grid gap-16 md:grid-cols-2"><div><H2>Let's talk.</H2>
    <p className="mt-6 max-w-md text-lg text-muted">If you have a question or would like to schedule a private consultation, reach out to us.</p>
    <ul className="mt-10 space-y-4"><li><a className="flex items-center gap-3 hover:text-gold" href={waLink()}><MessageCircle size={18} className="text-gold"/>WhatsApp</a></li>
      <li><a className="flex items-center gap-3 hover:text-gold" href={`tel:${BRAND.phone.replace(/\s/g, "")}`}><Phone size={18} className="text-gold"/>{BRAND.phone}</a></li><li><a className="flex items-center gap-3 hover:text-gold" href={`mailto:${BRAND.email}`}><Mail size={18} className="text-gold"/>{BRAND.email}</a></li><li className="flex items-center gap-3"><MapPin size={18} className="text-gold"/>{BRAND.location}</li></ul></div>
    {st === "done" ? <div role="status" className="flex flex-col items-start justify-center"><Check className="text-gold" size={36}/><h3 className="mt-4 font-serif text-4xl">Thank you. We have your request.</h3><p className="mt-3 text-muted">We will reach out shortly to confirm a time.</p></div> :
    <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-2xl border border-gold/25 bg-night/75 p-6 backdrop-blur-md md:p-10"><div><label htmlFor="name" className="text-sm text-muted">Name</label><input id="name" name="name" className={f}/><E k="name"/></div>
      <div className="grid gap-6 sm:grid-cols-2"><div><label htmlFor="phone" className="text-sm text-muted">Phone</label><input id="phone" name="phone" type="tel" className={f}/><E k="phone"/></div><div><label htmlFor="email" className="text-sm text-muted">Email (optional)</label><input id="email" name="email" type="email" className={f}/><E k="email"/></div></div>
      <div><label htmlFor="service" className="text-sm text-muted">Preferred consultation</label><select id="service" name="service" className={`${f} bg-night`}>{allServices.map(s => <option key={s.slug}>{s.t}</option>)}<option>Astrology & birth chart</option></select></div>
      <div><label htmlFor="message" className="text-sm text-muted">Message</label><textarea id="message" name="message" rows={3} className={f}/></div>
      <button disabled={st === "busy"} className="rounded-full bg-gold px-8 py-4 font-medium text-night transition hover:bg-lgold disabled:opacity-60">{st === "busy" ? "Sending…" : "Request Consultation"}</button></form>}</Wrap>;
}

export function MapSection() {
  return <Wrap className="!py-16 md:!py-24"><div className="overflow-hidden rounded-2xl border border-gold/30 shadow-[0_0_60px_rgba(212,175,106,.12)]">
    <iframe title="Our location on the map" src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[22rem] w-full md:h-[28rem] [filter:invert(.92)_hue-rotate(180deg)_saturate(.5)_brightness(.9)]"/></div>
    <p className="mt-4 text-sm text-muted">{BRAND.location}</p></Wrap>;
}

export function CallBack() {
  const [st, setSt] = useState<"idle" | "busy" | "done">("idle"), [err, setErr] = useState("");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const phone = String(new FormData(e.currentTarget).get("phone") || "");
    if (!/^[+\d][\d\s-]{6,}$/.test(phone)) { setErr("Enter a valid phone number."); return; }
    setErr(""); setSt("busy"); await requestCallback(phone); setSt("done");
  }
  return <div className="rounded-2xl border border-gold/25 bg-night/60 p-6 backdrop-blur-md md:flex md:items-center md:justify-between md:gap-10 md:p-8">
    <div><h3 className="font-serif text-2xl text-lgold">Request a call back</h3><p className="mt-1 text-sm text-muted">Leave your number and we will call you within 24 hours.</p></div>
    {st === "done" ? <p role="status" className="mt-4 flex items-center gap-2 text-lgold md:mt-0"><Check size={18}/>Thank you. We will call you soon.</p> :
    <form onSubmit={onSubmit} noValidate className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row md:mt-0">
      <div className="flex-1"><label htmlFor="cb-phone" className="sr-only">Your phone number</label><input id="cb-phone" name="phone" type="tel" placeholder="Your phone number" className="w-full border-b border-gold/30 bg-transparent py-3 outline-none placeholder:text-muted/60 focus:border-gold"/>{err && <p role="alert" className="mt-1 text-sm text-red-300">{err}</p>}</div>
      <button disabled={st === "busy"} className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-night disabled:opacity-60">{st === "busy" ? "Sending…" : "Send"}</button></form>}</div>;
}

export function Footer() {
  return <footer className="relative border-t border-gold/20 bg-dusk/90 px-6 py-16 pb-28 md:px-10 md:pb-16"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"><div><Logo/><p className="mt-4 text-sm text-muted">Private spiritual guidance and astrology consultations, 24×7.</p></div>
    {[["Explore",["Home","About Us","Our Services","Pooja Rituals","Contact"]],["Services",["Relationship Guidance","Astrology","Spiritual Protection","Career Guidance","Pooja Services"]],["Contact",["WhatsApp",BRAND.phone,BRAND.email,BRAND.location]]].map(([h, l]) => <div key={h as string}><h3 className="font-serif text-lg text-lgold">{h}</h3><ul className="mt-3 space-y-2 text-sm text-muted">{(l as string[]).map(x => { const h = x === "WhatsApp" ? waLink() : x === BRAND.phone ? `tel:${BRAND.phone.replace(/\s/g, "")}` : x === BRAND.email ? `mailto:${BRAND.email}` : null; return <li key={x}>{h ? <a href={h} className="transition hover:text-gold">{x}</a> : x}</li>; })}</ul></div>)}</div>
    <div className="mx-auto mt-12 max-w-7xl"><CallBack/></div>
    <p className="mx-auto mt-10 max-w-7xl text-xs text-muted">{disclaimer}<br/>© 2026 {BRAND.name}. All rights reserved. Privacy Policy · Terms</p></footer>;
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[5.5rem] right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-night shadow-xl transition hover:scale-105 hover:bg-lgold"
    >
      <MessageCircle size={24} />
    </a>
  );
}