import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus, Pill, Calendar, Bell, CheckCircle2, AlertCircle, Clock, Activity, Phone } from "lucide-react"
import Link from "next/link"

export default function CaregiverDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Activity className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold">LILA</span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/caregiver/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/caregiver/seniors">
              <Button variant="ghost">Adultos Mayores</Button>
            </Link>
            <Link href="/caregiver/medications">
              <Button variant="ghost">Medicamentos</Button>
            </Link>
            <Link href="/caregiver/calendar">
              <Button variant="ghost">Agenda</Button>
            </Link>
            <Link href="/caregiver/alerts">
              <Button variant="ghost">Alertas</Button>
            </Link>
          </nav>
          <Link href="/caregiver/settings">
            <Avatar className="h-10 w-10 cursor-pointer">
              <AvatarFallback className="bg-secondary text-secondary-foreground">JD</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenido de vuelta, Juan</h1>
          <p className="text-lg text-muted-foreground">Aquí está el resumen de hoy</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Pill className="h-6 w-6" />
              </div>
              <span className="text-3xl font-bold">8</span>
            </div>
            <p className="text-sm text-muted-foreground">Medicamentos hoy</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <span className="text-3xl font-bold">6</span>
            </div>
            <p className="text-sm text-muted-foreground">Completados</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <AlertCircle className="h-6 w-6" />
              </div>
              <span className="text-3xl font-bold">2</span>
            </div>
            <p className="text-sm text-muted-foreground">Alertas activas</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Activity className="h-6 w-6" />
              </div>
              <span className="text-3xl font-bold">3</span>
            </div>
            <p className="text-sm text-muted-foreground">Adultos mayores</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Próximos Medicamentos */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Próximos Medicamentos</h2>
                <Link href="/caregiver/medications">
                  <Button variant="ghost" size="sm">
                    Ver todos
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold">Losartán 50mg</p>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        10:00 AM
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">María González</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Recordar
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold">Metformina 850mg</p>
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        2:00 PM
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Pedro Martínez</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Recordar
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold">Atorvastatina 20mg</p>
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        8:00 PM
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Ana López</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Recordar
                  </Button>
                </div>
              </div>
            </Card>

            {/* Adultos Mayores */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Adultos Mayores</h2>
                <Link href="/caregiver/seniors">
                  <Button variant="ghost" size="sm">
                    Ver todos
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <Link
                  href="/caregiver/seniors/1"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-primary/10 text-primary text-lg">MG</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">María González</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        6/8 completados hoy
                      </span>
                      <span className="text-xs text-muted-foreground">75 años</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>

                <Link
                  href="/caregiver/seniors/2"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-secondary/10 text-secondary text-lg">PM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Pedro Martínez</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        5/7 completados hoy
                      </span>
                      <span className="text-xs text-muted-foreground">82 años</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>

                <Link
                  href="/caregiver/seniors/3"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-accent/10 text-accent text-lg">AL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Ana López</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        4/6 completados hoy
                      </span>
                      <span className="text-xs text-muted-foreground">68 años</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alertas Recientes */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Alertas</h2>
                <Link href="/caregiver/alerts">
                  <Button variant="ghost" size="sm">
                    Ver todas
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm mb-1">Medicamento omitido</p>
                      <p className="text-xs text-muted-foreground">María no tomó Losartán a las 8:00 AM</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground ml-8">Hace 2 horas</p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-start gap-3 mb-2">
                    <Bell className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm mb-1">Recordatorio próximo</p>
                      <p className="text-xs text-muted-foreground">Pedro - Metformina en 15 min</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground ml-8">Hace 5 minutos</p>
                </div>

                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm mb-1">Medicamento completado</p>
                      <p className="text-xs text-muted-foreground">Ana tomó Atorvastatina</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground ml-8">Hace 1 hora</p>
                </div>
              </div>
            </Card>

            {/* Acciones Rápidas */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Acciones Rápidas</h2>
              <div className="space-y-3">
                <Link href="/caregiver/medications/add">
                  <Button variant="outline" className="w-full justify-start h-12 bg-transparent">
                    <Pill className="mr-3 h-5 w-5" />
                    Agregar Medicamento
                  </Button>
                </Link>
                <Link href="/caregiver/calendar">
                  <Button variant="outline" className="w-full justify-start h-12 bg-transparent">
                    <Calendar className="mr-3 h-5 w-5" />
                    Ver Agenda
                  </Button>
                </Link>
                <Link href="/caregiver/seniors/add">
                  <Button variant="outline" className="w-full justify-start h-12 bg-transparent">
                    <Plus className="mr-3 h-5 w-5" />
                    Agregar Adulto Mayor
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <Link href="/caregiver/medications/add">
        <Button size="lg" className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg">
          <Plus className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  )
}
