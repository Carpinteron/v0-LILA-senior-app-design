import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Pill, Shield, Bell } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-foreground">{"LILA"}</span>
          </div>
          <Link href="/login">
            <Button variant="ghost" className="text-lg h-11 px-6">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground text-balance mb-6 leading-tight">
            Cuidado inteligente para tus seres queridos
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-10 leading-relaxed">
            Ayuda a tus familiares a gestionar medicamentos y rutinas de forma simple. Monitorea su bienestar desde
            cualquier lugar.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/onboarding">
              <Button size="lg" className="h-14 px-8 text-lg rounded-[10px]">
                Comenzar Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-[10px] p-8 border border-border">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E8F4FF] mb-6">
              <Pill className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Recordatorios Inteligentes</h3>
            <p className="text-muted-foreground leading-relaxed text-[18px]">
              Notificaciones claras y amigables para cada medicamento. Interfaz simple para adultos mayores.
            </p>
          </div>

          <div className="bg-card rounded-[10px] p-8 border border-border">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E8F4FF] mb-6">
              <Shield className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Monitoreo Familiar</h3>
            <p className="text-muted-foreground leading-relaxed text-[18px]">
              Los cuidadores reciben alertas en tiempo real y pueden gestionar todo a distancia.
            </p>
          </div>

          <div className="bg-card rounded-[10px] p-8 border border-border">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#E8F4FF] mb-6">
              <Bell className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Alertas de Emergencia</h3>
            <p className="text-muted-foreground leading-relaxed text-[18px]">
              Botones de ayuda rápida y contactos de emergencia siempre disponibles.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
