"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Pill, Activity } from "lucide-react"
import Link from "next/link"

export default function SeniorCalendarPage() {
  const days = [
    { date: 1, hasEvent: false },
    { date: 2, hasEvent: true },
    { date: 3, hasEvent: true },
    { date: 4, hasEvent: false },
    { date: 5, hasEvent: true },
    { date: 6, hasEvent: false },
    { date: 7, hasEvent: false },
    { date: 8, hasEvent: true },
    { date: 9, hasEvent: true },
    { date: 10, hasEvent: true },
    { date: 11, hasEvent: false },
    { date: 12, hasEvent: true },
    { date: 13, hasEvent: false },
    { date: 14, hasEvent: false },
    { date: 15, hasEvent: true, isToday: true },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/senior/home">
            <Button variant="ghost" size="lg" className="text-[20px] h-12">
              ← Volver
            </Button>
          </Link>
          <h1 className="text-[32px] font-bold text-foreground">Calendario</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <Card className="p-8 rounded-[10px]">
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="lg" className="h-12 w-12 p-0">
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <h2 className="text-[28px] font-semibold text-foreground">Enero 2025</h2>
            <Button variant="ghost" size="lg" className="h-12 w-12 p-0">
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-3 mb-5">
            {["D", "L", "M", "M", "J", "V", "S"].map((day) => (
              <div key={day} className="text-center text-[20px] font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-3">
            {days.map((day) => (
              <button
                key={day.date}
                className={`
                  aspect-square rounded-[8px] text-[24px] font-medium transition-all relative
                  ${
                    day.isToday
                      ? "bg-primary text-white"
                      : day.hasEvent
                        ? "bg-muted/50 hover:bg-muted text-foreground"
                        : "hover:bg-muted/30 text-foreground"
                  }
                `}
              >
                {day.date}
                {day.hasEvent && !day.isToday && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary"></div>
                )}
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-8 rounded-[10px]">
          <h3 className="text-[28px] font-semibold mb-6 text-foreground">Actividades de Hoy</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-muted/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#E8F4FF] shrink-0">
                <Pill className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Losartán 50mg</p>
                <p className="text-[20px] text-muted-foreground">10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-muted/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-secondary/10 shrink-0">
                <Activity className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Caminar 15 minutos</p>
                <p className="text-[20px] text-muted-foreground">4:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-muted/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#E8F4FF] shrink-0">
                <Pill className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Aspirina 100mg</p>
                <p className="text-[20px] text-muted-foreground">8:00 PM</p>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
