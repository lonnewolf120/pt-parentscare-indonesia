import { Metadata } from 'next'

export const siteConfig = {
  name: 'ParentsCare Indonesia',
  title: 'ParentsCare Indonesia: Pengasuh, Perawat & Nanny Jakarta',
  description: 'Jasa pengasuh lansia, perawat home care, dan nanny profesional di Jakarta & Jabodetabek. Konsultasi dan booking layanan mudah lewat WhatsApp.',
  url: 'https://www.parentscareindonesia.xyz',
  ogImage: 'https://www.parentscareindonesia.xyz/images/caregiver_service_1.jpeg',
  keywords: [
    // Primary Keywords - Pengasuh
    'layanan pengasuh indonesia',
    'pengasuh di jakarta',
    'jasa pengasuh jakarta',
    'jasa caregiver jakarta',
    'pengasuh rumahan profesional',
    'pengasuh lansia jakarta',
    'caregiver lansia jakarta',
    'pengasuh pasien terbaik',
    'jasa pengasuh bersertifikat',
    
    // Primary Keywords - Perawat
    'layanan perawat indonesia',
    'perawat rumahan jakarta',
    'perawat home care jakarta',
    'jasa perawat home care',
    'layanan perawat profesional',
    'perawat privat indonesia',
    'perawat kesehatan jakarta',
    'jasa perawat berpengalaman',
    'perawat home care terpercaya',
    
    // Primary Keywords - Nanny
    'layanan nanny indonesia',
    'nanny di jakarta',
    'jasa nanny jakarta',
    'nanny bayi jakarta',
    'nanny profesional bersertifikat',
    'perawatan anak nanny',
    'babysitter nanny jakarta',
    'nanny bayi berpengalaman',
    
    // Location-based Keywords
    'pengasuh jakarta',
    'perawat jakarta',
    'nanny jakarta',
    'pengasuh bandung',
    'perawat bandung',
    'caregiver jabodetabek',
    'nanny jabodetabek',
    'perawat jabodetabek',
    'pengasuh surabaya',
    'perawat surabaya',
    'layanan kesehatan rumah indonesia',
    
    // Service-specific Keywords
    'perawatan lansia indonesia',
    'layanan perawatan manula',
    'perawatan pasien di rumah',
    'home healthcare indonesia',
    'perawatan pasca operasi',
    'perawatan disabilitas',
    'perawatan demensia',
    'perawatan alzheimer',
    
    // Child Care Keywords
    'layanan perawatan anak',
    'babysitter bayi jakarta',
    'perawatan bayi baru lahir',
    'perawatan bayi dan balita',
    'nanny balita profesional',
    
    // Professional Terms
    'perawat bersertifikat indonesia',
    'pengasuh terlatih profesional',
    'nanny berpengalaman terpercaya',
    'penyedia layanan kesehatan',
    'perawat home care terdaftar',
    'asisten medis bersertifikat',
    
    // Service Features
    'layanan pengasuh 24 jam',
    'pengasuh live-in indonesia',
    'caregiver live-in jakarta',
    'nanny live-in jakarta',
    'perawat per jam',
    'nanny full-time jakarta',
    'pengasuh part-time',
    'layanan darurat kesehatan',
    
    // Specific Needs
    'asisten fisioterapi indonesia',
    'perawatan pasien stroke',
    'perawatan pasien kanker',
    'perawatan diabetes di rumah',
    'perawatan pasien lumpuh',
    'perawatan kebutuhan khusus',
    
    // Indonesian Keywords
    'pengasuh berpengalaman',
    'perawat profesional terpercaya',
    'jasa nanny berkualitas',
    'layanan kesehatan terbaik',
    'perawatan rumahan terpercaya',
    'booking caregiver whatsapp',
    'booking nanny whatsapp',
    'booking perawat whatsapp',
  ],
  author: 'PT Parents Care Indonesia',
  creator: 'ParentsCare Indonesia',
  publisher: 'PT Parents Care Indonesia',
  category: 'Layanan Kesehatan',
  classification: 'Layanan Kesehatan, Perawatan Rumah, Layanan Keperawatan, Perawatan Anak',
}

