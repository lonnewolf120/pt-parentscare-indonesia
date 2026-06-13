import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Layanan Pengasuh, Perawat & Nanny - Paket Harga dan Fitur',
  description: 'Jelajahi harga layanan ParentsCare Indonesia untuk pengasuh, perawat, dan nanny. Tersedia paket 24 jam, 12 jam, harian, dan nanny untuk 1 atau 2 anak. Booking layanan dilakukan melalui WhatsApp.',
  keywords: [
    'layanan pengasuh harga',
    'paket perawat rumahan',
    'jasa nanny anak',
    'babysitter jakarta',
    'asisten medis rumahan',
    'perawatan lansia paket',
    'harga pengasuh Indonesia',
  ],
  url: '/services',
})
