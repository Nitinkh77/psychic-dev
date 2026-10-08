"use client";
import { useState, FormEvent } from "react";
import { Check } from "lucide-react";
import { submitContactForm } from "@/lib/api/contact";
export default function AskBox({ service, services }: { service: string; services?: string[] }) {
  const [st, setSt] = useState<"idle" | "busy" | "done">("idle"), [err, setErr] = useState<Record<string, string>>({});
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>, er: Record<string, string> = {};
    if (!d.name?.trim()) er.name = "Please enter your name."; if (!/^[+\d][\d\s-]{6,}$/.test(d.phone || "")) er.phone = "Enter a valid phone number."; if (!d.message?.trim()) er.message = "Please add your question.";
    setErr(er); if (Object.keys(er).length) return; setSt("busy"); await submitContactForm({ name: d.name, phone: d.phone, email: "", service: d.service || service, message: d.message }); setSt("done");
  }
  const f = "w-full border-b border-gold/30 bg-transparent py-3 outline-none placeholder:text-muted/60 focus:border-gold";
  const E = ({ k }: { k: string }) => err[k] ? <p role="alert" className="mt-1 text-sm text-red-300">{err[k]}</p> : null;
  return <div className="rounded-2xl border border-gold/30 bg-night/75 p-6 backdrop-blur-md md:p-8">
    <h2 className="font-serif text-3xl text-lgold">Ask your question</h2><p className="mt-1 text-sm text-muted">Private and confidential.</p>
    {st === "done" ? <div role="status" className="mt-8"><Check className="text-gold" size={32}/><p className="mt-3 font-serif text-2xl">Thank you. We have your question.</p><p className="mt-2 text-sm text-muted">We will get back to you shortly.</p></div> :
    <form onSubmit={onSubmit} noValidate className="mt-4 space-y-4">
      <div><label htmlFor="aq-name" className="text-sm text-muted">Name</label><input id="aq-name" name="name" className={f}/><E k="name"/></div>
      <div><label htmlFor="aq-phone" className="text-sm text-muted">Phone</label><input id="aq-phone" name="phone" type="tel" className={f}/><E k="phone"/></div>
      {services && <div><label htmlFor="aq-svc" className="text-sm text-muted">Service</label><select id="aq-svc" name="service" defaultValue={service} className={`${f} bg-night`}>{services.map(x => <option key={x}>{x}</option>)}</select></div>}
      <div><label htmlFor="aq-msg" className="text-sm text-muted">Your question</label><textarea id="aq-msg" name="message" rows={4} placeholder="Ask your question here…" className={f}/><E k="message"/></div>
      <button disabled={st === "busy"} className="w-full rounded-full bg-gold px-6 py-3 font-medium text-night disabled:opacity-60">{st === "busy" ? "Sending…" : "Ask your first question"}</button></form>}</div>;
}
