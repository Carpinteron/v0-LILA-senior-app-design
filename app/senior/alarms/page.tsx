"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Bell, BellRing, CheckCircle2, Volume2, Clock } from "lucide-react"
import Link from "next/link"

interface Alarm {
  id: string
  medication: string
  time: string
  dosage: string
  active: boolean
  snoozed: boolean
}

export default function AlarmsPage() {
  const [alarms, setAlarms] = useState<Alarm[]>([
    {
      id: "1",
      medication: "Metformina",
      time: "08:00 AM",
      dosage: "1 pastilla",
      active: true,
      snoozed: false,
    },
    {
      id: "2",
      medication: "Atorvastatina",
      time: "08:00 PM",
      dosage: "1 pastilla",
      active: false,
      snoozed: false,
    },
    {
      id: "3",
      medication: "Losartán",
      time: "02:00 PM",
      dosage: "1 pastilla",
      active: false,
      snoozed: false,
    },
  ])

  const [showActiveAlarm, setShowActiveAlarm] = useState(true)

  const handleTakeMedication = (id: string) => {
    setAlarms((prev) => prev.map((alarm) => (alarm.id === id ? { ...alarm, active: false } : alarm)))
    playSuccessSound()
    setShowActiveAlarm(false)
  }

  const handleSnooze = (id: string) => {
    setAlarms((prev) => prev.map((alarm) => (alarm.id === id ? { ...alarm, snoozed: true } : alarm)))
    playSnoozeSound()
    setTimeout(() => {
      setAlarms((prev) => prev.map((alarm) => (alarm.id === id ? { ...alarm, snoozed: false } : alarm)))
    }, 300000) // 5 minutos
  }

  const playSuccessSound = () => {
    const audio = new Audio("/sounds/success.mp3")
    audio.play().catch(() => {})
  }

  const playSnoozeSound = () => {
    const audio = new Audio("/sounds/snooze.mp3")
    audio.play().catch(() => {})
  }

  const activeAlarm = alarms.find((a) => a.active)

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="bg-card border-b border-border px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/senior/home">
              <Button variant="ghost" size="icon" className="h-11 w-11">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-foreground">Alarmas</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {activeAlarm && showActiveAlarm && (
          <Card className="p-6 sm:p-10 bg-gradient-to-br from-destructive/10 to-destructive/5 border-4 border-destructive rounded-[10px] animate-pulse">
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="flex justify-center">
                <div className="relative flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-destructive shadow-2xl shadow-destructive/50">
                  <BellRing className="h-12 w-12 sm:h-16 sm:w-16 text-white animate-bounce" />
                  <span className="absolute inset-0 rounded-full border-4 border-destructive animate-ping opacity-75"></span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-destructive">
                  Es hora de tu medicina!
                </p>
                <p className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-foreground">
                  {activeAlarm.medication}
                </p>
                <div className="flex items-center justify-center gap-3 text-lg sm:text-xl lg:text-[24px] text-muted-foreground">
                  <Clock className="h-6 w-6 sm:h-7 sm:w-7" />
                  <span>{activeAlarm.time}</span>
                  <span>-</span>
                  <span>{activeAlarm.dosage}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                <Button
                  size="lg"
                  onClick={() => handleTakeMedication(activeAlarm.id)}
                  className="flex-1 h-14 sm:h-16 lg:h-[64px] text-lg sm:text-xl lg:text-[24px] font-semibold rounded-[10px] bg-secondary hover:bg-secondary/90"
                >
                  <CheckCircle2 className="mr-3 h-7 w-7 sm:h-8 sm:w-8" />
                  Ya lo tomé
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleSnooze(activeAlarm.id)}
                  className="flex-1 h-14 sm:h-16 lg:h-[64px] text-lg sm:text-xl lg:text-[24px] font-semibold rounded-[10px] border-2"
                >
                  <Clock className="mr-3 h-7 w-7 sm:h-8 sm:w-8" />
                  Recordar en 5 min
                </Button>
              </div>
            </div>
          </Card>
        )}

        <Card className="p-6 sm:p-8 rounded-[10px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-foreground">
              Próximas alarmas de hoy
            </h2>
            <Bell className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
          </div>

          <div className="space-y-4 sm:space-y-5">
            {alarms.map((alarm) => (
              <div
                key={alarm.id}
                className={`p-5 sm:p-6 rounded-[10px] border-2 transition-all ${
                  alarm.active
                    ? "bg-destructive/10 border-destructive animate-pulse"
                    : alarm.snoozed
                      ? "bg-primary/10 border-primary"
                      : "bg-card border-border"
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[10px] shrink-0 ${
                      alarm.active ? "bg-destructive" : alarm.snoozed ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    {alarm.active ? (
                      <BellRing className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    ) : (
                      <Bell
                        className={`h-6 w-6 sm:h-7 sm:w-7 ${alarm.snoozed ? "text-white" : "text-muted-foreground"}`}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground mb-1">
                      {alarm.medication}
                    </p>
                    <div className="flex items-center gap-2 text-base sm:text-lg lg:text-[20px] text-muted-foreground">
                      <Clock className="h-5 w-5" />
                      <span>{alarm.time}</span>
                      <span>-</span>
                      <span>{alarm.dosage}</span>
                    </div>
                    {alarm.snoozed && (
                      <p className="text-sm sm:text-base text-primary font-medium mt-2">Pospuesta por 5 minutos</p>
                    )}
                  </div>

                  {alarm.active && (
                    <div className="flex flex-col gap-2">
                      <Button
                        size="icon"
                        onClick={() => handleTakeMedication(alarm.id)}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-[8px] bg-secondary hover:bg-secondary/90"
                      >
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleSnooze(alarm.id)}
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-[8px]"
                      >
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 sm:p-8 bg-primary/5 border-2 border-primary/20 rounded-[10px]">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[10px] bg-primary shrink-0">
              <Volume2 className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground mb-2">
                Usa comandos de voz
              </h3>
              <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground mb-4">
                Di "Ya lo tomé" cuando suene la alarma para marcar tu medicamento como tomado
              </p>
              <Link href="/senior/voice-command">
                <Button size="lg" className="h-12 sm:h-14 text-base sm:text-lg rounded-[10px]">
                  Probar comandos de voz
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
