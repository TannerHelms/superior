'use client'
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [className, setClassName] = useState("bg-white/80 backdrop-blur-sm z-50 fixed top-0 left-0 w-full")
  const path = usePathname()


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
    // <nav className="fixed w-full bg-transparent z-50"></nav>
    <nav className={`fixed w-full ${className} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-pxa8Nj4opFwBJHffq3ERGwl5BXmZAb.png"
            alt="Superior Cloud Accounting"
            width={200}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
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
      </div>
    </nav>
  )
}

