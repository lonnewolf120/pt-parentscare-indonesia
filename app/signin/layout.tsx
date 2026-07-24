import type { Metadata } from "next"
import type { ReactNode } from "react"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Masuk",
  description: "Masuk ke akun ParentsCare Indonesia Anda.",
  url: "/signin",
  noIndex: true,
})

export default function SignInLayout({ children }: { children: ReactNode }) {
  return children
}
