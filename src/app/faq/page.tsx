import PageShell from "@/components/PageShell";
import { FAQ } from "@/components/Sections";
import { Backdrop } from "@/components/Media";
import { fade } from "@/lib/utils";
export const metadata = { title: "FAQ — Psychic Dev" };
export default function Page() {
  return <PageShell label="FAQ" title="Questions, answered." text="Everything to know before your first private consultation."><Backdrop src="/images/sections/faq.png" op={0.22} overlay={fade("rgba(8,7,17,.85)")}><FAQ/></Backdrop></PageShell>;
}
