"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Product } from "@/data/products"
import { useCart } from "@/context/cart-context"
import { formatCurrency, cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
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
      className="group block bg-surface border border-white/10 hover:shadow-[4px_4px_0px_#FF3B00] transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge */}
        {product.badge && (
          <Badge
            variant="accent"
            className="absolute top-3 left-3 z-10"
          >
            {product.badge}
          </Badge>
        )}
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={cn(
            "absolute bottom-3 right-3 z-10",
            "w-10 h-10 flex items-center justify-center",
            "bg-white/10 backdrop-blur-sm border border-white/20",
            "text-white hover:bg-accent hover:border-accent",
            "opacity-0 group-hover:opacity-100 transition-all duration-300",
            "transform translate-y-2 group-hover:translate-y-0"
          )}
          aria-label="Quick add to cart"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <Badge variant="secondary" className="mb-2 font-mono text-[10px] tracking-wider">
          {product.category.toUpperCase()}
        </Badge>
        <h3 className="font-semibold text-white text-sm mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="font-mono text-white/80 text-sm">
          {formatCurrency(product.price)}
        </p>
      </div>
    </Link>
  )
}
