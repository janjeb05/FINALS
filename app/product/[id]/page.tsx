"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/data/products"
import { useCart } from "@/context/cart-context"
import { ArrowLeft, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import { useState } from "react"
import { ProductCard } from "@/components/product-card"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find((p) => p.id === productId)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-black">Product Not Found</h1>
          <Link href="/" className="text-accent mt-4 inline-block">
            Return Home
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href={`/${product.category.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8 text-sm tracking-widest uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {product.category}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-[3/4] bg-surface border border-white/10 overflow-hidden group">
              {product.badge && (
                <Badge className="absolute top-4 left-4 z-10 bg-accent text-white border-0 font-mono text-xs">
                  {product.badge}
                </Badge>
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Product Number */}
              <span className="absolute bottom-4 right-4 text-7xl font-black text-white/5">
                {product.id.padStart(3, "0")}
              </span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <p className="text-xs tracking-[0.3em] text-accent uppercase mb-2 font-mono">
                  {product.category}
                </p>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold">
                  ₱{product.price.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
                </p>
              </div>

              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.3em] uppercase mb-4">Select Size</p>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 border-2 font-bold text-sm transition-all ${
                        selectedSize === size
                          ? "border-accent bg-accent text-white"
                          : "border-white/20 hover:border-white/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.3em] uppercase mb-4">Quantity</p>
                <div className="inline-flex items-center border-2 border-white/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-16 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                className="w-full h-16 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all hover:shadow-[4px_4px_0px_#FF3B00]"
              >
                Add to Cart — ₱{(product.price * quantity).toLocaleString("en-PH", { minimumFractionDigits: 2 })}
              </Button>

              {/* Features */}
              <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Truck className="w-5 h-5" />
                  <span>Free shipping over ₱2,000</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <RotateCcw className="w-5 h-5" />
                  <span>30-day returns</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-24">
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
