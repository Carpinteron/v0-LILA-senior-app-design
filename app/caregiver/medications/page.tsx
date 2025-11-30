import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Pill, Search, Plus, Clock, User } from "lucide-react"
import Link from "next/link"

export default function CaregiverMedicationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/caregiver/dashboard">
              <Button variant="ghost">← Dashboard</Button>
            </Link>
            <h1 className="text-2xl font-bold">Medicamentos</h1>
          </div>
          <Link href="/caregiver/medications/add">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Agregar Medicamento
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Buscar medicamentos..." className="pl-12 h-12" />
          </div>
        </div>

        {/* Medications List */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Pill className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Losartán</h3>
                  <p className="text-sm text-muted-foreground">50mg - Oral</p>
                </div>
              </div>
              <Badge variant="secondary">Activo</Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>María González</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>8:00 AM, 8:00 PM - Diario</span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">Para hipertensión arterial</p>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Link href="/caregiver/medications/1" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Detalles
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Pill className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Metformina</h3>
                  <p className="text-sm text-muted-foreground">850mg - Oral</p>
                </div>
              </div>
              <Badge variant="secondary">Activo</Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Pedro Martínez</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>8:00 AM, 2:00 PM, 8:00 PM</span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">Control de diabetes tipo 2</p>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Link href="/caregiver/medications/2" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Detalles
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Pill className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Atorvastatina</h3>
                  <p className="text-sm text-muted-foreground">20mg - Oral</p>
                </div>
              </div>
              <Badge variant="secondary">Activo</Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Ana López</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>8:00 PM - Diario</span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">Control de colesterol</p>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Link href="/caregiver/medications/3" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Detalles
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Pill className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Aspirina</h3>
                  <p className="text-sm text-muted-foreground">100mg - Oral</p>
                </div>
              </div>
              <Badge variant="secondary">Activo</Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>María González</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>8:00 AM - Diario</span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">Prevención cardiovascular</p>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Link href="/caregiver/medications/4" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Detalles
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
