"use client";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return; // reduced-motion: native scroll
    const l = new Lenis({ lerp: 0.1, anchors: true }); let id = 0;
    const raf = (t: number) => { l.raf(t); id = requestAnimationFrame(raf); }; id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); l.destroy(); };
  }, []);
  return <MotionConfig reducedMotion="user">
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob left-[-10%] top-[10%] h-[32rem] w-[32rem] bg-[#6b3fa0]/25"/>
      <div className="blob right-[-8%] top-[45%] h-[28rem] w-[28rem] bg-[#2a4a9a]/20" style={{ animationDelay: "-8s" }}/>
      <div className="blob bottom-[-10%] left-[30%] h-[26rem] w-[26rem] bg-gold/10" style={{ animationDelay: "-14s" }}/></div>
    {children}</MotionConfig>;
}
