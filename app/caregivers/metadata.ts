import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cari Pengasuh, Perawat & Nanny Profesional - Direktori ParentsCare',
  description: 'Temukan pengasuh, perawat, dan nanny profesional bersertifikat di ParentsCare Indonesia. Tim kami membantu mencocokkan kebutuhan keluarga dengan kandidat terverifikasi. Booking layanan dilakukan melalui WhatsApp.',
  keywords: [
    'cari pengasuh profesional',
    'daftar perawat rumahan',
    'nanny terverifikasi',
    'pengasuh lansia berpengalaman',
    'perawat bersertifikat',
    'babysitter terpercaya',
    'direktori caregiver Indonesia',
  ],
  url: '/caregivers',
})
