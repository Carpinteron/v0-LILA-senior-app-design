"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ChevronRight, Volume2, Type, Eye, Mic } from "lucide-react"
import Link from "next/link"
import { SeniorNav } from "@/components/senior-nav"

export default function SeniorSettingsPage() {
  const [fontSize, setFontSize] = useState("grande")
  const [contrast, setContrast] = useState("normal")

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
          <h1 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-foreground text-center flex-1 min-w-0 px-2">
            Ajustes
          </h1>
          <div className="w-10 sm:w-12 shrink-0"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        <Card className="p-6 sm:p-8 rounded-[10px] bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <Link href="/senior/voice-settings">
            <button className="flex items-center justify-between w-full group">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[10px] bg-primary shrink-0">
                  <Mic className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground block mb-1">
                    Control por Voz y Alexa
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground">Configura comandos de voz</span>
                </div>
              </div>
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </button>
          </Link>
        </Card>

        <Card className="p-6 sm:p-8 rounded-[10px]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-6 sm:mb-8 text-foreground">
            Accesibilidad
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <Label className="text-lg sm:text-xl lg:text-[24px] flex items-center gap-3 text-foreground">
                <Type className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" />
                Tamaño de letra
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <Button
                  variant={fontSize === "normal" ? "default" : "outline"}
                  size="lg"
                  className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px]"
                  onClick={() => setFontSize("normal")}
                >
                  Normal
                </Button>
                <Button
                  variant={fontSize === "grande" ? "default" : "outline"}
                  size="lg"
                  className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px]"
                  onClick={() => setFontSize("grande")}
                >
                  Grande
                </Button>
                <Button
                  variant={fontSize === "muy-grande" ? "default" : "outline"}
                  size="lg"
                  className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px]"
                  onClick={() => setFontSize("muy-grande")}
                >
                  Muy Grande
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-lg sm:text-xl lg:text-[24px] flex items-center gap-3 text-foreground">
                <Eye className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" />
                Contraste
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Button
                  variant={contrast === "normal" ? "default" : "outline"}
                  size="lg"
                  className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px]"
                  onClick={() => setContrast("normal")}
                >
                  Normal
                </Button>
                <Button
                  variant={contrast === "alto" ? "default" : "outline"}
                  size="lg"
                  className="h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px]"
                  onClick={() => setContrast("alto")}
                >
                  Alto
                </Button>
              </div>
            </div>

            <button className="flex items-center justify-between w-full p-5 sm:p-6 rounded-[10px] bg-muted/40 hover:bg-muted/60 transition-colors">
              <div className="flex items-center gap-3 sm:gap-4">
                <Volume2 className="h-6 w-6 sm:h-7 sm:w-7 text-foreground shrink-0" />
                <span className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground">Lectura por voz</span>
              </div>
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground shrink-0" />
            </button>
          </div>
        </Card>

        <Card className="p-6 sm:p-8 rounded-[10px]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-4 sm:mb-6 text-foreground">Cuenta</h2>
          <div className="space-y-3 sm:space-y-4">
            <button className="flex items-center justify-between w-full p-5 sm:p-6 rounded-[10px] bg-muted/40 hover:bg-muted/60 transition-colors">
              <span className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground">Mi perfil</span>
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground shrink-0" />
            </button>
            <button className="flex items-center justify-between w-full p-5 sm:p-6 rounded-[10px] bg-muted/40 hover:bg-muted/60 transition-colors">
              <span className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground">
                Contactos de emergencia
              </span>
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground shrink-0" />
            </button>
          </div>
        </Card>

        <Link href="/">
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[24px] border-2 border-destructive text-destructive hover:bg-destructive hover:text-white rounded-[10px] bg-transparent"
          >
            Cerrar Sesión
          </Button>
        </Link>
      </main>

      <SeniorNav />
    </div>
  )
}
