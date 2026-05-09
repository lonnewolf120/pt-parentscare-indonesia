"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Search, Calendar, Heart, ArrowRight, CheckCircle, Star, Shield } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Buat Profil Anda",
    description: "Daftar dan beri tahu kami tentang kebutuhan unik keluarga Anda, preferensi, dan persyaratan.",
    icon: UserPlus,
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
    details: ["Profil keluarga lengkap", "Atur preferensi perawatan", "Tentukan persyaratan"],
    bgPattern: "dots",
  },
  {
    step: "02",
    title: "Jelajahi & Cocokkan",
    description: "Jelajahi pengasuh terverifikasi kami, baca ulasan, dan temukan kecocokan sempurna untuk keluarga Anda.",
    icon: Search,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    details: ["Lihat profil pengasuh", "Baca ulasan terverifikasi", "Periksa ketersediaan"],
    bgPattern: "grid",
  },
  {
    step: "03",
    title: "Pesan & Jadwalkan",
    description: "Pilih pengasuh pilihan Anda, pilih tanggal dan waktu, kemudian lakukan pembayaran aman.",
    icon: Calendar,
    color: "red",
    gradient: "from-red-500 to-red-600",
    details: ["Jadwal fleksibel", "Pembayaran aman", "Konfirmasi instan"],
    bgPattern: "waves",
  },
  {
    step: "04",
    title: "Nikmati Ketenangan Pikiran",
    description: "Bersantai mengetahui orang-orang terkasih Anda menerima perawatan luar biasa dari profesional terpercaya.",
    icon: Heart,
    color: "pink",
    gradient: "from-pink-500 via-red-500 to-blue-500",
    details: ["Perawatan profesional", "Update real-time", "Dukungan 24/7"],
    bgPattern: "circles",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Profesional Terverifikasi",
    description: "Semua pengasuh telah diverifikasi menyeluruh dan diperiksa latar belakangnya",
  },
  {
    icon: Star,
    title: "Dinilai & Ditinjau",
    description: "Umpan balik nyata dari keluarga membantu Anda membuat keputusan yang tepat",
  },
  {
    icon: CheckCircle,
    title: "Kepuasan Terjamin",
    description: "Kami memastikan perawatan berkualitas atau membantu Anda menemukan kecocokan yang lebih baik",
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const stepsRef = useRef(null)
  const benefitsRef = useRef(null)

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const isTitleInView = useInView(titleRef, { once: true })
  const isStepsInView = useInView(stepsRef, { once: true })
  const isBenefitsInView = useInView(benefitsRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-pink-50 via-blue-50 to-red-50"
      />

      {/* Background Patterns */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-32 h-32 border border-pink-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 w-24 h-24 border border-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-200 rounded-full"
        />
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent"
            whileInView={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Cara Kerjanya
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Memulai dengan ParentsCare sangat sederhana, aman, dan dirancang dengan kebutuhan keluarga Anda dalam pikiran
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div ref={stepsRef} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isStepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-hover"
              >
                <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    {step.bgPattern === "dots" && (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    )}
                    {step.bgPattern === "grid" && (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    )}
                    {step.bgPattern === "waves" && (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, currentColor, currentColor 2px, transparent 2px, transparent 20px)",
                        }}
                      />
                    )}
                    {step.bgPattern === "circles" && (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px), radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)",
                          backgroundSize: "40px 40px",
                        }}
                      />
                    )}
                  </div>

                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ padding: "2px" }}
                  >
                    <div className="w-full h-full bg-white rounded-lg" />
                  </div>

                  <CardContent>
                    <div className="flex relative p-8 items-start space-x-6">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          <step.icon className="w-8 h-8" />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800 shadow-md">
                            {step.step}
                          </div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className={`text-2xl font-bold mb-3 text-${step.color} group-hover:scale-105 transition-transform duration-300`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                        {/* Details */}
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isStepsInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.2 + detailIndex * 0.1 }}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className={`w-4 h-4 text-${step.color}`} />
                              <span className="text-sm text-gray-600">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          ref={benefitsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Mengapa Keluarga Memilih Kami
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center group cursor-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-pink transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="relative p-12 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 text-white overflow-hidden">
            {/* Background Animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 opacity-10"
              style={{
                background: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Siap untuk Memulai?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan keluarga yang mempercayai ParentsCare untuk kebutuhan perawatan mereka. Pengasuh sempurna Anda hanya tinggal beberapa klik saja.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/register">
                    <Button
                      size="lg"
                      className="bg-white text-pink hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg cursor-hover"
                    >
                      Mulai Perjalanan Anda
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/caregivers">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-pink px-8 py-4 text-lg font-semibold cursor-hover"
                    >
                      Jelajahi Pengasuh
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
