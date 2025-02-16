import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-pxa8Nj4opFwBJHffq3ERGwl5BXmZAb.png"
              alt="Superior Cloud Accounting"
              width={200}
              height={80}
              className="w-full max-w-[200px] mx-auto"
            />
            <p className="text-gray-600 text-center">We have your back, one transaction at a time.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-[#2B579A] hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-[#2B579A] hover:underline">
                About Us
              </Link>
              <Link href="/contact" className="text-[#2B579A] hover:underline">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+12086080931" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Phone className="h-4 w-4" />
                (208) 608-0931
              </a>
              <a
                href="mailto:superior.cloud.acctg@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-4 w-4" />
                superior.cloud.acctg@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Bar */}
      <div className="bg-gray-900 py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          <p className="text-white text-sm text-center">
            "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails."
            -William Arthur Ward, Writer, (1921-1994)
          </p>
        </div>
      </div>
    </footer>
  )
}

