import PageShell from "@/components/PageShell";
import { Contact, MapSection } from "@/components/Sections";
import { SpringA, Reveal } from "@/components/Media";
import { BRAND, waLink } from "@/data/content";
export const metadata = { title: "Contact — Psychic Dev" };

const ways = [
  { t: "Message on WhatsApp", d: "The quickest way to reach us. Share your question in your own words and we reply with available times.", cta: "Open WhatsApp", href: waLink("Hello, I would like to book a private consultation.") },
  { t: "Call us", d: `Prefer to speak? Call ${BRAND.phone}. Our service is available 24×7, so you can reach us at a time that suits you.`, cta: "Call now", href: `tel:${BRAND.tel}` },
  { t: "Use the form below", d: "Write to us at your own pace. Tell us what is on your mind and we will get back to you personally.", cta: "Go to the form", href: "#contact-form" },
];
const include = [
  "Your name and the best way to reach you.",
  "A short description of your question or situation.",
  "If relevant, your birth date, time and place.",
  "Any preferred time for the conversation.",
];
const steps = [
  ["1", "Reach out", "Send a message, call, or fill in the form. Share only what you are comfortable with."],
  ["2", "We reply", "We respond with available times for a private, unhurried conversation."],
  ["3", "We talk it through", "Together we look at your question and close with practical, reflective guidance. No outcome is promised or guaranteed."],
];

export default function Page() {
  return <PageShell label="CONTACT" title="Reach out, in confidence." text="Request a private consultation or message us on WhatsApp." bg="/images/backgrounds/temple-glow.png">
    <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
      <Reveal><h2 className="font-serif text-3xl font-light text-lgold md:text-5xl">Choose the way that feels easiest</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">Every conversation is private and confidential. There is no pressure and no obligation, only a calm space to ask what matters to you.</p></Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{ways.map(w => <Reveal key={w.t}><div className="flex h-full flex-col rounded-2xl border border-gold/25 bg-dusk/60 p-7">
        <h3 className="font-serif text-2xl text-cream">{w.t}</h3>
        <p className="mt-3 flex-1 text-muted">{w.d}</p>
        <SpringA href={w.href} className="mt-6 inline-block self-start rounded-full bg-gold px-7 py-3 font-medium text-night">{w.cta}</SpringA></div></Reveal>)}</div>
      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal><div><h3 className="font-serif text-2xl text-lgold md:text-3xl">What to include in your message</h3>
          <ul className="mt-5 space-y-3 text-muted">{include.map(i => <li key={i} className="border-t border-gold/20 pt-3">{i}</li>)}</ul>
          <p className="mt-5 text-sm text-muted">Your details are kept confidential and are used only to prepare for your conversation.</p></div></Reveal>
        <Reveal><div><h3 className="font-serif text-2xl text-lgold md:text-3xl">How it works</h3>
          <ol className="mt-5 space-y-5">{steps.map(([n, t, d]) => <li key={n} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 font-serif text-lg text-gold">{n}</span>
            <div><p className="font-serif text-xl text-cream">{t}</p><p className="mt-1 text-muted">{d}</p></div></li>)}</ol></div></Reveal>
      </div>
    </section>
    <div id="contact-form"><Contact/></div>
    <MapSection/>
  </PageShell>;
}