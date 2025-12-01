"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Save, Activity } from "lucide-react"
import Link from "next/link"

export default function AddMedicationPage() {
  const [name, setName] = useState("")
  const [doseAmount, setDoseAmount] = useState("")
  const [doseUnit, setDoseUnit] = useState("pastillas")
  const [frequency, setFrequency] = useState("")
  const [time, setTime] = useState("")
  const [senior, setSenior] = useState("")
  const [instructions, setInstructions] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !doseAmount || !frequency || !time || !senior) {
      alert("Por favor completa todos los campos obligatorios")
      return
    }

    const fullDose = `${doseAmount} ${doseUnit}`
    alert(`¡Medicamento "${name}" agregado exitosamente!\n\nDosis: ${fullDose}\nPara: ${senior}`)
    router.push("/caregiver/medications")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
              <Activity className="h-5 w-5" />
            </div>
            <span className="text-lg sm:text-xl font-semibold truncate">LILA</span>
          </div>
          <Link href="/caregiver/settings">
            <Avatar className="h-10 w-10 cursor-pointer shrink-0">
              <AvatarFallback className="bg-secondary text-secondary-foreground">JD</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6">
          <Link href="/caregiver/medications">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Medicamentos
            </Button>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold">Agregar Medicamento</h1>
        </div>

        <Card className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="senior" className="text-base sm:text-lg">
                Adulto Mayor *
              </Label>
              <Select value={senior} onValueChange={setSenior}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecciona un adulto mayor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maria">María González</SelectItem>
                  <SelectItem value="pedro">Pedro Martínez</SelectItem>
                  <SelectItem value="ana">Ana López</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label htmlFor="name" className="text-base sm:text-lg">
                Nombre del Medicamento *
              </Label>
              <Input
                id="name"
                placeholder="Ej: Losartán"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-base sm:text-lg">Dosis *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="doseAmount" className="text-sm text-muted-foreground">
                    Cantidad
                  </Label>
                  <Input
                    id="doseAmount"
                    type="number"
                    placeholder="Ej: 50"
                    value={doseAmount}
                    onChange={(e) => setDoseAmount(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doseUnit" className="text-sm text-muted-foreground">
                    Unidad
                  </Label>
                  <Select value={doseUnit} onValueChange={setDoseUnit}>
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pastillas">Pastillas</SelectItem>
                      <SelectItem value="mg">Miligramos (mg)</SelectItem>
                      <SelectItem value="ml">Mililitros (ml)</SelectItem>
                      <SelectItem value="gotas">Gotas</SelectItem>
                      <SelectItem value="cucharada">Cucharada</SelectItem>
                      <SelectItem value="g">Gramos (g)</SelectItem>
                      <SelectItem value="mcg">Microgramos (mcg)</SelectItem>
                      <SelectItem value="otra">Otra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="frequency" className="text-base sm:text-lg">
                Frecuencia *
              </Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecciona la frecuencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="once-daily">Una vez al día</SelectItem>
                  <SelectItem value="twice-daily">Dos veces al día</SelectItem>
                  <SelectItem value="three-daily">Tres veces al día</SelectItem>
                  <SelectItem value="every-6h">Cada 6 horas</SelectItem>
                  <SelectItem value="every-8h">Cada 8 horas</SelectItem>
                  <SelectItem value="every-12h">Cada 12 horas</SelectItem>
                  <SelectItem value="weekly">Semanal</SelectItem>
                  <SelectItem value="as-needed">Según sea necesario</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label htmlFor="time" className="text-base sm:text-lg">
                Hora de la primera toma *
              </Label>
              <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className="h-12" />
            </div>

            <div className="space-y-4">
              <Label htmlFor="instructions" className="text-base sm:text-lg">
                Instrucciones adicionales
              </Label>
              <Textarea
                id="instructions"
                placeholder="Ej: Tomar con alimentos, evitar lácteos, etc."
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="submit" size="lg" className="flex-1 gap-2">
                <Save className="h-5 w-5" />
                Guardar Medicamento
              </Button>
              <Link href="/caregiver/medications" className="flex-1">
                <Button type="button" variant="outline" size="lg" className="w-full bg-transparent">
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>
        </Card>
      </main>
    </div>
  )
}
