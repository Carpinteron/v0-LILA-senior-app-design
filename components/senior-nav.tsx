"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, History, Settings, Mic } from "lucide-react"
import { cn } from "@/lib/utils"

export function SeniorNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/senior/home", icon: Home, label: "Inicio" },
    { href: "/senior/voice-command", icon: Mic, label: "Voz" },
    { href: "/senior/alarms", icon: Calendar, label: "Alarmas" },
    { href: "/senior/history", icon: History, label: "Historial" },
    { href: "/senior/settings", icon: Settings, label: "Ajustes" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-20 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 min-w-[56px] py-2 px-2 rounded-[8px] transition-colors",
                isActive ? "text-primary bg-blue-bg" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="text-[10px] sm:text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
