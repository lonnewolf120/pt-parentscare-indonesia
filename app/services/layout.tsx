import type { Metadata } from "next"
import type { ReactNode } from "react"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Layanan & Harga Caregiver, Perawat & Nanny",
  description:
    "Bandingkan layanan dan harga pengasuh lansia, perawat home care, dan nanny ParentsCare Indonesia. Konsultasi dan booking paket melalui WhatsApp.",
  keywords: ["harga pengasuh jakarta", "paket perawat home care", "biaya nanny jakarta"],
  url: "/services",
})

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children
}
