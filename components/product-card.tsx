"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus, Eye } from "lucide-react"
import { Product } from "@/data/products"
import { useCart } from "@/context/cart-context"
import { formatCurrency, cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1,
    })
  }

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block bg-surface border border-white/5 hover:border-white/10 transition-all duration-500 hover-lift"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#080808]">
        {/* Product Number */}
        <span className="absolute top-4 left-4 z-20 font-mono text-[10px] tracking-wider text-white/20 group-hover:text-accent/60 transition-colors">
          {String(index + 1).padStart(3, "0")}
        </span>
        
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        
        {/* Badge */}
        {product.badge && (
          <Badge
            variant="accent"
            className="absolute top-4 right-4 z-10 text-[9px] tracking-[0.15em]"
          >
            {product.badge}
          </Badge>
        )}
        
        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            className={cn(
              "w-10 h-10 flex items-center justify-center",
              "bg-white/10 backdrop-blur-md border border-white/10",
              "text-white hover:bg-white hover:text-black",
              "transition-all duration-300"
            )}
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={handleQuickAdd}
            className={cn(
              "w-10 h-10 flex items-center justify-center",
              "bg-accent/90 backdrop-blur-md border border-accent",
              "text-white hover:bg-accent",
              "transition-all duration-300"
            )}
            aria-label="Quick add to cart"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-mono">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-white text-sm tracking-tight line-clamp-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="font-mono text-white/80 text-sm">
            {formatCurrency(product.price)}
          </p>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, i) => (
              <span
                key={i}
                className="w-3 h-3 border border-white/10"
                style={{ backgroundColor: color.toLowerCase() === "white" ? "#fff" : color.toLowerCase() === "black" ? "#000" : color }}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
