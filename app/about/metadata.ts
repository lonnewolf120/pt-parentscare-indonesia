import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Tentang ParentsCare Indonesia - Pemimpin Layanan Pengasuh Profesional',
  description: 'Pelajari tentang misi, visi, dan nilai-nilai ParentsCare Indonesia. Kami adalah penyedia layanan pengasuh, perawat, dan nanny terpercaya dengan 800+ profesional terverifikasi melayani 10.000+ keluarga Indonesia dengan rating 4.8 bintang.',
  keywords: [
    'tentang ParentsCare',
    'sejarah ParentsCare Indonesia',
    'misi dan visi perawatan',
    'tim profesional pengasuh',
    'nilai-nilai perawatan keluarga',
    'pengasuh bersertifikat terpercaya',
  ],
  url: '/about',
})
