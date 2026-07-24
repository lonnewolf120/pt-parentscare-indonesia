import type { Metadata } from "next"
import type { ReactNode } from "react"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Fitur Aplikasi",
  description:
    "Jelajahi fitur aplikasi ParentsCare Indonesia: pengasuh terverifikasi, penjadwalan via WhatsApp, pencarian berbasis lokasi, dan harga transparan.",
  keywords: ["aplikasi ParentsCare", "fitur aplikasi caregiver", "aplikasi perawat home care"],
  url: "/app-features",
})

export default function AppFeaturesLayout({ children }: { children: ReactNode }) {
  return children
}
