'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { createWhatsAppHref } from '@/lib/service-pricing'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    if (!name || !email || !subject || !message) {
      setError('Semua field harus diisi')
      return
    }

    const whatsappMessage = [
      `Nama: ${name}`,
      `Email: ${email}`,
      `Subjek: ${subject}`,
      '',
      `Pesan: ${message}`,
    ].join('\n')

    window.open(createWhatsAppHref(whatsappMessage), '_blank', 'noopener,noreferrer')

    setSubmitted(true)
    e.currentTarget.reset()
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <Card className="border-pink">
      <CardHeader>
        <CardTitle><span className="text-pink">Kirim Pesan via WhatsApp</span></CardTitle>
        <CardDescription>Isi formulir di bawah ini untuk membuka chat WhatsApp dengan detail pesan Anda.</CardDescription>
      </CardHeader>
      <CardContent>
        {submitted && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-green-700 border border-green-200">
            <CheckCircle className="h-5 w-5" />
            <p className="text-sm font-medium">WhatsApp telah dibuka dengan pesan Anda. Silakan kirim chat untuk menghubungi tim kami.</p>
          </div>
        )}
        
        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-red-700 border border-red-200">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input 
              id="name" 
              name="name"
              placeholder="Nama Anda" 
              className="border-pink focus:ring-pink" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="Email Anda" 
              className="border-pink focus:ring-pink" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subjek</Label>
            <Input 
              id="subject" 
              name="subject"
              placeholder="Subjek pesan" 
              className="border-pink focus:ring-pink" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Pesan</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Pesan Anda"
              className="min-h-[150px] border-pink focus:ring-pink"
            />
          </div>
          <Button type="submit" className="w-full bg-pink text-white hover:bg-pink-accent">
            Lanjutkan ke WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
