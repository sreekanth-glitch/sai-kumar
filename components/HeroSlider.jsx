"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Img from "./Img";
import { SLIDES, wa } from "@/lib/data";

export default function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];
  return (
    <section className="relative h-[78vh] min-h-[480px] overflow-hidden bg-deep">
      <AnimatePresence mode="sync">
        <motion.div key={i} className="absolute inset-0" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
          <Img src={s.img} alt={s.title} label="Add slide photo" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/60 to-transparent" />
      <motion.svg viewBox="0 0 100 100" className="absolute -right-16 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-brass/30 md:block"
        animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="50" cy="50" r="44" /><circle cx="50" cy="50" r="8" />
        {[0, 60, 120].map((r) => <line key={r} x1="50" y1="6" x2="50" y2="94" transform={`rotate(${r} 50 50)`} />)}
      </motion.svg>
      <div className="wrap relative flex h-full items-center">
        <AnimatePresence mode="wait">
          <motion.div key={i} className="max-w-xl text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{s.title}</h1>
            <p className="mt-4 text-lg text-white/85">{s.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={wa("Hello, I want to enquire about your products.")} target="_blank" className="btn btn-brass"><FaWhatsapp /> Enquire on WhatsApp</a>
              <Link href="/products" className="btn btn-line">View products</Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, n) => (
          <button key={n} aria-label={`Slide ${n + 1}`} onClick={() => setI(n)} className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-brass" : "w-2 bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}
