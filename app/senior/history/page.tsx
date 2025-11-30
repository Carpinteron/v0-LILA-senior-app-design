import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, Pill, Activity } from "lucide-react"
import Link from "next/link"

export default function SeniorHistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/senior/home">
            <Button variant="ghost" size="lg" className="text-[20px] h-12">
              ← Volver
            </Button>
          </Link>
          <h1 className="text-[32px] font-bold text-foreground">Historial</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <Card className="p-8 rounded-[10px]">
          <h3 className="text-[24px] font-semibold mb-6 text-foreground">Hoy - 15 Enero</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-secondary/10 border-2 border-secondary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-secondary shrink-0">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Aspirina 100mg</p>
                <p className="text-[20px] text-muted-foreground">8:00 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-8 w-8 text-secondary" />
                <span className="text-[18px] text-secondary font-medium">Tomado</span>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-destructive/10 border-2 border-destructive/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-destructive shrink-0">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Losartán 50mg</p>
                <p className="text-[20px] text-muted-foreground">10:00 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <X className="h-8 w-8 text-destructive" />
                <span className="text-[18px] text-destructive font-medium">Omitido</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-[10px]">
          <h3 className="text-[24px] font-semibold mb-6 text-foreground">Ayer - 14 Enero</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-secondary/10 border-2 border-secondary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-secondary shrink-0">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Aspirina 100mg</p>
                <p className="text-[20px] text-muted-foreground">8:00 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-8 w-8 text-secondary" />
                <span className="text-[18px] text-secondary font-medium">Tomado</span>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-secondary/10 border-2 border-secondary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-secondary shrink-0">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Losartán 50mg</p>
                <p className="text-[20px] text-muted-foreground">10:00 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-8 w-8 text-secondary" />
                <span className="text-[18px] text-secondary font-medium">Tomado</span>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-secondary/10 border-2 border-secondary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-secondary shrink-0">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Caminar 15 minutos</p>
                <p className="text-[20px] text-muted-foreground">4:00 PM</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-8 w-8 text-secondary" />
                <span className="text-[18px] text-secondary font-medium">Completado</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-[10px]">
          <h3 className="text-[24px] font-semibold mb-6 text-foreground">13 Enero</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-secondary/10 border-2 border-secondary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-secondary shrink-0">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Aspirina 100mg</p>
                <p className="text-[20px] text-muted-foreground">8:00 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-8 w-8 text-secondary" />
                <span className="text-[18px] text-secondary font-medium">Tomado</span>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-secondary/10 border-2 border-secondary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-secondary shrink-0">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Losartán 50mg</p>
                <p className="text-[20px] text-muted-foreground">10:00 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-8 w-8 text-secondary" />
                <span className="text-[18px] text-secondary font-medium">Tomado</span>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
