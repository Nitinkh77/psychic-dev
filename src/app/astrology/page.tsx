import PageShell from "@/components/PageShell";
import { Astrology } from "@/components/Sections";
import { Meditation } from "@/components/Features";
export const metadata = { title: "Astrology — Psychic Dev" };
export default function Page() {
  return <PageShell label="ASTROLOGY" title="Written in the stars. Understood through insight." text="Birth charts, horoscopes and planetary influences, explained clearly."><Astrology/><Meditation/></PageShell>;
}
