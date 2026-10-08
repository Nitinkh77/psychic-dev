import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allServices } from "@/data/services-all";
export default function ServiceIndex() {
  return <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"><h2 className="font-serif text-4xl font-light md:text-6xl">All consultations</h2>
    <div className="mt-12 grid gap-px bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">{allServices.map((s, i) =>
      <Link key={s.slug} href={`/services/${s.slug}`} className="group relative bg-night p-7 transition hover:bg-dusk">
        <span className="text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
        <ArrowUpRight size={20} className="absolute right-6 top-6 text-gold/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"/>
        <h3 className="mt-4 font-serif text-2xl">{s.t}</h3><p className="mt-2 text-sm text-muted">{s.d}</p></Link>)}</div></section>;
}
