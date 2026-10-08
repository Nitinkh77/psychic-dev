import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Backdrop } from "@/components/Media";
import { Stats, Services, Astrology, Process, Testimonials, FAQ, Contact, Footer, WhatsAppFloat } from "@/components/Sections";
import { About, Relationship, Career, ConsultCTA, Protection, Pooja, Meditation, AskSection, QuickContact } from "@/components/Features";
const fade = (a: string) => `linear-gradient(#080711,${a} 20%,${a} 80%,#080711)`;
export default function Home() {
  return <><Navbar/><main><Hero/><Stats/><About/><Services/><AskSection/><Relationship/><Career/><ConsultCTA/><Astrology/><Protection/><Pooja/><Meditation/><Process/><QuickContact/>
    <Backdrop src="/images/sections/testimonials.png" op={.5} overlay={fade("rgba(8,7,17,.7)")}><Testimonials/></Backdrop>
    <Backdrop src="/images/sections/faq.png" op={.22} overlay={fade("rgba(8,7,17,.85)")}><FAQ/></Backdrop>
    <Backdrop src="/images/sections/contact.png" blur op={.5} overlay={fade("rgba(8,7,17,.6)")}><Contact/></Backdrop></main>
    <Backdrop src="/images/sections/stars.png" op={.2} overlay="rgba(8,7,17,.6)"><Footer/></Backdrop><WhatsAppFloat/></>;
}
