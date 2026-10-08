import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import { Pooja } from "@/components/Features";
import { poojas } from "@/data/poojas";
export const metadata = { title: "Pooja Rituals — Psychic Dev" };
export default function Page() {
  return <PageShell label="POOJA RITUALS" title="Ancient traditions, approached with care." text="Learn about traditional pooja and how it may fit your situation, explained respectfully and without pressure.">
    <section className="mx-auto max-w-7xl px-6 pb-8 md:px-10"><div className="grid gap-px bg-gold/15 sm:grid-cols-2">{poojas.map((p, i) =>
      <Link key={p.slug} href={`/pooja-rituals/${p.slug}`} className="group relative bg-night p-8 transition hover:bg-dusk"><span className="text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
        <ArrowUpRight size={20} className="absolute right-7 top-7 text-gold/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"/>
        <h2 className="mt-4 font-serif text-3xl">{p.t}</h2><p className="mt-2 text-muted">{p.d}</p></Link>)}</div></section>
    <Pooja/></PageShell>;
}
