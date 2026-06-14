import Link from "next/link"
import { Baby, CheckCircle2, HeartPulse, MessageCircle, ShieldCheck } from "lucide-react"

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
    border: "border-[#F6D4D9]",
    text: "text-[#C9202B]",
    bg: "bg-[#FBE7EA]",
    button: "bg-[#C9202B] hover:bg-[#A91520]",
    top: "bg-[#C9202B]",
  },
  blue: {
    border: "border-[#F6D4D9]",
    text: "text-[#C9202B]",
    bg: "bg-[#FBE7EA]",
    button: "bg-[#C9202B] hover:bg-[#A91520]",
    top: "bg-[#E86B75]",
  },
  red: {
    border: "border-[#F6D4D9]",
    text: "text-[#C9202B]",
    bg: "bg-[#FBE7EA]",
    button: "bg-[#C9202B] hover:bg-[#A91520]",
    top: "bg-[#A91520]",
  },
}

const serviceIcons = {
  caregiver: ShieldCheck,
  nurse: HeartPulse,
  nanny: Baby,
}

function getFeaturedPrices(serviceId: string) {
  if (serviceId === "nanny") {
    return nannyService.packages.slice(0, 4).map((pkg) => ({
      label: pkg.serviceTime,
      price: pkg.clientPriceOneChild,
      helper: `${pkg.childAge}, 1 anak`,
    }))
  }

  const service = standardServices.find((item) => item.id === serviceId)

  return (service?.packages ?? []).map((pkg) => ({
    label: pkg.serviceTime,
    price: pkg.clientPrice,
    helper: pkg.duration,
  }))
}

export default function ServicePricingPreview() {
  const whatsappHref = createWhatsAppHref(
    "Halo, saya ingin bertanya dan memesan layanan ParentsCare.",
  )

  return (
    <section className="py-20 bg-[#FFFDF9]">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#FBE7EA] px-4 py-2 text-sm font-semibold text-[#A91520]">
            Daftar Layanan & Harga
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#18181B] md:text-5xl">
            Pilih Perawatan yang Sesuai untuk Keluarga Anda
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B6666] md:text-lg">
            Harga berikut adalah estimasi biaya klien. Tim kami akan membantu
            mencocokkan kebutuhan keluarga dengan caregiver, perawat, atau nanny
            yang tepat melalui WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {allServices.map((service) => {
            const styles = accentStyles[service.accent]
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
            const featuredPrices = getFeaturedPrices(service.id)

            return (
              <Card
                key={service.id}
                className={`overflow-hidden border ${styles.border} bg-white shadow-sm transition-shadow hover:shadow-lg`}
              >
                <div className={`h-1.5 ${styles.top}`} />
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.bg} ${styles.text}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#18181B]">{service.title}</h3>
                      <p className="mt-1 text-sm text-[#6B6666]">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {featuredPrices.map((pkg) => (
                      <div key={`${service.id}-${pkg.label}-${pkg.helper}`} className="rounded-lg border border-[#E7E5E4] bg-[#FFF4EC] p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-[#18181B]">{pkg.label}</p>
                            <p className="mt-1 text-xs text-[#6B6666]">{pkg.helper}</p>
                          </div>
                          <p className={`shrink-0 text-right text-sm font-bold ${styles.text}`}>{pkg.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-[#6B6666]">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${styles.text}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      <Button className={`w-full text-white ${styles.button}`}>
                        <MessageCircle className="h-4 w-4" />
                        Pesan {service.title}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 rounded-xl border border-[#E7E5E4] bg-[#FFF4EC] p-6 md:grid-cols-[1fr_1fr_auto] md:items-center">
          <div>
            <h3 className="font-bold text-[#18181B]">Ketentuan penting</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6B6666]">
              {serviceNotes.slice(0, 3).map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#18181B]">Keunggulan layanan</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6B6666]">
              {serviceAdvantages.slice(0, 3).map((advantage) => (
                <li key={advantage} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/services">
            <Button variant="outline" className="w-full md:w-auto">
              Lihat Semua Harga
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
