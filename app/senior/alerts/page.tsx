import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, Clock, Bell } from "lucide-react"
import Link from "next/link"

export default function SeniorAlertsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/senior/home">
            <Button variant="ghost" size="lg" className="text-[20px] h-12">
              ← Volver
            </Button>
          </Link>
          <h1 className="text-[32px] font-bold text-foreground">Alertas</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <Card className="p-8 rounded-[10px] bg-destructive/10 border-2 border-destructive/30">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-destructive shrink-0">
              <AlertCircle className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[24px] font-semibold text-foreground mb-2">Medicamento Omitido</h3>
              <p className="text-[20px] text-muted-foreground mb-4">No tomaste Losartán 50mg a las 10:00 AM</p>
              <p className="text-[18px] text-muted-foreground">Hace 2 horas</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-[10px] bg-[#E8F4FF] border-2 border-primary/30">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-primary shrink-0">
              <Clock className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[24px] font-semibold text-foreground mb-2">Recordatorio Próximo</h3>
              <p className="text-[20px] text-muted-foreground mb-4">Metformina 500mg a las 2:00 PM</p>
              <p className="text-[18px] text-muted-foreground">En 30 minutos</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-[10px] bg-secondary/10 border-2 border-secondary/30">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-secondary shrink-0">
              <Bell className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[24px] font-semibold text-foreground mb-2">Rutina del Día</h3>
              <p className="text-[20px] text-muted-foreground mb-4">Recuerda caminar 15 minutos a las 4:00 PM</p>
              <p className="text-[18px] text-muted-foreground">En 3 horas</p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
