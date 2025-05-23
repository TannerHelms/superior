'use client'
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [className, setClassName] = useState("bg-white/80 backdrop-blur-sm z-50 fixed top-0 left-0 w-full")
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // useEffect(() => {
  //   const onScroll = (e: any) => {
  //     if (window.scrollY > 700 || path !== "/") {
  //       if (className !== "bg-white/80 backdrop-blur-sm z-50 fixed top-0 left-0 w-full") {
  //         setClassName("bg-white/80 backdrop-blur-sm z-50 fixed top-0 left-0 w-full");
  //       }
  //     } else {
  //       if (className !== "bg-transparent z-50") {
  //         setClassName("bg-transparent z-50");
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [path, className]);

  return (
    <nav className={`fixed w-full ${className} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-pxa8Nj4opFwBJHffq3ERGwl5BXmZAb.png"
            alt="Superior Cloud Accounting"
            width={200}
            height={80}
            className="h-24 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-[#2B579A] text-white px-6 py-2 rounded-full hover:bg-[#1E3F7D] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-[#2B579A] text-white px-6 py-2 rounded-full hover:bg-[#1E3F7D] transition-colors text-center text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

