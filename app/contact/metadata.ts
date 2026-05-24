import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Hubungi ParentsCare Indonesia - Layanan Pelanggan 24/7',
  description: 'Hubungi tim layanan pelanggan ParentsCare Indonesia melalui WhatsApp, telepon, email, atau kunjungi kantor kami di Jakarta. Tersedia 24/7 untuk menjawab pertanyaan dan membantu Anda menemukan pengasuh yang tepat untuk keluarga.',
  keywords: [
    'hubungi ParentsCare',
    'kontak layanan pelanggan',
    'whatsapp pengasuh',
    'hotline perawat',
    'alamat kantor Jakarta',
    'email support',
    'chat layanan pelanggan',
  ],
  url: '/contact',
})
