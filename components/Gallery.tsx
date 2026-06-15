"use client";

import { motion } from "framer-motion";

const photos = [
  "/ctn.jpeg",
  "/couple.jpeg",
  "/ctn1.jpeg",
  "/ctn3.jpeg",
  "/hero.jpeg",
];

function Card({
  src,
  aspect,
  delay = 0,
}: {
  src: string;
  aspect: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        p-[6px]
        border border-sky-300/70
        shadow-[0_30px_90px_rgba(0,0,0,0.12)]
      "
    >
      <div className={`relative overflow-hidden rounded-2xl ${aspect}`}>
        <img
          src={src}
          className="w-full h-full object-cover scale-[1.06]"
          alt=""
        />
      </div>

      <div className="absolute inset-0 rounded-3xl ring-1 ring-sky-200/60" />

      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-sky-100/20" />
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* Decoration Flower Top */}
      <img
        src="/bgn1.png"
        alt=""
        className="
          absolute
          top-{-30px}
          left-80
          w-[220px]
          md:w-[380px]
          opacity-60
          pointer-events-none
        "
      />
      {/* Decoration Flower Top */}
      <img
        src="/bgn1.png"
        alt=""
        className="
          absolute
          top-0
          left-10
          w-[220px]
          md:w-[380px]
          opacity-50
          pointer-events-none
        "
      />

      {/* Decoration Flower Bottom */}
      <img
        src="/bgn1.png"
        alt=""
        className="
          absolute
          bottom-0
          right-0
          w-[220px]
          md:w-[380px]
          rotate-180
          opacity-80
          pointer-events-none
        "
      />
      {/* Decoration Flower Bottom */}
      <img
        src="/bgn1.png"
        alt=""
        className="
          absolute
          bottom-0
          right-5
          w-[220px]
          md:w-[380px]
          rotate-180
          opacity-50
          pointer-events-none
        "
      />

      {/* 🌸 FULL BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none">

        {/* soft glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_60%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70" />

        {/* 🌿 LEFT FLORAL FRAME */}
        <img
          src="/bgn1.png"
          className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-[420px] opacity-25 blur-[1px]"
        />
        <img
          src="/bgn1.png"
          className="absolute left-[-80px] top-[20%] w-[260px] opacity-10 rotate-12"
        />

        {/* 🌿 RIGHT FLORAL FRAME */}
        <img
          src="/bgn1.png"
          className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[420px] opacity-25 blur-[1px] rotate-180"
        />
        <img
          src="/bgn1.png"
          className="absolute right-[-80px] bottom-[20%] w-[260px] opacity-10 -rotate-12"
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="tracking-[0.5em] text-sky-500 text-xs uppercase">
            Our Moments
          </p>
          <h2 className="mt-4 text-4xl md:text-6xl font-serif text-[#0B4D78]">
            Wedding Gallery
          </h2>
          <div className="mt-4 w-24 h-[2px] bg-sky-300 mx-auto rounded-full" />
        </div>

        {/* ===== MAIN LAYOUT ===== */}
        <div className="space-y-6">

          {/* ROW 1 */}
          <div className="flex gap-4 items-end">
            <div className="w-[42%]">
              <Card src={photos[0]} delay={0.05} aspect="aspect-[3/4]" />
            </div>

            <div className="w-[58%] -mt-10">
              <Card src={photos[1]} delay={0.1} aspect="aspect-[16/10]" />
            </div>
          </div>

          {/* HERO */}
          <div>
            <Card
              src={photos[2]}
              delay={0.15}
              aspect="aspect-[21/9]"
            />
          </div>

          {/* ROW 3 */}
          <div className="flex gap-4 items-start">
            <div className="w-[55%]">
              <Card src={photos[3]} delay={0.2} aspect="aspect-[4/5]" />
            </div>

            <div className="w-[45%] mt-10">
              <Card src={photos[4]} delay={0.25} aspect="aspect-[3/4]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}