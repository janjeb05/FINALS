"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
  role: "customer" | "admin" | "cashier"
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    if (email === "admin@uryusee.com" && password === "admin123") {
      setUser({
        id: "1",
        email: "admin@uryusee.com",
        name: "Admin User",
        role: "admin",
      })
      return true
    }
    if (email && password) {
      setUser({
        id: "2",
        email,
        name: email.split("@")[0],
        role: "customer",
      })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock registration
    if (name && email && password) {
      setUser({
        id: Date.now().toString(),
        email,
        name,
        role: "customer",
      })
      return true
    }
    return false
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
