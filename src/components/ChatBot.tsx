"use client";
import { useEffect, useRef, useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, Lock, Sparkles, Phone } from "lucide-react";
import { BRAND, services, waLink } from "@/data/content";
import { submitContactForm } from "@/lib/api/contact";

type Msg = { id: number; from: "bot" | "user" | "lead"; text: string; at: number };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const fmt = (t: number) => new Date(t).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

const Avatar = ({ size = 40 }: { size?: number }) => (
  <span
    style={{ width: size, height: size }}
    className="relative grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-lgold to-gold font-serif text-night"
  >
    <span style={{ fontSize: size * 0.5 }}>ॐ</span>
    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-night bg-green-500" />
  </span>
);

function LeadCard({ onSend, onSkip }: { onSend: (n: string, p: string) => void; onSkip: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState("");
  const field =
    "w-full rounded-xl border border-gold/25 bg-dusk px-3 py-2.5 text-sm text-cream outline-none placeholder:text-muted/60 focus:border-gold";

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setErr("Please enter your name.");
    if (!/^[+\d][\d\s-]{6,}$/.test(phone.trim())) return setErr("Enter a valid phone number.");
    setErr("");
    onSend(name.trim(), phone.trim());
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-2.5 rounded-2xl border border-gold/30 bg-night p-4">
      <input className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Your name" />
      <input className={field} placeholder="Your phone number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} aria-label="Your phone number" />
      {err && <p role="alert" className="text-xs text-red-300">{err}</p>}
      <button className="w-full rounded-xl bg-gradient-to-r from-lgold to-gold py-2.5 text-sm font-semibold text-night transition hover:brightness-110">
        Continue on WhatsApp
      </button>
      <button type="button" onClick={onSkip} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-sm font-semibold text-night transition hover:brightness-110">
        <MessageCircle size={16} /> Just take me to WhatsApp
      </button>
      <a href={"tel:" + BRAND.tel} className="flex items-center justify-center gap-1.5 pt-1 text-xs text-lgold underline-offset-2 hover:underline">
        <Phone size={12} /> or call {BRAND.phone}
      </a>
    </form>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 0, from: "bot", text: "Namaste 🙏 I'm Psychic Dev's assistant. How can I guide you today?", at: Date.now() },
  ]);
  const [topic, setTopic] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const [leadShown, setLeadShown] = useState(false);
  const [text, setText] = useState("");
  const idRef = useRef(1);
  const endRef = useRef<HTMLDivElement>(null);

  const push = (from: Msg["from"], t: string) =>
    setMsgs((m) => [...m, { id: idRef.current++, from, text: t, at: Date.now() }]);

  async function botSay(lines: string[], lead = false) {
    setTyping(true);
    for (const l of lines) {
      await sleep(850);
      push("bot", l);
    }
    if (lead) {
      await sleep(400);
      push("lead", "");
      setLeadShown(true);
    }
    setTyping(false);
  }

  function pickTopic(t: string) {
    if (typing) return;
    setTopic(t);
    push("user", t);
    botSay([
      "Thank you for choosing " + t + ". I'm sorry if this has been weighing on you.",
      "What have you been noticing most? You can type it below.",
    ]);
  }

  function send(e: FormEvent) {
    e.preventDefault();
    const v = text.trim();
    if (!v || typing) return;
    setText("");
    push("user", v);
    if (/(price|fee|fees|cost|charge|rate)/i.test(v)) {
      botSay(["Fees depend on the service and the length of the session. Message us on WhatsApp and we will share the details."], !leadShown);
    } else if (!leadShown) {
      botSay(
        [
          "Thank you for sharing this with me. Every situation is different, so a personal consultation looks at your birth details (date, time and place) and offers perspective and traditional practices suited to you. No outcome can be promised, but you will receive calm, thoughtful guidance.",
          "Would you like a personal reading? Share your name and number and we will continue on WhatsApp.",
        ],
        true
      );
    } else {
      botSay(["Thanks for the message. For a detailed answer, please use the form above or message us on WhatsApp."]);
    }
  }

  async function toWhatsApp(name?: string, phone?: string) {
    const parts = ["Hello, I would like to book a private consultation."];
    if (topic) parts.push("Topic: " + topic + ".");
    if (name) parts.push("Name: " + name + ".");
    if (phone) parts.push("Phone: " + phone + ".");
    if (name && phone) {
      try {
        await submitContactForm({ name, phone, email: "", service: topic || "Chatbot enquiry", message: "Lead from chatbot" });
      } catch {}
      push("bot", "Thank you, " + name + ". Opening WhatsApp now.");
    }
    window.open(waLink(parts.join(" ")), "_blank", "noopener,noreferrer");
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs, typing, open]);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => setOpen(true)}
            aria-label="Open chat"
            className="fixed bottom-4 right-4 z-[60] flex items-center gap-3 rounded-full border border-gold/60 bg-night/90 py-2 pl-2 pr-5 text-left shadow-2xl backdrop-blur-md transition hover:border-gold"
          >
            <Avatar size={44} />
            <span className="leading-tight">
              <span className="block font-sans text-sm font-semibold text-cream">Psychic Dev</span>
              <span className="flex items-center gap-1 text-xs text-lgold">
                Ask your problem now <Sparkles size={12} />
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.section
            key="panel"
            data-lenis-prevent
            role="dialog"
            aria-label="Chat with Psychic Dev"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 z-[60] flex h-[min(34rem,calc(100dvh-6rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-gold/30 bg-night shadow-2xl"
          >
            <header className="flex items-center gap-3 border-b border-gold/30 bg-gradient-to-r from-plum to-dusk px-4 py-3">
              <Avatar />
              <div className="flex-1 leading-tight">
                <p className="font-serif text-lg text-cream">Psychic Dev</p>
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Online assistant
                </p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-cream transition hover:bg-white/20">
                <X size={16} />
              </button>
            </header>

            <div data-lenis-prevent className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-dusk px-4 py-4 [-webkit-overflow-scrolling:touch] [touch-action:pan-y]" aria-live="polite">
              {msgs.map((m) =>
                m.from === "lead" ? (
                  <LeadCard key={m.id} onSend={(n, p) => toWhatsApp(n, p)} onSkip={() => toWhatsApp()} />
                ) : (
                  <div key={m.id} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                    <div
                      className={
                        m.from === "user"
                          ? "max-w-[85%] rounded-2xl rounded-tr-sm bg-gold px-3.5 py-2.5 text-sm leading-relaxed text-night"
                          : "max-w-[85%] rounded-2xl rounded-tl-sm border border-gold/15 bg-night px-3.5 py-2.5 text-sm leading-relaxed text-cream"
                      }
                    >
                      {m.text}
                      <span className={m.from === "user" ? "mt-1 block text-right text-[10px] text-night/60" : "mt-1 block text-right text-[10px] text-muted"}>{fmt(m.at)}</span>
                    </div>
                  </div>
                )
              )}

              {topic === null && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {services.map((s) => (
                    <button key={s.t} onClick={() => pickTopic(s.t)} className="rounded-full border border-gold/40 px-3 py-1.5 text-xs text-lgold transition hover:bg-gold hover:text-night">
                      {s.t}
                    </button>
                  ))}
                </div>
              )}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-tl-sm border border-gold/15 bg-night px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-lgold" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form onSubmit={send} className="border-t border-gold/20 bg-night px-3 pt-3">
              <div className="flex items-center gap-2">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type your message..."
                  aria-label="Type your message"
                  className="min-w-0 flex-1 rounded-full border border-gold/30 bg-dusk px-4 py-2.5 text-sm text-cream outline-none placeholder:text-muted/60 focus:border-gold"
                />
                <button disabled={typing || !text.trim()} aria-label="Send" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-night transition hover:bg-lgold disabled:opacity-50">
                  <Send size={16} />
                </button>
              </div>
              <p className="flex items-center justify-center gap-1.5 py-2.5 text-[11px] text-muted">
                <Lock size={11} /> Private &amp; confidential
              </p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}