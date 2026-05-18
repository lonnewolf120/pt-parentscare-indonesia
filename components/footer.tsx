import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-pink bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink">Tentang ParentsCare</h3>
            <p className="text-sm text-muted-foreground">
              Menghubungkan orang tua dengan pengasuh terpercaya untuk memastikan perawatan terbaik bagi anak-anak Anda.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pink">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-pink">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-pink">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/caregivers" className="text-muted-foreground hover:text-pink">
                  Temukan Pengasuh
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-pink">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pink">Hukum</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-pink">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-pink">
                  Syarat Layanan
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-pink">
                  Kebijakan Cookie
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pink">Terhubung Dengan Kami</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1JXAgm8Apq/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/parentscare.indonesia?igsh=MXFzaHV4ZDEwanVwcQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@parentscare.indonesia?_r=1&_t=ZS-95RnEnXBtuG" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p>Email: ptparentscareindonesia@gmail.com</p>
              <p>Telepon: +62 821-1663-798</p>
              <p>Alamat: Jl. Pringgondani No. 21</p>
              <p>Cilandak, Jakarta Selatan 12450</p>
              <p>DKI Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-pink pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ParentsCare. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
