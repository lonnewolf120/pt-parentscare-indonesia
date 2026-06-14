export const whatsappNumber = "628211663798"

export function createWhatsAppHref(message: string) {
  return `https://api.whatsapp.com/send/?phone=%2B${whatsappNumber}&text=${encodeURIComponent(message)}`
}

export type ServiceAccent = "pink" | "blue" | "red"

export type StandardPackage = {
  serviceTime: string
  caregiverSalary: string
  clientPrice: string
  duration: "Bulanan" | "Harian"
  popular?: boolean
}

export type NannyPackage = {
  childAge: "Di bawah 2 tahun" | "Di atas 2 tahun"
  serviceTime: string
  salaryOneChild: string
  clientPriceOneChild: string
  salaryTwoChildren: string
  clientPriceTwoChildren: string
  duration: "Bulanan"
  popular?: boolean
}

export const standardServices = [
  {
    id: "caregiver",
    title: "Pengasuh",
    shortTitle: "Caregiver",
    description: "Perawatan lansia dan pasien di rumah untuk kebutuhan non-medis sehari-hari.",
    task: "Perawatan lansia/pasien di rumah",
    accent: "pink" as ServiceAccent,
    image: "/images/caregiver_service_1.jpeg",
    features: [
      "Pendampingan pasien dan lansia",
      "Bantuan mandi, makan, dan aktivitas harian",
      "Pemantauan obat dan rutinitas perawatan",
      "Staf sabar, teliti, dan bertanggung jawab",
    ],
    packages: [
      {
        serviceTime: "24 jam, 6 hari/minggu (Live-in)",
        caregiverSalary: "Rp 3.800.000 - Rp 5.800.000",
        clientPrice: "Rp 5.400.000 - Rp 7.000.000",
        duration: "Bulanan" as const,
        popular: true,
      },
      {
        serviceTime: "12 jam, 6 hari/minggu",
        caregiverSalary: "Rp 3.000.000 - Rp 3.900.000",
        clientPrice: "Rp 4.200.000 - Rp 5.800.000",
        duration: "Bulanan" as const,
      },
      {
        serviceTime: "24 jam per hari",
        caregiverSalary: "Rp 180.000 - Rp 300.000",
        clientPrice: "Rp 200.000 - Rp 350.000",
        duration: "Harian" as const,
      },
      {
        serviceTime: "12 jam per hari",
        caregiverSalary: "Rp 100.000 - Rp 230.000",
        clientPrice: "Rp 150.000 - Rp 280.000",
        duration: "Harian" as const,
      },
    ],
  },
  {
    id: "nurse",
    title: "Perawat",
    shortTitle: "Nurse",
    description: "Perawatan terampil untuk pasien dengan kebutuhan lebih kompleks di rumah.",
    task: "Perawatan pasien terampil",
    accent: "red" as ServiceAccent,
    image: "/images/caregiver_service_3.jpeg",
    features: [
      "Cek tanda vital dan tekanan darah",
      "Cek diabetes dan pemberian insulin",
      "Administrasi obat sesuai instruksi",
      "Pengawasan pasien berkelanjutan",
    ],
    packages: [
      {
        serviceTime: "24 jam, 6 hari/minggu (Live-in)",
        caregiverSalary: "Rp 4.560.000 - Rp 6.960.000",
        clientPrice: "Rp 6.500.000 - Rp 10.000.000",
        duration: "Bulanan" as const,
        popular: true,
      },
      {
        serviceTime: "12 jam, 6 hari/minggu",
        caregiverSalary: "Rp 3.600.000 - Rp 4.680.000",
        clientPrice: "Rp 5.200.000 - Rp 6.800.000",
        duration: "Bulanan" as const,
      },
      {
        serviceTime: "24 jam per hari",
        caregiverSalary: "Rp 216.000 - Rp 360.000",
        clientPrice: "Rp 310.000 - Rp 520.000",
        duration: "Harian" as const,
      },
      {
        serviceTime: "12 jam per hari",
        caregiverSalary: "Rp 120.000 - Rp 276.000",
        clientPrice: "Rp 175.000 - Rp 400.000",
        duration: "Harian" as const,
      },
    ],
  },
]

