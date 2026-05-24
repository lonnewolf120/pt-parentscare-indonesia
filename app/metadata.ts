import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Layanan Pengasuh, Perawat & Nanny Terbaik di Indonesia',
  description: 'ParentsCare Indonesia menyediakan layanan pengasuh, perawat, dan nanny profesional bersertifikat untuk perawatan lansia, pasien, dan anak-anak. Tersedia 24/7 di Jakarta dan kota-kota besar Indonesia. Pesan sekarang dan dapatkan pengasuh terbaik untuk keluarga Anda.',
  keywords: [
    'layanan pengasuh Indonesia',
    'perawat rumahan profesional',
    'nanny Jakarta',
    'pengasuh lansia',
    'perawat bersertifikat',
    'jasa nanny terpercaya',
    'pengasuh anak profesional',
  ],
  url: '/',
})
