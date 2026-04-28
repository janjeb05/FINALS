"use client"

import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/data/products"

const categoryMap: Record<string, string> = {
  tees: "Tees",
  bottoms: "Bottoms",
  essentials: "Essentials",
  accessories: "Accessories",
  outerwear: "Outerwear",
}

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string
  const categoryName = categoryMap[category] || category

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Category Header */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Shop Collection
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
              {categoryName}
            </h1>
            <p className="text-muted-foreground mt-4 font-light">
              {filteredProducts.length} Products
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
