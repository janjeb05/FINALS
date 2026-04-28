import { Navbar } from "@/components/navbar"
import { CartSidebar } from "@/components/cart-sidebar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeTicker } from "@/components/marquee-ticker"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { LoyaltyBanner } from "@/components/loyalty-banner"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />
      <HeroSection />
      <MarqueeTicker />
      <CategoryGrid />
      <FeaturedProducts />
      <LoyaltyBanner />
      <Footer />
    </main>
  )
}
