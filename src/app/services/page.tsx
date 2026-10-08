import ServiceIndex from "@/components/ServiceIndex";
import PageShell from "@/components/PageShell";
import { Services } from "@/components/Sections";
import { Relationship, Career, Protection, Pooja } from "@/components/Features";
export const metadata = { title: "Services — Psychic Dev" };
export default function Page() {
  return <PageShell label="SERVICES" title="Guidance for every chapter of life." text="Explore our consultations, from relationships to career and traditional rituals."><ServiceIndex/><Services/><Relationship/><Career/><Protection/><Pooja/></PageShell>;
}
