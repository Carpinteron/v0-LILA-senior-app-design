// Mock data for the LILA app

export interface Medication {
  id: string
  name: string
  dosage: string
  frequency: string
  time: string
  taken: boolean
  instructions?: string
  color: string
}

export interface Senior {
  id: string
  name: string
  age: number
  photo: string
  medications: Medication[]
  emergencyContact: string
  phone: string
}

export interface Alert {
  id: string
  type: "missed" | "emergency" | "info"
  message: string
  time: string
  seniorName: string
}

export const mockMedications: Medication[] = [
  {
    id: "1",
    name: "Losartán",
    dosage: "50mg",
    frequency: "1 vez al día",
    time: "08:00 AM",
    taken: false,
    instructions: "Tomar con el desayuno",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "2",
    name: "Metformina",
    dosage: "850mg",
    frequency: "2 veces al día",
    time: "12:00 PM",
    taken: false,
    instructions: "Tomar después de comer",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "3",
    name: "Atorvastatina",
    dosage: "20mg",
    frequency: "1 vez al día",
    time: "08:00 PM",
    taken: false,
    instructions: "Tomar en la noche",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "4",
    name: "Omeprazol",
    dosage: "20mg",
    frequency: "1 vez al día",
    time: "07:30 AM",
    taken: true,
    instructions: "Tomar antes del desayuno",
    color: "bg-orange-100 text-orange-700",
  },
]

export const mockSeniors: Senior[] = [
  {
    id: "1",
    name: "María García",
    age: 72,
    photo: "/elderly-woman-smiling.png",
    medications: mockMedications,
    emergencyContact: "Dr. Rodríguez",
    phone: "+52 55 1234 5678",
  },
  {
    id: "2",
    name: "José Martínez",
    age: 68,
    photo: "/elderly-man-joy.png",
    medications: mockMedications.slice(0, 2),
    emergencyContact: "Dra. López",
    phone: "+52 55 8765 4321",
  },
]

export const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "missed",
    message: "María no tomó su Losartán de las 8:00 AM",
    time: "Hace 2 horas",
    seniorName: "María García",
  },
  {
    id: "2",
    type: "info",
    message: "José tomó todos sus medicamentos del día",
    time: "Hace 4 horas",
    seniorName: "José Martínez",
  },
  {
    id: "3",
    type: "emergency",
    message: "María presionó el botón de emergencia",
    time: "Ayer",
    seniorName: "María García",
  },
]

export const mockRoutines = [
  {
    id: "1",
    name: "Caminar 30 minutos",
    time: "09:00 AM",
    completed: true,
    icon: "walking",
  },
  {
    id: "2",
    name: "Revisar presión arterial",
    time: "02:00 PM",
    completed: false,
    icon: "heart",
  },
  {
    id: "3",
    name: "Ejercicios de memoria",
    time: "04:00 PM",
    completed: false,
    icon: "brain",
  },
]
