import Image from "next/image"
import Link from "next/link"
import Navigation from "./components/Navigation"
import QuickbooksServices from "./components/QuickbooksServices"
import Testimonials from "./components/Testimonials"
import WhyUs from "./components/WhyUs"
import Mission from "./components/Mission"
import Contact from "./components/Contact"
import { FadeInWhenVisible } from "./components/Animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 relative">
      <Navigation />

      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-[850px] z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
      </div>

      <div className="absolute top-[780px] left-0 w-screen overflow-hidden leading-[0] z-20 bg-transparent max-w-full">
        <svg
          className="relative block w-screen h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120C600 40 600 40 1000 120H0z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Hero Section */}
      <FadeInWhenVisible>
        <main className="relative pt-[250px] pb-16 px-8 z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                CPA Precision in Every Number
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Mastering Tax and Accounting complexity with simplicity—we have your back one transaction at a time.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-block bg-[#2B579A] text-white px-8 py-3 rounded-full hover:bg-[#1E3F7D] transition-colors text-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>
      </FadeInWhenVisible>

      {/* Certifications Section */}
      <div className="absolute top-[550px] left-0 w-screen overflow-hidden leading-[0] z-20 bg-transparent max-w-full">
        <FadeInWhenVisible>
          <section className="py-16 px-4 w-full z-10">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-3 gap-16 justify-items-center max-w-3xl mx-auto">
                <div className="flex flex-col items-center pt-[40px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mba-YVjgUL5x3zNAkG9pApaKQ5kqNWaqDN.png"
                    alt="MBA Certification"
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cpa-1EThRwz26AK5cbylRsiOnwVeSDvYGv.png"
                    alt="CPA Certification"
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32"
                  />
                </div>
                <div className="flex flex-col items-center pt-[40px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qb-IHf0rJLNjghET7cVTZhsgPcBjgQUAw.png"
                    alt="QuickBooks Certification"
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>
      </div>

      {/* Quickbooks Services Section */}
      <QuickbooksServices />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Us Section */}
      <WhyUs />

      {/* Mission Section */}
      <Mission />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}
