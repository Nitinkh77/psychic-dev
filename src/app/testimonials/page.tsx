import PageShell from "@/components/PageShell";
import { Testimonials } from "@/components/Sections";
import { Backdrop } from "@/components/Media";
import { fade } from "@/lib/utils";
export const metadata = { title: "Testimonials — Psychic Dev" };
export default function Page() {
  return <PageShell label="TESTIMONIALS" title="Stories from people we have guided." text="Experiences shared by clients from around the world."><Backdrop src="/images/sections/testimonials.png" op={0.5} overlay={fade("rgba(8,7,17,.7)")}><Testimonials/></Backdrop></PageShell>;
}
