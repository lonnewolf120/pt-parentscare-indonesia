"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  ClipboardCheck,
  HeartPulse,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ServicePricingPreview from "@/components/service-pricing-preview"
import TestimonialsSection from "@/components/testimonials-section"
import {
  allServices,
  createWhatsAppHref,
  serviceAdvantages,
  serviceNotes,
} from "@/lib/service-pricing"

const serviceIcons = {
  caregiver: ShieldCheck,
  nurse: HeartPulse,
  nanny: Baby,
}

const accentStyles = {
  pink: "text-[#C9202B] bg-[#FBE7EA] border-[#F6D4D9]",
  red: "text-[#C9202B] bg-[#FBE7EA] border-[#F6D4D9]",
  blue: "text-[#C9202B] bg-[#FBE7EA] border-[#F6D4D9]",
}

const matchingSteps = [
  {
    title: "Konsultasi kebutuhan",
    description: "Ceritakan kondisi pasien, usia anak, jadwal, lokasi, dan preferensi keluarga melalui WhatsApp.",
    icon: MessageCircle,
  },
  {
    title: "Seleksi kandidat",
    description: "Tim kami memilih caregiver, perawat, atau nanny yang paling sesuai dari database kandidat terverifikasi.",
    icon: Search,
  },
  {
    title: "Interview & dokumen",
    description: "Anda dapat interview online/offline, lalu kami bantu proses identitas, alamat, dan dokumen perjanjian.",
    icon: ClipboardCheck,
  },
  {
    title: "Mulai layanan",
    description: "Tanggal mulai disepakati, kontak dibagikan, dan admin tetap mendampingi selama masa layanan.",
    icon: CheckCircle2,
  },
]

