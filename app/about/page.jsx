"use client";
import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import Img from "@/components/Img";
import { REVIEWS, CATEGORIES } from "@/lib/data";

function Count({ to, suffix = "" }) {
  const [v, setV] = useState(0);
  useEffect(() => { const c = animate(0, to, { duration: 2, onUpdate: (x) => setV(Math.round(x)) }); return () => c.stop(); }, [to]);
  return <>{v}{suffix}</>;
}

export default function About() {
  return (
    <>
      <section className="bg-deep py-20 text-white">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <h1 className="text-4xl font-extrabold sm:text-5xl">Two decades of getting water to flow right</h1>
            <p className="mt-5 text-white/80">SAI Kumar Valves & Cocks (P) Ltd started as a small counter shop for taps and valves. Today we supply showers, faucets, hoses, flush tanks, filters, waste pipes and bathroom accessories to customers all over Andhra Pradesh.</p>
          </Reveal>
          <Reveal x={40}><Img src="/images/about.jpg" alt="Our shop" label="Add shop photo (about.jpg)" className="h-72 w-full rounded-2xl object-cover" /></Reveal>
        </div>
      </section>

      <section className="wrap grid grid-cols-2 gap-4 py-14 md:grid-cols-4">
        {[[20, "+", "Years of experience"], [9, "", "Product categories"], [5000, "+", "Happy customers"], [13, "", "Districts served"]].map(([n, s, l]) => (
          <motion.div key={l} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-2xl bg-white p-6 text-center shadow">
            <div className="font-head text-4xl font-extrabold text-brass"><Count to={n} suffix={s} /></div>
            <p className="mt-1 text-sm text-deep/70">{l}</p>
          </motion.div>
        ))}
      </section>

      <section className="wrap grid gap-10 pb-16 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold">Our story</h2>
          <p className="mt-4 text-deep/75">We began with one belief: a plumber should never have to visit three shops to finish one job. Over 20 years we built a stock that covers the full range, from small spares to complete bathroom sets.</p>
          <p className="mt-3 text-deep/75">We buy from trusted manufacturers, check what we sell, and explain the difference between a cheap part and a lasting one. That is why plumbers, contractors and families keep coming back.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="text-3xl font-bold">What we promise</h2>
          <ul className="mt-4 space-y-3 text-deep/75">
            <li>Genuine products with proper finish and fit.</li>
            <li>Clear prices, with no surprise charges.</li>
            <li>Help choosing the right size and type.</li>
            <li>Safe packing and delivery across Andhra Pradesh.</li>
          </ul>
          <p className="mt-5 text-sm text-deep/60">We stock: {CATEGORIES.map((c) => c.name).join(", ")}.</p>
        </Reveal>
      </section>

      <section className="bg-steel py-20">
        <div className="wrap">
          <Reveal><h2 className="text-3xl font-bold">What our customers say</h2></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {REVIEWS.map((r, n) => (
              <Reveal key={r.name} delay={(n % 2) * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="h-full rounded-2xl bg-white p-6">
                  <FaQuoteLeft className="text-brass" />
                  <p className="mt-3 text-deep/80">{r.text}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div><p className="font-bold">{r.name}</p><p className="text-xs text-deep/60">{r.place}</p></div>
                    <div className="flex text-brass">{[...Array(5)].map((_, k) => <FaStar key={k} />)}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