export const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'HealthcareOrganization',
  name: 'PT Parents Care Indonesia',
  alternateName: ['ParentsCare Indonesia', 'ParentsCare'],
  url: siteConfig.url,
  logo: `${siteConfig.url}/ptlogo-sm.png`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
    addressRegion: 'DKI Jakarta',
    addressLocality: 'Jakarta Selatan',
    streetAddress: 'Jl. Pringgondani No. 21, Cilandak',
    postalCode: '12450',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.2625,
    longitude: 106.7744,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Jakarta',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Jabodetabek',
    },
    {
      '@type': 'City',
      name: 'Bandung',
    },
    {
      '@type': 'City',
      name: 'Surabaya',
    },
    {
      '@type': 'City',
      name: 'Medan',
    },
    {
      '@type': 'Country',
      name: 'Indonesia',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Layanan Pelanggan',
    telephone: '+62 821-1663-798',
    url: 'https://api.whatsapp.com/send/?phone=%2B628211663798',
    areaServed: 'ID',
    availableLanguage: ['id', 'en'],
  },
  sameAs: [
    'https://www.facebook.com/share/1JXAgm8Apq/',
    'https://www.instagram.com/parentscare.indonesia',
    'https://www.tiktok.com/@parentscare.indonesia',
  ],
  medicalSpecialty: [
    'Geriatri',
    'Perawatan Rumah',
    'Keperawatan',
    'Pediatri',
    'Perawatan Pasien',
  ],
}

export const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#localbusiness`,
  name: 'ParentsCare - Layanan Pengasuh, Perawat & Nanny',
  image: siteConfig.ogImage,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: '+62 821-1663-798',
  email: 'ptparentscareindonesia@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Pringgondani No. 21, Cilandak',
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    postalCode: '12450',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.2625,
    longitude: 106.7744,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '500',
  },
  areaServed: ['Jakarta Selatan', 'DKI Jakarta', 'Jabodetabek', 'Indonesia'],
}

export const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Layanan Kesehatan dan Perawatan',
  provider: {
    '@type': 'Organization',
    name: 'PT Parents Care Indonesia',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Perawatan dan Pengasuh',
    itemListElement: [
      {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'IDR',
          minPrice: 5400000,
          maxPrice: 7000000,
        },
        itemOffered: {
          '@type': 'Service',
          name: 'Layanan Pengasuh Profesional',
          description: 'Pengasuh berpengalaman untuk perawatan lansia, perawatan pasien, dan bantuan rumah tangga',
        },
      },
      {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'IDR',
          minPrice: 6500000,
          maxPrice: 10000000,
        },
        itemOffered: {
          '@type': 'Service',
          name: 'Layanan Perawat Profesional',
          description: 'Perawat bersertifikat untuk perawatan rumah, perawatan pasien, dan bantuan medis',
        },
      },
      {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'IDR',
          minPrice: 3000000,
          maxPrice: 8500000,
        },
        itemOffered: {
          '@type': 'Service',
          name: 'Layanan Nanny Profesional',
          description: 'Nanny terlatih untuk perawatan anak, perawatan bayi, dan perawatan bayi baru lahir',
        },
      },
    ],
  },
}

export const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bagaimana cara booking caregiver, perawat, atau nanny ParentsCare Indonesia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Booking layanan ParentsCare Indonesia dilakukan melalui WhatsApp. Tim kami akan mencatat kebutuhan, membagikan kandidat yang sesuai, membantu interview, dan mengatur tanggal mulai layanan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ParentsCare menyediakan layanan pengasuh lansia dan perawat home care di Jakarta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. ParentsCare Indonesia menyediakan pengasuh lansia, caregiver pasien, perawat home care, dan nanny untuk keluarga di Jakarta dan area layanan Indonesia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah harga layanan sudah termasuk transport dan makanan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Biaya transport tetap Rp 300.000. Klien menyediakan makanan untuk caregiver atau nanny: layanan 12 jam mendapat 1 kali makan dan layanan 24 jam mendapat 3 kali makan.',
      },
    },
  ],
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  noIndex = false,
}: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  noIndex?: boolean
}): Metadata {
  const metaTitle = title ? `${title} | ParentsCare Indonesia` : siteConfig.title
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const metaKeywords = keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords.join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    category: siteConfig.category,
    classification: siteConfig.classification,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: metaUrl,
      languages: {
        'id-ID': metaUrl,
        'en-ID': metaUrl,
      },
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      alternateLocale: ['en_ID'],
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@parentscare_id',
      site: '@parentscare_id',
    },
    verification: {
      google: 'your-google-verification-code',
      other: {
        'facebook-domain-verification': 'your-facebook-verification-code',
      },
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'format-detection': 'telephone=no',
    },
  }
}
