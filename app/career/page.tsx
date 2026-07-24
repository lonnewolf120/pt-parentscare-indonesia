import Link from "next/link"
import { Baby, CheckCircle2, HeartPulse, MessageCircle, ShieldCheck } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { generateMetadata } from "@/lib/seo"
import {
  nannyService,
  standardServices,
} from "@/lib/service-pricing"
import WhatsAppLink from "@/components/whatsapp-link"

export const metadata: Metadata = generateMetadata({
  title: "Career ParentsCare Indonesia - Lowongan Caregiver, Perawat & Nanny",
  description:
    "Lamar sebagai caregiver, perawat, atau nanny ParentsCare Indonesia. Lihat kisaran gaji kandidat, persyaratan dokumen, dan format job circular. Pendaftaran melalui WhatsApp.",
  keywords: [
    "lowongan caregiver Jakarta",
    "lowongan nanny Jakarta",
    "lowongan perawat home care",
    "career ParentsCare Indonesia",
    "gaji caregiver Indonesia",
  ],
  url: "/career",
})

const serviceIcons = {
  caregiver: ShieldCheck,
  nurse: HeartPulse,
  nanny: Baby,
}

const APPLICATION_MESSAGE =
  "Halo, saya ingin melamar sebagai caregiver/nanny/perawat ParentsCare Indonesia."

export default function CareerPage() {

  return (
    <main className="bg-[#FFFDF9]">
      <section className="bg-[#18181B] px-4 py-20 text-white md:py-28">
        <div className="container max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
            Career
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Bergabung sebagai Caregiver, Perawat, atau Nanny
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            ParentsCare Indonesia membuka kesempatan untuk tenaga perawatan yang
            sabar, teliti, bertanggung jawab, dan siap membantu keluarga dengan
            layanan profesional.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppLink message={APPLICATION_MESSAGE}>
              <Button size="lg" className="w-full bg-[#C9202B] text-white hover:bg-[#A91520] sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Lamar via WhatsApp
              </Button>
            </WhatsAppLink>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                Lihat Layanan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-950 md:text-4xl">
              Kisaran Gaji Kandidat
            </h2>
            <p className="mt-3 text-gray-600">
              Kisaran berikut digunakan sebagai panduan saat kami mencocokkan
              kandidat dengan kebutuhan klien. Nilai final mengikuti pengalaman,
              kemampuan, jadwal, dan kebutuhan perawatan.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {standardServices.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons]

              return (
                <Card key={service.id} className="border-[#E7E5E4] bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FBE7EA] text-[#C9202B]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-950">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.task}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {service.packages.map((pkg) => (
                        <div key={pkg.serviceTime} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <p className="font-semibold text-gray-900">{pkg.serviceTime}</p>
                              <p className="text-xs text-gray-500">{pkg.duration}</p>
                            </div>
                            <p className="text-sm font-bold text-[#C9202B]">{pkg.caregiverSalary}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <Card className="border-[#E7E5E4] bg-white shadow-sm lg:col-span-2">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FBE7EA] text-[#C9202B]">
                    <Baby className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-950">Nanny</h3>
                    <p className="text-sm text-gray-500">{nannyService.task}</p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {nannyService.packages.map((pkg) => (
                    <div key={`${pkg.childAge}-${pkg.serviceTime}`} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <p className="font-semibold text-gray-900">{pkg.serviceTime}</p>
                      <p className="mt-1 text-xs text-gray-500">{pkg.childAge}</p>
                      <div className="mt-3 grid gap-2 text-sm">
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-500">1 anak</span>
                          <span className="font-bold text-[#C9202B]">{pkg.salaryOneChild}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-500">2 anak</span>
                          <span className="font-bold text-[#C9202B]">{pkg.salaryTwoChildren}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF4EC] py-16">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold text-gray-950">Kriteria & Alur Pendaftaran</h2>
            <p className="mt-3 text-gray-600">
              Kandidat akan diminta mengirim CV dan dokumen pendukung sebelum
              dipertimbangkan untuk penempatan.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                "CV atau riwayat pengalaman kerja.",
                "KTP atau identitas pribadi.",
                "Alamat saat ini dan alamat permanen.",
                "Foto terbaru.",
                "Kontak keluarga atau penjamin.",
                "Bersedia mengikuti wawancara online atau offline.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="border-gray-200 bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-950">Format Job Circular</h3>
              <div className="mt-4 rounded-xl bg-[#18181B] p-5 text-sm leading-relaxed text-white/85">
                <p>Post: Caregiver berpengalaman dan terampil dibutuhkan.</p>
                <p>Patient type: Pasien normal atau lansia.</p>
                <p>Must be patient and calm.</p>
                <p className="mt-4 font-semibold">Duties:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Vital signs check</li>
                  <li>Blood pressure monitoring</li>
                  <li>Diabetes check</li>
                  <li>Insulin administration</li>
                  <li>Medication administration</li>
                  <li>Continuous patient care and supervision</li>
                </ul>
                <p className="mt-4">Location: Jakarta Selatan</p>
                <p>Duty time: 12-hour day shift</p>
                <p>Joining: Starting from today</p>
                <p>Salary: Sesuai pengalaman dan jadwal</p>
                <p>Contact: WhatsApp +62 821-1663-798</p>
              </div>
              <WhatsAppLink message={APPLICATION_MESSAGE} className="mt-5 block">
                <Button className="w-full bg-[#C9202B] text-white hover:bg-[#A91520]">
                  Lamar via WhatsApp
                </Button>
              </WhatsAppLink>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
