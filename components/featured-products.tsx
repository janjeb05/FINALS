import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/data/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-20 bg-background">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight text-white">
          LATEST DROPS
        </h2>
        <Link
          href="/tees"
          className="flex items-center gap-2 text-accent text-sm font-mono uppercase tracking-wider hover:gap-4 transition-all"
        >
          VIEW ALL
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
