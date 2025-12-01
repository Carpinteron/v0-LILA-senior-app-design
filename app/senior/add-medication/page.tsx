"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, HelpCircle } from "lucide-react"
import Link from "next/link"
import { SeniorNav } from "@/components/senior-nav"
import { VoiceButton } from "@/components/voice-button"

export default function SeniorAddMedicationPage() {
  const [name, setName] = useState("")
  const [doseAmount, setDoseAmount] = useState("")
  const [doseUnit, setDoseUnit] = useState("pastillas")
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
      const medicationMatch = lowerCommand.match(/(?:agregar|añadir|tomar)\s+(\w+)/i)
      const doseMatch = lowerCommand.match(/(\d+)\s*(pastilla|pastillas|mg|gramos|ml|gotas|cucharada)/i)
      const timeMatch = lowerCommand.match(/(\d+):(\d+)|(\d+)\s*(am|pm|mañana|tarde|noche)/i)

      if (medicationMatch) setName(medicationMatch[1])
      if (doseMatch) {
        setDoseAmount(doseMatch[1])
        if (doseMatch[2]) {
          const unit = doseMatch[2].toLowerCase()
          if (unit.includes("pastilla")) setDoseUnit("pastillas")
          else if (unit === "ml") setDoseUnit("ml")
          else if (unit.includes("gota")) setDoseUnit("gotas")
          else if (unit.includes("cucharada")) setDoseUnit("cucharada")
        }
      }

      alert("Información recibida por voz. Por favor revisa los campos.")
    }
  }

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()

    if (!name || !doseAmount || !time || !frequency) {
      alert("Por favor completa todos los campos")
      return
    }

    const fullDose = `${doseAmount} ${doseUnit}`
    console.log("[v0] New medication added:", { name, dose: fullDose, time, frequency })
    alert(`¡Medicamento "${name}" agregado exitosamente!\n\nSe te recordará tomar ${fullDose} a las ${time}`)
    router.push("/senior/home")
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <Link href="/senior/home">
            <Button
              variant="ghost"
              size="default"
              className="text-base sm:text-lg lg:text-[20px] h-10 sm:h-12 gap-2 shrink-0"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Volver</span>
            </Button>
          </Link>
          <h1 className="text-lg sm:text-2xl lg:text-[28px] font-bold text-foreground text-center flex-1 min-w-0 px-2">
            Agregar Medicamento
          </h1>
          <VoiceButton
            onVoiceCommand={handleVoiceCommand}
            size="default"
            className="h-10 w-10 sm:h-11 sm:w-11 shrink-0"
          />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Card className="p-6 sm:p-8 rounded-[10px]">
          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-3 sm:space-y-4">
              <Label htmlFor="medication" className="text-lg sm:text-xl lg:text-[24px] text-foreground block">
                ¿Qué medicamento?
              </Label>
              <Input
                id="medication"
                placeholder="Ej: Aspirina"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[8px] w-full"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Label className="text-lg sm:text-xl lg:text-[24px] text-foreground">¿Qué dosis?</Label>
                <Link href="/senior/voice-examples">
                  <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-9">
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="doseAmount" className="text-sm sm:text-base text-muted-foreground">
                    Cantidad
                  </Label>
                  <Input
                    id="doseAmount"
                    type="number"
                    placeholder="Ej: 2"
                    value={doseAmount}
                    onChange={(e) => setDoseAmount(e.target.value)}
                    className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[8px] w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doseUnit" className="text-sm sm:text-base text-muted-foreground">
                    Unidad
                  </Label>
                  <Select value={doseUnit} onValueChange={setDoseUnit}>
                    <SelectTrigger className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[8px] w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pastillas" className="text-base sm:text-lg">
                        Pastillas
                      </SelectItem>
                      <SelectItem value="ml" className="text-base sm:text-lg">
                        Mililitros (ml)
                      </SelectItem>
                      <SelectItem value="gotas" className="text-base sm:text-lg">
                        Gotas
                      </SelectItem>
                      <SelectItem value="cucharada" className="text-base sm:text-lg">
                        Cucharada
                      </SelectItem>
                      <SelectItem value="mg" className="text-base sm:text-lg">
                        Miligramos (mg)
                      </SelectItem>
                      <SelectItem value="otra" className="text-base sm:text-lg">
                        Otra
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Label htmlFor="time" className="text-lg sm:text-xl lg:text-[24px] text-foreground block">
                ¿A qué hora?
              </Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[8px] w-full"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Label htmlFor="frequency" className="text-lg sm:text-xl lg:text-[24px] text-foreground block">
                ¿Con qué frecuencia?
              </Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[8px] w-full">
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
                className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[22px] rounded-[10px] gap-2"
              >
                <Save className="h-5 w-5 sm:h-6 sm:w-6" />
                Guardar Medicamento
              </Button>
              <Link href="/senior/home" className="block">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[22px] rounded-[10px] bg-card"
                >
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-[10px] bg-blue-bg border border-primary/20">
            <p className="text-base sm:text-lg lg:text-[20px] text-foreground mb-2 font-medium">
              💡 Usa comandos de voz
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Presiona el botón de micrófono y di algo como: "Agregar 2 pastillas de Aspirina a las 8 de la mañana"
            </p>
            <Link href="/senior/voice-examples" className="mt-3 block">
              <Button variant="link" className="h-auto p-0 text-sm sm:text-base text-primary">
                Ver más ejemplos de comandos →
              </Button>
            </Link>
          </div>
        </Card>
      </main>

      <SeniorNav />
    </div>
  )
}
