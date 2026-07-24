import type { Metadata } from "next"
import type { ReactNode } from "react"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Cari Pengasuh, Perawat & Nanny",
  description:
    "Temukan pengasuh, perawat, dan nanny terverifikasi di Jakarta dan sekitarnya. Filter berdasarkan jenis, kota, kisaran harga, dan durasi layanan.",
  keywords: ["cari pengasuh jakarta", "cari perawat home care", "cari nanny terverifikasi"],
  url: "/caregivers",
})

export default function CaregiversLayout({ children }: { children: ReactNode }) {
  return children
}
