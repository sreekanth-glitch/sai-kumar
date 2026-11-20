"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Img from "@/components/Img";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <section className="bg-deep py-16 text-center text-white">
        <div className="wrap"><h1 className="text-4xl font-extrabold">Gallery</h1><p className="mt-3 text-white/80">Our shop, our stock and our work.</p></div>
      </section>
      <section className="wrap columns-2 gap-4 py-14 md:columns-3">
        {GALLERY.map((g, n) => (
          <motion.button key={n} onClick={() => setOpen(g)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (n % 3) * 0.08 }} whileHover={{ scale: 1.03 }}
            className="mb-4 block w-full overflow-hidden rounded-xl">
            <Img src={g.src} alt={g.alt} label={`Photo ${n + 1}`} className={`w-full object-cover ${n % 3 === 0 ? "h-72" : "h-52"}`} />
          </motion.button>
        ))}
      </section>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <button aria-label="Close" className="absolute right-5 top-5 text-white"><FaTimes size={24} /></button>
            <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }} className="w-full max-w-3xl">
              <Img src={open.src} alt={open.alt} className="max-h-[85vh] w-full rounded-xl object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
