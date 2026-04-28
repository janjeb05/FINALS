"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558769132-cb1aea1c8f3f?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12 lg:p-20">
        {/* Season Label */}
        <div className="mb-4 opacity-0 animate-fade-up">
          <span className="text-xs tracking-[0.3em] text-white/60 uppercase font-mono">
            SPRING / SUMMER 2025
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter text-white uppercase">
            <span className="block opacity-0 animate-fade-up animate-delay-100">
              NO RULES
            </span>
            <span className="block opacity-0 animate-fade-up animate-delay-200">
              ONLY VIBES
            </span>
          </h1>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animate-delay-300">
          <Link href="/tees">
            <Button
              size="xl"
              className="bg-white text-black font-bold uppercase tracking-widest hover:bg-white/90 px-8 py-4"
            >
              EXPLORE COLLECTION
            </Button>
          </Link>
          <Link href="/essentials">
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black"
            >
              NEW DROPS →
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-4">
          <span
            className="text-xs tracking-[0.3em] text-white/60 uppercase font-mono"
            style={{ writingMode: "vertical-rl" }}
          >
            SCROLL DOWN
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
