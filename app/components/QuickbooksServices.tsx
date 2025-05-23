"use client"
import Image from "next/image"
import Link from "next/link"
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "./Animations"

export default function QuickbooksServices() {
  const services = [
    {
      title: "Cleanup",
      image: "/cleanup.png",
    },
    {
      title: "Quickbooks Accounting",
      image: "/monthly-accounting.png",
    },
    {
      title: "Quickbooks Online Training",
      image: "training.png",
    },
    {
      title: "Financial Advisory",
      image: "advising.png",
    },
    {
      title: "Tax Preparation",
      image: "taxprep.png",
    },
    {
      title: "Multi-lingual Services",
      image: "services.png",
    },
  ]

  return (
    <div>
      <FadeInWhenVisible>
        <section className="pt-[350px] md:pt-64 pb-24 px-4 bg-white" id="services">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What we provide</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Base Plans starting at $300 Monthly</h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div onClick={() => {
                  window.location.href = "/services"
                }}
                  className="cursor-pointer"
                >
                  <StaggerItem key={index} className="flex flex-col items-center text-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={96}
                      height={96}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#E8F5E9] mb-4"
                    />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                  </StaggerItem>
                </div>
              ))}
            </StaggerChildren>
            <div className="text-center mt-12">
              <Link href="/contact" className="text-[#2B579A] hover:text-[#1E3F7D] font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>
    </div>
  )
}

