"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function CartSidebar() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col bg-[#0A0A0A] sm:max-w-lg">
        <SheetHeader className="border-b border-white/10 pb-4">
          <SheetTitle className="flex items-center gap-2 text-white font-mono uppercase tracking-wider">
            <ShoppingBag className="h-5 w-5" />
            YOUR CART ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <ShoppingBag className="h-16 w-16 text-white/20" />
            <p className="text-white/60 font-mono text-sm uppercase tracking-wider">
              Your cart is empty
            </p>
            <Button
              onClick={() => setIsCartOpen(false)}
              variant="outline"
              className="mt-4"
            >
              CONTINUE SHOPPING
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="flex gap-4 border-b border-white/10 pb-4"
                  >
                    <div className="relative h-24 w-24 flex-shrink-0 bg-surface">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-white text-sm">
                            {item.name}
                          </h3>
                          <p className="text-xs text-white/60 mt-1">
                            {item.size} / {item.color}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            removeFromCart(item.id, item.size, item.color)
                          }
                          className="text-white/40 hover:text-white transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-white/10">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            className="p-2 text-white/60 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-sm text-white font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className="p-2 text-white/60 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-mono text-sm text-white">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60 uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="text-lg font-bold text-white font-mono">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
              <p className="text-xs text-white/40">
                Shipping and taxes calculated at checkout
              </p>
              <Link href="/cart" onClick={() => setIsCartOpen(false)}>
                <Button className="w-full" variant="accent" size="lg">
                  VIEW CART
                </Button>
              </Link>
              <Button
                className="w-full"
                variant="outline"
                size="lg"
                onClick={() => setIsCartOpen(false)}
              >
                CONTINUE SHOPPING
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
