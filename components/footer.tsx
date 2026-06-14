import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Music } from "lucide-react"

import { Button } from "@/components/ui/button"
import { createWhatsAppHref } from "@/lib/service-pricing"

export default function Footer() {
  const whatsappHref = createWhatsAppHref(
    "Halo, saya ingin menghubungi ParentsCare Indonesia.",
  )

  return (
    <footer className="bg-[#18181B] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">ParentsCare Indonesia</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              Jasa pengasuh lansia, perawat home care, dan nanny profesional
              untuk keluarga di Jakarta dan Indonesia. Konsultasi dan booking
              layanan dilakukan melalui WhatsApp.
            </p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
              <Button className="bg-[#C9202B] text-white hover:bg-[#A91520]">
                <MessageCircle className="h-4 w-4" />
                Konsultasi WhatsApp
              </Button>
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/55">Layanan</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Pengasuh Lansia", "/services"],
                ["Perawat Home Care", "/services"],
                ["Nanny Anak & Bayi", "/services"],
                ["Career Kandidat", "/career"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-white/75 transition hover:text-[#E86B75]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/55">Perusahaan</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Tentang Kami", "/about"],
                ["Aplikasi", "/app-features"],
                ["Kontak", "/contact"],
                ["Kebijakan Privasi", "/privacy-policy"],
                ["Syarat Layanan", "/terms-of-service"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-white/75 transition hover:text-[#E86B75]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/55">Kontak</h3>
            <div className="space-y-3 text-sm text-white/75">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-[#E86B75]">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+62 821-1663-798</span>
              </a>
              <a href="mailto:ptparentscareindonesia@gmail.com" className="flex gap-3 transition hover:text-[#E86B75]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>ptparentscareindonesia@gmail.com</span>
              </a>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Jl. Pringgondani No. 21, Cilandak, Jakarta Selatan 12450</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/share/1JXAgm8Apq/" target="_blank" rel="noopener noreferrer" className="text-white/55 transition hover:text-[#E86B75]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/parentscare.indonesia?igsh=MXFzaHV4ZDEwanVwcQ==" target="_blank" rel="noopener noreferrer" className="text-white/55 transition hover:text-[#E86B75]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@parentscare.indonesia?_r=1&_t=ZS-95RnEnXBtuG" target="_blank" rel="noopener noreferrer" className="text-white/55 transition hover:text-[#E86B75]">
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
          <p>© {new Date().getFullYear()} PT Parents Care Indonesia. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
