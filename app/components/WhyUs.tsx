import Image from "next/image"
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "./Animations"

export default function WhyUs() {
  const images = [
    "oversight.png",
    "qbo.png",
    "financial-advisory.png",
    "risk.png",
  ]

  return (
    <FadeInWhenVisible>
      <section className="py-24 px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Why Us?</h2>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <StaggerItem key={index} className="relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-square">
                <Image src={image} alt={`Feature ${index + 1}`} fill className="object-cover" />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </FadeInWhenVisible>
  )
}
