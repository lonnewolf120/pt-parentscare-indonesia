"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  Clock,
  FileCheck2,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  allServices,
  createWhatsAppHref,
  nannyService,
  serviceAdvantages,
  serviceNotes,
  standardServices,
} from "@/lib/service-pricing"

const accentStyles = {
  pink: {
    text: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
    solid: "bg-pink-600 hover:bg-pink-700",
  },
  red: {
    text: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    solid: "bg-red-600 hover:bg-red-700",
  },
  blue: {
    text: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    solid: "bg-blue-600 hover:bg-blue-700",
  },
}

const serviceIcons = {
  caregiver: ShieldCheck,
  nurse: HeartPulse,
  nanny: Baby,
}

const serviceFit = {
  caregiver: [
    "Lansia membutuhkan pendamping harian",
    "Bantuan mandi, makan, mobilitas, dan rutinitas obat",
    "Keluarga butuh dukungan non-medis yang konsisten",
  ],
  nurse: [
    "Pasien perlu pemantauan tanda vital atau tekanan darah",
    "Ada kebutuhan diabetes, insulin, obat, atau pengawasan ketat",
    "Kondisi pasien lebih kompleks dari caregiving dasar",
  ],
  nanny: [
    "Bayi atau anak membutuhkan rutinitas harian yang aman",
    "Keluarga butuh bantuan makan, bermain, dan aktivitas anak",
    "Ada kebutuhan nanny untuk 1 atau 2 anak",
  ],
}

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const whatsappHref = createWhatsAppHref(
    "Halo, saya ingin memesan layanan ParentsCare. Mohon bantu pilih paket yang sesuai.",
  )
  const active = allServices[activeService]
  const styles = accentStyles[active.accent]
  const ActiveIcon = serviceIcons[active.id as keyof typeof serviceIcons]

  return (
    <main className="bg-white text-gray-950">
      <section className="relative overflow-hidden bg-slate-950">
        <Image
          src="/nurse.jpg"
          alt="Layanan caregiver, perawat, dan nanny ParentsCare Indonesia"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />
        <div className="container relative z-10 py-20 text-white md:py-28">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15">
              Layanan ParentsCare Indonesia
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Pilih layanan perawatan yang tepat sebelum memilih orangnya.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Setiap keluarga memiliki kebutuhan berbeda. Gunakan halaman ini
              untuk membandingkan pengasuh, perawat, dan nanny berdasarkan kondisi,
              jadwal, serta kisaran harga. Booking dan konsultasi dilakukan melalui WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-white text-slate-950 hover:bg-slate-100 sm:w-auto">
                  <MessageCircle className="h-5 w-5" />
                  Konsultasi paket
                </Button>
              </a>
              <Link href="/career">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  Career untuk kandidat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50 py-6">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            ["6 hari kerja", "1 hari libur setiap minggu"],
            ["Rp 300.000", "biaya transport tetap"],
            ["WhatsApp", "booking dan customer support"],
          ].map(([value, label]) => (
            <div key={value} className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
              <div className="text-2xl font-bold text-gray-950">{value}</div>
              <div className="mt-1 text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700">
                Bandingkan layanan
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Mulai dari kebutuhan keluarga, bukan dari daftar nama.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-gray-600">
              Pilih layanan untuk melihat cakupan kerja, kondisi yang cocok,
              dan paket harga klien.
            </p>
          </div>

          <div className="mb-8 grid gap-3 md:grid-cols-3">
            {allServices.map((service, index) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
              const itemStyles = accentStyles[service.accent]
              const selected = activeService === index

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`rounded-xl border p-5 text-left transition ${
                    selected
                      ? `${itemStyles.border} ${itemStyles.bg} shadow-sm`
                      : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${itemStyles.bg} ${itemStyles.text}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{service.description}</p>
                </button>
              )
            })}
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="space-y-6">
              <Card className="overflow-hidden border-gray-100 shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={active.image} alt={active.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${styles.bg} ${styles.text}`}>
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{active.title}</h2>
                      <p className="text-sm text-gray-500">{active.task}</p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {active.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm text-gray-700">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${styles.text}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 bg-gray-50 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">Cocok untuk kondisi seperti ini</h3>
                  <div className="mt-4 grid gap-3">
                    {serviceFit[active.id as keyof typeof serviceFit].map((item) => (
                      <div key={item} className="flex gap-3 rounded-lg bg-white p-3 text-sm text-gray-700">
                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-0">
                  <div className="border-b border-gray-100 p-6">
                    <h3 className="text-2xl font-bold">Paket harga {active.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Harga berikut adalah estimasi biaya klien. Tim kami akan
                      mengonfirmasi kebutuhan, lokasi, dan ketersediaan kandidat.
                    </p>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {active.id === "nanny"
                      ? nannyService.packages.map((pkg) => (
                          <a
                            key={`${pkg.childAge}-${pkg.serviceTime}`}
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-5 transition hover:bg-blue-50/40"
                          >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                              <div>
                                <div className="text-sm font-semibold text-blue-600">{pkg.childAge}</div>
                                <h4 className="mt-1 font-bold text-gray-950">{pkg.serviceTime}</h4>
                                <div className="mt-2 text-xs text-gray-500">Harga untuk 1 anak dan 2 anak</div>
                              </div>
                              <div className="grid gap-2 text-sm md:min-w-64">
                                <div className="flex justify-between gap-4 rounded-lg bg-gray-50 px-3 py-2">
                                  <span className="text-gray-500">1 anak</span>
                                  <span className="font-bold text-blue-600">{pkg.clientPriceOneChild}</span>
                                </div>
                                <div className="flex justify-between gap-4 rounded-lg bg-gray-50 px-3 py-2">
                                  <span className="text-gray-500">2 anak</span>
                                  <span className="font-bold text-blue-600">{pkg.clientPriceTwoChildren}</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        ))
                      : standardServices
                          .find((service) => service.id === active.id)
                          ?.packages.map((pkg) => (
                            <a
                              key={pkg.serviceTime}
                              href={whatsappHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-5 transition hover:bg-gray-50"
                            >
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                  <h4 className="font-bold text-gray-950">{pkg.serviceTime}</h4>
                                  <p className="mt-1 text-sm text-gray-500">{pkg.duration}</p>
                                </div>
                                <div className={`text-lg font-bold ${styles.text}`}>{pkg.clientPrice}</div>
                              </div>
                            </a>
                          ))}
                  </div>

                  <div className="border-t border-gray-100 p-6">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      <Button className={`w-full text-white ${styles.solid}`}>
                        <MessageCircle className="h-4 w-4" />
                        Pesan {active.title} via WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container grid gap-6 md:grid-cols-2">
          <Card className="border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-pink-600" />
                <h3 className="text-xl font-bold">Ketentuan operasional</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-gray-700">
                {serviceNotes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <FileCheck2 className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-bold">Yang kami bantu siapkan</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-gray-700">
                {serviceAdvantages.map((advantage) => (
                  <li key={advantage} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Masih ragu memilih layanan?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Kirim kondisi keluarga Anda. Tim kami akan menjelaskan apakah Anda
            membutuhkan pengasuh, perawat, atau nanny, beserta kisaran paket yang sesuai.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-white text-slate-950 hover:bg-slate-100 sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Tanya via WhatsApp
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                Kontak lain
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
