"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero({
  onOpenAction,
}: {
  onOpenAction: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");

    const formatName = (text: string) =>
      text.replace(/\b\w/g, (c) => c.toUpperCase());

    if (name) {
      const decoded = decodeURIComponent(name.replace(/\+/g, " "));
      setGuestName(formatName(decoded));
    } else {
      setGuestName("-");
    }
  }, []);

  // 🎵 FADE IN MUSIC
  const playMusic = async () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0;

    try {
      await audio.play();
      setIsPlaying(true);

      let vol = 0;
      const interval = setInterval(() => {
        if (!audioRef.current) return;

        if (vol < 1) {
          vol += 0.05;
          
        } else {
          clearInterval(interval);
        }
      }, 80);
    } catch (err) {
      console.log("Autoplay blocked:", err);
    }
  };

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      bg-[radial-gradient(circle_at_top,#ffffff_0%,#f6faff_40%,#dbeafe_100%)]
    "
    >
      {/* 🎵 AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>

      {/* FLOWER BACKGROUND */}
      <img src="/bgn.jpg" className="absolute top-0 left-0 w-[250px] md:w-[450px] opacity-15 pointer-events-none" />
      <img src="/bgn.jpg" className="absolute top-0 right-0 w-[220px] md:w-[350px] rotate-90 opacity-10 pointer-events-none" />
      <img src="/bgn.jpg" className="absolute bottom-0 left-0 w-[220px] md:w-[350px] -rotate-90 opacity-10 pointer-events-none" />
      <img src="/bgn.jpg" className="absolute bottom-0 right-0 w-[250px] md:w-[450px] rotate-180 opacity-15 pointer-events-none" />

      {/* BLUR EFFECT */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-sky-200/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">

        {/* TITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[10px] text-sky-500 text-xs md:text-sm"
        >
          Wedding Invitation
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.4 }}
          className="h-[2px] bg-sky-300 mx-auto mt-6"
        />

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-[60px] md:text-[110px] lg:text-[140px] leading-none font-serif text-[#0B4D78]"
        >
          Bojan & Evi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 uppercase tracking-[4px] text-sky-600 text-xs md:text-sm"
        >
          A Celebration of Love & Forever
        </motion.p>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="relative flex justify-center mt-16"
        >
          <div className="absolute -inset-4 border border-sky-200 rounded-[45px]" />

          <img
            src="/bgn1.png"
            className="absolute -top-12 -left-12 w-28 md:w-44 z-20"
          />
          <img
            src="/bgn1.png"
            className="absolute -bottom-12 -right-12 w-28 md:w-44 rotate-180 z-20"
          />

          <div className="relative bg-white p-3 rounded-[40px] shadow-[0_40px_80px_rgba(11,77,120,0.18)]">
            <img
              src="/hero.jpeg"
              className="w-[330px] md:w-[520px] lg:w-[650px] rounded-[30px] object-cover"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 text-sm text-sky-800"
        >
             Dear<br/>
           {guestName}
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-14 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-10 py-4 text-white font-medium shadow-[0_15px_35px_rgba(59,130,246,0.35)]"
          onClick={() => {
            playMusic();       // 🎵 start music
            onOpenAction();    // 📜 scroll ke section berikutnya
          }}
        >
          Open Invitation
        </motion.button>
      </div>
    </section>
  );
}