"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3, House, MapPin } from "lucide-react";

export default function Event() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">

      {/* 🌸 background layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-100 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-100 blur-[140px] rounded-full" />

      {/* 🌿 decoration */}
      <img
        src="/bgn1.png"
        className="absolute top-0 left-0 w-[380px] opacity-10 pointer-events-none"
        alt=""
      />
      <img
        src="/bgn1.png"
        className="absolute bottom-0 right-0 w-[380px] rotate-180 opacity-10 pointer-events-none"
        alt=""
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="tracking-[0.35em] text-sky-500 text-xs uppercase">
            Wedding Event
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-serif text-[#0B4D78]">
            Save Our Special Day
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-sky-200 to-sky-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* CARD */}
        <div className="mt-20 flex justify-center">
          <EventCard
            title="Wedding Reception"
            date="Sunday, June 21, 2026"
            time="14.00 - 21.00"
            location="Ocean Resto & Function"
            address="Komp. Ruko King Business Centre Blok A2 No. 15-20, Belian, Batam Kota"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function EventCard({
  title,
  date,
  time,
  location,
  address,
}: {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      className="
        relative
        w-full
        max-w-md
        rounded-[32px]
        bg-white/70
        backdrop-blur-2xl
        border border-sky-100
        shadow-[0_30px_90px_rgba(14,116,144,0.12)]
        p-10
        overflow-hidden
      "
    >

      {/* ring overlay (FIX: jangan blok klik) */}
      <div className="absolute inset-0 rounded-[32px] ring-1 ring-sky-100/60 pointer-events-none" />

      {/* icon */}
      <div className="flex justify-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center shadow-md">
          <CalendarDays className="text-sky-600" size={26} />
        </div>
      </div>

      {/* title */}
      <h3 className="text-center text-3xl font-serif text-[#0B4D78] mt-6 relative z-10">
        {title}
      </h3>

      {/* details */}
      <div className="mt-8 space-y-5 text-slate-700 relative z-10">

        <div className="flex items-center gap-4">
          <CalendarDays size={18} className="text-sky-500" />
          <span className="text-sm">{date}</span>
        </div>

        <div className="flex items-center gap-4">
          <Clock3 size={18} className="text-sky-500" />
          <span className="text-sm">{time}</span>
        </div>

        <div className="flex items-start gap-4">
          <MapPin size={18} className="text-sky-500 mt-1" />
          <span className="text-sm leading-relaxed">{location}</span>
        </div>

        <div className="flex items-start gap-4">
          <House size={24} className="text-sky-500 mt-1" />
          <span className="text-sm leading-relaxed">{address}</span>
        </div>
      </div>

      {/* button (FIX: pastikan clickable) */}
      <a
        href="https://maps.app.goo.gl/PZzfSMxZN3B1u1s67"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative z-10
          mt-10
          inline-flex
          justify-center
          w-full
          rounded-full
          bg-gradient-to-r from-sky-400 to-sky-500
          hover:from-sky-500 hover:to-sky-600
          text-white
          py-3
          text-sm
          shadow-lg
          transition
        "
      >
        View Location
      </a>
    </motion.div>
  );
}