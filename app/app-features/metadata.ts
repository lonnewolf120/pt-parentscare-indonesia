import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Aplikasi ParentsCare Indonesia - Booking Pengasuh, Perawat & Nanny Online',
  description: 'Download aplikasi ParentsCare Indonesia untuk booking mudah pengasuh, perawat, dan nanny. Fitur lengkap: pencarian profil, rating pelanggan, booking instan, tracking GPS, pembayaran aman, dan support 24/7. Tersedia di Android dan iOS.',
  keywords: [
    'aplikasi ParentsCare',
    'booking pengasuh online',
    'aplikasi perawat rumahan',
    'download nanny app',
    'aplikasi caregiver',
    'layanan rumahan digital',
    'platform booking kesehatan',
  ],
  url: '/app-features',
})
