import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Jasa Pengasuh Lansia, Perawat Home Care & Nanny di Jakarta',
  description: 'ParentsCare Indonesia membantu keluarga di Jakarta dan Jabodetabek menemukan pengasuh lansia, perawat home care, dan nanny profesional. Konsultasi, pencocokan kandidat, interview, dan booking layanan dilakukan melalui WhatsApp.',
  keywords: [
    'layanan pengasuh Indonesia',
    'jasa pengasuh lansia Jakarta',
    'caregiver lansia Jakarta',
    'perawat rumahan profesional',
    'perawat home care Jakarta',
    'nanny Jakarta',
    'jasa nanny bayi Jakarta',
    'pengasuh lansia',
    'perawat bersertifikat',
    'jasa nanny terpercaya',
    'pengasuh anak profesional',
    'booking caregiver WhatsApp',
  ],
  url: '/',
})
