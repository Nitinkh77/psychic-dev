import { notFound } from "next/navigation";
import DetailLayout from "@/components/DetailLayout";
import { allServices } from "@/data/services-all";
type P = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return allServices.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: P) { const { slug } = await params; return { title: `${allServices.find(x => x.slug === slug)?.t ?? "Service"} — Psychic Dev` }; }
export default async function Page({ params }: P) {
  const { slug } = await params; const s = allServices.find(x => x.slug === slug); if (!s) notFound();
  return <DetailLayout label="SERVICE" title={s.t} text={s.d} body={s.body} img={s.img} pos={s.pos} note={s.note} gallery={s.gallery} bg={s.bg} base="/services" others={allServices.filter(x => x.slug !== slug).slice(0, 3)}/>;
}
