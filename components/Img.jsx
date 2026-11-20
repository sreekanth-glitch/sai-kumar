"use client";
import { useState } from "react";
export default function Img({ src, alt, className = "", label }) {
  const [bad, setBad] = useState(false);
  if (bad || !src)
    return <div className={`ph grid place-items-center p-3 text-center text-sm text-white/80 ${className}`}>{label || alt}</div>;
  return <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={className} />;
}
