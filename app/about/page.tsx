'use client';

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Shield, Target, Zap, TrendingUp, Award, Mail } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import WhatsAppLink from "@/components/whatsapp-link"
import WhatsAppIcon from "@/components/icons/whatsapp-icon"

const CTA_MESSAGE = "Halo, saya ingin mengetahui tentang layanan ParentsCare Indonesia.";

export default function AboutContent() {

  const team = [
    { name: "Sams Abu Shomen", role: "CEO & Pendiri", image: "/ceo.png" },
    { name: "Sharmiz Fatema", role: "COO & Pendiri Bersama", image: "/coo.png" },
    { name: "Iftekharul Islam", role: "Kepala Teknologi", image: "/cto.png" },
    { name: "Md. Mejbah Uddin", role: "Kepala Pemasaran", image: "/cmo.png" },
  ];

  const stats = [
    { number: "500+", label: "Caregiver Profesional Terverifikasi", icon: Users },
    { number: "2000+", label: "Keluarga Bahagia", icon: Heart },
    { number: "4.8★", label: "Rating Rata-rata", icon: Award },
    { number: "2", label: "Negara Operasional", icon: TrendingUp },
  ];

  const fadeInVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  const staggerContainerVariants: Variants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* HERO SECTION */}
      <motion.section
        className="relative overflow-hidden bg-[#18181B] px-4 pt-24 pb-32 md:pt-32 md:pb-40"
        initial="initial"
        animate="animate"
        variants={staggerContainerVariants}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#18181B_0%,#2B2B2F_48%,#A91520_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFDF9] to-transparent" />

        <div className="container relative mx-auto text-center z-10">

          <motion.div variants={fadeInVariants} className="mb-6 inline-block">
            <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-white/20 shadow-sm flex items-center gap-2 text-white">
              <SparklesIcon className="w-4 h-4 text-white font-bold" />
              Mentransformasi Layanan Perawatan di Indonesia
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-sm"
            variants={fadeInVariants}
          >
            Layanan Caregiver Profesional
            <br className="hidden md:block" />
            untuk Setiap Keluarga
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-base md:text-lg text-white/85 mb-8 leading-relaxed font-normal"
            variants={fadeInVariants}
          >
            Dipercaya oleh ribuan keluarga di Indonesia.
            Layanan perawatan anak dan lansia profesional dengan caregiver yang terverifikasi, berpengalaman, dan penuh perhatian.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInVariants}
          >
            <WhatsAppLink message={CTA_MESSAGE} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full rounded-full bg-[#C9202B] text-white hover:bg-[#A91520] hover:shadow-md transition-all duration-200 font-bold px-8 gap-2"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hubungi via WhatsApp
              </Button>
            </WhatsAppLink>

            <a href="mailto:ptparentscareindonesia@gmail.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-2 border-white/70 text-white hover:bg-white/10 hover:border-white transition-all duration-200 font-semibold px-8 bg-transparent gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Kami
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <motion.section
        className="relative z-20 mx-4 md:mx-auto max-w-5xl -mt-16 mb-20 bg-white rounded-xl border border-[#E7E5E4] shadow-md"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
      >
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="text-center flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="mb-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                  </motion.div>

                  <div className="text-2xl md:text-3xl font-bold mb-1 tracking-tight text-[#C9202B]">
                    {stat.number}
                  </div>

                  <p className="text-muted-foreground font-medium text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* COMPANY JOURNEY */}
      <motion.section
        className="py-16 bg-background"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div className="text-center mb-12" variants={fadeInVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground tracking-tight">
              Perjalanan Parents Care
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Dari Bangladesh hingga Indonesia, komitmen kami adalah memberikan layanan perawatan terbaik.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInVariants}>
              <Card className="h-full border-l-4 border-l-[#C9202B] rounded-xl shadow-sm bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-[#FBE7EA] flex items-center justify-center mb-5 text-[#C9202B] font-bold text-lg">
                    2020
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Didirikan di Bangladesh</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Parents Care didirikan dengan visi untuk memberikan layanan perawatan rumah berkualitas kepada keluarga Bangladesh.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <Card className="h-full border-l-4 border-l-[#A91520] rounded-xl shadow-sm bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-[#C9202B] flex items-center justify-center mb-5 text-white font-bold text-lg">
                    2K+
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Melayani 2000+ Keluarga</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Berhasil melayani lebih dari 2.000 pelanggan di Bangladesh dengan standar kualitas tertinggi dan kepercayaan penuh.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <Card className="h-full border-l-4 border-l-[#0F766E] rounded-xl shadow-sm bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-[#E6F4F1] flex items-center justify-center mb-5 text-[#0F766E] font-bold text-lg">
                    2026
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ekspansi ke Indonesia</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Pada tahun 2026, kami memperluas operasional ke Indonesia untuk membawa layanan perawatan berkualitas kepada keluarga Indonesia.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div className="mt-12" variants={fadeInVariants}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Pencapaian Kami</h3>
              <p className="text-muted-foreground">Didukung oleh investor terkemuka dan pengakuan industri</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-[#E7E5E4] rounded-xl shadow-sm bg-white">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-2">BYLC Ventures</h4>
                  <p className="text-sm text-muted-foreground">Mendapat dukungan investasi dari BYLC Ventures untuk mengembangkan platform layanan perawatan.</p>
                </CardContent>
              </Card>
              <Card className="border border-[#E7E5E4] rounded-xl shadow-sm bg-white">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-2">Shark Tank</h4>
                  <p className="text-sm text-muted-foreground">Tampil dan mendapat pengakuan di acara Shark Tank, menampilkan visi inovatif kami.</p>
                </CardContent>
              </Card>
              <Card className="border border-[#E7E5E4] rounded-xl shadow-sm bg-white">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-2">Investor Global</h4>
                  <p className="text-sm text-muted-foreground">Mendapatkan pendanaan dari investor perorangan dari Australia dan Selandia Baru.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* WHY CAREGIVER SERVICES MATTER */}
      <motion.section
        className="py-16 bg-background"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.div className="text-center mb-12" variants={fadeInVariants}>
            <h2 className="mb-3 text-3xl md:text-4xl font-bold tracking-tight">
              Mengapa Layanan Caregiver Sangat Penting
            </h2>

            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Di tengah kesibukan kehidupan modern, banyak keluarga membutuhkan bantuan profesional
              untuk memastikan anak-anak dan lansia mendapatkan perhatian, keamanan,
              dan perawatan terbaik setiap hari.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                icon: Heart,
                title: "Perawatan dengan Kasih Sayang",
                description:
                  "Caregiver kami memberikan perhatian yang hangat, sabar, dan penuh empati untuk anak maupun lansia."
              },
              {
                icon: Shield,
                title: "Keamanan & Kepercayaan",
                description:
                  "Setiap caregiver melalui proses seleksi dan verifikasi untuk memastikan keamanan keluarga Anda."
              },
              {
                icon: Users,
                title: "Membantu Keluarga Modern",
                description:
                  "Kami membantu keluarga yang sibuk agar tetap tenang mengetahui orang tercinta mereka dirawat dengan baik."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
              >
                <Card className="h-full border border-[#E7E5E4] shadow-sm hover:shadow-md transition-all duration-200 rounded-xl bg-white">
                  <CardContent className="p-8 flex flex-col items-start">

                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                      <item.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                  </CardContent>
                </Card>
              </motion.div>
            ))}

          </div>

          <motion.div
            variants={fadeInVariants}
            className="mt-12"
          >
            <Card className="rounded-xl border border-[#E7E5E4] shadow-sm bg-[#FFF4EC]">
              <CardContent className="p-8 md:p-10 text-center">

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Solusi Perawatan yang Dapat Dipercaya
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Parents Care hadir untuk membantu keluarga mendapatkan layanan caregiver
                  profesional yang aman, terpercaya, dan berkualitas.
                  Kami percaya setiap anak dan lansia berhak mendapatkan perhatian terbaik
                  dari orang-orang yang tepat.
                </p>

              </CardContent>
            </Card>
          </motion.div>

        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        className="py-20 md:py-28 bg-[#18181B] text-white relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32rem)]" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="container relative mx-auto px-4 max-w-3xl text-center z-10">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15">
            <Heart className="h-6 w-6" />
          </div>

          <motion.h2
            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            variants={fadeInVariants}
          >
            Bergabung Bersama Komunitas Kami
          </motion.h2>

          <motion.p
            className="mb-8 text-base md:text-lg leading-relaxed text-white/75"
            variants={fadeInVariants}
          >
            Baik Anda mencari layanan perawatan anak, pendampingan lansia,
            atau ingin menjadi caregiver profesional yang membawa perubahan positif,
            tim kami siap membantu melalui WhatsApp.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInVariants}
          >
            <WhatsAppLink message={CTA_MESSAGE} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full rounded-full bg-[#C9202B] text-white hover:bg-[#A91520] hover:shadow-md transition-all duration-200 font-bold px-8 gap-2"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hubungi via WhatsApp
              </Button>
            </WhatsAppLink>

            <a href="mailto:ptparentscareindonesia@gmail.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-2 border-white/70 text-white bg-transparent hover:bg-white/10 hover:border-white transition-all duration-200 font-semibold px-8"
              >
                Email Kami
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M11.64 5.23a.75.75 0 0 1 1.32 0l1.42 2.87a.75.75 0 0 0 .42.42l2.87 1.42a.75.75 0 0 1 0 1.32l-2.87 1.42a.75.75 0 0 0-.42.42l-1.42 2.87a.75.75 0 0 1-1.32 0l-1.42-2.87a.75.75 0 0 0-.42-.42L6.93 11.4a.75.75 0 0 1 0-1.32l2.87-1.42a.75.75 0 0 0 .42-.42l1.42-2.87Z" />
    </svg>
  )
}
