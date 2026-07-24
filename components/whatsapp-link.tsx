import type { AnchorHTMLAttributes, ReactNode } from "react"

import { createWhatsAppHref } from "@/lib/service-pricing"

export const DEFAULT_WHATSAPP_MESSAGE =
  "Halo, saya ingin konsultasi layanan ParentsCare Indonesia."

type WhatsAppLinkProps = {
  /** Prefilled WhatsApp message. Falls back to the default consultation text. */
  message?: string
  children: ReactNode
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel">

/**
 * Single source of truth for outbound WhatsApp links. Guarantees the correct
 * account (via createWhatsAppHref) and safe external-link semantics
 * (target="_blank" + rel="noopener noreferrer") at every call site.
 */
export default function WhatsAppLink({
  message = DEFAULT_WHATSAPP_MESSAGE,
  children,
  ...props
}: WhatsAppLinkProps) {
  return (
    <a
      href={createWhatsAppHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}
