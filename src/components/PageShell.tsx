import Navbar from "./Navbar";
import { Footer, WhatsAppFloat } from "./Sections";
import { ConsultCTA } from "./Features";
import { Backdrop } from "./Media";
export default function PageShell({ label, title, text, bg, children }: { label: string; title: string; text: string; bg?: string; children: React.ReactNode }) {
  const body = <>
    <header className="px-6 pb-12 pt-44 md:px-10 md:pb-20 md:pt-56"><div className="mx-auto max-w-7xl">
      <p className="text-sm tracking-widest text-gold">{label}</p>
      <h1 className="mt-4 max-w-4xl font-serif text-5xl font-light leading-[1.05] md:text-7xl">{title}</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">{text}</p></div></header>{children}</>;
  return <><Navbar/><main>
    {bg ? <Backdrop src={bg} op={.55} overlay="linear-gradient(rgba(8,7,17,.55),rgba(8,7,17,.85))">{body}</Backdrop> : body}
    <ConsultCTA/></main>
    <Backdrop src="/images/sections/stars.png" op={.2} overlay="rgba(8,7,17,.6)"><Footer/></Backdrop><WhatsAppFloat/></>;
}
