"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown, Clock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND, waLink, social } from "@/data/content";
import { SpringA } from "./Media";
import { allServices } from "@/data/services-all";
import { poojas } from "@/data/poojas";
export const Logo = () => (
  <Link href="/" className="flex items-center gap-3" aria-label={BRAND.name}>
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="#D4AF6A" strokeWidth="1.2" aria-hidden>
      <circle cx="20" cy="20" r="18"/><path d="M26 9a12 12 0 1 0 0 22 9.5 9.5 0 0 1 0-22z" fill="#D4AF6A" fillOpacity=".15"/><circle cx="29" cy="12" r="1.2" fill="#E8D29A"/>
    </svg><span className="font-serif text-xl uppercase tracking-[0.14em]">{BRAND.name}</span></Link>);
const I = ({ d, label, href, stroke }: { d: string; label: string; href: string; stroke?: boolean }) =>
  <a href={href} aria-label={label} className="text-lgold transition hover:text-cream"><svg width="16" height="16" viewBox="0 0 24 24" fill={stroke ? "none" : "currentColor"} stroke={stroke ? "currentColor" : "none"} strokeWidth="2" aria-hidden><path d={d}/></svg></a>;
const Socials = () => <div className="flex items-center gap-4">
  <I label="Facebook" href={social.facebook} d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
  <I label="Twitter" href={social.twitter} d="M18.9 2H22l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.2 22H2l7.7-8.8L1.5 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 3.9H5.4L17.7 20z"/>
  <I label="Instagram" href={social.instagram} stroke d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.2-2.2h.01"/>
  <I label="YouTube" href={social.youtube} d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.8 15.1V8.9L15.2 12l-5.4 3.1z"/></div>;
const links: [string, string][] = [["Home", "/"], ["About Us", "/about"], ["Our Services", "/services"], ["Pooja Rituals", "/pooja-rituals"], ["Contact", "/contact"]];
const menus: Record<string, { base: string; items: { slug: string; t: string }[] }> = { "Our Services": { base: "/services", items: allServices }, "Pooja Rituals": { base: "/pooja-rituals", items: poojas } };
export default function Navbar() {
  const [sc, setSc] = useState(false), [open, setOpen] = useState(false), path = usePathname();
  const [hover, setHover] = useState<string | null>(null), [menu, setMenu] = useState<string | null>(null), [mob, setMob] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const m = menu ? menus[menu] : null;
  const active = links.find(([, h]) => path === h || (h !== "/" && path.startsWith(h + "/")))?.[0] ?? "";
  useEffect(() => { const f = () => setSc(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  useEffect(() => {
    const close = () => { setMenu(null); setHover(null); };
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("keydown", onKey);
    addEventListener("scroll", close, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onDown, true);
      document.removeEventListener("keydown", onKey);
      removeEventListener("scroll", close);
    };
  }, []);
  useEffect(() => { setMenu(null); setHover(null); setOpen(false); }, [path]);
  return (<header ref={headerRef} className="fixed inset-x-0 top-0 z-50" onMouseLeave={() => setMenu(null)}>
    <div className="flex items-center justify-between bg-plum/80 px-4 py-1.5 text-xs text-lgold md:px-8">
      <span className="flex items-center gap-2"><Clock size={14}/>24×7 Hours Service Available</span><Socials/></div>
    <nav aria-label="Primary" className={`flex items-center justify-between px-5 py-4 transition-all duration-500 md:px-10 ${sc ? "border-b border-gold/20 bg-night/80 backdrop-blur-md" : "bg-transparent"}`}>
      <Logo/>
      <ul onMouseLeave={() => setHover(null)} className="hidden gap-1 text-sm uppercase tracking-wider text-cream/80 xl:flex">{links.map(([n, h]) => <li key={n} onMouseEnter={() => { setHover(n); setMenu(menus[n] ? n : null); }} className="relative">
        <Link className="relative z-10 flex items-center gap-1 px-4 py-2 transition hover:text-gold" href={h}>{n}{menus[n] && <ChevronDown size={14}/>}</Link>
        {(hover ?? active) === n && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full border border-gold/40 bg-gold/10" transition={{ type: "spring", stiffness: 380, damping: 30 }}/>}</li>)}</ul>
      <a href={waLink()} aria-label="Chat on WhatsApp" className="hidden items-center gap-3 xl:flex"><span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-night"><MessageCircle size={22}/></span>
        <span className="leading-tight"><span className="block text-[11px] text-muted">available on whatsapp</span><span className="mt-0.5 inline-block rounded-full bg-gold px-4 py-1 font-sans text-base font-bold tracking-wide text-night">{BRAND.phone}</span></span></a>
      <button className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav>
    <AnimatePresence>{m && <motion.div key={menu} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="pointer-events-none absolute inset-x-0 top-full hidden justify-center px-6 xl:flex">
      <div onMouseLeave={() => setMenu(null)} className={`pointer-events-auto grid w-full gap-x-8 rounded-2xl border border-gold/25 bg-night/95 p-6 backdrop-blur-xl ${menu === "Our Services" ? "max-w-4xl grid-cols-2" : "max-w-xs grid-cols-1"}`}>
        {m.items.map(s => <Link key={s.slug} href={`${m.base}/${s.slug}`} onClick={() => setMenu(null)} className="border-b border-gold/10 py-3 text-sm text-cream/85 transition hover:pl-2 hover:text-gold">{s.t}</Link>)}
        <Link href={m.base} onClick={() => setMenu(null)} className={`pt-4 text-sm text-gold ${menu === "Our Services" ? "col-span-2" : ""}`}>View all →</Link></div></motion.div>}</AnimatePresence>
    <AnimatePresence>{open && <motion.ul initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} className="max-h-[75vh] space-y-1 overflow-y-auto bg-night/95 px-6 pb-6 backdrop-blur-md xl:hidden">
      {links.map(([n, h]) => menus[n] ? <li key={n}><button aria-expanded={mob === n} onClick={() => setMob(mob === n ? null : n)} className="flex w-full items-center justify-between border-b border-gold/10 py-3 font-serif text-2xl">{n}<ChevronDown className={`text-gold transition ${mob === n ? "rotate-180" : ""}`}/></button>
        {mob === n && <ul className="max-h-72 overflow-y-auto pb-2 pl-3">{[{ slug: "", t: `All ${n.toLowerCase()}` }, ...menus[n].items].map(x => <li key={x.slug}><Link onClick={() => setOpen(false)} className="block py-2 text-sm text-muted" href={x.slug ? `${menus[n].base}/${x.slug}` : menus[n].base}>{x.t}</Link></li>)}</ul>}</li>
        : <li key={n}><Link onClick={() => setOpen(false)} className="block border-b border-gold/10 py-3 font-serif text-2xl" href={h}>{n}</Link></li>)}
      <li className="pt-4"><SpringA href={waLink()} className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-medium text-night"><MessageCircle size={18}/>{BRAND.phone}</SpringA></li></motion.ul>}</AnimatePresence>
  </header>);
}