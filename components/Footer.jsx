import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BIZ } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="bg-deep text-white/80">
      <div className="wrap grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-white">{BIZ.name}</h3>
          <p className="mt-2 text-sm">Valves, taps, fittings and bathroom accessories. Supplying all over Andhra Pradesh.</p>
        </div>
        <div className="text-sm">
          <h3 className="mb-2 font-semibold text-white">Pages</h3>
          {[["/", "Home"], ["/about", "About"], ["/products", "Products"], ["/gallery", "Gallery"], ["/contact", "Contact Us"]].map(([h, l]) => (
            <Link key={h} href={h} className="block py-0.5 hover:text-brass">{l}</Link>
          ))}
        </div>
        <div className="text-sm">
          <h3 className="mb-2 font-semibold text-white">Contact</h3>
          <p>{BIZ.phone}</p><p>{BIZ.email}</p><p>{BIZ.hours}</p>
          <div className="mt-3 flex gap-3">
            {[[FaFacebookF, BIZ.social.facebook, "Facebook"], [FaInstagram, BIZ.social.instagram, "Instagram"], [FaYoutube, BIZ.social.youtube, "YouTube"]].map(([I, h, n]) => (
              <a key={n} href={h} aria-label={n} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brass"><I /></a>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {BIZ.name}. All rights reserved.</p>
    </footer>
  );
}
