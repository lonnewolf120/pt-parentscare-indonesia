import type { Metadata } from "next"
import type { ReactNode } from "react"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Tentang Kami",
  description:
    "Kenali perjalanan, misi, dan tim ParentsCare Indonesia — penyedia jasa pengasuh lansia, perawat home care, dan nanny profesional di Jakarta.",
  keywords: ["tentang ParentsCare Indonesia", "profil perusahaan caregiver", "tim ParentsCare"],
  url: "/about",
})

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
