// ====== EDIT THESE DETAILS ======
export const BIZ = {
  name: "SAI Kumar Valves & Cocks (P) Ltd",
  short: "SAI Kumar",
  phone: "+91 90000 00000",
  whatsapp: "919000000000", // country code + number, no + or spaces
  email: "info@saikumarvalves.com",
  address: "Shop No. __, Main Road, Your Town, Andhra Pradesh – 5XXXXX",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM",
  mapEmbed: "https://www.google.com/maps?q=Andhra+Pradesh&output=embed", // replace with your shop's Google Maps embed link
  social: { facebook: "#", instagram: "#", youtube: "#" },
};
export const wa = (text) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(text)}`;

// Put your photos in /public/images/ with these names (or change the paths)
export const SLIDES = [
  {
    img: "/images/hgmag_living_luxury.jpg",
    title: "Valves & Cocks you can trust",
    text: "Brass, CP and PVC valves for homes, buildings and industry.",
  },
  {
    img: "/images/two-handle.webp",
    title: "Showers, Faucets & Taps",
    text: "Smooth finish, leak-free fittings for every bathroom.",
  },
  {
    img: "/images/images.jfif",
    title: "Hoses, Pipes & Fittings",
    text: "Strong hoses, level tubes and waste pipes in all sizes.",
  },
  {
    img: "/images/images (1).jfif",
    title: "Flush Tanks & Bathroom Accessories",
    text: "Everything to complete a bathroom, from one shop.",
  },
  {
    img: "/images/PackOf6_2048x2048.webp",
    title: "Supplying all over Andhra Pradesh",
    text: "Retail and bulk orders. Ask us on WhatsApp for a quote.",
  },
];

export const CATEGORIES = [
  {
    slug: "showers-faucets",
    name: "Showers & Faucets",
    desc: "Overhead and hand showers, health faucets and bib cocks.",
  },
  {
    slug: "accessories-spares",
    name: "Accessories & Spares",
    desc: "Cartridges, washers, spindles and spare parts for all brands.",
  },
  {
    slug: "hoses-level-tubes",
    name: "Hoses & Level Tubes",
    desc: "Flexible hoses, braided connectors and water level tubes.",
  },
  {
    slug: "taps-fittings",
    name: "Taps & Fittings",
    desc: "Pillar cocks, angle cocks, bib taps and pipe fittings.",
  },
  {
    slug: "flush-tank-seat-cover",
    name: "Flush Tank & Seat Cover",
    desc: "Flush tanks, flush valves, and strong toilet seat covers.",
  },
  {
    slug: "bathroom-accessories",
    name: "Bathroom Accessories",
    desc: "Towel rods, soap dishes, hooks, shelves and holders.",
  },
  {
    slug: "water-tank-filter",
    name: "Water Tank Filter",
    desc: "Inlet filters and strainers that keep tank water clean.",
  },
  {
    slug: "valves",
    name: "Valves",
    desc: "Ball valves, gate valves, check valves and foot valves.",
  },
  {
    slug: "waste-pipe-tube",
    name: "Waste Pipe & Tube",
    desc: "Waste pipes, bottle traps and corrugated tubes.",
  },
].map((c) => ({
  ...c,
  images: [1, 2, 3].map((n) => `/images/products/${c.slug}-${n}.jpg`),
}));

export const GALLERY = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery${i + 1}.jpg`,
  alt: `SAI Kumar Valves photo ${i + 1}`,
}));

export const REVIEWS = [
  {
    name: "Ramesh Babu",
    place: "Rajamahendravaram",
    text: "Genuine products and fair prices. I have bought valves and fittings here for my plumbing work for years.",
  },
  {
    name: "Lakshmi Prasad",
    place: "Kakinada",
    text: "Wide range of taps and bathroom accessories. They helped me pick the right items and delivered on time.",
  },
  {
    name: "Srinivas Rao",
    place: "Vijayawada",
    text: "Bulk order for our apartment project was packed well and arrived without damage. Good support on WhatsApp.",
  },
  {
    name: "Padma Devi",
    place: "Visakhapatnam",
    text: "Quick replies and the spare parts matched perfectly. Very honest shop.",
  },
];
