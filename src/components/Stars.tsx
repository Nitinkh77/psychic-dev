"use client";
import { useEffect, useRef } from "react";
export default function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, x = c.getContext("2d")!; let raf = 0, t = 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fit = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; }; fit(); addEventListener("resize", fit);
    const s = Array.from({ length: 90 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.2 + .3, p: Math.random() * 6, v: Math.random() * 4e-5 + 1e-5 }));
    const draw = () => { x.clearRect(0,0,c.width,c.height); t += .01;
      s.forEach(o => { o.y = (o.y + o.v) % 1; x.globalAlpha = .25 + .55 * Math.abs(Math.sin(t + o.p)); x.fillStyle = "#F8F2E8"; x.beginPath(); x.arc(o.x*c.width, o.y*c.height, o.r, 0, 7); x.fill(); });
      if (!reduce) raf = requestAnimationFrame(draw); };
    draw(); return () => { cancelAnimationFrame(raf); removeEventListener("resize", fit); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
