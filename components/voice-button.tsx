"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface VoiceButtonProps {
  onVoiceCommand?: (command: string) => void
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function VoiceButton({ onVoiceCommand, className, size = "icon" }: VoiceButtonProps) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      console.log("[v0] Speech recognition not supported")
      return
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.lang = "es-ES"
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript
      console.log("[v0] Voice command received:", command)
      setTranscript(command)
      onVoiceCommand?.(command)
      setIsListening(false)
    }

    recognition.onerror = (event: any) => {
      console.log("[v0] Speech recognition error:", event.error)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    if (isListening) {
      recognition.start()
    }

    return () => {
      recognition.stop()
    }
  }, [isListening, onVoiceCommand])

  const toggleListening = () => {
    setIsListening(!isListening)
  }

  return (
    <Button
      type="button"
      variant={isListening ? "default" : "outline"}
      size={size}
      onClick={toggleListening}
      className={cn("transition-all", isListening && "animate-pulse bg-destructive hover:bg-destructive", className)}
    >
      {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
    </Button>
  )
}
