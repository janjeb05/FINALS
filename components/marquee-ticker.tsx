"use client"

import { useEffect, useRef } from "react"

export function MarqueeTicker() {
  const items = [
    "FREE SHIPPING OVER ₱2,000",
    "NEW DROP EVERY FRIDAY",
    "EARN LOYALTY POINTS",
    "EXCLUSIVE MEMBER DISCOUNTS",
    "24H EXPRESS DELIVERY",
  ]
  
  const text = items.join(" — ") + " — "
  
  return (
    <div className="bg-accent overflow-hidden whitespace-nowrap relative">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-accent to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-accent to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-marquee py-3">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 flex-shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
