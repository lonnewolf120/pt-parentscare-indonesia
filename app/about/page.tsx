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
    { number: "Rp 2.5B", label: "Paid-up Capital", icon: TrendingUp },
    { number: "2026", label: "Established", icon: Award },
    { number: "PMA", label: "Foreign Investment Company", icon: Shield },
    { number: "HR Solutions", label: "Core Industry", icon: Users },
  ];

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
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
              <SparklesIcon className="w-4 h-4 text-white text-bold" />
              Building Modern Workforce Solutions in Indonesia
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-sm"
            variants={fadeInVariants}
          >
            Professional HR & Workforce Solutions
            <br className="hidden md:block" />
            for Modern Businesses
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-base md:text-lg text-pink-50 mb-8 leading-relaxed font-normal"
            variants={fadeInVariants}
          >
            PT Parents Care Indonesia is a legally registered PMA company
            specializing in human resource services, staffing solutions,
            workforce management, and business support services across Indonesia.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInVariants}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=6282110009811"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full rounded-full bg-white text-primary hover:bg-pink-50 hover:shadow-md transition-all duration-200 font-bold px-8 gap-2"
              >
                <img src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                WhatsApp Us
              </Button>
            </a>

            <a href="tel:+6282110009811" className="w-full sm:w-auto">
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
                Call Now
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS */}
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

      {/* SERVICES */}
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
              Our Service Categories
            </h2>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive workforce and HR solutions designed to support
              modern businesses, operational growth, and organizational
              excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Human Resource Management",
                description:
                  "Professional HR management services including workforce operations, HR administration, compliance support, and organizational management.",
                icon: Users,
                colorClass: "bg-pink-100 text-pink-600",
                btnClass: "text-pink-600 hover:bg-pink-50",
                border: "border-pink-100",
              },
              {
                title: "Recruitment & Staffing Solutions",
                description:
                  "End-to-end recruitment, staffing, and talent sourcing solutions tailored for businesses operating in Indonesia and international markets.",
                icon: Shield,
                colorClass: "bg-blue-100 text-blue-600",
                btnClass: "text-blue-600 hover:bg-blue-50",
                border: "border-blue-100",
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
                          Explore Services
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
                    Our Mission
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To empower businesses through reliable workforce solutions,
                    professional HR services, and operational excellence while
                    maintaining integrity, compliance, and trust.
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
                    Our Vision
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To become one of Indonesia’s leading HR and workforce
                    management companies, delivering scalable and modern
                    business support solutions for organizations globally.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

          </div>
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