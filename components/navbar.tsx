import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md border-b border-gray-100">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center space-x-2 md:space-x-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 via-pink-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="font-bold text-white text-lg">P</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-gray-900 text-base md:text-lg leading-tight">ParentsCare</p>
            <p className="text-xs text-gray-500">Indonesia</p>
          </div>
        </Link>

        {/* Center Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center mx-8">
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200">
            Tentang
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200">
            Layanan
          </Link>
          <Link href="/app-features" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200">
            Aplikasi
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200">
            Kontak
          </Link>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <a 
            href="https://api.whatsapp.com/send/?phone=%2B6282110009811&text=Halo,%20saya%20ingin%20mengetahui%20tentang%20layanan%20Anda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2"
          >
            <Button className="bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 shadow-md hover:shadow-lg transition-all duration-200 px-5">
              <span>💬</span>
              <span>Hubungi Kami</span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-3">
          <a 
            href="https://api.whatsapp.com/send/?phone=%2B6282110009811&text=Halo,%20saya%20ingin%20mengetahui%20tentang%20layanan%20Anda" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="icon" variant="ghost" className="text-pink-600 hover:bg-pink-50">
              <span className="text-lg">💬</span>
            </Button>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-gray-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-12">
              <nav className="flex flex-col space-y-4">
                <Link href="/about" className="text-base font-medium text-gray-900 hover:text-pink-600 transition-colors">
                  Tentang
                </Link>
                <Link href="/services" className="text-base font-medium text-gray-900 hover:text-pink-600 transition-colors">
                  Layanan
                </Link>
                <Link href="/app-features" className="text-base font-medium text-gray-900 hover:text-pink-600 transition-colors">
                  Aplikasi Mobile
                </Link>
                <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-pink-600 transition-colors">
                  Kontak
                </Link>
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=%2B6282110009811&text=Halo,%20saya%20ingin%20mengetahui%20tentang%20layanan%20Anda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600">
                      Hubungi WhatsApp
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
