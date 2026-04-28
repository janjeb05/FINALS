import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getFeaturedProducts } from "@/data/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-20 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-end justify-between mb-12 md:mb-16 relative">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-accent uppercase font-mono mb-3 block">
            FRESH
          </span>
          <h2 className="font-black text-3xl md:text-5xl uppercase tracking-tight text-white">
            LATEST DROPS
          </h2>
        </div>
        <Link
          href="/tees"
          className="flex items-center gap-2 text-[11px] tracking-[0.2em] text-white/50 hover:text-accent transition-colors group"
        >
          VIEW ALL
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 relative">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
