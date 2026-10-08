"use client";
import Image, { ImageProps } from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
export function Img({ fb, alt, ...p }: ImageProps & { fb?: string }) {
  const [src, setSrc] = useState(p.src); const [dead, setDead] = useState(false);
  if (dead) return null;
  return <Image {...p} src={src} alt={alt} onError={() => (fb && src !== fb ? setSrc(fb) : setDead(true))} />;
}
export const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) =>
  <motion.div className={className} initial={{ opacity: 0, scale: .97, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .8, ease: "easeOut" }}>{children}</motion.div>;
// Spring-physics link/button
export const SpringA = ({ children, ...p }: React.ComponentProps<typeof motion.a>) =>
  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} transition={{ type: "spring", stiffness: 420, damping: 18 }} {...p}>{children}</motion.a>;
export function Backdrop({ src, fb, op = .3, overlay, pos = "center", blur = false, className = "", children }: { src: string; fb?: string; op?: number; overlay: string; pos?: string; blur?: boolean; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null), calm = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], calm ? ["0%", "0%"] : ["-7%", "7%"]); // parallax
  return <div ref={ref} className={`relative isolate overflow-hidden ${className}`}>
    <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[10%] -z-20">
      <Img src={src} fb={fb} alt="" fill sizes="100vw" className={`object-cover ${blur ? "scale-110 blur-md" : ""}`} style={{ objectPosition: pos, opacity: op }} /></motion.div>
    <div className="absolute inset-0 -z-10" style={{ background: overlay }} />{children}</div>;
}
