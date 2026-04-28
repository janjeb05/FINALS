"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, ShoppingBag, User, Menu, X, LogOut } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
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
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <>
      <nav className="sticky top-0 z-50 glass border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="font-black text-2xl tracking-[-0.05em] text-white transition-colors group-hover:text-accent">
                URYUSEE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] tracking-[0.2em] text-white/50 hover:text-white transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              <button
                className="p-3 text-white/50 hover:text-white transition-colors hover:bg-white/5"
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px]" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 text-white/50 hover:text-white transition-colors hover:bg-white/5"
                aria-label="Cart"
              >
                <ShoppingBag className="h-[18px] w-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center bg-accent text-white text-[10px] font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
              
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  {user?.role === "admin" && (
                    <Link
                      href="/admin"
                      className="hidden sm:block px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all"
                    >
                      ADMIN
                    </Link>
                  )}
                  {user?.role === "cashier" && (
                    <Link
                      href="/admin"
                      className="hidden sm:block px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all"
                    >
                      STAFF
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="p-3 text-white/50 hover:text-accent transition-colors hover:bg-white/5"
                    aria-label="Logout"
                  >
                    <LogOut className="h-[18px] w-[18px]" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="p-3 text-white/50 hover:text-white transition-colors hover:bg-white/5"
                  aria-label="Account"
                >
                  <User className="h-[18px] w-[18px]" />
                </Link>
              )}
              
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-3 text-white/50 hover:text-white transition-colors hover:bg-white/5 md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[#050505] transition-transform duration-500 ease-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-16">
            <span className="font-black text-2xl tracking-[-0.05em] text-white">
              URYUSEE
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/50 hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black tracking-tight text-white/80 hover:text-accent transition-colors py-3 border-b border-white/5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-8 border-t border-white/5">
            {isAuthenticated ? (
              <div className="flex flex-col gap-4">
                <p className="text-white/40 text-sm">
                  Signed in as <span className="text-white">{user?.email}</span>
                </p>
                {(user?.role === "admin" || user?.role === "cashier") && (
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-accent text-sm tracking-[0.15em] uppercase"
                  >
                    GO TO DASHBOARD
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout()
                    setMobileMenuOpen(false)
                  }}
                  className="text-white/50 text-sm tracking-[0.15em] uppercase text-left hover:text-white"
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <div className="flex gap-8">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-[0.2em] text-white/50 hover:text-white transition-colors"
                >
                  LOGIN
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-[0.2em] text-accent hover:text-accent/80 transition-colors"
                >
                  REGISTER
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
