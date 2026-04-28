"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558769132-cb1aea1c8f3f?w=1920&q=90')",
        }}
      >
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay absolute inset-0" />
      
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent via-accent/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12 lg:p-20">
        {/* Season Label */}
        <div className="mb-6 opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-[10px] tracking-[0.4em] text-white/50 uppercase font-mono">
              SPRING / SUMMER 2025
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-10">
          <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.85] tracking-tighter text-white uppercase">
            <span className="block opacity-0 animate-fade-up animate-delay-100 text-gradient">
              NO RULES
            </span>
            <span className="block opacity-0 animate-fade-up animate-delay-200">
              ONLY <span className="text-accent">VIBES</span>
            </span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="max-w-md text-white/40 text-sm md:text-base font-light mb-10 opacity-0 animate-fade-up animate-delay-200 leading-relaxed">
          Premium streetwear for those who dare to stand out. 
          Crafted with intention, worn with attitude.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animate-delay-300">
          <Link href="/tees">
            <Button
              size="xl"
              className="group bg-white text-black font-bold uppercase tracking-[0.15em] text-xs hover:bg-accent hover:text-white px-10 py-5 h-auto transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,59,0,0.3)]"
            >
              EXPLORE COLLECTION
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/essentials">
            <Button
              size="xl"
              variant="outline"
              className="border border-white/20 text-white hover:bg-white/5 hover:border-white/40 uppercase tracking-[0.15em] text-xs px-10 py-5 h-auto transition-all duration-300"
            >
              NEW DROPS
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-4">
          <span
            className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-mono"
            style={{ writingMode: "vertical-rl" }}
          >
            SCROLL
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-accent animate-scroll-down" />
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="absolute bottom-8 right-8 lg:right-auto lg:left-20 hidden md:flex items-center gap-12 text-white/30">
          <div>
            <span className="block text-2xl font-black text-white">50+</span>
            <span className="text-[10px] tracking-[0.2em] uppercase">NEW PIECES</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div>
            <span className="block text-2xl font-black text-white">24H</span>
            <span className="text-[10px] tracking-[0.2em] uppercase">SHIPPING</span>
          </div>
        </div>
      </div>
      
      {/* Side Accent */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block" />
    </section>
  )
}
