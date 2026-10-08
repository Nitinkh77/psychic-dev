"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Stars from "./Stars";
import { Img, SpringA } from "./Media";
import { BRAND, waLink } from "@/data/content";
export default function Hero() {
  const { scrollY } = useScroll(); const y = useTransform(scrollY, [0, 600], [0, 90]);
  return (<section className="relative flex min-h-screen items-end overflow-hidden pb-24 pt-40 md:items-center md:pb-0">
    <motion.div style={{ y }} className="absolute inset-0 -top-10"><Img src="/images/hero/hero-celestial.png" fb="/images/hero.svg" alt="Moonlit spiritual astrology landscape" fill priority sizes="100vw" className="object-cover object-[68%_center] md:object-center"/></motion.div><Img src="/images/sections/stars.png" alt="" fill sizes="100vw" className="object-cover opacity-20 mix-blend-screen"/><div className="absolute inset-0 bg-plum/30 mix-blend-soft-light"/>
    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/20 md:bg-gradient-to-r md:from-night md:via-night/70 md:to-transparent"/>
    <div className="absolute right-[12%] top-[18%] hidden h-64 w-64 rounded-full bg-lgold/20 blur-3xl md:block"/>
    <Stars/>
    <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.4}} className="mb-6 max-w-md text-sm leading-relaxed text-lgold">Spiritual guidance, astrology and psychic consultation</motion.p>
      <h1 className="font-serif text-5xl font-light leading-[1.02] sm:text-6xl md:text-8xl">
        {["Guidance Beyond","What You Can See."].map((l, i) => <span key={l} className="block overflow-hidden"><motion.span className="block" initial={{y:"100%"}} animate={{y:0}} transition={{duration:1.4, delay:.3+i*.25, ease:[.2,.7,.2,1]}}>{l}</motion.span></span>)}</h1>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1.2, delay:1.2}}>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted">Personalized spiritual guidance and astrology consultations to help you find clarity, direction and peace.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <SpringA href="/contact" className="rounded-full bg-gold px-8 py-4 text-center font-medium text-night">Book a Private Consultation</SpringA>
          <a href={waLink()} className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 transition hover:border-gold hover:text-gold"><MessageCircle size={18}/>Chat on WhatsApp</a></div>
        <p className="mt-5 text-sm text-muted">Just make a call or message us: <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="text-lgold hover:underline">{BRAND.phone}</a> · 24×7 service available</p>
        <span className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-night/60 py-2 pl-2 pr-5 backdrop-blur"><span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-xs font-bold text-night">100%</span><span className="text-xs font-medium leading-tight tracking-wide text-lgold">PRIVACY<br/>GUARANTEED</span></span></motion.div>
    </div></section>);
}
