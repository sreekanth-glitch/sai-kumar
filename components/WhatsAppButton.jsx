"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { wa } from "@/lib/data";
export default function WhatsAppButton() {
  return (
    <motion.a href={wa("Hello, I want to enquire about your products.")} target="_blank" aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", delay: 1 }}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg">
      <FaWhatsapp size={30} />
    </motion.a>
  );
}
