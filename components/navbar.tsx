"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "TEES", href: "/tees" },
  { name: "BOTTOMS", href: "/bottoms" },
  { name: "ESSENTIALS", href: "/essentials" },
  { name: "ACCESSORIES", href: "/accessories" },
  { name: "OUTERWEAR", href: "/outerwear" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-mono font-bold text-xl tracking-tight text-white">
                uryusee
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-[0.25em] text-white/80 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center bg-accent text-white text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
              <Link
                href="/login"
                className="p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-white/80 hover:text-white transition-colors md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[#0A0A0A] transition-transform duration-500 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-12">
            <span className="font-mono font-bold text-xl tracking-tight text-white">
              uryusee
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black tracking-tighter text-white hover:text-accent transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex gap-6">
            <Link href="/login" className="text-sm tracking-[0.2em] text-white/60 hover:text-white">
              LOGIN
            </Link>
            <Link href="/register" className="text-sm tracking-[0.2em] text-white/60 hover:text-white">
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
