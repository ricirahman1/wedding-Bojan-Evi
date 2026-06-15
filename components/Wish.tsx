"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { Allura } from "next/font/google";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const titleFont = Allura({ subsets: ["latin"], weight: ["400"] });

interface Wish {
  id: string;
  name: string;
  message: string;
}

export default function WeddingWishFloral() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWishes = async () => {
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(12);

    if (data) setWishes(data);
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const sendWish = async () => {
    if (!name.trim() || !message.trim()) return;

    setLoading(true);

    await supabase.from("wishes").insert([{ name, message }]);

    setName("");
    setMessage("");
    setLoading(false);

    fetchWishes();
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* 🌸 BACKGROUND FLOWER */}
      <Image
        src="/bgn.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
      />

      {/* 💙 SOFT BLUE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_60%)]" />

      {/* HEADER */}
      <div className="relative z-10 text-center pt-16">
        <h1 className={`${titleFont.className} text-5xl text-sky-800`}>
          Wedding Wishes
        </h1>
        <p className="text-sky-500 tracking-[0.4em] text-xs mt-2">
          LEAVE YOUR LOVE MESSAGE
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">

        {/* FORM */}
        <div className="
          bg-white/80 backdrop-blur-xl
          border border-sky-100
          rounded-3xl p-6
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        ">

            {/* 🌸 TOP LEFT */}
              <Image
                src="/bgn1.png"
                alt=""
                width={60}
                height={60}
                className="absolute -top-2 -left-2 opacity-90"
              />
              
          <h2 className="text-sky-700 text-lg mb-4">
            Send Wishes 💙
          </h2>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="
              w-full mb-3 p-3 rounded-xl
              bg-white border border-sky-100
              outline-none text-sky-800
            "
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your blessing..."
            className="
              w-full h-28 p-3 rounded-xl
              bg-white border border-sky-100
              outline-none text-sky-800 resize-none
            "
          />

          <button
            onClick={sendWish}
            className="
              mt-4 w-full py-3 rounded-xl
              bg-sky-400 hover:bg-sky-500
              text-white transition
            "
          >
            {loading ? "Sending..." : "Send Wish ✨"}
          </button>
        </div>

        {/* WISH WALL */}
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">

          {wishes.map((wish, i) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="
                relative
                bg-white/90
                border border-sky-100
                rounded-2xl p-4
                shadow-sm
                overflow-hidden
              "
            >

              {/* 🌸 TOP LEFT */}
              <Image
                src="/bgn1.png"
                alt=""
                width={35}
                height={35}
                className="absolute -top-2 -left-2 opacity-60"
              />

              {/* 🌸 TOP RIGHT */}
              <Image
                src="/bgn1.png"
                alt=""
                width={35}
                height={35}
                className="absolute -top-2 -right-2 opacity-60"
              />

              {/* 🌸 BOTTOM LEFT */}
              <Image
                src="/bgn1.png"
                alt=""
                width={35}
                height={35}
                className="absolute -bottom-2 -left-2 opacity-60"
              />

              {/* 🌸 BOTTOM RIGHT */}
              <Image
                src="/bgn1.png"
                alt=""
                width={35}
                height={35}
                className="absolute -bottom-2 -right-2 opacity-60"
              />

              {/* CONTENT */}
              <p className="text-xs text-sky-500 mb-2">
                — {wish.name}
              </p>

              <p className="text-sky-800 text-sm leading-relaxed">
                {wish.message}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}