"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Pill, Calendar, Bell, Settings, Mic } from "lucide-react"
import { cn } from "@/lib/utils"

export function CaregiverNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/caregiver/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/caregiver/seniors", icon: Users, label: "Adultos" },
    { href: "/caregiver/medications", icon: Pill, label: "Medicamentos" },
    { href: "/caregiver/calendar", icon: Calendar, label: "Agenda" },
    { href: "/caregiver/alerts", icon: Bell, label: "Alertas" },
    { href: "/caregiver/alexa", icon: Mic, label: "Alexa" },
    { href: "/caregiver/settings", icon: Settings, label: "Ajustes" },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex-col z-50">
        <div className="p-6 border-b border-border">
          <Link href="/caregiver/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-primary">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-semibold">LILA</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6">
          <div className="space-y-1 px-3">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-[8px] transition-colors text-base",
                    isActive
                      ? "bg-blue-bg text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 min-w-[50px] py-2 px-2 rounded-[6px] transition-colors",
                  isActive ? "text-primary bg-blue-bg" : "text-muted-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
