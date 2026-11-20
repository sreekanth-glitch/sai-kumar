"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { BIZ, wa } from "@/lib/data";

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", msg: "" });
  const send = (e) => {
    e.preventDefault();
    window.open(wa(`Hello, I am ${f.name}.\nPhone: ${f.phone}\n${f.msg}`), "_blank");
  };
  const info = [
    [FaPhoneAlt, "Call us", BIZ.phone, `tel:${BIZ.phone.replace(/\s/g, "")}`],
    [FaWhatsapp, "WhatsApp", "Chat with us", wa("Hello!")],
    [FaEnvelope, "Email", BIZ.email, `mailto:${BIZ.email}`],
    [FaMapMarkerAlt, "Visit us", BIZ.address, "#map"],
    [FaClock, "Open", BIZ.hours, "#"],
  ];
  const inp = "w-full rounded-lg border border-deep/20 bg-white px-4 py-3 focus:border-brass focus:outline-none";
  return (
    <>
      <section className="bg-deep py-16 text-center text-white">
        <div className="wrap"><h1 className="text-4xl font-extrabold">Contact us</h1><p className="mt-3 text-white/80">Ask about any product. We reply quickly on WhatsApp.</p></div>
      </section>
      <section className="wrap grid gap-10 py-14 lg:grid-cols-2">
        <div className="space-y-4">
          {info.map(([I, t, v, h], n) => (
            <Reveal key={t} delay={n * 0.06}>
              <a href={h} target={h.startsWith("http") ? "_blank" : undefined} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-deep text-brass"><I /></span>
                <span><span className="block text-sm text-deep/60">{t}</span><span className="font-semibold">{v}</span></span>
              </a>
            </Reveal>
          ))}
          <div className="flex gap-3 pt-2">
            {[[FaFacebookF, BIZ.social.facebook, "Facebook"], [FaInstagram, BIZ.social.instagram, "Instagram"], [FaYoutube, BIZ.social.youtube, "YouTube"], [FaWhatsapp, wa("Hello!"), "WhatsApp"]].map(([I, h, n]) => (
              <motion.a key={n} href={h} target="_blank" aria-label={n} whileHover={{ y: -4 }} className="grid h-11 w-11 place-items-center rounded-full bg-brass text-white"><I /></motion.a>
            ))}
          </div>
        </div>
        <Reveal x={40}>
          <form onSubmit={send} className="space-y-4 rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold">Send an enquiry</h2>
            <input required className={inp} placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <input required className={inp} placeholder="Phone number" inputMode="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
            <textarea required rows={4} className={inp} placeholder="Which product do you need? Add size and quantity." value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} />
            <button className="btn btn-brass w-full justify-center"><FaWhatsapp /> Send on WhatsApp</button>
          </form>
        </Reveal>
      </section>
      <section id="map" className="wrap pb-16">
        <iframe title="Shop location" src={BIZ.mapEmbed} loading="lazy" className="h-96 w-full rounded-2xl border-0" allowFullScreen />
      </section>
    </>
  );
}
