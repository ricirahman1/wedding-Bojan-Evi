"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Countdown() {
  const weddingDate = new Date(
    "2026-06-21T08:00:00"
  ).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) return;

      setTimeLeft({
        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section
      className="
        relative
        min-h-[700px]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* Background */}
      <img
        src="/ctn.jpeg"
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/30
        "
      />

      {/* Decoration Flower Top */}
      <img
        src="/bgn1.png"
        alt=""
        className="
          absolute
          top-0
          left-0
          w-[220px]
          md:w-[380px]
          opacity-30
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
          opacity-30
          pointer-events-none
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="
          relative
          z-10
          text-center
          px-6
        "
      >
        <p
          className="
            uppercase
            tracking-[8px]
            text-sky-100
            text-xs
            md:text-sm
          "
        >
          Save The Date
        </p>

        <h2
          className={`
            ${titleFont.className}
            mt-5
            text-white
            text-5xl
            md:text-7xl
            drop-shadow-xl
          `}
        >
          21 June 2026
        </h2>

        <p
          className="
            mt-4
            text-white/80
            tracking-[4px]
            uppercase
            text-xs
            md:text-sm
          "
        >
          Sunday
        </p>

        {/* Countdown */}
        <div className="relative mt-14 inline-flex items-center justify-center">

          {/* Flower Left */}
          <img
            src="/bgn1.png"
            alt=""
            className="
              absolute
              -left-12
              md:-left-28
              w-20
              md:w-36
              opacity-90
              z-20
              pointer-events-none
            "
          />

          {/* Flower Right */}
          <img
            src="/bgn1.png"
            alt=""
            className="
              absolute
              -right-12
              md:-right-28
              w-20
              md:w-36
              rotate-180
              opacity-90
              z-20
              pointer-events-none
            "
          />

          {/* Countdown Bar */}
          <div
            className="
              bg-sky-200/20
              backdrop-blur-2xl
              border
              border-sky-100/30
              rounded-full
              px-6
              
              md:px-14
              py-4
              shadow-[0_20px_50px_rgba(125,211,252,0.25)]
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-5
                md:gap-10
              "
            >
              <TimeItem
                value={timeLeft.days}
                label="Days"
              />

              <span className="hidden md:block text-sky-100">
                •
              </span>

              <TimeItem
                value={timeLeft.hours}
                label="Hours"
              />

              <span className="hidden md:block text-sky-100">
                •
              </span>

              <TimeItem
                value={timeLeft.minutes}
                label="Minutes"
              />

              <span className="hidden md:block text-sky-100">
                •
              </span>

              <TimeItem
                value={timeLeft.seconds}
                label="Seconds"
              />
            </div>
          </div>
        </div>

        <p
          className="
            mt-8
            text-white/80
            text-sm
            md:text-base
            tracking-wide
          "
        >
          Counting down to our forever
        </p>
      </motion.div>
    </section>
  );
}

function TimeItem({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="text-center min-w-[55px]">
      <div
        className="
          text-white
          text-2xl
          md:text-4xl
          font-semibold
          drop-shadow-lg
        "
      >
        {String(value).padStart(2, "0")}
      </div>

      <div
        className="
          uppercase
          tracking-[3px]
          text-[10px]
          md:text-xs
          text-sky-100
          mt-1
        "
      >
        {label}
      </div>
    </div>
  );
}