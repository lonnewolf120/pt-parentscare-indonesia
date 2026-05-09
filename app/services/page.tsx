"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check, ChevronRight, Heart, Shield, Award } from "lucide-react"
import Image from "next/image"

import CustomCursor from "@/components/custom-cursor"
import ParticleBackground from "@/components/particle-background"


const services = [
  {
    id: "caregiver",
    title: "Pengasuh",
    description: "Pengasuh berpengalaman untuk perawatan lansia dan pasien dengan kebutuhan khusus",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-18%20at%207.25.46%20PM%20%283%29-MEO6yAMY7LLvmmvjK4DcJNYibxFvB9.jpeg",
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
    packages: [
      { name: "24 Jam / 6 hari (Live-in)", duration: "Bulanan", price: "Rp 6.000.000", popular: true },
      { name: "12 Jam / 6 hari kerja", duration: "Bulanan", price: "Rp 4.700.000", popular: false },
      { name: "24 Jam per hari (Advance)", duration: "Harian", price: "Rp 300.000", popular: false },
      { name: "12 Jam per hari (Advance)", duration: "Harian", price: "Rp 220.000", popular: false },
    ],
    features: [
      "Pemantauan tanda vital profesional",
      "Pemberian insulin & selang NG",
      "Mandi & memberi makan pasien",
      "Manajemen diet & obat-obatan",
    ],
    icon: Heart,
  },
  {
    id: "nanny",
    title: "Nanny",
    description: "Nanny berdedikasi untuk perawatan anak dengan penuh kasih sayang dan profesional",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-18%20at%207.25.46%20PM%20%282%29-9tfIPidPnypHt3HMZ09YSo807QAEFv.jpeg",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    packages: [
      { name: "Anak < 2 tahun - 24 Jam / 6 hari (Live-in)", duration: "Bulanan", price: "Rp 6.800.000", popular: true },
      { name: "Anak < 2 tahun - 12 Jam / 6 hari", duration: "Bulanan", price: "Rp 5.600.000", popular: false },
      { name: "Anak > 2 tahun - 24 Jam / 6 hari (Live-in)", duration: "Bulanan", price: "Rp 5.900.000", popular: false },
      { name: "Anak > 2 tahun - 12 Jam / 6 hari", duration: "Bulanan", price: "Rp 4.600.000", popular: false },
      { name: "Anak > 2 tahun - 10 Jam / 6 hari", duration: "Bulanan", price: "Rp 4.100.000", popular: false },
      { name: "Anak > 2 tahun - 8 Jam / 6 hari", duration: "Bulanan", price: "Rp 3.600.000", popular: false },
    ],
    features: [
      "Memberi makan dan mendidik anak",
      "Memasak makanan untuk anak",
      "Bermain dengan anak penuh kasih sayang",
      "Semua tugas yang berkaitan dengan anak",
    ],
    icon: Shield,
  },
  {
    id: "caregiver-advance",
    title: "Pengasuh Advance",
    description: "Perawatan medis khusus untuk pasien stroke, demensia, dan kondisi kronis lainnya",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-18%20at%207.25.46%20PM%20%281%29-RU7gjjXGl3hmZ3H1XZOUbjFg9orCy0.jpeg",
    color: "red",
    gradient: "from-red-500 to-red-600",
    packages: [
      { name: "24 Jam / 6 hari (Live-in)", duration: "Bulanan", price: "Rp 7.800.000", popular: true },
      { name: "12 Jam / 6 hari kerja", duration: "Bulanan", price: "Rp 5.700.000", popular: false },
      { name: "24 Jam per hari", duration: "Harian", price: "Rp 350.000", popular: false },
      { name: "12 Jam per hari", duration: "Harian", price: "Rp 280.000", popular: false },
    ],
    features: [
      "Spesialis pasien stroke & demensia",
      "Perawatan pasien dengan tube/catheter",
      "Manajemen pasien lumpuh & kursi roda",
      "Pemantauan kesehatan mental & psikologis",
    ],
    icon: Award,
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })

  return (
    <div className="relative min-h-screen overflow-hidden">
      <CustomCursor />
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y, opacity }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-blue-500"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Layanan Premium Kami
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Layanan perawatan profesional yang disesuaikan untuk memenuhi kebutuhan unik keluarga Anda dengan profesional berpengalaman dan terverifikasi.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-pink hover:bg-pink hover:text-white transition-all duration-300 px-8 py-4 text-lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Jelajahi Layanan
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media Promo Section */}
      <section className="relative py-12 bg-gray-50 border-b-2 border-pink/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-gray-600">Ikuti kami di media sosial untuk update terbaru dan penawaran spesial</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://www.facebook.com/share/1JXAgm8Apq/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-pink text-pink hover:bg-pink hover:text-white">
                  Facebook
                </Button>
              </Link>
              <Link href="https://www.instagram.com/parentscare.indonesia?igsh=MXFzaHV4ZDEwanVwcQ==" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-pink text-pink hover:bg-pink hover:text-white">
                  Instagram
                </Button>
              </Link>
              <Link href="https://www.tiktok.com/@parentscare.indonesia?_r=1&_t=ZS-95RnEnXBtuG" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-pink text-pink hover:bg-pink hover:text-white">
                  TikTok
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="relative py-20 bg-white">
        <div className="container">
          {/* Service Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-16"
          >
            <div className="flex flex-wrap gap-4 p-2 bg-gray-100 rounded-full">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-hover ${
                    activeService === index
                      ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <service.icon className="inline-block w-5 h-5 mr-2" />
                  {service.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Service Display */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Service Image and Info */}
            <div className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={
                    services[activeService].image ||
                    `/placeholder.svg?height=400&width=600&text=${services[activeService].title || "/placeholder.svg"}`
                  }
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${services[activeService].gradient} opacity-20`} />
              </motion.div>

              <div className="space-y-4">
                <h2 className={`text-3xl font-bold text-${services[activeService].color}`}>
                  {services[activeService].title} Services
                </h2>
                <p className="text-gray-600 text-lg">{services[activeService].description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Check className={`w-5 h-5 text-${services[activeService].color}`} />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Packages */}
            <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Paket Tersedia</h3>
              {services[activeService].packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="relative"
                >
                  {pkg.popular && (
                    <div
                      className={`absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r ${services[activeService].gradient} text-white text-xs font-bold rounded-full`}
                    >
                      Paling Populer
                    </div>
                  )}
                  <Card
                    className={`border-2 ${pkg.popular ? `border-${services[activeService].color}` : "border-gray-200"} hover:shadow-lg transition-all duration-300 cursor-hover`}
                  >
                    <CardContent> <div className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <h4 className="font-semibold text-lg">{pkg.name}</h4>
                          <p className="text-gray-500 text-sm">{pkg.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold text-${services[activeService].color}`}>{pkg.price}</div>
                          <motion.div whileHover={{ x: 5 }} className="flex items-center justify-end mt-2">
                            <span className="text-sm text-gray-500 mr-2">Pilih</span>
                            <ChevronRight className={`w-5 h-5 text-${services[activeService].color}`} />
                          </motion.div>
                        </div>
                      </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                <Link href="/contact">
                  <Button
                    className={`w-full bg-gradient-to-r ${services[activeService].gradient} text-white hover:opacity-90 transition-all duration-300 py-3 text-lg cursor-hover`}
                  >
                    Pesan Layanan {services[activeService].title}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink to-blue bg-clip-text text-transparent"
          >
            Additional Services
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "After School Care",
                description: "Safe and engaging care for your children after school hours",
                features: ["Homework assistance", "Structured activities", "Snack provision"],
                color: "blue",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                title: "Holiday Care",
                description: "Full-day care during school holidays and breaks",
                features: ["Fun activities and outings", "Meal planning", "Flexible scheduling"],
                color: "red",
                gradient: "from-red-500 to-red-600",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                  <CardHeader> 
                    <div className="pb-4">
                    <CardTitle>
                     <div className={`text-2xl text-${service.color} group-hover:scale-105 transition-transform duration-300`}
                    >
                      {service.title}
                      </div>
                    </CardTitle>
                    <CardDescription> 
                      <div className="text-gray-600">{service.description} </div></CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <Check className={`w-5 h-5 text-${service.color}`} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-pink-500 to-pink-100 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap untuk Memulai?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Pesan layanan pertama Anda hari ini dan rasakan perbedaan ParentsCare dengan tim perawatan profesional kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/app-features">
                  <Button size="lg" className="bg-white text-pink hover:bg-gray-100 px-8 py-4 text-lg">
                    Instal Aplikasi
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-pink text-white hover:bg-white hover:text-pink px-8 py-4 text-lg"
                  >
                    Hubungi Kami
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
