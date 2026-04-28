"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Minus, Plus, X, ArrowRight } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12">
            Your Cart
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20 border border-white/10">
              <p className="text-muted-foreground text-lg mb-6">
                Your cart is empty
              </p>
              <Link href="/">
                <Button className="bg-white text-black hover:bg-accent hover:text-white font-bold uppercase tracking-widest">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-6 p-6 bg-surface border border-white/10"
                  >
                    <div className="relative w-32 h-40 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg uppercase tracking-tight">
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-1">
                            Size: {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-muted-foreground hover:text-white transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="mt-auto flex justify-between items-end">
                        <div className="inline-flex items-center border border-white/20">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.quantity + 1)
                            }
                            className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-bold text-lg">
                          ₱{(item.price * item.quantity).toLocaleString("en-PH", {
                            minimumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-surface border border-white/10 p-8 sticky top-32">
                  <h2 className="text-xl font-black uppercase tracking-tight mb-6">
                    Order Summary
                  </h2>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Subtotal ({itemCount} items)
                      </span>
                      <span>
                        ₱{total.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{total >= 2000 ? "FREE" : "₱150.00"}</span>
                    </div>
                    <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>
                        ₱{(total + (total >= 2000 ? 0 : 150)).toLocaleString("en-PH", {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full h-14 mt-8 bg-accent text-white font-bold uppercase tracking-widest hover:bg-accent/90 transition-all">
                    Checkout
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free shipping on orders over ₱2,000
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
