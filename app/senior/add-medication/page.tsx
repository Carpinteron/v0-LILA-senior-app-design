"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { SeniorNav } from "@/components/senior-nav"
import { VoiceButton } from "@/components/voice-button"

export default function SeniorAddMedicationPage() {
  const [name, setName] = useState("")
  const [dose, setDose] = useState("")
  const [time, setTime] = useState("")
  const [frequency, setFrequency] = useState("")
  const router = useRouter()

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase()

    if (lowerCommand.includes("guardar") || lowerCommand.includes("listo")) {
      handleSubmit()
    } else if (lowerCommand.includes("cancelar")) {
      router.push("/senior/home")
    } else {
      // Try to extract medication info from voice
      const medicationMatch = lowerCommand.match(/(?:agregar|añadir)\s+(\w+)/i)
      const doseMatch = lowerCommand.match(/(\d+)\s*(mg|gramos|ml)/i)
      const timeMatch = lowerCommand.match(/(\d+):(\d+)|(\d+)\s*(am|pm)/i)

      if (medicationMatch) setName(medicationMatch[1])
      if (doseMatch) setDose(`${doseMatch[1]}${doseMatch[2]}`)

      alert("Información recibida por voz. Por favor revisa los campos.")
    }
  }

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()

    if (!name || !dose || !time || !frequency) {
      alert("Por favor completa todos los campos")
      return
    }

    console.log("[v0] New medication added:", { name, dose, time, frequency })
    alert(`¡Medicamento "${name}" agregado exitosamente!\n\nSe te recordará tomar ${dose} a las ${time}`)
    router.push("/senior/home")
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/senior/home">
            <Button variant="ghost" size="default" className="text-base sm:text-lg lg:text-[20px] h-10 sm:h-12 gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Volver</span>
            </Button>
          </Link>
          <h1 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-foreground">Agregar Medicamento</h1>
          <VoiceButton onVoiceCommand={handleVoiceCommand} size="default" className="h-10 w-10 sm:h-11 sm:w-11" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Card className="p-6 sm:p-8 rounded-[10px]">
          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-3 sm:space-y-4">
              <Label htmlFor="medication" className="text-lg sm:text-xl lg:text-[24px] text-foreground">
                ¿Qué medicamento?
              </Label>
              <Input
                id="medication"
                placeholder="Ej: Aspirina"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 sm:h-14 lg:h-[56px] text-lg sm:text-xl lg:text-[24px] rounded-[8px]"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Label htmlFor="dose" className="text-lg sm:text-xl lg:text-[24px] text-foreground">
                ¿Qué dosis?
              </Label>
              <Input
                id="dose"
                placeholder="Ej: 100mg"
                value={dose}
                onChange={(e) => setDose(e.target.value)}
                className="h-12 sm:h-14 lg:h-[56px] text-lg sm:text-xl lg:text-[24px] rounded-[8px]"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Label htmlFor="time" className="text-lg sm:text-xl lg:text-[24px] text-foreground">
                ¿A qué hora?
              </Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-12 sm:h-14 lg:h-[56px] text-lg sm:text-xl lg:text-[24px] rounded-[8px]"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Label htmlFor="frequency" className="text-lg sm:text-xl lg:text-[24px] text-foreground">
                ¿Con qué frecuencia?
              </Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger className="h-12 sm:h-14 lg:h-[56px] text-lg sm:text-xl lg:text-[24px] rounded-[8px]">
                  <SelectValue placeholder="Selecciona frecuencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily" className="text-base sm:text-lg lg:text-[20px]">
                    Una vez al día
                  </SelectItem>
                  <SelectItem value="twice" className="text-base sm:text-lg lg:text-[20px]">
                    Dos veces al día
                  </SelectItem>
                  <SelectItem value="three" className="text-base sm:text-lg lg:text-[20px]">
                    Tres veces al día
                  </SelectItem>
                  <SelectItem value="every-6h" className="text-base sm:text-lg lg:text-[20px]">
                    Cada 6 horas
                  </SelectItem>
                  <SelectItem value="every-8h" className="text-base sm:text-lg lg:text-[20px]">
                    Cada 8 horas
                  </SelectItem>
                  <SelectItem value="every-12h" className="text-base sm:text-lg lg:text-[20px]">
                    Cada 12 horas
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4 sm:space-y-5 pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 sm:h-14 lg:h-[56px] text-lg sm:text-xl lg:text-[24px] rounded-[10px] gap-2"
              >
                <Save className="h-5 w-5 sm:h-6 sm:w-6" />
                Guardar Medicamento
              </Button>
              <Link href="/senior/home" className="block">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full h-12 sm:h-14 lg:h-[56px] text-lg sm:text-xl lg:text-[24px] rounded-[10px] bg-card"
                >
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-[10px] bg-blue-bg">
            <p className="text-base sm:text-lg lg:text-[20px] text-foreground text-center">
              💡 También puedes usar el botón de voz para agregar medicamentos
            </p>
          </div>
        </Card>
      </main>

      <SeniorNav />
    </div>
  )
}
