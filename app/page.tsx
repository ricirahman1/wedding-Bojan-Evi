"use client";

import { useRef } from "react";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Countdown from "@/components/Countdown";
import Event from "@/components/Event";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Wish from "@/components/Wish";

export default function Home() {
  const coupleRef = useRef<HTMLDivElement>(null);

  const handleOpenInvitation = () => {
    coupleRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Hero onOpenAction={handleOpenInvitation} />

      {/* WRAP SECTION YANG MAU DITUJU */}
      <div ref={coupleRef}>
        <Couple />
      </div>

      <Countdown />
      <Event />
      <Gallery />
      <Wish />
      <Footer />
    </>
  );
}