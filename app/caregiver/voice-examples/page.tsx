"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Mic, Volume2, Activity } from "lucide-react"
import Link from "next/link"

export default function CaregiverVoiceExamplesPage() {
  const examples = [
    {
      category: "Agregar medicamentos (voz del adulto mayor)",
      phrases: [
        "Agregar 1 pastilla de ibuprofeno después del almuerzo",
        "Recordarme 2 gotas de colirio todos los días a las 7 de la mañana",
        "Tomar 5 mililitros de jarabe cada 8 horas",
        "Agregar 1 cucharada de antiácido antes de dormir",
      ],
    },
    {
      category: "Marcar como tomado",
      phrases: ["Ya lo tomé", "Tomé la medicina", "Completado", "Ya me tomé las pastillas"],
    },
    {
      category: "Consultas con Alexa",
      phrases: [
        "Alexa, pregúntale a LILA cuál es mi próximo medicamento",
        "Alexa, dile a LILA que ya tomé mi medicina",
        "Alexa, pídele a LILA que me recuerde mis pendientes",
        "Alexa, pregúntale a LILA a qué hora tomo la próxima pastilla",
      ],
    },
    {
      category: "Emergencias y ayuda",
      phrases: ["Necesito ayuda", "Emergencia", "Llamar a mi familiar", "Contactar a mi cuidador"],
    },
  ]

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

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <Link href="/caregiver/voice-settings">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
          </Link>
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-primary shrink-0">
                <Mic className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Ejemplos de Comandos de Voz</h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Estas son frases que los adultos mayores pueden usar para controlar LILA con su voz
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          {examples.map((section, idx) => (
            <Card key={idx} className="p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-3">
                <Volume2 className="h-6 w-6 text-primary shrink-0" />
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.phrases.map((phrase, phraseIdx) => (
                  <div key={phraseIdx} className="p-4 sm:p-5 rounded-lg bg-muted/40 border">
                    <p className="text-base sm:text-lg leading-relaxed">"{phrase}"</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 sm:p-8 bg-blue-50 dark:bg-blue-950/20 border-primary/20 mt-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Recomendaciones para familiares/cuidadores</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl shrink-0">•</span>
              <p className="text-base sm:text-lg leading-relaxed">
                Practica estos comandos con los adultos mayores para que se familiaricen
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl shrink-0">•</span>
              <p className="text-base sm:text-lg leading-relaxed">Configura Alexa cerca de donde pasan más tiempo</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl shrink-0">•</span>
              <p className="text-base sm:text-lg leading-relaxed">
                Habilita notificaciones para saber cuándo usan comandos de voz
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl shrink-0">•</span>
              <p className="text-base sm:text-lg leading-relaxed">
                Revisa el historial de comandos de voz en el dashboard
              </p>
            </li>
          </ul>
        </Card>
      </main>
    </div>
  )
}
