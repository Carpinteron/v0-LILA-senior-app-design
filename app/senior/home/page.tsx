"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Phone, AlertCircle, Pill, Activity } from "lucide-react"
import Link from "next/link"
import { SeniorNav } from "@/components/senior-nav"
import { VoiceButton } from "@/components/voice-button"
import { mockMedications, mockRoutines } from "@/lib/mock-data"

export default function SeniorHomePage() {
  const [medications, setMedications] = useState(mockMedications)
  const [routines, setRoutines] = useState(mockRoutines)

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase()

    if (lowerCommand.includes("ya lo tomé") || lowerCommand.includes("tomé la medicina")) {
      handleTakeMedication(medications[0].id)
      alert("Medicamento marcado como tomado")
    } else if (lowerCommand.includes("ayuda") || lowerCommand.includes("emergencia")) {
      alert("Enviando alerta de emergencia a tus contactos")
    } else if (lowerCommand.includes("llamar")) {
      alert("Llamando a tu familiar de emergencia")
    }
  }

  const handleTakeMedication = (id: string) => {
    setMedications((prev) => prev.map((med) => (med.id === id ? { ...med, taken: true } : med)))
  }

  const nextMedication = medications.find((m) => !m.taken)

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-foreground">Hola, María 👋</h1>
          <div className="flex items-center gap-2">
            <VoiceButton onVoiceCommand={handleVoiceCommand} size="default" className="h-11 w-11" />
            <Link href="/senior/settings">
              <Button
                variant="ghost"
                size="default"
                className="text-base sm:text-lg lg:text-[20px] h-10 sm:h-12 px-4 sm:px-6"
              >
                Ajustes
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {nextMedication && (
          <Card className="p-6 sm:p-8 bg-blue-bg border-2 border-primary/30 rounded-[10px]">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-[10px] bg-primary shrink-0">
                <Pill className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground mb-2">Próximo medicamento</p>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-foreground mb-1">
                  {nextMedication.name} {nextMedication.dosage}
                </h2>
                <p className="text-lg sm:text-xl lg:text-[24px] text-muted-foreground">
                  {nextMedication.time} - {nextMedication.instructions}
                </p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => handleTakeMedication(nextMedication.id)}
              className="w-full h-12 sm:h-14 lg:h-[56px] text-lg sm:text-xl lg:text-[24px] font-semibold rounded-[10px]"
            >
              <Check className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
              Ya lo tomé
            </Button>
          </Card>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Button
            variant="outline"
            size="lg"
            onClick={() => alert("Enviando alerta de ayuda a tus contactos")}
            className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] border-2 hover:bg-destructive/10 hover:border-destructive hover:text-destructive rounded-[10px] bg-card"
          >
            <AlertCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-7 sm:w-7" />
            Necesito Ayuda
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => alert("Llamando a tu familiar de emergencia: Ana García")}
            className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] border-2 hover:bg-secondary/10 hover:border-secondary hover:text-secondary rounded-[10px] bg-card"
          >
            <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-7 sm:w-7" />
            Llamar Familiar
          </Button>
        </div>

        <Card className="p-6 sm:p-8 rounded-[10px]">
          <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-4 sm:mb-6 text-foreground">
            Tareas de Hoy
          </h3>
          <div className="space-y-3 sm:space-y-5">
            {medications.slice(0, 3).map((med) => (
              <div
                key={med.id}
                className={`flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-[10px] ${
                  med.taken ? "bg-muted/40" : "bg-card border-2 border-border"
                }`}
              >
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[8px] shrink-0 ${
                    med.taken ? "bg-primary" : "bg-blue-bg"
                  }`}
                >
                  <Pill
                    className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                    style={{ color: med.taken ? "white" : undefined }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground truncate">
                    {med.name} {med.dosage}
                  </p>
                  <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground">
                    {med.time} - {med.taken ? "Completado" : "Pendiente"}
                  </p>
                </div>
                <div
                  className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full shrink-0 flex items-center justify-center ${
                    med.taken ? "bg-secondary" : "border-2 border-muted-foreground/30"
                  }`}
                >
                  {med.taken && <Check className="h-4 w-4 sm:h-6 sm:w-6 text-white" />}
                </div>
              </div>
            ))}

            {routines.map((routine) => (
              <div
                key={routine.id}
                className={`flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-[10px] ${
                  routine.completed ? "bg-muted/40" : "bg-card border-2 border-border"
                }`}
              >
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[8px] shrink-0 ${
                    routine.completed ? "bg-secondary" : "bg-secondary/10"
                  }`}
                >
                  <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground truncate">
                    {routine.name}
                  </p>
                  <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground">
                    {routine.time} - {routine.completed ? "Completado" : "Pendiente"}
                  </p>
                </div>
                <div
                  className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full shrink-0 flex items-center justify-center ${
                    routine.completed ? "bg-secondary" : "border-2 border-muted-foreground/30"
                  }`}
                >
                  {routine.completed && <Check className="h-4 w-4 sm:h-6 sm:w-6 text-white" />}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
          <Link href="/senior/calendar" className="block">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px] bg-card"
            >
              Calendario
            </Button>
          </Link>
          <Link href="/senior/history" className="block">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px] bg-card"
            >
              Historial
            </Button>
          </Link>
          <Link href="/senior/add-medication" className="block col-span-2 sm:col-span-1">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px] bg-card"
            >
              Agregar
            </Button>
          </Link>
        </div>
      </main>

      <SeniorNav />
    </div>
  )
}
