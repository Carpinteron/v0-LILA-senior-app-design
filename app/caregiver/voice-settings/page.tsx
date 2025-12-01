"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Mic, CheckCircle2, AlertCircle, Activity } from "lucide-react"
import Link from "next/link"

export default function CaregiverVoiceSettingsPage() {
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [alexaConnected, setAlexaConnected] = useState(false)
  const [voiceConfirmation, setVoiceConfirmation] = useState(true)
  const [notifyOnVoiceCommand, setNotifyOnVoiceCommand] = useState(true)

  const handleConnectAlexa = () => {
    setAlexaConnected(true)
    alert("¡Conectado con Alexa!\n\nAhora puedes monitorear cuando los adultos mayores usen comandos de voz con Alexa.")
  }

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
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/caregiver/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/caregiver/seniors">
              <Button variant="ghost">Adultos Mayores</Button>
            </Link>
            <Link href="/caregiver/medications">
              <Button variant="ghost">Medicamentos</Button>
            </Link>
          </nav>
          <Link href="/caregiver/settings">
            <Avatar className="h-10 w-10 cursor-pointer shrink-0">
              <AvatarFallback className="bg-secondary text-secondary-foreground">JD</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <Link href="/caregiver/settings">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Ajustes
            </Button>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Control por Voz y Alexa</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Configura la integración de voz para facilitar el uso de la app
          </p>
        </div>

        <div className="space-y-6">
          {/* Alexa Integration Card */}
          <Card className="p-6 sm:p-8">
            <div className="flex items-start gap-4 sm:gap-6 mb-6">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0">
                <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Conectar con Alexa</h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {alexaConnected
                    ? "Alexa está conectada. Los adultos mayores pueden usar comandos de voz."
                    : "Permite que los adultos mayores usen Alexa para gestionar sus medicamentos"}
                </p>
              </div>
            </div>

            {alexaConnected ? (
              <div className="space-y-4 sm:space-y-5">
                <div className="p-4 sm:p-5 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                  <p className="text-base sm:text-lg">Conectado exitosamente</p>
                </div>
                <div className="space-y-3">
                  <p className="text-base sm:text-lg font-medium">Comandos disponibles para adultos mayores:</p>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-muted-foreground p-3 rounded-lg bg-muted/40">
                      "Alexa, pregúntale a LILA cuál es mi próximo medicamento"
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground p-3 rounded-lg bg-muted/40">
                      "Alexa, dile a LILA que ya tomé mi medicina"
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground p-3 rounded-lg bg-muted/40">
                      "Alexa, pídele a LILA que llame a mi familiar"
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setAlexaConnected(false)} className="flex-1">
                    Desconectar
                  </Button>
                  <Link href="/caregiver/voice-examples" className="flex-1">
                    <Button variant="secondary" className="w-full">
                      Ver más ejemplos
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <Button size="lg" onClick={handleConnectAlexa} className="w-full">
                Conectar con Alexa
              </Button>
            )}
          </Card>

          {/* Voice Settings Card */}
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <Mic className="h-6 w-6 text-primary" />
              Configuración de Voz
            </h2>

            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4 p-4 sm:p-5 rounded-lg border">
                <div className="flex-1 min-w-0">
                  <Label htmlFor="voice-enabled" className="text-base sm:text-lg font-medium block mb-1">
                    Habilitar comandos de voz
                  </Label>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Permite a los adultos mayores usar su voz para controlar la app
                  </p>
                </div>
                <Switch
                  id="voice-enabled"
                  checked={voiceEnabled}
                  onCheckedChange={setVoiceEnabled}
                  className="shrink-0"
                />
              </div>

              <div className="flex items-start justify-between gap-4 p-4 sm:p-5 rounded-lg border">
                <div className="flex-1 min-w-0">
                  <Label htmlFor="voice-confirmation" className="text-base sm:text-lg font-medium block mb-1">
                    Confirmación por voz
                  </Label>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    La app responde verbalmente cuando se ejecuta un comando
                  </p>
                </div>
                <Switch
                  id="voice-confirmation"
                  checked={voiceConfirmation}
                  onCheckedChange={setVoiceConfirmation}
                  className="shrink-0"
                />
              </div>

              <div className="flex items-start justify-between gap-4 p-4 sm:p-5 rounded-lg border">
                <div className="flex-1 min-w-0">
                  <Label htmlFor="notify-voice" className="text-base sm:text-lg font-medium block mb-1">
                    Notificar uso de voz
                  </Label>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Recibe alertas cuando un adulto mayor usa comandos de voz
                  </p>
                </div>
                <Switch
                  id="notify-voice"
                  checked={notifyOnVoiceCommand}
                  onCheckedChange={setNotifyOnVoiceCommand}
                  className="shrink-0"
                />
              </div>
            </div>
          </Card>

          {/* Help Card */}
          <Card className="p-6 sm:p-8 bg-blue-50 dark:bg-blue-950/20 border-primary/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Beneficios del control por voz</h3>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>Facilita el uso de la app para adultos mayores con movilidad reducida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>Permite agregar medicamentos de forma más rápida y natural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>Reduce barreras tecnológicas con interfaces conversacionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>Integración con dispositivos Alexa que ya tienen en casa</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
