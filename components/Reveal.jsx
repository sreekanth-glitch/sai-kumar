"use client";
import { motion } from "framer-motion";
export default function Reveal({ children, delay = 0, x = 0, className = "" }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: x ? 0 : 28, x }} whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}
