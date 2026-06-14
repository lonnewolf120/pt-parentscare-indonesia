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
    text: "text-[#C9202B]",
    bg: "bg-[#FBE7EA]",
    border: "border-[#F6D4D9]",
    solid: "bg-[#C9202B] hover:bg-[#A91520]",
  },
  red: {
    text: "text-[#C9202B]",
    bg: "bg-[#FBE7EA]",
    border: "border-[#F6D4D9]",
    solid: "bg-[#C9202B] hover:bg-[#A91520]",
  },
  blue: {
    text: "text-[#C9202B]",
    bg: "bg-[#FBE7EA]",
    border: "border-[#F6D4D9]",
    solid: "bg-[#C9202B] hover:bg-[#A91520]",
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
    <main className="bg-[#FFFDF9] text-[#18181B]">
      <section className="relative overflow-hidden bg-[#18181B]">
        <Image
          src="/images/caregiver.jpg"
          alt="Layanan caregiver, perawat, dan nanny ParentsCare Indonesia"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/90 to-[#18181B]/50" />
        <div className="container relative z-10 py-20 text-white md:py-28">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-[#FFFDF9]/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15">
              Layanan ParentsCare Indonesia
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Pilih layanan perawatan yang tepat sebelum memilih orangnya.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              Setiap keluarga memiliki kebutuhan berbeda. Gunakan halaman ini
              untuk membandingkan pengasuh, perawat, dan nanny berdasarkan kondisi,
              jadwal, serta kisaran harga. Booking dan konsultasi dilakukan melalui WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-[#C9202B] text-white hover:bg-[#A91520] sm:w-auto">
                  <MessageCircle className="h-5 w-5" />
                  Konsultasi paket
                </Button>
              </a>
              <Link href="/career">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/70 bg-transparent text-white hover:bg-[#FFFDF9]/10 hover:text-white sm:w-auto"
                >
                  Career untuk kandidat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E7E5E4] bg-[#FFF4EC] py-6">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            ["6 hari kerja", "1 hari libur setiap minggu"],
            ["Rp 300.000", "biaya transport tetap"],
            ["WhatsApp", "booking dan customer support"],
          ].map(([value, label]) => (
            <div key={value} className="rounded-lg border border-[#E7E5E4] bg-white p-5 shadow-sm">
              <div className="text-2xl font-bold text-[#18181B]">{value}</div>
              <div className="mt-1 text-sm text-[#6B6666]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-[#FBE7EA] px-4 py-2 text-sm font-semibold text-[#A91520]">
                Bandingkan layanan
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Mulai dari kebutuhan keluarga, bukan dari daftar nama.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6B6666]">
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
                      : "border-[#E7E5E4] bg-white hover:border-[#E7E5E4] hover:bg-[#FFF4EC]"
                  }`}
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${itemStyles.bg} ${itemStyles.text}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B6666]">{service.description}</p>
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
              <Card className="overflow-hidden border-[#E7E5E4] shadow-sm">
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
                      <p className="text-sm text-[#6B6666]">{active.task}</p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {active.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm text-[#2B2B2F]">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${styles.text}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E7E5E4] bg-[#FFF4EC] shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">Cocok untuk kondisi seperti ini</h3>
                  <div className="mt-4 grid gap-3">
                    {serviceFit[active.id as keyof typeof serviceFit].map((item) => (
                      <div key={item} className="flex gap-3 rounded-lg bg-white p-3 text-sm text-[#2B2B2F]">
                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-[#6B6666]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-[#E7E5E4] shadow-sm">
                <CardContent className="p-0">
                  <div className="border-b border-[#E7E5E4] p-6">
                    <h3 className="text-2xl font-bold">Paket harga {active.title}</h3>
                    <p className="mt-2 text-sm text-[#6B6666]">
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
                            className="block p-5 transition hover:bg-[#FBE7EA]/50"
                          >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                              <div>
                                <div className="text-sm font-semibold text-[#C9202B]">{pkg.childAge}</div>
                                <h4 className="mt-1 font-bold text-[#18181B]">{pkg.serviceTime}</h4>
                                <div className="mt-2 text-xs text-[#6B6666]">Harga untuk 1 anak dan 2 anak</div>
                              </div>
                              <div className="grid gap-2 text-sm md:min-w-64">
                                <div className="flex justify-between gap-4 rounded-lg bg-[#FFF4EC] px-3 py-2">
                                  <span className="text-[#6B6666]">1 anak</span>
                                  <span className="font-bold text-[#C9202B]">{pkg.clientPriceOneChild}</span>
                                </div>
                                <div className="flex justify-between gap-4 rounded-lg bg-[#FFF4EC] px-3 py-2">
                                  <span className="text-[#6B6666]">2 anak</span>
                                  <span className="font-bold text-[#C9202B]">{pkg.clientPriceTwoChildren}</span>
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
                              className="block p-5 transition hover:bg-[#FFF4EC]"
                            >
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                  <h4 className="font-bold text-[#18181B]">{pkg.serviceTime}</h4>
                                  <p className="mt-1 text-sm text-[#6B6666]">{pkg.duration}</p>
                                </div>
                                <div className={`text-lg font-bold ${styles.text}`}>{pkg.clientPrice}</div>
                              </div>
                            </a>
                          ))}
                  </div>

                  <div className="border-t border-[#E7E5E4] p-6">
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

      <section className="bg-[#FFF4EC] py-16">
        <div className="container grid gap-6 md:grid-cols-2">
          <Card className="border-[#E7E5E4] shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#C9202B]" />
                <h3 className="text-xl font-bold">Ketentuan operasional</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-[#2B2B2F]">
                {serviceNotes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#E7E5E4] shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <FileCheck2 className="h-5 w-5 text-[#C9202B]" />
                <h3 className="text-xl font-bold">Yang kami bantu siapkan</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-[#2B2B2F]">
                {serviceAdvantages.map((advantage) => (
                  <li key={advantage} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[#18181B] py-20 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Masih ragu memilih layanan?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
            Kirim kondisi keluarga Anda. Tim kami akan menjelaskan apakah Anda
            membutuhkan pengasuh, perawat, atau nanny, beserta kisaran paket yang sesuai.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-[#C9202B] text-white hover:bg-[#A91520] sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Tanya via WhatsApp
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/70 bg-transparent text-white hover:bg-[#FFFDF9]/10 hover:text-white sm:w-auto"
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
