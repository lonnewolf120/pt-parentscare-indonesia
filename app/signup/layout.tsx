import type { Metadata } from "next"
import type { ReactNode } from "react"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Daftar",
  description:
    "Buat akun ParentsCare Indonesia untuk mengakses layanan pengasuh, perawat, dan nanny.",
  url: "/signup",
  noIndex: true,
})

export default function SignUpLayout({ children }: { children: ReactNode }) {
  return children
}