export default function Home() {
  const whatsappHref = createWhatsAppHref(
    "Halo, saya ingin konsultasi dan memesan layanan ParentsCare Indonesia.",
  )

  return (
    <div className="bg-[#FFFDF9] text-[#18181B]">
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#18181B]">
        <Image
          src="/images/caregiver_service_3.jpeg"
          alt="Caregiver profesional ParentsCare Indonesia mendampingi keluarga"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/78 to-[#18181B]/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#18181B] to-transparent" />

        <div className="container relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#FFFDF9]/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              <ShieldCheck className="h-4 w-4" />
              Layanan caregiver, perawat, dan nanny di Jakarta
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Perawatan rumah yang terasa aman sejak percakapan pertama.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-xl"
            >
              ParentsCare Indonesia membantu keluarga menemukan pengasuh lansia,
              perawat pasien, dan nanny anak yang tepat dengan proses seleksi,
              interview, dokumen, dan pendampingan admin melalui WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full bg-[#C9202B] text-white hover:bg-[#A91520] sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Konsultasi via WhatsApp
                </Button>
              </a>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/70 bg-transparent text-white hover:bg-[#FFFDF9]/10 hover:text-white sm:w-auto"
                >
                  Lihat paket layanan
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <div className="mt-10 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/15 pt-6 text-white">
              {[
                ["500+", "kandidat terverifikasi"],
                ["24/7", "WhatsApp support"],
                ["Jakarta", "kantor PT resmi"],
              ].map(([value, label]) => (
                <div key={value}>
                  <div className="text-2xl font-bold md:text-3xl">{value}</div>
                  <div className="mt-1 text-xs text-white/75 md:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-12 relative z-20">
        <div className="container">
          <div className="grid gap-4 rounded-xl border border-[#E7E5E4] bg-white p-4 shadow-xl md:grid-cols-3">
            {allServices.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons]

              return (
                <a
                  key={service.id}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-[#E7E5E4] p-5 transition hover:border-[#F6D4D9] hover:bg-[#FBE7EA]/50"
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg border ${accentStyles[service.accent]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-[#18181B]">{service.title}</h2>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#6B6666]">{service.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#C9202B]">
                    Konsultasikan kebutuhan
                    <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#FFF4EC] px-4 py-2 text-sm font-semibold text-[#2B2B2F]">
              Kenapa keluarga memilih kami
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Bukan sekadar daftar kandidat. Kami mengelola prosesnya sampai siap bekerja.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6B6666]">
              Banyak keluarga tahu mereka butuh bantuan, tetapi tidak tahu harus
              memilih tipe tenaga, jadwal, gaji, dokumen, atau proses interview.
              ParentsCare merapikan semua langkah itu agar keputusan terasa aman.
            </p>
            <div className="mt-8 grid gap-3">
              {serviceAdvantages.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-[#E7E5E4] bg-[#FFF4EC] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]" />
                  <span className="text-sm font-medium text-[#2B2B2F]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                image: "/images/caregiver_service_3.jpeg",
                title: "Saat pasien butuh perhatian klinis",
                copy: "Perawat membantu tanda vital, tekanan darah, diabetes, insulin, obat, dan pengawasan pasien.",
              },
              {
                image: "/images/caregiver_service_2.jpeg",
                title: "Saat anak butuh rutinitas yang lembut",
                copy: "Nanny membantu makan, bermain, aktivitas harian, dan kebutuhan anak sesuai usia.",
              },
              {
                image: "/images/caregiver_service_1.jpeg",
                title: "Saat lansia butuh pendamping harian",
                copy: "Pengasuh membantu mandi, makan, mobilitas ringan, obat, dan kenyamanan sehari-hari.",
              },
            ].map((story) => (
              <Card key={story.title} className="overflow-hidden border-[#E7E5E4] shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={story.image} alt={story.title} fill className="object-cover" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-[#18181B]">{story.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B6666]">{story.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#18181B] py-20 text-white md:py-28">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <span className="inline-flex rounded-full bg-[#FFFDF9]/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
              Proses WhatsApp-led
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Dari pertanyaan pertama sampai hari pertama bekerja.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Setiap tahap dirancang untuk mengurangi risiko: kebutuhan dicatat,
              kandidat disaring, dokumen dilengkapi, dan onboarding dipantau.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {matchingSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-white/10 bg-[#FFFDF9]/[0.04] p-6">
                <div className="flex items-center justify-between">
                <step.icon className="h-6 w-6 text-[#E86B75]" />
                  <span className="text-sm font-bold text-white/40">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicePricingPreview />

      <section className="border-y border-[#E7E5E4] bg-[#FFF4EC] py-16">
        <div className="container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#FFFDF9] px-4 py-2 text-sm font-semibold text-[#2B2B2F] shadow-sm">
              Ketentuan transparan
            </span>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Harga jelas, kebutuhan operasional juga jelas.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceNotes.map((note) => (
              <div key={note} className="rounded-lg border border-[#E7E5E4] bg-white p-4 text-sm leading-6 text-[#2B2B2F] shadow-sm">
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="bg-[#FFFDF9] py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-xl bg-[#18181B] p-8 text-white md:p-12">
            <Image
              src="/images/caregiver_service_2.jpeg"
              alt="Keluarga ParentsCare Indonesia"
              fill
              className="object-cover opacity-20"
            />
            <div className="relative z-10 max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFFDF9]/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15">
                <Sparkles className="h-4 w-4" />
                Mulai dengan konsultasi singkat
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Ceritakan kondisi keluarga Anda. Kami bantu pilih layanan yang tepat.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/90">
                Kirim kebutuhan Anda melalui WhatsApp: tipe layanan, usia/kondisi
                pasien atau anak, jadwal, lokasi, dan tanggal mulai. Tim kami akan
                membalas dengan langkah berikutnya.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-[#C9202B] text-white hover:bg-[#A91520] sm:w-auto">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp ParentsCare
                  </Button>
                </a>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/70 bg-transparent text-white hover:bg-[#FFFDF9]/10 hover:text-white sm:w-auto"
                  >
                    Bandingkan paket
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
