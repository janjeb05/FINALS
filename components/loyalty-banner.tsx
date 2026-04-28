import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Zap, Gift } from "lucide-react"

export function LoyaltyBanner() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-8 bg-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 noise-overlay opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 mb-8">
          <Star className="h-3 w-3 text-accent" />
          <span className="text-[10px] tracking-[0.3em] text-accent uppercase font-mono">
            MEMBERS ONLY
          </span>
        </div>
        
        <h2 className="font-black text-4xl md:text-6xl lg:text-8xl uppercase tracking-tighter text-white mb-6">
          JOIN THE <span className="text-accent">CREW</span>
        </h2>
        <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Earn points on every purchase. Members get early access to drops, 
          exclusive discounts, and insider perks.
        </p>
        
        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10">
              <Zap className="h-4 w-4 text-accent" />
            </div>
            <span className="text-[11px] tracking-[0.15em] text-white/60 uppercase">Early Access</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10">
              <Gift className="h-4 w-4 text-accent" />
            </div>
            <span className="text-[11px] tracking-[0.15em] text-white/60 uppercase">Exclusive Rewards</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10">
              <Star className="h-4 w-4 text-accent" />
            </div>
            <span className="text-[11px] tracking-[0.15em] text-white/60 uppercase">VIP Events</span>
          </div>
        </div>
        
        <Link href="/register">
          <Button 
            variant="accent" 
            size="xl"
            className="group px-12 py-6 h-auto text-xs tracking-[0.2em] hover:shadow-[0_0_60px_rgba(255,59,0,0.4)] transition-all duration-500"
          >
            CREATE ACCOUNT
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
