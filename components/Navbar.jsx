"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { BIZ, wa } from "@/lib/data";

const LINKS = [["/", "Home"], ["/about", "About"], ["/products", "Products"], ["/gallery", "Gallery"], ["/contact", "Contact Us"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-deep/95 text-white backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-head text-lg font-bold leading-tight">
          {BIZ.short} <span className="text-brass">Valves & Cocks</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className="relative py-1 text-sm font-medium hover:text-brass">
              {label}
              {path === href && <motion.span layoutId="nav-ul" className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-brass" />}
            </Link>
          ))}
          <a href={wa("Hello, I want to enquire about your products.")} target="_blank" className="btn btn-brass !py-2 text-sm">
            <FaWhatsapp /> Enquire
          </a>
        </nav>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <FaTimes size={22} /> : <FaBars size={22} />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 md:hidden">
            <div className="wrap flex flex-col gap-1 py-3">
              {LINKS.map(([href, label]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-2 ${path === href ? "bg-white/10 text-brass" : ""}`}>{label}</Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
