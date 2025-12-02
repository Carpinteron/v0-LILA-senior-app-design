"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic, MicOff, ArrowLeft, Volume2, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function VoiceCommandPage() {
  const router = useRouter()
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [feedback, setFeedback] = useState("")
  const [recognition, setRecognition] = useState<any>(null)

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      setFeedback("Tu navegador no soporta reconocimiento de voz")
      return
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    const recognitionInstance = new SpeechRecognition()

    recognitionInstance.lang = "es-ES"
    recognitionInstance.continuous = false
    recognitionInstance.interimResults = false

    recognitionInstance.onresult = (event: any) => {
      const command = event.results[0][0].transcript
      setTranscript(command)
      processVoiceCommand(command)
    }

    recognitionInstance.onerror = (event: any) => {
      setFeedback(`Error: ${event.error}. Intenta de nuevo.`)
      setIsListening(false)
    }

    recognitionInstance.onend = () => {
      setIsListening(false)
    }

    setRecognition(recognitionInstance)

    return () => {
      if (recognitionInstance) {
        recognitionInstance.stop()
      }
    }
  }, [])

  const processVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase()

    if (
      lowerCommand.includes("ya lo tomé") ||
      lowerCommand.includes("tomé la medicina") ||
      lowerCommand.includes("tome el medicamento")
    ) {
      setFeedback("Perfecto! Medicamento marcado como tomado")
      playSuccessSound()
    } else if (
      lowerCommand.includes("agregar medicina") ||
      lowerCommand.includes("nueva medicina") ||
      lowerCommand.includes("agregar medicamento")
    ) {
      setFeedback("Abriendo formulario para agregar medicina...")
      setTimeout(() => router.push("/senior/add-medication"), 1500)
    } else if (lowerCommand.includes("ayuda") || lowerCommand.includes("emergencia")) {
      setFeedback("Enviando alerta de emergencia a tus contactos")
      playAlertSound()
    } else if (lowerCommand.includes("llamar")) {
      setFeedback("Llamando a tu familiar de emergencia...")
      playDialSound()
    } else if (lowerCommand.includes("calendario")) {
      setFeedback("Abriendo calendario...")
      setTimeout(() => router.push("/senior/calendar"), 1500)
    } else if (lowerCommand.includes("historial")) {
      setFeedback("Abriendo historial...")
      setTimeout(() => router.push("/senior/history"), 1500)
    } else if (lowerCommand.includes("inicio") || lowerCommand.includes("casa")) {
      setFeedback("Volviendo al inicio...")
      setTimeout(() => router.push("/senior/home"), 1500)
    } else {
      setFeedback(`No entendí el comando: "${command}". Intenta de nuevo.`)
    }
  }

  const playSuccessSound = () => {
    const audio = new Audio("/sounds/success.mp3")
    audio.play().catch(() => {})
  }

  const playAlertSound = () => {
    const audio = new Audio("/sounds/alert.mp3")
    audio.play().catch(() => {})
  }

  const playDialSound = () => {
    const audio = new Audio("/sounds/dial.mp3")
    audio.play().catch(() => {})
  }

  const toggleListening = () => {
    if (!recognition) return

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      setTranscript("")
      setFeedback("Escuchando... Di tu comando")
      recognition.start()
      setIsListening(true)
    }
  }

  const voiceExamples = [
    { command: '"Ya lo tomé"', action: "Marca el medicamento como tomado" },
    { command: '"Agregar medicina"', action: "Abre formulario de nueva medicina" },
    { command: '"Ayuda"', action: "Envía alerta de emergencia" },
    { command: '"Llamar"', action: "Llama a tu familiar" },
    { command: '"Calendario"', action: "Abre el calendario" },
    { command: '"Historial"', action: "Abre el historial" },
  ]

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="bg-card border-b border-border px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/senior/home">
              <Button variant="ghost" size="icon" className="h-11 w-11">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-foreground">Comandos de Voz</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-[10px]">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="flex justify-center">
              <button
                onClick={toggleListening}
                className={`relative flex items-center justify-center h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-full transition-all ${
                  isListening
                    ? "bg-destructive animate-pulse shadow-2xl shadow-destructive/50"
                    : "bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30"
                }`}
              >
                {isListening ? (
                  <MicOff className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-white" />
                ) : (
                  <Mic className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-white" />
                )}
                {isListening && (
                  <>
                    <span className="absolute inset-0 rounded-full border-4 border-destructive animate-ping opacity-75"></span>
                    <span className="absolute inset-0 rounded-full border-4 border-destructive animate-pulse"></span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-foreground">
                {isListening ? "Escuchando..." : "Toca el micrófono para hablar"}
              </p>
              <p className="text-base sm:text-lg lg:text-[22px] text-muted-foreground">
                {isListening ? "Estoy esperando tu comando" : "Puedes pedirme ayuda, marcar medicinas y más"}
              </p>
            </div>

            {transcript && (
              <Card className="p-4 sm:p-6 bg-card border-2 border-primary/30 rounded-[10px]">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Volume2 className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0 mt-1" />
                  <div className="flex-1 text-left">
                    <p className="text-sm sm:text-base text-muted-foreground mb-1">Dijiste:</p>
                    <p className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground">{transcript}</p>
                  </div>
                </div>
              </Card>
            )}

            {feedback && (
              <Card
                className={`p-4 sm:p-6 border-2 rounded-[10px] ${
                  feedback.includes("Error") || feedback.includes("No entendí")
                    ? "bg-destructive/10 border-destructive/30"
                    : "bg-secondary/10 border-secondary/30"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2
                    className={`h-6 w-6 sm:h-7 sm:w-7 shrink-0 mt-1 ${
                      feedback.includes("Error") || feedback.includes("No entendí")
                        ? "text-destructive"
                        : "text-secondary"
                    }`}
                  />
                  <p className="flex-1 text-left text-base sm:text-lg lg:text-[22px] font-medium text-foreground">
                    {feedback}
                  </p>
                </div>
              </Card>
            )}
          </div>
        </Card>

        <Card className="p-6 sm:p-8 rounded-[10px]">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mb-4 sm:mb-6 text-foreground">
            Comandos que puedes usar
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {voiceExamples.map((example, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-muted/30 rounded-[10px] border border-border"
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-[8px] bg-primary/10 shrink-0">
                  <Mic className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-lg sm:text-xl lg:text-[24px] font-medium text-foreground mb-1">
                    {example.command}
                  </p>
                  <p className="text-base sm:text-lg lg:text-[20px] text-muted-foreground">{example.action}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="flex justify-center pt-4">
          <Link href="/senior/home" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-12 sm:h-14 text-base sm:text-lg rounded-[10px] bg-transparent"
            >
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
