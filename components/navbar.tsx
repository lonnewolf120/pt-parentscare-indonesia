import Image from "next/image"
import Link from "next/link"
import { Menu, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { createWhatsAppHref } from "@/lib/service-pricing"

const navItems = [
  { href: "/services", label: "Layanan" },
  { href: "/about", label: "Tentang" },
  { href: "/app-features", label: "Aplikasi" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Kontak" },
]

export default function Navbar() {
  const whatsappHref = createWhatsAppHref(
    "Halo, saya ingin konsultasi layanan ParentsCare Indonesia.",
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E7E5E4] bg-[#FFFDF9]/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/ptlogo-sm.png"
            alt="ParentsCare Indonesia"
            width={48}
            height={48}
            className="h-11 w-11 rounded-lg object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-base font-bold leading-tight text-[#18181B]">ParentsCare</p>
            <p className="text-xs font-medium text-[#6B6666]">Indonesia Home Care</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#2B2B2F] transition hover:text-pink-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#C9202B] text-white hover:bg-[#A91520]">
              <MessageCircle className="h-4 w-4" />
              Konsultasi WhatsApp
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="border-[#E7E5E4] text-pink-600">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Konsultasi WhatsApp</span>
            </Button>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-[#2B2B2F]" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-semibold text-[#18181B] transition hover:text-pink-600"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 border-t border-[#E7E5E4] pt-4">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#C9202B] text-white hover:bg-[#A91520]">
                      <MessageCircle className="h-4 w-4" />
                      Konsultasi WhatsApp
                    </Button>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
