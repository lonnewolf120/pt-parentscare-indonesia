import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Hubungi ParentsCare Indonesia - Booking Caregiver, Perawat & Nanny',
  description: 'Hubungi ParentsCare Indonesia melalui WhatsApp untuk booking caregiver, perawat, nanny, dan dukungan pelanggan 24/7. Email tersedia untuk pertanyaan non-mendesak.',
  keywords: [
    'kontak ParentsCare Indonesia',
    'booking caregiver Indonesia',
    'whatsapp pengasuh Jakarta',
    'layanan pelanggan ParentsCare',
    'nanny Jakarta WhatsApp',
    'perawat home care WhatsApp',
  ],
  url: '/contact',
})

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import ContactForm from "@/components/contact-form"
import WhatsAppIcon from "@/components/icons/whatsapp-icon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Contact() {
  const whatsappHref =
    "https://api.whatsapp.com/send/?phone=%2B628211663798&text=Halo,%20saya%20ingin%20memesan%20layanan%20atau%20membutuhkan%20bantuan%20ParentsCare";

  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-pink">Hubungi Kami</h1>
        <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
          Punya pertanyaan? Kami di sini untuk membantu. Hubungi kami melalui salah satu saluran di bawah ini.
        </p>
        <div className="mx-auto max-w-[600px] mt-6 flex items-center gap-3 bg-[#FBE7EA] border border-[#F6D4D9] rounded-lg px-4 py-3 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C9202B" className="w-6 h-6 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75A2.25 2.25 0 0117.25 22.5h-10.5A2.25 2.25 0 014.5 20.25v-.75z" />
          </svg>
          <span className="text-base text-[#2B2B2F] font-medium">
            Anda dapat <span className="font-semibold text-[#C9202B]">memesan layanan kami</span> dan menghubungi customer support melalui <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A91520] transition-colors">WhatsApp</a>. Email tersedia untuk pertanyaan non-mendesak.
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
                    <a href="mailto:ptparentscareindonesia@gmail.com" className="text-sm text-muted-foreground hover:text-pink hover:underline">
                      ptparentscareindonesia@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground">Waktu respons: dalam 24 jam</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-5 w-5 text-pink" />
                  <div>
                    <p className="font-medium">Pesan Kami di Whatsapp</p>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-pink hover:underline">
                      +62 821-1663-798
                    </a>
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-red hover:underline">
                    +62 821-1663-798
                  </a>
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
                "Anda dapat memesan pengasuh dengan menghubungi tim dukungan pelanggan kami melalui WhatsApp. Tim kami akan mencatat kebutuhan, membagikan kandidat yang sesuai, dan membantu menjadwalkan interview online atau offline.",
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
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-[#E7E5E4]">
              <AccordionTrigger><span className="text-[#18181B]">{faq.question}</span></AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="mt-12 rounded-lg bg-[#18181B] p-8 text-center text-white shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">Siap untuk Memulai?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-base text-white/75">
          Hubungi tim kami melalui WhatsApp untuk pemesanan layanan, dukungan pelanggan, atau pertanyaan mendesak.
        </p>
        <div className="flex justify-center">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="border border-[#C9202B] bg-[#C9202B] text-white hover:bg-[#A91520] flex items-center space-x-2">
              <WhatsAppIcon className="h-5 w-5" />
              <span>WhatsApp</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
