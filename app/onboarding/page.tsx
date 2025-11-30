"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, User, ChevronRight, Pill, Bell, Calendar } from "lucide-react"

export default function OnboardingPage() {
  const [step, setStep] = useState(0)

  if (step === 1) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-[#E8F4FF] mx-auto mb-8">
            <Pill className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-foreground">Registra medicamentos y rutinas</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl mx-auto">
            Mantén organizados todos tus medicamentos y actividades diarias en un solo lugar
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" onClick={() => setStep(0)} className="h-12 px-6 text-lg">
              Anterior
            </Button>
            <Button onClick={() => setStep(2)} className="h-12 px-8 text-lg rounded-[10px]">
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-[#E8F4FF] mx-auto mb-8">
            <Bell className="h-10 w-10 text-secondary" />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-foreground">Alexa te ayuda a recordar</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl mx-auto">
            Recibe recordatorios por voz en el momento exacto que necesitas tomar tu medicamento
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" onClick={() => setStep(1)} className="h-12 px-6 text-lg">
              Anterior
            </Button>
            <Button onClick={() => setStep(3)} className="h-12 px-8 text-lg rounded-[10px]">
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-[#E8F4FF] mx-auto mb-8">
            <Calendar className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-foreground">Recibe alertas si algo sale mal</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl mx-auto">
            Los familiares son notificados inmediatamente ante medicamentos omitidos o emergencias
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" onClick={() => setStep(2)} className="h-12 px-6 text-lg">
              Anterior
            </Button>
            <Button onClick={() => setStep(4)} className="h-12 px-8 text-lg rounded-[10px]">
              Comenzar
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-primary mx-auto mb-6">
              <Heart className="h-9 w-9 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">Bienvenido a LILA </h1>
            <p className="text-xl text-muted-foreground">Estamos aquí para ayudarte a cuidar mejor de tu salud</p>
          </div>

          <Card className="p-8 mb-6 rounded-[10px]">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">¿Cómo usarás LILA?</h2>

            <div className="space-y-6">
              <Link href="/senior/home" className="block">
                <div className="group flex items-center justify-between p-6 rounded-[10px] border-2 border-border hover:border-primary hover:bg-[#E8F4FF]/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E8F4FF]">
                      <User className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-foreground">Soy adulto mayor</h3>
                      <p className="text-muted-foreground text-[18px]">Necesito ayuda con mis medicamentos</p>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>

              <Link href="/caregiver/dashboard" className="block">
                <div className="group flex items-center justify-between p-6 rounded-[10px] border-2 border-border hover:border-secondary hover:bg-secondary/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-secondary/10">
                      <Users className="h-7 w-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-foreground">Soy cuidador/familiar</h3>
                      <p className="text-muted-foreground text-[18px]">Quiero ayudar a mis seres queridos</p>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-secondary transition-colors" />
                </div>
              </Link>
            </div>
          </Card>

          <div className="text-center">
            <Link href="/login">
              <Button variant="ghost" className="text-lg h-12">
                Ya tengo una cuenta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-primary mx-auto mb-8">
          <Heart className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-5xl font-bold mb-6 text-foreground">{"LILA"}</h1>
        <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">Cuidado inteligente para adultos mayores</p>
        <Button onClick={() => setStep(1)} size="lg" className="h-14 px-10 text-lg rounded-[10px]">
          Comenzar
        </Button>
      </div>
    </div>
  )
}
