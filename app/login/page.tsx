"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/auth-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    const success = await login(email, password)
    if (success) {
      router.push("/")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="block text-center mb-12">
          <span className="text-3xl font-black tracking-tighter">uryusee</span>
        </Link>

        <div className="bg-surface border border-white/10 p-8">
          <h1 className="text-3xl font-black tracking-tighter uppercase mb-2">
            Sign In
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Welcome back to the crew
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-accent/10 border border-accent text-accent text-sm p-3">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase mb-2">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-background border-white/20 focus:border-accent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase mb-2">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-background border-white/20 focus:border-accent"
                placeholder="Enter your password"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-muted-foreground text-sm">
              {"Don't have an account? "}
              <Link href="/register" className="text-accent hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Demo credentials */}
        <div className="mt-6 p-4 border border-white/10 text-sm">
          <p className="text-muted-foreground mb-2">Demo credentials:</p>
          <p className="font-mono text-xs">admin@uryusee.com / admin123</p>
        </div>
      </div>
    </main>
  )
}
