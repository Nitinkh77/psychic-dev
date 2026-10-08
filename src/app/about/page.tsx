import PageShell from "@/components/PageShell";
import { Stats, Process } from "@/components/Sections";
import { About } from "@/components/Features";
export const metadata = { title: "About — Psychic Dev" };
export default function Page() {
  return <PageShell label="ABOUT" title="A calm, private place to ask difficult questions." text="Meet the advisor behind the work and how every consultation is approached." bg="/images/backgrounds/temple-glow.png"><Stats/><About/><Process/></PageShell>;
}