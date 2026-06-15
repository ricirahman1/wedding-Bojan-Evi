"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cormorant_Garamond,
  Poppins,
} from "next/font/google";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Couple() {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-24
      md:py-36
      bg-gradient-to-b
      from-white
      via-sky-50
      to-white
    "
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[150px]" />

      {/* Decorative Flowers */}
      <img
        src="/bgn1.png"
        alt=""
        className="
          absolute
          top-0
          left-0
          w-[250px]
          md:w-[420px]
          opacity-10
          pointer-events-none
        "
      />

      <img
        src="/bgn1.png"
        alt=""
        className="
          absolute
          bottom-0
          right-0
          w-[250px]
          md:w-[420px]
          rotate-180
          opacity-10
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
            uppercase
            tracking-[8px]
            text-sky-500
            text-xs
            md:text-sm
          "
          >
            The Bride & Groom
          </p>

          <div className="w-24 h-[2px] bg-sky-300 mx-auto mt-5" />
        </motion.div>

        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Label */}
            <div
              className="
                absolute
                -top-5
                left-1/2
                -translate-x-1/2
                bg-white
                px-6
                py-2
                rounded-full
                border
                border-sky-200
                text-sky-600
                text-xs
                tracking-[4px]
                uppercase
                z-30
                shadow-lg
              "
            >
              Our Love Story
            </div>

            {/* Frame */}
            <div className="absolute -inset-4 rounded-[50px] border-2 border-sky-200" />
            <div className="absolute -inset-2 rounded-[45px] border border-sky-100" />

            {/* Corner Flowers */}
            <img
              src="/bgn1.png"
              alt=""
              className="
                absolute
                -top-14
                -left-14
                w-32
                md:w-44
                z-20
                opacity-90
              "
            />

            <img
              src="/bgn1.png"
              alt=""
              className="
                absolute
                -bottom-14
                -right-14
                w-32
                md:w-44
                rotate-180
                z-20
                opacity-90
              "
            />

            {/* Main Photo */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                bg-white
                p-3
                shadow-[0_30px_80px_rgba(14,116,144,0.12)]
              "
            >
              <Image
                src="/couple.jpeg"
                alt="Rici & Ines"
                width={1600}
                height={1000}
                priority
                className="
                  w-full
                  rounded-[30px]
                  object-cover
                "
              />

              {/* Gradient Overlay */}
              <div
                className="
                  absolute
                  inset-x-3
                  bottom-3
                  h-[38%]
                  rounded-b-[30px]
                  bg-gradient-to-t
                  from-black/75
                  via-black/30
                  to-transparent
                "
              />

              {/* Flower Left */}
              <img
                src="/bgn1.png"
                alt=""
                className="
                  absolute
                  bottom-0
                  left-0
                  w-24
                  md:w-40
                  opacity-70
                  z-10
                "
              />

              {/* Flower Right */}
              <img
                src="/bgn1.png"
                alt=""
                className="
                  absolute
                  bottom-0
                  right-0
                  w-24
                  md:w-40
                  rotate-180
                  opacity-70
                  z-10
                "
              />

              {/* Groom */}
              <div
                className="
                  absolute
                  bottom-10
                  left-6
                  md:left-12
                  z-20
                "
              >
                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-sky-200
                    text-[10px]
                    md:text-xs
                    mb-2
                  "
                >
                  The Groom
                </p>

                <h2
                  className={`
                    ${titleFont.className}
                    text-white
                    text-2xl
                    md:text-4xl
                    lg:text-5xl
                    leading-tight
                    drop-shadow-lg
                  `}
                >
                  Bojan Vasic
                </h2>
              </div>

              {/* Bride */}
              <div
                className="
                  absolute
                  bottom-10
                  right-6
                  md:right-12
                  text-right
                  z-20
                "
              >
                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-sky-200
                    text-[10px]
                    md:text-xs
                    mb-2
                  "
                >
                  The Bride
                </p>

                <h2
                  className={`
                    ${titleFont.className}
                    text-white
                    text-2xl
                    md:text-4xl
                    lg:text-5xl
                    leading-tight
                    drop-shadow-lg
                  `}
                >
                  Evi Juni Hokiana
                  <br/> Pasaribu
                  
                </h2>
              </div>

              {/* Center & */}
              <div
                className="
                  absolute
                  bottom-14
                  left-1/2
                  -translate-x-1/2
                  z-20
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    md:w-20
                    md:h-20
                    rounded-full
                    bg-white/15
                    backdrop-blur-md
                    border
                    border-white/30
                    flex
                    items-center
                    justify-center
                    text-white
                    text-2xl
                    md:text-4xl
                  "
                >
                  &
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p
            className={`
              ${bodyFont.className}
              max-w-2xl
              mx-auto
              text-slate-600
              text-lg
              leading-relaxed
            `}
          >
            “Two hearts, one soul, and a lifetime of love.
            Together we invite you to celebrate the beginning
            of our forever journey.”
          </p>
        </motion.div>

        {/* Parents */}
        
      </div>
    </section>
  );
}