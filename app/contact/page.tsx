import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Contact ParentsCare - Caregiver, Nurse & Nanny Services in Bangladesh',
  description: 'Contact ParentsCare for professional caregiver, nurse, and nanny services in Bangladesh. 24/7 customer support. Available in Dhaka, Chittagong, Sylhet. Call, email, or visit us. Emergency service available. Quick response guaranteed.',
  keywords: [
    'contact parentscare',
    'caregiver service contact bangladesh',
    'nurse service helpline dhaka',
    'book caregiver bangladesh',
    'emergency nurse service',
    '24/7 caregiver support',
  ],
  url: '/contact',
})

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Contact() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-pink">Hubungi Kami</h1>
        <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
          Punya pertanyaan? Kami di sini untuk membantu. Hubungi kami melalui salah satu saluran di bawah ini.
        </p>
        <div className="mx-auto max-w-[600px] mt-6 flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2563eb" className="w-6 h-6 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75A2.25 2.25 0 0117.25 22.5h-10.5A2.25 2.25 0 014.5 20.25v-.75z" />
          </svg>
          <span className="text-base text-blue-800 font-medium">
            Anda juga dapat <span className="font-semibold text-blue-700">memesan layanan kami</span> dengan menginstal <a href="https://play.google.com/store/apps/details?id=com.iftxstudio.parentscare" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 transition-colors">aplikasi mobile kami</a> atau dengan menghubungi tim layanan pelanggan kami secara langsung.
          </span>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="border-pink">
            <CardHeader>
              <CardTitle><span className="text-pink">Terhubung Dengan Kami</span></CardTitle>
              <CardDescription>Tim kami siap membantu Anda dengan pertanyaan atau kekhawatiran apa pun.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-5 w-5 text-pink" />
                  <div>
                    <p className="font-medium">Email Kami</p>
                    <p className="text-sm text-muted-foreground">ptparentscareindonesia@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Waktu respons: dalam 24 jam</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-5 w-5 text-pink" />
                  <div>
                    <p className="font-medium">Pesan Kami di Whatsapp</p>
                    <p className="text-sm text-muted-foreground">+62 821-1663-798</p>                  
                    <p className="text-sm text-muted-foreground">Waktu respons: dalam 24 jam</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-5 w-5 text-pink" />
                  <div>
                    <p className="font-medium">Kunjungi Kami</p>
                    <p className="text-sm text-muted-foreground">Jl. Pringgondani No. 21</p>
                    <p className="text-sm text-muted-foreground">Cilandak, Jakarta Selatan 12450</p>
                    <p className="text-sm text-muted-foreground">DKI Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="border-blue">
            <CardHeader>
              <CardTitle className="text-blue">Office Hours</CardTitle>
              <CardDescription>We're available during the following hours to serve you better.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-blue" />
                    <span className="text-muted-foreground">Monday - Friday</span>
                  </span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-blue" />
                    <span className="text-muted-foreground">Saturday</span>
                  </span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-blue" />
                    <span className="text-muted-foreground">Sunday</span>
                  </span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card> */}

          <Card className="border-red">
            <CardHeader>
              <CardTitle><span className="text-red">Kontak Darurat</span></CardTitle>
              <CardDescription>
                Untuk masalah mendesak di luar jam kerja, silakan gunakan hotline darurat kami.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-red" />
                <div>
                  <p className="font-medium">Hotline Darurat</p>
                  <p className="text-sm text-muted-foreground">+62 821-1663-798</p>
                  <p className="text-sm text-muted-foreground">Tersedia 24/7 untuk kebutuhan perawatan mendesak</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-pink">Pertanyaan yang Sering Diajukan</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "Bagaimana cara saya memesan pengasuh?",
              answer:
                "Anda dapat memesan pengasuh dengan menghubungi tim dukungan pelanggan kami secara langsung atau dengan menginstal aplikasi mobile kami, di sana Anda dapat membuat akun, menjelajahi pengasuh yang tersedia, dan memilih yang paling sesuai dengan kebutuhan Anda. Kemudian, Anda dapat meminta pemesanan melalui platform kami.",
            },
            {
              question: "Apa langkah keselamatan yang Anda miliki?",
              answer:
                "Kami melakukan pemeriksaan latar belakang menyeluruh pada semua pengasuh, memverifikasi kredensial mereka, dan memerlukan referensi. Kami juga memiliki sistem rating dan mendorong orang tua untuk meninggalkan ulasan setelah setiap sesi.",
            },
            {
              question: "Bagaimana pengasuh Anda diverifikasi?",
              answer:
                "Pengasuh kami menjalani proses verifikasi yang ketat yang mencakup pemeriksaan latar belakang, wawancara, pemeriksaan referensi, dan penilaian keterampilan. Kami hanya menyetujui pengasuh yang memenuhi standar tinggi kami.",
            },
            {
              question: "Bagaimana jika saya perlu membatalkan pemesanan?",
              answer:
                "Anda dapat membatalkan pemesanan hingga 24 jam sebelum waktu yang dijadwalkan tanpa penalti apa pun. Untuk pembatalan dalam 24 jam, biaya kecil mungkin berlaku. Silakan lihat kebijakan pembatalan kami untuk lebih jelasnya.",
            },
          ].map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-blue">
              <AccordionTrigger><span className="text-blue">{faq.question}</span></AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className=" mt-12 rounded-lg text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent p-8 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">Siap untuk Memulai?</h2>
        <p className="mb-6 ">Bergabunglah dengan ribuan orang tua yang puas yang mempercayai ParentsCare untuk kebutuhan perawatan anak mereka.</p>
        <div className="flex justify-center">
          <a href="https://api.whatsapp.com/send/?phone=%2B8801883399933&text=Hello,%20I%20wanted%20to%20know%20about%20your%20service&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="border text-white hover:bg-pink-accent flex items-center space-x-2">
              <img src="https://www.svgrepo.com/show/38250/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
              <span>WhatsApp</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
