"use client";
import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Media";
function Tile({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null; // missing file: tile hides itself
  return <Reveal><div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20">
    <Image src={src} alt={alt} fill sizes="(max-width:768px) 100vw,360px" onError={() => setOk(false)} className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"/></div></Reveal>;
}
export default function Gallery({ images, title }: { images: string[]; title: string }) {
  return <div className="mt-10 grid gap-4 sm:grid-cols-2">{images.map((s, i) => <Tile key={s} src={s} alt={`${title} ${i + 1}`}/>)}</div>;
}
