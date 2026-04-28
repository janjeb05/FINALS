import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LoyaltyBanner() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-surface noise-overlay">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-white mb-6">
          JOIN THE CREW
        </h2>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
          Earn points on every purchase. Members get early access to drops and exclusive discounts.
        </p>
        <Link href="/register">
          <Button variant="accent" size="xl">
            CREATE ACCOUNT
          </Button>
        </Link>
      </div>
    </section>
  )
}
