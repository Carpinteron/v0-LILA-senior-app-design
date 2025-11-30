import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function CaregiverSeniorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/caregiver/dashboard">
              <Button variant="ghost">← Dashboard</Button>
            </Link>
            <h1 className="text-2xl font-bold">Adultos Mayores</h1>
          </div>
          <Link href="/caregiver/seniors/add">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Agregar Adulto Mayor
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary/10 text-primary text-xl">MG</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-1">María González</h3>
                <p className="text-sm text-muted-foreground mb-2">75 años</p>
                <Badge variant="secondary">Activo</Badge>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+34 612 345 678</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>maria.g@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Madrid, España</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-xs text-muted-foreground">Medicamentos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">95%</p>
                  <p className="text-xs text-muted-foreground">Adherencia</p>
                </div>
              </div>
              <Link href="/caregiver/seniors/1">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Perfil
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-secondary/10 text-secondary text-xl">PM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-1">Pedro Martínez</h3>
                <p className="text-sm text-muted-foreground mb-2">82 años</p>
                <Badge variant="secondary">Activo</Badge>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+34 623 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>pedro.m@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Barcelona, España</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Medicamentos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">88%</p>
                  <p className="text-xs text-muted-foreground">Adherencia</p>
                </div>
              </div>
              <Link href="/caregiver/seniors/2">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Perfil
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-accent/10 text-accent text-xl">AL</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-1">Ana López</h3>
                <p className="text-sm text-muted-foreground mb-2">68 años</p>
                <Badge variant="secondary">Activo</Badge>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+34 634 567 890</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>ana.l@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Valencia, España</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-xs text-muted-foreground">Medicamentos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">92%</p>
                  <p className="text-xs text-muted-foreground">Adherencia</p>
                </div>
              </div>
              <Link href="/caregiver/seniors/3">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Perfil
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
