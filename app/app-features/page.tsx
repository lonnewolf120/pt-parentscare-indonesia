"use client"


import React, { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Smartphone,
  Download,
  UserCheck,
  Calendar,
  Heart,
  Shield,
  Star,
  Clock,
  MapPin,
  Bell,
  CreditCard,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  Zap,
  Globe,
} from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import ParticleBackground from "@/components/particle-background"
import WhatsAppLink from "@/components/whatsapp-link"

// Carousel component (must be defined after appFeatures)
function FeatureCarousel({ features }: { features: typeof appFeatures }) {
  const [current, setCurrent] = useState(0);
  const total = features.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const feature = features[current];
  const Icon = feature.icon;

  return (
    <div className="relative max-w-3xl mx-auto">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-white to-pink-50/30 rounded-2xl shadow-xl p-6 md:p-10 border border-pink-100/50"
      >
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} text-white mb-6 shadow-lg`}>
            <Icon className="w-8 h-8" />
          </div>
          <h3 className={`text-2xl font-bold mb-3 text-${feature.color}`}>{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={feature.screenshot}
            alt={`Tangkapan layar aplikasi: ${feature.title}`}
            width={320}
            height={288}
            loading="lazy"
            decoding="async"
            className="rounded-xl shadow-lg object-cover w-full max-w-xs h-72"
          />
        </div>
      </motion.div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-pink-100 flex items-center justify-center text-pink shadow transition"
          aria-label="Previous Feature"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="flex gap-2">
          {features.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-2 h-2 rounded-full ${i === current ? 'bg-pink-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-pink-100 flex items-center justify-center text-pink shadow transition"
          aria-label="Next Feature"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}


const appFeatures = [
  {
    icon: UserCheck,
    title: "Verified Caregivers",
    description: "Browse profiles of thoroughly vetted and background-checked caregivers",
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
    screenshot: "/feature-verified.png",
  },
  {
    icon: Calendar,
    title: "WhatsApp-Assisted Scheduling",
    description: "Share your preferred schedule and requirements with our team through WhatsApp",
    color: "blue",
    gradient: "from-pink-600 to-pink-800",
    screenshot: "/feature-booking.png",
  },
  {
    icon: MapPin,
    title: "Location-Based Search",
    description: "Find caregivers in your area with our smart location-based matching",
    color: "red",
    gradient: "from-red-500 to-red-600",
    screenshot: "/feature-location.png",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "Review package pricing before our team confirms the right service for your family",
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
    screenshot: "/image2.jpeg",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Stay updated with care reminders and service updates",
    color: "blue",
    gradient: "from-pink-600 to-pink-800",
    screenshot: "/step-4-peace.png",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Contact the ParentsCare team directly for booking, support, and service questions",
    color: "red",
    gradient: "from-red-500 to-red-600",
    screenshot: "/image3.jpeg",
  },
]

const steps = [
  {
    step: "01",
    title: "Install the App",
    description: "Download ParentsCare from Google Play Store and create your account in minutes",
    icon: Download,
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
    details: [
      "Available on Google Play Store",
      "Quick and easy registration",
      "Secure account setup",
      "Profile customization",
    ],
    image: "/image1.jpeg",
  },
  {
    step: "02",
    title: "Explore and Contact Us",
    description: "Review caregiver information and contact our team on WhatsApp for service matching",
    icon: UserCheck,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    details: [
      "Browse caregiver profiles",
      "Read verified reviews",
      "Compare services and prices",
      "Booking handled by WhatsApp",
    ],
    image: "/image2.jpeg",
  },
  {
    step: "03",
    title: "Take the Professional Service",
    description: "Enjoy peace of mind with professional care while our team stays available through WhatsApp",
    icon: Heart,
    color: "red",
    gradient: "from-red-500 to-red-600",
    details: [
      "Professional care delivery",
      "Real-time updates and photos",
      "24/7 WhatsApp support",
      "Rate and review experience",
    ],
    image: "/image3.jpeg",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "100% Verified",
    description: "All caregivers undergo thorough background checks",
    stat: "100+",
    statLabel: "Verified Caregivers",
  },
  // {
  //   icon: Star,
  //   title: "Highly Rated",
  //   description: "Average 4.8-star rating from satisfied families",
  //   stat: "4.8★",
  //   statLabel: "Average Rating",
  // },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Round-the-clock WhatsApp support and emergency assistance",
    stat: "24/7",
    statLabel: "Support Available",
  },
  {
    icon: Users,
    title: "Trusted by Families",
    description: "Join thousands of satisfied families",
    stat: "300+",
    statLabel: "Happy Families",
  },
]

const CTA_MESSAGE = "Halo, saya ingin bertanya tentang layanan ParentsCare Indonesia."

export default function AppFeatures() {

  const [activeStep, setActiveStep] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const stepsRef = useRef(null)
  const benefitsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isFeaturesInView = useInView(featuresRef, { once: true })
  const isStepsInView = useInView(stepsRef, { once: true })
  const isBenefitsInView = useInView(benefitsRef, { once: true })

  const StepIcon = steps[activeStep].icon

  return (
    <div className="relative min-h-screen overflow-hidden">
      <CustomCursor />
      <ParticleBackground />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-blue-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating App Icons */}
        <div className="absolute inset-0">
          {[Smartphone, Heart, Shield, Star, Calendar, Bell].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                fontSize: `${60 + i * 10}px`,
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-lg">
              <Smartphone className="w-5 h-5 mr-2" />
              Mobile App Available
            </Badge>

            <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Experience ParentsCare
              <br />
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                On Your Mobile
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-10 max-w-3xl mx-auto text-xl md:text-2xl opacity-90 leading-relaxed"
            >
              Download our mobile app as a companion for ParentsCare services. Service booking and customer support are handled through WhatsApp so our team can guide you directly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://play.google.com/store/apps/details?id=com.iftxstudio.parentscare" target="_blank">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-lg cursor-hover"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Now
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-pink transition-all duration-300 px-8 py-4 text-lg font-semibold cursor-hover bg-transparent"
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Play className="mr-2 w-5 h-5" />
                  See Features
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* App Features & Screenshots Carousel Section */}
      <section id="features" ref={featuresRef} className="py-20 bg-gradient-to-br from-white via-pink-50/20 to-blue-50/20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
              Powerful App Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mobile app helps families learn about caregivers, care routines, and updates while booking stays guided by our WhatsApp team.
            </p>
          </motion.div>

          {/* Carousel */}
          <FeatureCarousel features={appFeatures} />
        </div>
      </section>

// Carousel component

      {/* App Screenshots Section
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
              App Screenshots
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the ParentsCare app interface and features through these screenshots.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <img src="/feature-verified.png" alt="App Screenshot 1" className="rounded-xl shadow-lg object-cover w-full h-72" />
            <img src="/feature-booking.png" alt="App Screenshot 2" className="rounded-xl shadow-lg object-cover w-full h-72" />
            <img src="/feature-location.png" alt="App Screenshot 3" className="rounded-xl shadow-lg object-cover w-full h-72" />
            <img src="/image2.jpeg" alt="App Screenshot 4" className="rounded-xl shadow-lg object-cover w-full h-72" />
            <img src="/step-4-peace.png" alt="App Screenshot 5" className="rounded-xl shadow-lg object-cover w-full h-72" />
            <img src="/image3.jpeg" alt="App Screenshot 6" className="rounded-xl shadow-lg object-cover w-full h-72" />
          </div>
        </div>
      </section> */}

      {/* How to Use App Section */}
      <section ref={stepsRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
              How to Use Our App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with ParentsCare in three simple steps and experience professional care at your fingertips
            </p>
          </motion.div>

          {/* Step Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center gap-4 p-2 bg-gradient-to-r from-white to-pink-50 rounded-full shadow-lg border border-pink-100/50">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-hover ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg`
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <step.icon className="inline-block w-5 h-5 mr-2" />
                  Step {step.step}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Step Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              {/* Step Content Centered */}
              <div className="space-y-4 max-w-xl w-full">
                <div className="flex items-center justify-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${steps[activeStep].gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    <StepIcon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Step {steps[activeStep].step}</div>
                    <h3 className={`text-2xl font-bold text-${steps[activeStep].color}`}>{steps[activeStep].title}</h3>
                  </div>
                </div>

                <p className="text-base text-gray-600 leading-relaxed text-center">{steps[activeStep].description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className={`w-4 h-4 text-${steps[activeStep].color}`} />
                      <span className="text-xs text-gray-600">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {activeStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center"
                  >
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.iftxstudio.parentscare"
                      target="_blank"
                    >
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${steps[activeStep].gradient} text-white hover:opacity-90 transition-all duration-300 px-8 py-3 cursor-hover`}
                      >
                        <Download className="mr-2 w-5 h-5" />
                        Download from Play Store
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="py-20 bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full border border-white/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our App?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of families who trust ParentsCare for their childcare needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center group cursor-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>
                <div className="text-3xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {benefit.stat}
                </div>
                <div className="text-sm opacity-80 mb-2">{benefit.statLabel}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm opacity-90">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 bg-white relative">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Download the ParentsCare app today for service information and care tools, or contact our WhatsApp team to book caregiver, nurse, and nanny services.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://play.google.com/store/apps/details?id=com.iftxstudio.parentscare" target="_blank">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-red-500 text-white hover:opacity-90 transition-all duration-300 px-10 py-4 text-xl font-semibold shadow-lg cursor-hover"
                    >
                      <Download className="mr-2 w-6 h-6" />
                      Download Now
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <WhatsAppLink message={CTA_MESSAGE}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-pink text-pink hover:bg-pink hover:text-white transition-all duration-300 px-10 py-4 text-xl font-semibold cursor-hover bg-transparent"
                    >
                      Contact WhatsApp
                      <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                  </WhatsAppLink>
                </motion.div>
              </div>

              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-8 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Available Worldwide</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Instant Download</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
