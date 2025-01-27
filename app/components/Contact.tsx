import Link from "next/link"
import { FadeInWhenVisible } from "./Animations"

export default function Contact() {
  return (
    <FadeInWhenVisible>
      <section className="relative py-32 px-4" id="contact">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/tax.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/30" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-white/90 mb-8">Schedule a consultation today.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#2B579A] text-white px-8 py-3 rounded-full hover:bg-[#1E3F7D] transition-colors text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </FadeInWhenVisible>
  )
}

