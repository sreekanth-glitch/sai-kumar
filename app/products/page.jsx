"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import { CATEGORIES, wa } from "@/lib/data";

export default function Products() {
  const [sel, setSel] = useState(null);
  const [big, setBig] = useState(0);
  const openCat = (c) => { setSel(c); setBig(0); };
  return (
    <>
      <section className="bg-deep py-16 text-center text-white">
        <div className="wrap"><h1 className="text-4xl font-extrabold">Our products</h1>
          <p className="mx-auto mt-3 max-w-xl text-white/80">Choose a category to see photos. Send us the item you like on WhatsApp for price and stock.</p></div>
      </section>
      <section className="wrap grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c, n) => (
          <Reveal key={c.slug} delay={(n % 3) * 0.08}>
            <motion.button whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} onClick={() => openCat(c)} className="block w-full overflow-hidden rounded-2xl bg-white text-left shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass">
              <Img src={c.images[0]} alt={c.name} className="h-52 w-full object-cover" />
              <div className="border-t-4 border-brass p-5"><h3 className="text-lg font-bold">{c.name}</h3><p className="mt-1 text-sm text-deep/70">{c.desc}</p></div>
            </motion.button>
          </Reveal>
        ))}
      </section>

      <AnimatePresence>
        {sel && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-deep/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="max-h-[92vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white p-5">
              <div className="flex items-start justify-between">
                <div><h2 className="text-2xl font-bold">{sel.name}</h2><p className="text-sm text-deep/70">{sel.desc}</p></div>
                <button aria-label="Close" onClick={() => setSel(null)} className="p-2"><FaTimes /></button>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={big} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4">
                  <Img src={sel.images[big]} alt={sel.name} className="h-72 w-full rounded-xl object-cover sm:h-96" />
                </motion.div>
              </AnimatePresence>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {sel.images.map((im, k) => (
                  <button key={k} onClick={() => setBig(k)} className={`overflow-hidden rounded-lg border-2 ${big === k ? "border-brass" : "border-transparent"}`}>
                    <Img src={im} alt={`${sel.name} ${k + 1}`} className="h-20 w-full object-cover" />
                  </button>
                ))}
              </div>
              <a href={wa(`Hello, I want to enquire about ${sel.name}.`)} target="_blank" className="btn btn-brass mt-5 w-full justify-center"><FaWhatsapp /> Enquire about {sel.name}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
