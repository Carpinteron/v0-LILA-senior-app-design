import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Pill, Shield, Bell } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-foreground">LILA</span>
          </div>
          <Link href="/login">
            <Button variant="ghost" className="text-base lg:text-lg h-10 lg:h-11 px-4 lg:px-6">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6 leading-tight">
            Cuidado inteligente para tus seres queridos
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-10 leading-relaxed">
            Ayuda a tus familiares a gestionar medicamentos y rutinas de forma simple. Monitorea su bienestar desde
            cualquier lugar con comandos de voz y Alexa.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/onboarding">
              <Button size="lg" className="h-14 px-8 text-lg rounded-[10px] w-full sm:w-auto">
                Comenzar Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-card rounded-[10px] p-6 lg:p-8 border border-border">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-blue-bg mb-6">
              <Pill className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Recordatorios Inteligentes</h3>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-[18px]">
              Notificaciones claras y comandos de voz para cada medicamento. Interfaz simple para adultos mayores.
            </p>
          </div>

          <div className="bg-card rounded-[10px] p-6 lg:p-8 border border-border">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-blue-bg mb-6">
              <Shield className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Monitoreo Familiar</h3>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-[18px]">
              Los cuidadores reciben alertas en tiempo real y pueden gestionar todo a distancia con Alexa.
            </p>
          </div>

          <div className="bg-card rounded-[10px] p-6 lg:p-8 border border-border sm:col-span-2 lg:col-span-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-blue-bg mb-6">
              <Bell className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Alertas de Emergencia</h3>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-[18px]">
              Botones de ayuda rápida y contactos de emergencia siempre disponibles.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
