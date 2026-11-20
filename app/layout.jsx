import "./globals.css";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "SAI Kumar Valves & Cocks (P) Ltd | Andhra Pradesh",
  description: "Valves, taps, showers, faucets, hoses, flush tanks and bathroom accessories. Supplying all over Andhra Pradesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionConfig>
      </body>
    </html>
  );
}
