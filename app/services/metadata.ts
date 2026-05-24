import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Layanan Pengasuh, Perawat & Nanny - Paket Harga dan Fitur',
  description: 'Jelajahi layanan lengkap ParentsCare Indonesia: pengasuh lansia, perawat rumahan, nanny anak, babysitter, dan asisten medis. Tersedia paket part-time, full-time, dan live-in dengan harga terjangkau. Pesan sekarang dan dapatkan pengasuh profesional terbaik untuk keluarga Anda.',
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
