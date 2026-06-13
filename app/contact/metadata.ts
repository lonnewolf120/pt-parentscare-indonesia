import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Hubungi ParentsCare Indonesia - Layanan Pelanggan 24/7',
  description: 'Hubungi tim layanan pelanggan ParentsCare Indonesia melalui WhatsApp untuk booking caregiver, perawat, dan nanny. Email tersedia untuk pertanyaan non-mendesak.',
  keywords: [
    'hubungi ParentsCare',
    'kontak layanan pelanggan',
    'whatsapp pengasuh',
    'booking perawat WhatsApp',
    'alamat kantor Jakarta',
    'email support',
    'chat layanan pelanggan',
  ],
  url: '/contact',
})
