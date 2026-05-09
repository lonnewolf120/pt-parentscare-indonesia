import { Metadata } from 'next'

export const siteConfig = {
  name: 'ParentsCare',
  title: 'ParentsCare - Best Caregiver, Nurse & Nanny Services in Bangladesh | Dhaka',
  description: 'Leading caregiver, nurse, and nanny services in Bangladesh. Professional home care, elderly care, patient care, childcare, and healthcare services in Dhaka, Chittagong, Sylhet. 24/7 trusted caregivers, certified nurses, experienced nannies. Book online.',
  url: 'https://parentscare.com.bd',
  ogImage: 'https://parentscare.com.bd/og-image.jpg',
  keywords: [
    // Primary Keywords - Caregiver
    'caregiver service bangladesh',
    'caregiver in dhaka',
    'home caregiver bangladesh',
    'professional caregiver dhaka',
    'elderly caregiver bangladesh',
    'patient caregiver service',
    'বাংলাদেশে কেয়ারগিভার সেবা',
    
    // Primary Keywords - Nurse
    'nurse service bangladesh',
    'home nurse dhaka',
    'professional nurse service',
    'private nurse bangladesh',
    'patient care nurse dhaka',
    'nursing service bangladesh',
    'নার্স সেবা বাংলাদেশ',
    'হোম নার্সিং সার্ভিস ঢাকা',
    
    // Primary Keywords - Nanny
    'nanny service bangladesh',
    'nanny in dhaka',
    'professional nanny bangladesh',
    'child care nanny',
    'baby care nanny dhaka',
    'নানি সেবা বাংলাদেশ',
    'শিশু পরিচর্যা',
    
    // Location-based Keywords
    'caregiver service dhaka',
    'nurse service dhaka',
    'nanny service dhaka',
    'caregiver chittagong',
    'nurse chittagong',
    'caregiver sylhet',
    'nurse sylhet',
    'healthcare service bangladesh',
    
    // Service-specific Keywords
    'elderly care bangladesh',
    'senior care service',
    'patient care at home',
    'home healthcare bangladesh',
    'post surgery care',
    'disabled care service',
    'dementia care bangladesh',
    'alzheimer care service',
    
    // Child Care Keywords
    'childcare service bangladesh',
    'baby care service dhaka',
    'newborn care bangladesh',
    'infant care service',
    'toddler care bangladesh',
    
    // Professional Terms
    'certified nurse bangladesh',
    'trained caregiver dhaka',
    'experienced nanny',
    'qualified healthcare provider',
    'licensed nurse bangladesh',
    'medical attendant service',
    
    // Service Features
    '24/7 caregiver service',
    'live-in caregiver bangladesh',
    'hourly nurse service',
    'full-time nanny dhaka',
    'part-time caregiver',
    'emergency nurse service',
    
    // Specific Needs
    'physiotherapy assistant bangladesh',
    'stroke patient care',
    'cancer patient care home',
    'diabetes care bangladesh',
    'bedridden patient care',
    'special needs care',
    
    // Bangla Keywords
    'বয়স্ক পরিচর্যা',
    'রোগী পরিচর্যা সেবা',
    'বাসায় নার্সিং সেবা',
    'পেশাদার কেয়ারগিভার',
    'শিশু পরিচর্যাকারী',
  ],
  author: 'ParentsCare Bangladesh',
  creator: 'ParentsCare',
  publisher: 'ParentsCare Bangladesh',
  category: 'Healthcare Services',
  classification: 'Healthcare, Home Care, Nursing Services, Childcare',
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
  name: 'ParentsCare Bangladesh',
  alternateName: ['ParentsCare', 'Parents Care BD'],
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD',
    addressRegion: 'Dhaka',
    addressLocality: 'Dhaka',
    streetAddress: 'Dhaka, Bangladesh',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.8103,
    longitude: 90.4125,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Dhaka',
    },
    {
      '@type': 'City',
      name: 'Chittagong',
    },
    {
      '@type': 'City',
      name: 'Sylhet',
    },
    {
      '@type': 'Country',
      name: 'Bangladesh',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    areaServed: 'BD',
    availableLanguage: ['Bengali', 'English'],
  },
  sameAs: [
    'https://www.facebook.com/parentscare',
    'https://www.linkedin.com/company/parentscare',
    'https://www.instagram.com/parentscare',
  ],
  medicalSpecialty: [
    'Geriatrics',
    'Home Healthcare',
    'Nursing',
    'Pediatrics',
    'Patient Care',
  ],
}

export const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#localbusiness`,
  name: 'ParentsCare - Caregiver, Nurse & Nanny Services',
  image: `${siteConfig.url}/og-image.jpg`,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: '+880-XXX-XXXXXX',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dhaka',
    addressLocality: 'Dhaka',
    addressRegion: 'Dhaka Division',
    postalCode: '1000',
    addressCountry: 'BD',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.8103,
    longitude: 90.4125,
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
}

export const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Healthcare and Caregiving Services',
  provider: {
    '@type': 'Organization',
    name: 'ParentsCare Bangladesh',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Bangladesh',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Caregiving Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Caregiver Service',
          description: 'Experienced caregivers for elderly care, patient care, and home assistance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Nurse Service',
          description: 'Certified nurses for home healthcare, patient care, and medical assistance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Nanny Service',
          description: 'Trained nannies for childcare, baby care, and newborn care',
        },
      },
    ],
  },
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
  const metaTitle = title ? `${title} | ParentsCare` : siteConfig.title
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
        'en-BD': metaUrl,
        'bn-BD': metaUrl,
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
      locale: 'en_BD',
      alternateLocale: ['bn_BD'],
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
      creator: '@parentscare',
      site: '@parentscare',
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
