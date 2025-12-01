"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/onboarding")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <Link href="/" className="absolute top-6 left-6">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Button>
      </Link>

      <Card className="max-w-md w-full p-8 sm:p-10 rounded-[10px]">
        <div className="text-center mb-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-primary mx-auto mb-5">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">Iniciar Sesión</h1>
          <p className="text-muted-foreground text-base sm:text-[18px]">Accede a tu cuenta de LILA</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-base sm:text-[18px] text-foreground">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base sm:text-[18px] rounded-[8px]"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-base sm:text-[18px] text-foreground">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 text-base sm:text-[18px] rounded-[8px]"
            />
          </div>

          <Button type="submit" className="w-full h-12 text-base sm:text-[18px] rounded-[10px]" size="lg">
            Iniciar Sesión
          </Button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <Link href="/forgot-password" className="block text-sm sm:text-[16px] text-primary hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
          <div className="text-sm sm:text-[16px] text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link href="/onboarding" className="text-primary hover:underline font-medium">
              Regístrate gratis
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}
