"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Clock, Star, ArrowRight, MessageCircle } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"
import ParticleBackground from "@/components/particle-background"
import HowItWorks from "@/components/how-it-works"
import DownloadApp from "@/components/download-app"
import TestimonialsSection from "@/components/testimonials-section"
import MediaCardsSection, { MediaItem } from "@/components/media-cards-section"

export default function Home() {
  // Arrays for alternating text
  const caregiverTypes = ["Pengasuh", "Perawat", "Nanny"]
  const recipientTypes = ["Anak", "Orang Tua", "Keluarga"]

  // State to track current index
  const [caregiverIndex, setCaregiverIndex] = useState(0)
  const [recipientIndex, setRecipientIndex] = useState(0)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isFeaturesInView = useInView(featuresRef, { once: true })

  // Effect to rotate text every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCaregiverIndex((prev) => (prev + 1) % caregiverTypes.length)
      setRecipientIndex((prev) => (prev + 1) % recipientTypes.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const mediaData: MediaItem[] = [
    {
      type: "video",
      title: "Sams Abu Shomen | Interview | Talk Show | Maasranga Ranga Shokal",
      description: "An interview with Sams Abu Shomen, founder and CEO of ParentsCare, discussing the journey of the healthcare institution.",
      url: "https://www.youtube.com/watch?v=EdJ2-tKJw70",
      thumbnail: "/images/youtube-placeholder.png",
    },
    {
      type: "video",
      title: "Parents Care Limited - Shark Tank Bangladesh - S1",
      description: "Parents Care Limited's appearance on Shark Tank Bangladesh, showcasing their service fitting for today's society.",
      url: "https://bongobd.com/watch/OPsOVRzQLUn",
      thumbnail: "/images/bongobd.png",
    },
    {
      type: "article",
      title: "Parents Care Limited | Trust Bank PLC.",
      description: "Parents Care Limited offers discounts on various care packages for TBL Debit & Credit Card Holders & TBL Employees.",
      url: "https://www.tblbd.com/node/1684",
      thumbnail: "/caregiver.jpg",
    },
    {
      type: "article",
      title: "ParentsCare: A new door for elderly citizens",
      description: "The senior healthcare startup ParentsCare aims to provide elderly parents and senior citizens the help they need in their old age.",
      url: "https://www.thedailystar.net/tech-startup/news/parentscare-new-door-elderly-citizens-3137091",
      thumbnail: "/caregiver_2.jpg",
    },
    {
      type: "article",
      title: "Care-giving sector needs the attention it deserves",
      description: "A discussion on the importance of the care-giving sector in Bangladesh and its potential for employment and economic growth.",
      url: "https://today.thefinancialexpress.com.bd/editorial/care-giving-sector-needs-the-attention-it-deserves-1730386729",
      thumbnail: "/nurse.webp",
    },
  ];

  return (
    <div className="relative">
      <CustomCursor />
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-white pt-24 overflow-hidden flex items-center"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative z-10 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-pink-600 rounded-full" />
                  <span className="text-sm font-medium">Dipercaya oleh ribuan keluarga Indonesia</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Perawatan Terpercaya untuk{" "}
                <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                  Orang Terkasih
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                ParentsCare Indonesia menyediakan pengasuh, nanny, dan perawat profesional yang telah terverifikasi untuk memberikan perawatan berkualitas tinggi dengan sentuhan personal untuk seluruh keluarga Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=%2B628216637898&text=Halo,%20saya%20ingin%20mengetahui%20tentang%20layanan%20ParentsCare" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Hubungi Kami</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-900 hover:border-pink-500 hover:text-pink-600 px-8 py-6 text-base font-semibold transition-all"
                    >
                      Lihat Layanan
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Pengasuh Terverifikasi</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">4.9★</p>
                  <p className="text-sm text-gray-600">Rating Kepuasan</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">Jakarta</p>
                  <p className="text-sm text-gray-600">Kantor Resmi PT</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full aspect-square">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JHEvKCX1FVkbayjdqJeGq4E0PHDBGs.png"
                  alt="ParentsCare Services"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-blue-500/10 rounded-3xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Komitmen ParentsCare Indonesia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen pada nilai-nilai kepercayaan, keselamatan, dan keunggulan dalam memberikan perawatan berkualitas untuk keluarga Indonesia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Terverifikasi & Terpercaya",
                description: "Semua profesional kami melalui proses screening menyeluruh dan pemeriksaan latar belakang untuk memastikan keselamatan keluarga Anda.",
                color: "red",
                gradient: "from-red-500 to-red-600",
              },
              {
                icon: Heart,
                title: "Sentuhan Personal",
                description: "Kami percaya perawatan yang berkualitas dimulai dengan memahami kebutuhan unik setiap keluarga Indonesia.",
                color: "pink",
                gradient: "from-pink-500 to-pink-600",
              },
              {
                icon: Clock,
                title: "Layanan 24/7",
                description: "Tersedia kapan saja Anda membutuhkan dukungan. Tim kami siap membantu melalui WhatsApp, telepon, atau kunjungan langsung.",
                color: "blue",
                gradient: "from-blue-500 to-blue-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />
                  <CardContent>
                    <div
                      className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} text-white mb-6`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </motion.div>
                    <h3
                      className={`text-2xl font-bold mb-4 text-${feature.color} group-hover:scale-105 transition-transform duration-300`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Tentang ParentsCare Indonesia
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                PT Parents Care Indonesia adalah perusahaan penyedia layanan sumber daya manusia terdaftar dan resmi di Indonesia
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Kredibilitas & Legalitas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-pink-600 font-bold text-lg">✓</span>
                      <div>
                        <p className="font-medium text-gray-900">PT PMA (Penanaman Modal Asing)</p>
                        <p className="text-sm text-gray-600">Terdaftar secara resmi di Indonesia</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-pink-600 font-bold text-lg">✓</span>
                      <div>
                        <p className="font-medium text-gray-900">KBLI 78300</p>
                        <p className="text-sm text-gray-600">Penyedia SDM & Manajemen Fungsi HR</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-pink-600 font-bold text-lg">✓</span>
                      <div>
                        <p className="font-medium text-gray-900">NIB & NPWP Aktif</p>
                        <p className="text-sm text-gray-600">Berstatus Low Risk dengan KPP</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-pink-600 font-bold text-lg">✓</span>
                      <div>
                        <p className="font-medium text-gray-900">Kantor Resmi</p>
                        <p className="text-sm text-gray-600">Jl. Pringgondani No. 21, Cilandak, Jakarta Selatan</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl text-center space-y-2">
                  <p className="text-3xl font-bold text-pink-600">2026</p>
                  <p className="text-sm text-gray-700 font-medium">Tahun Didirikan</p>
                  <p className="text-xs text-gray-600">22 Januari 2026</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center space-y-2">
                  <p className="text-3xl font-bold text-blue-600">Rp 2.5M</p>
                  <p className="text-sm text-gray-700 font-medium">Modal Bayar</p>
                  <p className="text-xs text-gray-600">Modal Resmi</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl text-center space-y-2">
                  <p className="text-3xl font-bold text-red-600">3</p>
                  <p className="text-sm text-gray-700 font-medium">Direktur</p>
                  <p className="text-xs text-gray-600">Tim Profesional</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center space-y-2">
                  <p className="text-3xl font-bold text-green-600">500+</p>
                  <p className="text-sm text-gray-700 font-medium">Pengasuh</p>
                  <p className="text-xs text-gray-600">Terverifikasi</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Indonesian Cultural Significance */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nilai-Nilai Keluarga Indonesia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ParentsCare memahami kedalaman nilai-nilai keluarga Indonesia dan mengintegrasikannya dalam setiap layanan perawatan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Kebersamaan Keluarga",
                description: "Kami percaya perawatan yang baik memperkuat ikatan keluarga dan menjaga kehangatan hubungan antar generasi.",
              },
              {
                icon: "❤️",
                title: "Gotong Royong",
                description: "Semangat saling membantu adalah inti layanan kami. Tim profesional kami siap mendampingi keluarga Anda dengan hati.",
              },
              {
                icon: "🤝",
                title: "Kepercayaan & Kehormatan",
                description: "Kepercayaan yang diberikan keluarga adalah amanah berharga yang kami jaga dengan integritas tinggi.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-pink-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Terhubung dengan ParentsCare
              </h3>
              <p className="text-lg text-gray-700">
                Bergabunglah dengan ribuan keluarga Indonesia yang mempercayai kami untuk perawatan keluarga mereka. Layanan profesional dengan sentuhan personal.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.facebook.com/share/1JXAgm8Apq/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <Button variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50 font-medium">
                    <span>f</span>
                    <span>Facebook</span>
                  </Button>
                </a>
                <a 
                  href="https://www.instagram.com/parentscare.indonesia?igsh=MXFzaHV4ZDEwanVwcQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <Button variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50 font-medium">
                    <span>📷</span>
                    <span>Instagram</span>
                  </Button>
                </a>
                <a 
                  href="https://www.tiktok.com/@parentscare.indonesia?_r=1&_t=ZS-95RnEnXBtuG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <Button variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50 font-medium">
                    <span>🎵</span>
                    <span>TikTok</span>
                  </Button>
                </a>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JHEvKCX1FVkbayjdqJeGq4E0PHDBGs.png"
                alt="ParentsCare Indonesia Services"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Download App Section */}
      <DownloadApp />

      {/* Testimonials Section */}
      <TestimonialsSection/>

      {/* Media Cards Section */}
      <MediaCardsSection mediaData={mediaData} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Menemukan Pengasuh Sempurna Anda?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Bergabunglah dengan ribuan keluarga puas yang mempercayai ParentsCare untuk kebutuhan perawatan mereka. Mulai perjalanan Anda hari ini.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-white text-pink hover:bg-gray-100 px-10 py-4 text-xl font-semibold shadow-lg"
                >
                  Mulai Hari Ini
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
