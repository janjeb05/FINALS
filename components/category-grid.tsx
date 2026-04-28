"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "01",
    name: "TEES",
    slug: "tees",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    id: "02",
    name: "BOTTOMS",
    slug: "bottoms",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
  },
  {
    id: "03",
    name: "ESSENTIALS",
    slug: "essentials",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
  },
  {
    id: "04",
    name: "OUTERWEAR",
    slug: "outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-20 bg-background">
      <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight text-white mb-8 md:mb-12">
        SHOP BY CATEGORY
      </h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="group relative aspect-[3/4] overflow-hidden bg-surface border-2 border-transparent hover:border-accent transition-all duration-300"
          >
            {/* Number */}
            <span className="absolute top-4 left-4 z-20 font-mono text-sm text-white/40 group-hover:text-accent transition-colors">
              {category.id}
            </span>
            
            {/* Image */}
            <div className="absolute inset-0">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            
            {/* Category Name */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-10">
              <h3 className="font-black text-2xl md:text-3xl lg:text-4xl text-white tracking-tight transform group-hover:-translate-y-2 transition-transform duration-300">
                {category.name}
              </h3>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
          </Link>
        ))}
      </div>
    </section>
  )
}
