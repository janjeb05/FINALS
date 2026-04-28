"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/auth-context"
import { ArrowRight, Shield, Users, UserCog } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    
    const success = await login(email, password)
    setIsLoading(false)
    
    if (success) {
      router.push("/")
    } else {
      setError("Invalid credentials. Please try again.")
    }
  }

  const handleQuickLogin = (testEmail: string, testPassword: string) => {
    setEmail(testEmail)
    setPassword(testPassword)
  }

  return (
    <main className="min-h-screen bg-background flex relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[200px] pointer-events-none" />
      
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-16 relative">
        <Link href="/" className="font-black text-3xl tracking-[-0.05em]">
          URYUSEE
        </Link>
        
        <div>
          <h1 className="font-black text-6xl xl:text-7xl tracking-tight leading-[0.9] mb-6">
            WELCOME<br />
            <span className="text-accent">BACK</span>
          </h1>
          <p className="text-white/40 text-lg max-w-md leading-relaxed">
            Sign in to access your account, track orders, and earn loyalty rewards.
          </p>
        </div>
        
        <p className="text-white/20 text-sm">
          Premium Streetwear Since 2024
        </p>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-16">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <Link href="/" className="block text-center mb-12 lg:hidden">
            <span className="text-3xl font-black tracking-[-0.05em]">URYUSEE</span>
          </Link>

          <div className="bg-surface/50 border border-white/5 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-black tracking-tight uppercase mb-2">
              Sign In
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Enter your credentials to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-accent/10 border border-accent/30 text-accent text-sm p-4 flex items-center gap-3">
                  <div className="w-1 h-full bg-accent" />
                  {error}
                </div>
              )}

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-white/50 mb-3">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 bg-background/50 border-white/10 focus:border-accent text-white placeholder:text-white/20"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-white/50 mb-3">
                  Password
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 bg-background/50 border-white/10 focus:border-accent text-white placeholder:text-white/20"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-white text-black font-bold uppercase tracking-[0.15em] text-xs hover:bg-accent hover:text-white transition-all duration-300 group disabled:opacity-50"
              >
                {isLoading ? "SIGNING IN..." : "SIGN IN"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-white/40 text-sm">
                {"Don't have an account? "}
                <Link href="/register" className="text-accent hover:text-accent/80 transition-colors">
                  Create one
                </Link>
              </p>
            </div>
          </div>

          {/* Test Credentials */}
          <div className="mt-8 p-6 bg-surface/30 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 bg-accent animate-pulse" />
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">Test Credentials</p>
            </div>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleQuickLogin("admin@uryusee.com", "admin123")}
                className="w-full flex items-center justify-between p-4 bg-background/30 border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-accent" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-accent">ADMIN</span>
                    <p className="text-[10px] text-white/30 font-mono mt-0.5">admin@uryusee.com</p>
                  </div>
                </div>
                <span className="text-[10px] text-white/30 font-mono group-hover:text-white/50">admin123</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleQuickLogin("staff@uryusee.com", "staff123")}
                className="w-full flex items-center justify-between p-4 bg-background/30 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <UserCog className="h-4 w-4 text-blue-400" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-blue-400">STAFF</span>
                    <p className="text-[10px] text-white/30 font-mono mt-0.5">staff@uryusee.com</p>
                  </div>
                </div>
                <span className="text-[10px] text-white/30 font-mono group-hover:text-white/50">staff123</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleQuickLogin("customer@uryusee.com", "customer123")}
                className="w-full flex items-center justify-between p-4 bg-background/30 border border-white/5 hover:border-green-500/30 hover:bg-green-500/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-green-400" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-green-400">CUSTOMER</span>
                    <p className="text-[10px] text-white/30 font-mono mt-0.5">customer@uryusee.com</p>
                  </div>
                </div>
                <span className="text-[10px] text-white/30 font-mono group-hover:text-white/50">customer123</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
