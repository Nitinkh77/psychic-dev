import { notFound } from "next/navigation";
import DetailLayout from "@/components/DetailLayout";
import { poojas } from "@/data/poojas";
type P = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return poojas.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: P) { const { slug } = await params; return { title: `${poojas.find(x => x.slug === slug)?.t ?? "Pooja"} — Psychic Dev` }; }
export default async function Page({ params }: P) {
  const { slug } = await params; const p = poojas.find(x => x.slug === slug); if (!p) notFound();
  return <DetailLayout label="POOJA RITUALS" title={p.t} text={p.d} img={p.img} base="/pooja-rituals" others={poojas.filter(x => x.slug !== slug)}
    body={[p.about, "Before any pooja we explain its purpose, the offerings involved and the traditional way it is observed, so you feel comfortable and informed. Pooja is a devotional practice, and no specific result is promised."]}/>;
}
