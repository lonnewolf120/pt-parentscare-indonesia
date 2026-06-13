import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Aplikasi ParentsCare Indonesia - Informasi Caregiver, Perawat & Nanny',
  description: 'Download aplikasi ParentsCare Indonesia sebagai companion app untuk informasi caregiver, perawat, nanny, reminder, dan update layanan. Booking layanan dan customer support dilakukan melalui WhatsApp.',
  keywords: [
    'aplikasi ParentsCare',
    'aplikasi pengasuh Indonesia',
    'aplikasi perawat rumahan',
    'download nanny app',
    'aplikasi caregiver',
    'layanan rumahan digital',
    'support WhatsApp ParentsCare',
  ],
  url: '/app-features',
})
