"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ChevronRight, Volume2, Type, Eye } from "lucide-react"
import Link from "next/link"

export default function SeniorSettingsPage() {
  const [fontSize, setFontSize] = useState("grande")
  const [contrast, setContrast] = useState("normal")

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/senior/home">
            <Button variant="ghost" size="lg" className="text-[20px] h-12">
              ← Volver
            </Button>
          </Link>
          <h1 className="text-[32px] font-bold text-foreground">Ajustes</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <Card className="p-8 rounded-[10px]">
          <h2 className="text-[28px] font-semibold mb-8 text-foreground">Accesibilidad</h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <Label className="text-[24px] flex items-center gap-3 text-foreground">
                <Type className="h-7 w-7" />
                Tamaño de letra
              </Label>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant={fontSize === "normal" ? "default" : "outline"}
                  size="lg"
                  className="h-[56px] text-[20px] rounded-[10px]"
                  onClick={() => setFontSize("normal")}
                >
                  Normal
                </Button>
                <Button
                  variant={fontSize === "grande" ? "default" : "outline"}
                  size="lg"
                  className="h-[56px] text-[20px] rounded-[10px]"
                  onClick={() => setFontSize("grande")}
                >
                  Grande
                </Button>
                <Button
                  variant={fontSize === "muy-grande" ? "default" : "outline"}
                  size="lg"
                  className="h-[56px] text-[20px] rounded-[10px]"
                  onClick={() => setFontSize("muy-grande")}
                >
                  Muy Grande
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-[24px] flex items-center gap-3 text-foreground">
                <Eye className="h-7 w-7" />
                Contraste
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={contrast === "normal" ? "default" : "outline"}
                  size="lg"
                  className="h-[56px] text-[20px] rounded-[10px]"
                  onClick={() => setContrast("normal")}
                >
                  Normal
                </Button>
                <Button
                  variant={contrast === "alto" ? "default" : "outline"}
                  size="lg"
                  className="h-[56px] text-[20px] rounded-[10px]"
                  onClick={() => setContrast("alto")}
                >
                  Alto
                </Button>
              </div>
            </div>

            <button className="flex items-center justify-between w-full p-6 rounded-[10px] bg-muted/40 hover:bg-muted/60 transition-colors">
              <div className="flex items-center gap-4">
                <Volume2 className="h-7 w-7 text-foreground" />
                <span className="text-[24px] font-medium text-foreground">Lectura por voz</span>
              </div>
              <ChevronRight className="h-7 w-7 text-muted-foreground" />
            </button>
          </div>
        </Card>

        <Card className="p-8 rounded-[10px]">
          <h2 className="text-[28px] font-semibold mb-6 text-foreground">Cuenta</h2>
          <div className="space-y-4">
            <button className="flex items-center justify-between w-full p-6 rounded-[10px] bg-muted/40 hover:bg-muted/60 transition-colors">
              <span className="text-[24px] font-medium text-foreground">Mi perfil</span>
              <ChevronRight className="h-7 w-7 text-muted-foreground" />
            </button>
            <button className="flex items-center justify-between w-full p-6 rounded-[10px] bg-muted/40 hover:bg-muted/60 transition-colors">
              <span className="text-[24px] font-medium text-foreground">Contactos de emergencia</span>
              <ChevronRight className="h-7 w-7 text-muted-foreground" />
            </button>
          </div>
        </Card>

        <Button
          variant="outline"
          size="lg"
          className="w-full h-[56px] text-[24px] border-2 border-destructive text-destructive hover:bg-destructive hover:text-white rounded-[10px] bg-transparent"
        >
          Cerrar Sesión
        </Button>
      </main>
    </div>
  )
}
