"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function SeniorAddMedicationPage() {
  const [name, setName] = useState("")
  const [dose, setDose] = useState("")
  const [time, setTime] = useState("")
  const [frequency, setFrequency] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/senior/home">
            <Button variant="ghost" size="lg" className="text-[20px] h-12">
              ← Volver
            </Button>
          </Link>
          <h1 className="text-[32px] font-bold text-foreground">Agregar Medicamento</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <Card className="p-8 rounded-[10px]">
          <form className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="medication" className="text-[24px] text-foreground">
                ¿Qué medicamento?
              </Label>
              <Input
                id="medication"
                placeholder="Ej: Aspirina"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[56px] text-[24px] rounded-[8px]"
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="dose" className="text-[24px] text-foreground">
                ¿Qué dosis?
              </Label>
              <Input
                id="dose"
                placeholder="Ej: 100mg"
                value={dose}
                onChange={(e) => setDose(e.target.value)}
                className="h-[56px] text-[24px] rounded-[8px]"
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="time" className="text-[24px] text-foreground">
                ¿A qué hora?
              </Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-[56px] text-[24px] rounded-[8px]"
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="frequency" className="text-[24px] text-foreground">
                ¿Con qué frecuencia?
              </Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger className="h-[56px] text-[24px] rounded-[8px]">
                  <SelectValue placeholder="Selecciona frecuencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily" className="text-[20px]">
                    Una vez al día
                  </SelectItem>
                  <SelectItem value="twice" className="text-[20px]">
                    Dos veces al día
                  </SelectItem>
                  <SelectItem value="three" className="text-[20px]">
                    Tres veces al día
                  </SelectItem>
                  <SelectItem value="every-6h" className="text-[20px]">
                    Cada 6 horas
                  </SelectItem>
                  <SelectItem value="every-8h" className="text-[20px]">
                    Cada 8 horas
                  </SelectItem>
                  <SelectItem value="every-12h" className="text-[20px]">
                    Cada 12 horas
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-5 pt-4">
              <Button size="lg" className="w-full h-[56px] text-[24px] rounded-[10px]">
                Guardar Medicamento
              </Button>
              <Link href="/senior/home" className="block">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-[56px] text-[24px] rounded-[10px] bg-transparent"
                >
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>

          <div className="mt-8 p-6 rounded-[10px] bg-[#E8F4FF]">
            <p className="text-[20px] text-foreground text-center">
              💡 Tu familiar también puede agregar medicamentos por ti
            </p>
          </div>
        </Card>
      </main>
    </div>
  )
}
