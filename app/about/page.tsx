'use client';

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Shield, Target, Zap, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutContent() {
  const team = [
    { name: "Sams Abu Shomen", role: "CEO & Founder", image: "/ceo.png" },
    { name: "Sharmiz Fatema", role: "COO & Co-founder", image: "/coo.png" },
    { name: "Iftekharul Islam", role: "CTO", image: "/cto.png" },
    { name: "Md. Mejbah Uddin", role: "CMO", image: "/cmo.png" },
  ];

  const stats = [
    { number: "800+", label: "Caregiver Profesional Terverifikasi", icon: Users },
    { number: "10000+", label: "Keluarga Bahagia", icon: Heart },
    { number: "4.8★", label: "Rating Rata-rata", icon: Award },
    { number: "6+", label: "Tahun Kepercayaan", icon: TrendingUp },
  ];

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  const staggerContainerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* HERO SECTION */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-rose-500 to-blue-700 px-4 pt-24 pb-32 md:pt-32 md:pb-40"
        initial="initial"
        animate="animate"
        variants={staggerContainerVariants}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto text-center z-10">

          <motion.div variants={fadeInVariants} className="mb-6 inline-block">
            <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-white/30 shadow-sm flex items-center gap-2">
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
            className="mx-auto max-w-2xl text-base md:text-lg text-pink-50 mb-8 leading-relaxed font-normal"
            variants={fadeInVariants}
          >
            Dipercaya oleh ribuan keluarga di Indonesia.
            Layanan perawatan anak dan lansia profesional dengan caregiver yang terverifikasi, berpengalaman, dan penuh perhatian.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInVariants}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=%2B8801883399933&text=Halo,%20saya%20ingin%20mengetahui%20tentang%20layanan%20Anda&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full rounded-full bg-white text-primary hover:bg-pink-50 hover:shadow-md transition-all duration-200 font-bold px-8 gap-2"
              >
                <img src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                Hubungi via WhatsApp
              </Button>
            </a>

            <a href="tel:+8801883399933" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-2 border-white/70 text-white hover:bg-white/10 hover:border-white transition-all duration-200 font-semibold px-8 bg-transparent gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/455/455604.png"
                  alt="Call"
                  width={18}
                  height={18}
                />
                Telepon Sekarang
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <motion.section
        className="relative z-20 mx-4 md:mx-auto max-w-5xl -mt-16 mb-20 bg-card rounded-2xl border border-border/50 shadow-md"
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
                  className="bg-gradient-to-r from-primary to-red bg-clip-text text-center flex flex-col items-center"
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

                  <div className="text-2xl md:text-3xl font-bold mb-1 tracking-tight text-transparent">
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

      {/* SERVICES SECTION */}
      <motion.section
        className="py-16 bg-muted/30"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl">

          <motion.div className="text-center mb-12" variants={fadeInVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground tracking-tight">
              Kategori Layanan Kami
            </h2>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Solusi perawatan menyeluruh untuk anak dan lansia dalam keluarga Anda,
              disesuaikan dengan kebutuhan setiap keluarga.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Perawatan Anak & Nanny",
                description:
                  "Caregiver profesional yang terlatih dalam perkembangan anak dan keselamatan. Memberikan kehangatan dan perhatian terbaik untuk buah hati Anda.",
                icon: Heart,
                colorClass: "bg-pink-100 text-pink-600",
                btnClass: "text-pink-600 hover:bg-pink-50",
                border: "border-pink-100"
              },
              {
                title: "Perawatan & Pendampingan Lansia",
                description:
                  "Profesional penuh perhatian yang terlatih dalam kesehatan lansia, mobilitas, dan pendampingan sehari-hari. Memberikan kenyamanan dan martabat bagi orang tercinta Anda.",
                icon: Shield,
                colorClass: "bg-blue-100 text-blue-600",
                btnClass: "text-blue-600 hover:bg-blue-50",
                border: "border-blue-100"
              },
            ].map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="group"
                >
                  <Card
                    className={`h-full border-2 ${service.border} rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-card`}
                  >
                    <CardContent className="p-6 flex flex-col h-full items-start">

                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${service.colorClass}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-bold mb-2">
                        {service.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-6 flex-grow">
                        {service.description}
                      </p>

                      <Link href="/services">
                        <Button
                          variant="ghost"
                          className={`rounded-full font-semibold px-4 -ml-4 ${service.btnClass}`}
                        >
                          Jelajahi Layanan
                          <TrendingUp className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>

                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* MISSION & VISION */}
      <motion.section
        className="py-16 bg-background"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">

            <motion.div variants={fadeInVariants}>
              <Card className="h-full border-l-4 border-l-red-500 rounded-2xl shadow-sm bg-red-50/30">
                <CardContent className="p-8">

                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-5 text-white">
                    <Target className="w-6 h-6" />
                  </div>

                  <h2 className="mb-3 text-2xl font-bold text-red-600">
                    Misi Kami
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Menghubungkan keluarga dengan caregiver profesional dan terpercaya
                    yang memberikan perawatan, keamanan, dan kasih sayang terbaik.
                  </p>

                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <Card className="h-full border-l-4 border-l-blue-600 rounded-2xl shadow-sm bg-blue-50/30">
                <CardContent className="p-8">

                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-5 text-white">
                    <Zap className="w-6 h-6" />
                  </div>

                  <h2 className="mb-3 text-2xl font-bold text-blue-700">
                    Visi Kami
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Menjadi platform layanan perawatan terpercaya di Indonesia
                    dengan standar tinggi dalam kualitas, keamanan, dan keandalan layanan.
                  </p>

                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* CORE VALUES */}
      <motion.section
        className="py-16 bg-muted/30"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.div className="text-center mb-12" variants={fadeInVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Nilai-Nilai Kami
            </h2>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Shield,
                title: "Keamanan Utama",
                desc: "Proses verifikasi dan pemeriksaan yang ketat untuk melindungi orang tercinta Anda.",
                color: "text-blue-600 bg-blue-600/10"
              },
              {
                icon: Heart,
                title: "Perawatan Berkualitas",
                desc: "Profesional berpengalaman dengan standar terbaik dalam perawatan anak dan lansia.",
                color: "text-primary bg-primary/10"
              },
              {
                icon: Users,
                title: "Kepercayaan Keluarga",
                desc: "Membangun hubungan jangka panjang melalui transparansi dan keandalan layanan.",
                color: "bg-accent/10"
              },
              {
                icon: Award,
                title: "Keunggulan",
                desc: "Terus meningkatkan kualitas layanan dengan standar profesional terbaik.",
                color: "text-blue-600 bg-blue-600/10"
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInVariants}>
                <Card className="h-full border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-200 bg-card rounded-2xl">

                  <CardContent className="flex flex-col items-start p-6">

                    <div
                      className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full ${value.color}`}
                    >
                      <value.icon className="w-6 h-6" />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {value.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>

                  </CardContent>
                </Card>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* TEAM SECTION */}
      {/* <motion.section
        className="py-16 bg-background"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.div className="text-center mb-12" variants={fadeInVariants}>
            <h2 className="mb-3 text-3xl md:text-4xl font-bold tracking-tight">
              Tim Kepemimpinan Kami
            </h2>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Para pemimpin berpengalaman yang berdedikasi untuk meningkatkan kualitas layanan perawatan di Indonesia.
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className="group"
              >
                <Card className="h-full border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl overflow-hidden bg-card">

                  <CardContent className="p-6 text-center flex flex-col items-center">

                    <div className="mb-4 w-28 h-28 overflow-hidden rounded-full border-4 border-background ring-2 ring-primary/10 shadow-sm group-hover:scale-105 transition-transform duration-200 bg-secondary">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} - ${member.role}`}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h3 className="mb-1 text-lg font-bold text-foreground">
                      {member.name}
                    </h3>

                    <div className="bg-accent/10 px-3 py-1 mt-1 rounded-full text-xs font-semibold tracking-wide">
                      {member.role}
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

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
                <Card className="h-full border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl bg-card">
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
            <Card className="rounded-3xl border border-border/50 shadow-sm bg-gradient-to-r from-pink-50 to-blue-50">
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
        className="py-20 md:py-28 bg-gradient-to-r from-blue-700 to-pink-600 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="container relative mx-auto px-4 max-w-3xl text-center z-10">

          <motion.h2
            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            variants={fadeInVariants}
          >
            Bergabung Bersama Komunitas Kami
          </motion.h2>

          <motion.p
            className="mb-8 text-base md:text-lg leading-relaxed font-light"
            variants={fadeInVariants}
          >
            Baik Anda mencari layanan perawatan anak, pendampingan lansia,
            atau ingin menjadi caregiver profesional yang membawa perubahan positif —
            kami siap menyambut Anda.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInVariants}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=%2B8801883399933&text=Halo,%20saya%20ingin%20mengetahui%20tentang%20layanan%20Anda&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-md transition-all duration-200 font-bold px-8 gap-2"
              >
                <img src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                Hubungi via WhatsApp
              </Button>
            </a>

            <a href="tel:+8801883399933" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-2 border-white/70 text-white bg-primary hover:border-white transition-all duration-200 font-semibold px-8 gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/455/455604.png"
                  alt="Call"
                  width={18}
                  height={18}
                />
                Telepon Sekarang
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