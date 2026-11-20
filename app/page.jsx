"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaShieldAlt, FaTruck, FaRupeeSign, FaTools } from "react-icons/fa";
import HeroSlider from "@/components/HeroSlider";
import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import { CATEGORIES, SLIDES, wa } from "@/lib/data";

const WHY = [
  [FaShieldAlt, "Genuine quality", "Tested brass, CP and PVC products from trusted makers."],
  [FaRupeeSign, "Fair prices", "Good rates for retail buyers, plumbers and bulk orders."],
  [FaTruck, "All Andhra Pradesh", "We send orders to towns and villages across the state."],
  [FaTools, "Right advice", "Tell us the problem. We suggest the right part."],
];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="wrap relative z-10 -mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {SLIDES.slice(0, 4).map((s, n) => (
          <motion.div key={n} whileHover={{ y: -6 }} className="overflow-hidden rounded-xl border-b-4 border-brass bg-white shadow-lg">
            <Img src={s.img} alt={s.title} label="Our shop photo" className="h-36 w-full object-cover sm:h-44" />
          </motion.div>
        ))}
      </section>

      <section className="wrap py-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Everything for taps, pipes and bathrooms, under one roof</h2>
          <p className="mt-4 text-deep/75">SAI Kumar Valves & Cocks has served plumbers, builders and homeowners for over 20 years. From a small washer to a full set of bathroom fittings, you get the right product at the right price, with honest advice.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, n) => (
            <Reveal key={c.slug} delay={(n % 3) * 0.08}>
              <Link href="/products" className="group block overflow-hidden rounded-2xl bg-white shadow">
                <div className="overflow-hidden"><Img src={c.images[0]} alt={c.name} className="h-44 w-full object-cover transition duration-500 group-hover:scale-110" /></div>
                <div className="p-5"><h3 className="text-lg font-bold">{c.name}</h3><p className="mt-1 text-sm text-deep/70">{c.desc}</p></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-steel py-20">
        <div className="wrap">
          <Reveal><h2 className="text-3xl font-bold">Why buyers choose us</h2></Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(([I, t, d], n) => (
              <Reveal key={t} delay={n * 0.1}>
                <div className="h-full rounded-2xl bg-white p-6">
                  <motion.span whileHover={{ rotate: 20 }} className="grid h-12 w-12 place-items-center rounded-full bg-deep text-brass"><I size={20} /></motion.span>
                  <h3 className="mt-4 font-bold">{t}</h3><p className="mt-1 text-sm text-deep/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-20">
        <Reveal className="rounded-3xl bg-deep p-10 text-center text-white sm:p-14">
          <h2 className="text-3xl font-bold">Need a quote for valves, taps or fittings?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">Send us the item name and quantity on WhatsApp. We reply with price and availability.</p>
          <a href={wa("Hello, please send me a quote for:")} target="_blank" className="btn btn-brass mt-6"><FaWhatsapp /> Get a quote on WhatsApp</a>
        </Reveal>
      </section>
    </>
  );
}
