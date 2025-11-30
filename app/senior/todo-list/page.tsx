import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Pill, Activity, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function SeniorTodoListPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/senior/home">
            <Button variant="ghost" size="lg" className="h-12 w-12 p-0">
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </Link>
          <h1 className="text-[32px] font-bold text-foreground">Tareas del Día</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <Card className="p-8 rounded-[10px]">
          <h3 className="text-[24px] font-semibold mb-6 text-foreground">Medicamentos</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-muted/40">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-primary shrink-0">
                <Pill className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Aspirina 100mg</p>
                <p className="text-[20px] text-muted-foreground">8:00 AM</p>
                <span className="inline-block mt-2 px-4 py-1 rounded-full bg-secondary/20 text-secondary text-[16px] font-medium">
                  Completado
                </span>
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Check className="h-7 w-7 text-white" />
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-card border-2 border-primary">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#E8F4FF] shrink-0">
                <Pill className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Losartán 50mg</p>
                <p className="text-[20px] text-muted-foreground">10:00 AM</p>
                <span className="inline-block mt-2 px-4 py-1 rounded-full bg-primary/20 text-primary text-[16px] font-medium">
                  Pendiente
                </span>
              </div>
              <div className="h-12 w-12 rounded-full border-2 border-primary shrink-0"></div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-card border-2 border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#E8F4FF] shrink-0">
                <Pill className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Metformina 500mg</p>
                <p className="text-[20px] text-muted-foreground">2:00 PM</p>
                <span className="inline-block mt-2 px-4 py-1 rounded-full bg-muted text-muted-foreground text-[16px] font-medium">
                  Pendiente
                </span>
              </div>
              <div className="h-12 w-12 rounded-full border-2 border-muted-foreground/30 shrink-0"></div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-card border-2 border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#E8F4FF] shrink-0">
                <Pill className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Atorvastatina 20mg</p>
                <p className="text-[20px] text-muted-foreground">9:00 PM</p>
                <span className="inline-block mt-2 px-4 py-1 rounded-full bg-muted text-muted-foreground text-[16px] font-medium">
                  Pendiente
                </span>
              </div>
              <div className="h-12 w-12 rounded-full border-2 border-muted-foreground/30 shrink-0"></div>
            </div>
          </div>
        </Card>

        <Card className="p-8 rounded-[10px]">
          <h3 className="text-[24px] font-semibold mb-6 text-foreground">Rutinas y Actividades</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-card border-2 border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-secondary/10 shrink-0">
                <Activity className="h-7 w-7 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Caminar 15 minutos</p>
                <p className="text-[20px] text-muted-foreground">4:00 PM</p>
                <span className="inline-block mt-2 px-4 py-1 rounded-full bg-muted text-muted-foreground text-[16px] font-medium">
                  Pendiente
                </span>
              </div>
              <div className="h-12 w-12 rounded-full border-2 border-muted-foreground/30 shrink-0"></div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-[10px] bg-card border-2 border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-secondary/10 shrink-0">
                <Activity className="h-7 w-7 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-[24px] font-medium text-foreground">Medir presión arterial</p>
                <p className="text-[20px] text-muted-foreground">7:00 PM</p>
                <span className="inline-block mt-2 px-4 py-1 rounded-full bg-muted text-muted-foreground text-[16px] font-medium">
                  Pendiente
                </span>
              </div>
              <div className="h-12 w-12 rounded-full border-2 border-muted-foreground/30 shrink-0"></div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
