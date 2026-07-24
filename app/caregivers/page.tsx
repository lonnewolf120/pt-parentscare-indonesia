"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

import WhatsAppLink from "@/components/whatsapp-link"

const SEARCH_ENDPOINT =
  process.env.NEXT_PUBLIC_CAREGIVER_API_URL ?? "https://parentscare-backend-becgb.ondigitalocean.app"

const formatIDR = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value)

type Caregiver = {
  id: string
  name: string
  type: string[]
  preferred_loc: string[]
  education: string
  bio: string
  experience: string
  rating: number
  image: string
  price: number
  duration: string
}

export default function CaregiversPage() {
  const [caregivers, setCaregivers] = useState<Caregiver[]>([])
  const [name, setName] = useState("")
  const [types, setTypes] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState<number | undefined>()
  const [maxPrice, setMaxPrice] = useState<number | undefined>()
  const [duration, setDuration] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${SEARCH_ENDPOINT}/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          types,
          cities,
          minPrice,
          maxPrice,
          duration,
          limit: 20,
        }),
      })

      if (!response.ok) {
        throw new Error(`Server merespons dengan status ${response.status}`)
      }

      const data = await response.json()
      setCaregivers(Array.isArray(data) ? data : [])
    } catch {
      setCaregivers([])
      setError(
        "Maaf, pencarian sedang tidak tersedia. Silakan hubungi kami via WhatsApp dan tim kami akan membantu mencarikan pengasuh yang sesuai.",
      )
    } finally {
      setIsLoading(false)
      setHasSearched(true)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink">Temukan Pengasuh Sempurna Anda</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Input
          aria-label="Nama pengasuh"
          placeholder="Nama Pengasuh"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-pink"
        />
        <Select onValueChange={(value) => setTypes([value])}>
          <SelectTrigger aria-label="Jenis pengasuh" className="border-pink">
            <SelectValue placeholder="Jenis Pengasuh" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nanny">Nanny</SelectItem>
            <SelectItem value="babysitter">Pengasuh Bayi</SelectItem>
            <SelectItem value="tutor">Tutor</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setCities([value])}>
          <SelectTrigger aria-label="Kota" className="border-pink">
            <SelectValue placeholder="Kota" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jakarta">Jakarta</SelectItem>
            <SelectItem value="jabodetabek">Jabodetabek</SelectItem>
            <SelectItem value="bandung">Bandung</SelectItem>
            <SelectItem value="surabaya">Surabaya</SelectItem>
            <SelectItem value="medan">Medan</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="number"
          aria-label="Harga minimum"
          placeholder="Harga Minimum"
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="border-pink"
        />
        <Input
          type="number"
          aria-label="Harga maksimal"
          placeholder="Harga Maksimal"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="border-pink"
        />
        <Select onValueChange={setDuration}>
          <SelectTrigger aria-label="Durasi layanan" className="border-pink">
            <SelectValue placeholder="Durasi" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Harian</SelectItem>
            <SelectItem value="weekly">Mingguan</SelectItem>
            <SelectItem value="monthly">Bulanan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="text-center mb-8">
        <Button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-pink text-white hover:bg-pink-accent disabled:opacity-60"
        >
          {isLoading ? "Mencari..." : "Cari Pengasuh"}
        </Button>
      </div>

      <div aria-live="polite">
        {error && (
          <div className="mx-auto mb-8 max-w-2xl rounded-lg border border-red-200 bg-red-50 p-4 text-center">
            <p className="text-sm text-red-800">{error}</p>
            <WhatsAppLink
              message="Halo, saya ingin mencari pengasuh melalui ParentsCare Indonesia."
              className="mt-3 inline-block text-sm font-semibold text-pink underline underline-offset-4"
            >
              Hubungi kami via WhatsApp
            </WhatsAppLink>
          </div>
        )}

        {!error && hasSearched && !isLoading && caregivers.length === 0 && (
          <p className="mb-8 text-center text-muted-foreground">
            Tidak ada pengasuh yang cocok dengan filter Anda. Coba ubah kriteria pencarian.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caregivers.map((caregiver) => (
          <Card key={caregiver.id} className="border-pink">
            <CardHeader>
              <CardTitle> <div className="text-pink">{caregiver.name}</div></CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square relative mb-4">
                <Image
                  src={caregiver.image || "/placeholder-user.jpg"}
                  alt={`Foto ${caregiver.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="rounded-md object-cover"
                  // Photos come from the remote search backend on an unknown
                  // host; skip optimization so no remotePatterns entry is needed.
                  unoptimized
                />
              </div>
              <p>
                <strong>Jenis:</strong> {caregiver.type.join(", ")}
              </p>
              <p>
                <strong>Lokasi:</strong> {caregiver.preferred_loc.join(", ")}
              </p>
              <p>
                <strong>Pendidikan:</strong> {caregiver.education}
              </p>
              <p>
                <strong>Pengalaman:</strong> {caregiver.experience}
              </p>
              <p>
                <strong>Rating:</strong> {caregiver.rating}/5
              </p>
              <p>
                <strong>Harga:</strong> {formatIDR(caregiver.price)}
              </p>
              <p>
                <strong>Durasi:</strong> {caregiver.duration}
              </p>
              <p className="mt-2">
                <strong>Bio:</strong> {caregiver.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
