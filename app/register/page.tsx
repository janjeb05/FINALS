"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/auth-context"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    const success = await register(name, email, password)
    if (success) {
      router.push("/")
    } else {
      setError("Registration failed. Email may already be in use.")
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="block text-center mb-12">
          <span className="text-3xl font-black tracking-tighter">uryusee</span>
        </Link>

        <div className="bg-surface border border-white/10 p-8">
          <h1 className="text-3xl font-black tracking-tighter uppercase mb-2">
            Join The Crew
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Create your account and start earning rewards
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-accent/10 border border-accent text-accent text-sm p-3">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase mb-2">
                Full Name
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 bg-background border-white/20 focus:border-accent"
                placeholder="Your name"
                required
              />
            </div>

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
                placeholder="Min. 6 characters"
                required
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] uppercase mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 bg-background border-white/20 focus:border-accent"
                placeholder="Confirm your password"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 bg-accent text-white font-bold uppercase tracking-widest hover:bg-accent/90 transition-all"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-accent hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-6 p-4 border border-white/10">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 text-muted-foreground">
            Member Benefits
          </p>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• Earn loyalty points on every purchase</li>
            <li>• Early access to new drops</li>
            <li>• Exclusive member discounts</li>
            <li>• Birthday rewards</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
