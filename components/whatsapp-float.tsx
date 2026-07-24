import { createWhatsAppHref } from "@/lib/service-pricing"
import WhatsAppIcon from "@/components/icons/whatsapp-icon"

export default function WhatsAppFloat() {
  const whatsappHref = createWhatsAppHref(
    "Halo, saya ingin konsultasi layanan ParentsCare Indonesia.",
  )

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:bg-[#1EBE5A] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-6 md:right-6"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="sr-only">Konsultasi via WhatsApp</span>
    </a>
  )
}