export const nannyService = {
  id: "nanny",
  title: "Nanny",
  shortTitle: "Nanny",
  description: "Perawatan bayi dan anak dengan jadwal fleksibel untuk keluarga.",
  task: "Perawatan bayi dan anak",
  accent: "blue" as ServiceAccent,
  image: "/images/caregiver_service_2.jpeg",
  features: [
    "Memberi makan dan mendampingi anak",
    "Memasak makanan anak",
    "Bermain dan aktivitas perkembangan",
    "Semua tugas yang berkaitan dengan anak",
  ],
  packages: [
    {
      childAge: "Di bawah 2 tahun" as const,
      serviceTime: "24 jam / 6 hari seminggu (Live-in)",
      salaryOneChild: "Rp 4.200.000 - Rp 4.800.000",
      clientPriceOneChild: "Rp 6.000.000 - Rp 6.800.000",
      salaryTwoChildren: "Rp 5.300.000 - Rp 6.100.000",
      clientPriceTwoChildren: "Rp 7.500.000 - Rp 8.500.000",
      duration: "Bulanan" as const,
      popular: true,
    },
    {
      childAge: "Di bawah 2 tahun" as const,
      serviceTime: "12 jam / 6 hari seminggu",
      salaryOneChild: "Rp 3.300.000 - Rp 3.800.000",
      clientPriceOneChild: "Rp 4.800.000 - Rp 5.600.000",
      salaryTwoChildren: "Rp 4.200.000 - Rp 5.000.000",
      clientPriceTwoChildren: "Rp 6.000.000 - Rp 7.000.000",
      duration: "Bulanan" as const,
    },
    {
      childAge: "Di bawah 2 tahun" as const,
      serviceTime: "10 jam / 6 hari seminggu",
      salaryOneChild: "Rp 2.800.000 - Rp 3.300.000",
      clientPriceOneChild: "Rp 4.200.000 - Rp 4.900.000",
      salaryTwoChildren: "Rp 3.600.000 - Rp 4.300.000",
      clientPriceTwoChildren: "Rp 5.250.000 - Rp 6.125.000",
      duration: "Bulanan" as const,
    },
    {
      childAge: "Di bawah 2 tahun" as const,
      serviceTime: "8 jam / 6 hari seminggu",
      salaryOneChild: "Rp 2.400.000 - Rp 2.800.000",
      clientPriceOneChild: "Rp 3.600.000 - Rp 4.300.000",
      salaryTwoChildren: "Rp 3.000.000 - Rp 3.600.000",
      clientPriceTwoChildren: "Rp 4.500.000 - Rp 5.375.000",
      duration: "Bulanan" as const,
    },
    {
      childAge: "Di atas 2 tahun" as const,
      serviceTime: "24 jam / 6 hari seminggu (Live-in)",
      salaryOneChild: "Rp 3.800.000 - Rp 4.200.000",
      clientPriceOneChild: "Rp 5.200.000 - Rp 5.900.000",
      salaryTwoChildren: "Rp 4.800.000 - Rp 5.400.000",
      clientPriceTwoChildren: "Rp 6.500.000 - Rp 7.375.000",
      duration: "Bulanan" as const,
    },
    {
      childAge: "Di atas 2 tahun" as const,
      serviceTime: "12 jam / 6 hari seminggu",
      salaryOneChild: "Rp 2.800.000 - Rp 3.300.000",
      clientPriceOneChild: "Rp 4.000.000 - Rp 4.600.000",
      salaryTwoChildren: "Rp 3.500.000 - Rp 4.200.000",
      clientPriceTwoChildren: "Rp 5.000.000 - Rp 5.750.000",
      duration: "Bulanan" as const,
    },
    {
      childAge: "Di atas 2 tahun" as const,
      serviceTime: "10 jam / 6 hari seminggu",
      salaryOneChild: "Rp 2.400.000 - Rp 2.800.000",
      clientPriceOneChild: "Rp 3.500.000 - Rp 4.100.000",
      salaryTwoChildren: "Rp 3.000.000 - Rp 3.600.000",
      clientPriceTwoChildren: "Rp 4.375.000 - Rp 5.125.000",
      duration: "Bulanan" as const,
    },
    {
      childAge: "Di atas 2 tahun" as const,
      serviceTime: "8 jam / 6 hari seminggu",
      salaryOneChild: "Rp 2.000.000 - Rp 2.400.000",
      clientPriceOneChild: "Rp 3.000.000 - Rp 3.600.000",
      salaryTwoChildren: "Rp 2.500.000 - Rp 3.100.000",
      clientPriceTwoChildren: "Rp 3.750.000 - Rp 4.500.000",
      duration: "Bulanan" as const,
    },
  ],
}

export const serviceNotes = [
  "6 hari kerja dengan 1 hari libur.",
  "Biaya transport tetap Rp 300.000.",
  "Klien menyediakan makanan untuk caregiver/nanny: 12 jam mendapat 1 kali makan, 24 jam mendapat 3 kali makan.",
  "Penggantian staf dapat diminta bila layanan tidak sesuai harapan.",
]

export const serviceAdvantages = [
  "Staf sabar, teliti, dan bertanggung jawab.",
  "Pilihan jadwal fleksibel sesuai kebutuhan keluarga.",
  "Admin siap membantu selama masa kontrak.",
  "Proses seleksi dan dokumen dilakukan sebelum penempatan.",
]

export const allServices = [...standardServices, nannyService]
