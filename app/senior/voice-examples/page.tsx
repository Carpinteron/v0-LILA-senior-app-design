"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Mic, Volume2, Settings } from "lucide-react"
import Link from "next/link"
import { SeniorNav } from "@/components/senior-nav"

export default function VoiceExamplesPage() {
  const examples = [
    {
      category: "Agregar medicamentos",
      phrases: [
        "Agregar 1 pastilla de ibuprofeno después del almuerzo",
        "Recordarme 2 gotas de colirio todos los días a las 7 de la mañana",
        "Tomar 5 mililitros de jarabe cada 8 horas",
        "Agregar 1 cucharada de antiácido antes de dormir",
      ],
    },
    {
      category: "Marcar como tomado",
      phrases: ["Ya lo tomé", "Tomé la medicina", "Completado"],
    },
    {
      category: "Modificar recordatorios",
      phrases: [
        "Cambiar la hora del medicamento de la noche a las 10",
        "Pausar recordatorios por hoy",
        "Cancelar alarma de las 2 de la tarde",
      ],
    },
    {
      category: "Pedir ayuda",
      phrases: ["Necesito ayuda", "Emergencia", "Llamar a mi familiar"],
    },
  ]

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border px-4 sm:px-6 py-4 sm:py-6 sticky top-0 z-10">
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
          <h1 className="text-lg sm:text-2xl lg:text-[28px] font-bold text-foreground text-center flex-1 min-w-0 px-2">
            Comandos de Voz
          </h1>
          <Link href="/senior/voice-settings">
            <Button variant="ghost" size="default" className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 p-0">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Card className="p-6 sm:p-8 rounded-[10px] bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 mb-6 sm:mb-8">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[10px] bg-primary shrink-0">
              <Mic className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground mb-2 sm:mb-3">
                ¿Qué puedo decirle a LILA?
              </h2>
              <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground leading-relaxed">
                Puedes usar tu voz para controlar casi todo en la aplicación. Aquí hay ejemplos de frases que puedes
                decir:
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-6 sm:space-y-8">
          {examples.map((section, idx) => (
            <Card key={idx} className="p-6 sm:p-8 rounded-[10px]">
              <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                <Volume2 className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
                {section.category}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {section.phrases.map((phrase, phraseIdx) => (
                  <div key={phraseIdx} className="p-4 sm:p-5 rounded-[8px] bg-muted/40 border border-border">
                    <p className="text-base sm:text-lg lg:text-[20px] text-foreground leading-relaxed">"{phrase}"</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 sm:p-8 rounded-[10px] bg-blue-bg border-primary/20 mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground mb-4">
            Consejos para usar comandos de voz
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl sm:text-2xl shrink-0">•</span>
              <p className="text-base sm:text-lg lg:text-[20px] text-foreground leading-relaxed">
                Habla claro y a un volumen normal
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl sm:text-2xl shrink-0">•</span>
              <p className="text-base sm:text-lg lg:text-[20px] text-foreground leading-relaxed">
                No es necesario gritar, la app te escucha bien
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl sm:text-2xl shrink-0">•</span>
              <p className="text-base sm:text-lg lg:text-[20px] text-foreground leading-relaxed">
                Espera a que el botón se ponga rojo antes de hablar
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl sm:text-2xl shrink-0">•</span>
              <p className="text-base sm:text-lg lg:text-[20px] text-foreground leading-relaxed">
                Si no funciona la primera vez, intenta de nuevo con palabras diferentes
              </p>
            </li>
          </ul>
        </Card>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link href="/senior/voice-settings" className="flex-1">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px] bg-card"
            >
              <Settings className="mr-2 h-5 w-5" />
              Configurar Voz y Alexa
            </Button>
          </Link>
        </div>
      </main>

      <SeniorNav />
    </div>
  )
}
