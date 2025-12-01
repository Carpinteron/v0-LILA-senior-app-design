"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Pill, Activity, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SeniorNav } from "@/components/senior-nav"

export default function SeniorCalendarPage() {
  const [selectedDay, setSelectedDay] = useState(15)

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
    { date: 16, hasEvent: true },
    { date: 17, hasEvent: false },
    { date: 18, hasEvent: true },
    { date: 19, hasEvent: false },
    { date: 20, hasEvent: false },
    { date: 21, hasEvent: true },
    { date: 22, hasEvent: true },
    { date: 23, hasEvent: false },
    { date: 24, hasEvent: true },
    { date: 25, hasEvent: false },
    { date: 26, hasEvent: false },
    { date: 27, hasEvent: true },
    { date: 28, hasEvent: false },
  ]

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
          <h1 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-foreground">Calendario</h1>
          <div className="w-16 sm:w-24"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        <Card className="p-6 sm:p-8 rounded-[10px]">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <Button variant="ghost" size="default" className="h-10 w-10 sm:h-12 sm:w-12 p-0">
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </Button>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-foreground">Enero 2025</h2>
            <Button variant="ghost" size="default" className="h-10 w-10 sm:h-12 sm:w-12 p-0">
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-2 sm:gap-3 mb-3 sm:mb-5">
            {["D", "L", "M", "M", "J", "V", "S"].map((day) => (
              <div
                key={day}
                className="text-center text-base sm:text-lg lg:text-[20px] font-medium text-muted-foreground py-1 sm:py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 sm:gap-3">
            {days.map((day) => (
              <button
                key={day.date}
                onClick={() => setSelectedDay(day.date)}
                className={`
                  aspect-square rounded-[8px] text-lg sm:text-xl lg:text-[24px] font-medium transition-all relative
                  ${
                    day.isToday
                      ? "bg-primary text-white"
                      : selectedDay === day.date
                        ? "bg-primary/20 text-primary border-2 border-primary"
                        : day.hasEvent
                          ? "bg-muted/50 hover:bg-muted text-foreground"
                          : "hover:bg-muted/30 text-foreground"
                  }
                `}
              >
                {day.date}
                {day.hasEvent && !day.isToday && selectedDay !== day.date && (
                  <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary"></div>
                )}
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-6 sm:p-8 rounded-[10px]">
          <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-4 sm:mb-6 text-foreground">
            Actividades del día {selectedDay}
          </h3>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-[10px] bg-muted/40">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[8px] bg-blue-bg shrink-0">
                <Pill className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground truncate">Losartán 50mg</p>
                <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground">10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-[10px] bg-muted/40">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[8px] bg-secondary/10 shrink-0">
                <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground truncate">
                  Caminar 15 minutos
                </p>
                <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground">4:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-[10px] bg-muted/40">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[8px] bg-blue-bg shrink-0">
                <Pill className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground truncate">Aspirina 100mg</p>
                <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground">8:00 PM</p>
              </div>
            </div>
          </div>
        </Card>
      </main>

      <SeniorNav />
    </div>
  )
}
