import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Phone, AlertCircle, Pill, Activity } from "lucide-react"
import Link from "next/link"

export default function SeniorHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-[36px] font-bold text-foreground">Hola, María 👋</h1>
          <Link href="/senior/settings">
            <Button variant="ghost" size="lg" className="text-[20px] h-12 px-6">
              Ajustes
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <Card className="p-8 bg-[#E8F4FF] border-2 border-primary/30 rounded-[10px]">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-primary shrink-0">
              <Pill className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[20px] text-muted-foreground mb-2">Próximo medicamento</p>
              <h2 className="text-[32px] font-bold text-foreground mb-1">Losartán 50mg</h2>
              <p className="text-[24px] text-muted-foreground">10:00 AM (en 15 minutos)</p>
            </div>
          </div>

          <Button size="lg" className="w-full h-[56px] text-[24px] font-semibold rounded-[10px]">
            <Check className="mr-3 h-8 w-8" />
            Ya lo tomé
          </Button>
        </Card>

        <div className="grid grid-cols-2 gap-6">
          <Button
            variant="outline"
            size="lg"
            className="h-[56px] text-[20px] border-2 hover:bg-destructive/10 hover:border-destructive hover:text-destructive rounded-[10px] bg-transparent"
          >
            <AlertCircle className="mr-3 h-7 w-7" />
            Necesito Ayuda
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-[56px] text-[20px] border-2 hover:bg-secondary/10 hover:border-secondary hover:text-secondary rounded-[10px] bg-transparent"
          >
            <Phone className="mr-3 h-7 w-7" />
            Llamar Familiar
          </Button>
        </div>

        <Card className="p-8 rounded-[10px]">
          <h3 className="text-[28px] font-semibold mb-6 text-foreground">Tareas de Hoy</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-muted/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-primary shrink-0">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Aspirina 100mg</p>
                <p className="text-[20px] text-muted-foreground">8:00 AM - Completado</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Check className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-card border-2 border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#E8F4FF] shrink-0">
                <Pill className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Losartán 50mg</p>
                <p className="text-[20px] text-muted-foreground">10:00 AM - Pendiente</p>
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-muted-foreground/30 shrink-0"></div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-card border-2 border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-secondary/10 shrink-0">
                <Activity className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Caminar 15 minutos</p>
                <p className="text-[20px] text-muted-foreground">4:00 PM - Pendiente</p>
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-muted-foreground/30 shrink-0"></div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <Link href="/senior/calendar" className="block">
            <Button variant="outline" size="lg" className="w-full h-[56px] text-[20px] rounded-[10px] bg-transparent">
              Calendario
            </Button>
          </Link>
          <Link href="/senior/history" className="block">
            <Button variant="outline" size="lg" className="w-full h-[56px] text-[20px] rounded-[10px] bg-transparent">
              Historial
            </Button>
          </Link>
          <Link href="/senior/add-medication" className="block">
            <Button variant="outline" size="lg" className="w-full h-[56px] text-[20px] rounded-[10px] bg-transparent">
              Agregar
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
