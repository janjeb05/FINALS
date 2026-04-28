"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    id: "01",
    name: "TEES",
    slug: "tees",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    count: 24,
  },
  {
    id: "02",
    name: "BOTTOMS",
    slug: "bottoms",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    count: 18,
  },
  {
    id: "03",
    name: "ESSENTIALS",
    slug: "essentials",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    count: 32,
  },
  {
    id: "04",
    name: "OUTERWEAR",
    slug: "outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    count: 15,
  },
]

export function CategoryGrid() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-20 bg-background">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-accent uppercase font-mono mb-3 block">
            BROWSE
          </span>
          <h2 className="font-black text-3xl md:text-5xl uppercase tracking-tight text-white">
            SHOP BY CATEGORY
          </h2>
        </div>
        <Link
          href="/tees"
          className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] text-white/50 hover:text-accent transition-colors"
        >
          VIEW ALL
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="group relative aspect-[3/4] overflow-hidden bg-surface border border-white/5 hover:border-accent/50 transition-all duration-500"
          >
            {/* Number */}
            <span className="absolute top-5 left-5 z-20 font-mono text-xs text-white/20 group-hover:text-accent transition-colors duration-300">
              {category.id}
            </span>
            
            {/* Image */}
            <div className="absolute inset-0">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover brightness-[0.4] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-700"
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
              <div className="flex items-end justify-between">
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-black text-xl md:text-2xl lg:text-3xl text-white tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] text-white/30 mt-1 uppercase font-mono">
                    {category.count} ITEMS
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/0 group-hover:text-accent transition-all duration-300 transform group-hover:-translate-y-1" />
              </div>
            </div>
            
            {/* Hover Line */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
          </Link>
        ))}
      </div>
    </section>
  )
}
