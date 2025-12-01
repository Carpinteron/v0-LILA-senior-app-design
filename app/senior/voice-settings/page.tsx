"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mic, Volume2, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { SeniorNav } from "@/components/senior-nav"

export default function VoiceSettingsPage() {
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [alexaConnected, setAlexaConnected] = useState(false)
  const [voiceConfirmation, setVoiceConfirmation] = useState(true)
  const [autoListen, setAutoListen] = useState(false)

  const handleConnectAlexa = () => {
    // Simulate Alexa connection
    setAlexaConnected(true)
    alert("¡Conectado con Alexa!\n\nAhora puedes decir: 'Alexa, pregúntale a LILA cuál es mi próximo medicamento'")
  }

  const testVoice = () => {
    alert("Prueba de voz:\n\nDi 'Hola LILA' después de presionar OK")
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-card border-b border-border px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <Link href="/senior/settings">
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
            Control por Voz
          </h1>
          <div className="w-10 sm:w-11 shrink-0" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Alexa Integration Card */}
        <Card className="p-6 sm:p-8 rounded-[10px]">
          <div className="flex items-start gap-4 sm:gap-6 mb-6">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[10px] bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0">
              <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground mb-2">Conectar con Alexa</h2>
              <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground leading-relaxed">
                {alexaConnected
                  ? "Tu cuenta de Alexa está conectada y lista para usar"
                  : "Conecta LILA con tu Alexa para controlar tus medicamentos con la voz"}
              </p>
            </div>
          </div>

          {alexaConnected ? (
            <div className="space-y-4 sm:space-y-5">
              <div className="p-4 sm:p-5 rounded-[8px] bg-secondary/10 border border-secondary/30 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-secondary shrink-0" />
                <p className="text-base sm:text-lg lg:text-[20px] text-foreground">Conectado exitosamente</p>
              </div>
              <div className="space-y-3">
                <p className="text-base sm:text-lg lg:text-[20px] font-medium text-foreground">
                  Prueba estos comandos:
                </p>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base lg:text-[18px] text-muted-foreground p-3 rounded-[8px] bg-muted/40">
                    "Alexa, pregúntale a LILA cuál es mi próximo medicamento"
                  </p>
                  <p className="text-sm sm:text-base lg:text-[18px] text-muted-foreground p-3 rounded-[8px] bg-muted/40">
                    "Alexa, dile a LILA que ya tomé mi medicina"
                  </p>
                  <p className="text-sm sm:text-base lg:text-[18px] text-muted-foreground p-3 rounded-[8px] bg-muted/40">
                    "Alexa, pídele a LILA que me recuerde mis pendientes"
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setAlexaConnected(false)}
                className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px] bg-card"
              >
                Desconectar Alexa
              </Button>
            </div>
          ) : (
            <Button
              size="lg"
              onClick={handleConnectAlexa}
              className="w-full h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[22px] rounded-[10px]"
            >
              Conectar con Alexa
            </Button>
          )}
        </Card>

        {/* Voice Settings Card */}
        <Card className="p-6 sm:p-8 rounded-[10px]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-3">
            <Mic className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            Configuración de Voz
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-[8px] border border-border">
              <div className="flex-1 min-w-0">
                <Label
                  htmlFor="voice-enabled"
                  className="text-base sm:text-lg lg:text-[20px] font-medium text-foreground block mb-1"
                >
                  Habilitar comandos de voz
                </Label>
                <p className="text-sm sm:text-base text-muted-foreground">Permite controlar la app con tu voz</p>
              </div>
              <Switch
                id="voice-enabled"
                checked={voiceEnabled}
                onCheckedChange={setVoiceEnabled}
                className="shrink-0"
              />
            </div>

            <div className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-[8px] border border-border">
              <div className="flex-1 min-w-0">
                <Label
                  htmlFor="voice-confirmation"
                  className="text-base sm:text-lg lg:text-[20px] font-medium text-foreground block mb-1"
                >
                  Confirmación por voz
                </Label>
                <p className="text-sm sm:text-base text-muted-foreground">LILA te responde cuando ejecuta un comando</p>
              </div>
              <Switch
                id="voice-confirmation"
                checked={voiceConfirmation}
                onCheckedChange={setVoiceConfirmation}
                className="shrink-0"
              />
            </div>

            <div className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-[8px] border border-border">
              <div className="flex-1 min-w-0">
                <Label
                  htmlFor="auto-listen"
                  className="text-base sm:text-lg lg:text-[20px] font-medium text-foreground block mb-1"
                >
                  Escucha automática
                </Label>
                <p className="text-sm sm:text-base text-muted-foreground">La app escucha constantemente por comandos</p>
              </div>
              <Switch id="auto-listen" checked={autoListen} onCheckedChange={setAutoListen} className="shrink-0" />
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={testVoice}
            className="w-full mt-6 h-12 sm:h-14 lg:h-[56px] text-base sm:text-lg lg:text-[20px] rounded-[10px] bg-card"
          >
            <Volume2 className="mr-2 h-5 w-5" />
            Probar Reconocimiento de Voz
          </Button>
        </Card>

        {/* Help Card */}
        <Card className="p-6 sm:p-8 rounded-[10px] bg-blue-bg border-primary/20">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-foreground mb-2">
                ¿Necesitas ayuda?
              </h3>
              <p className="text-base sm:text-lg lg:text-[20px] text-foreground leading-relaxed mb-4">
                Si tienes problemas con los comandos de voz, asegúrate de:
              </p>
              <ul className="space-y-2 text-sm sm:text-base lg:text-[18px] text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>Dar permisos de micrófono a la aplicación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>Estar en un lugar con poco ruido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>Hablar claro y a volumen normal</span>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/senior/voice-examples">
            <Button variant="link" className="h-auto p-0 text-sm sm:text-base lg:text-[18px] text-primary">
              Ver ejemplos de comandos →
            </Button>
          </Link>
        </Card>
      </main>

      <SeniorNav />
    </div>
  )
}
