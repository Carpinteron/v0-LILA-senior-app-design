"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="max-w-md w-full p-10 rounded-[10px]">
        <div className="text-center mb-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-primary mx-auto mb-5">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Iniciar Sesión</h1>
          <p className="text-muted-foreground text-[18px]">Accede a tu cuenta de LILA </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-[18px] text-foreground">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-[18px] rounded-[8px]"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-[18px] text-foreground">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 text-[18px] rounded-[8px]"
            />
          </div>

          <Button className="w-full h-12 text-[18px] rounded-[10px]" size="lg">
            Iniciar Sesión
          </Button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <Link href="/forgot-password" className="block text-[16px] text-primary hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
          <div className="text-[16px] text-muted-foreground">
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
