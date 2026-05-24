import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cari Pengasuh, Perawat & Nanny Profesional - Direktori ParentsCare',
  description: 'Temukan pengasuh, perawat, dan nanny profesional bersertifikat di ParentsCare Indonesia. Jelajahi profil lengkap, pengalaman, dan rating dari 800+ caregiver terverifikasi. Cari berdasarkan lokasi, spesialisasi, dan ketersediaan. Hubungi kami sekarang untuk booking pengasuh terbaik.',
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
