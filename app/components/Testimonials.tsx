import Image from "next/image"
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "./Animations"

export default function Testimonials() {
  const testimonials = [
    {
      image: "/bucks.png",
    },
    {
      image: "/american-electric.png",
    },
    {
      image: "/rugged.png",
    },
  ]

  return (
    <FadeInWhenVisible>
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 w-full"
          style={{
            backgroundImage:
              'url("/testimonial-bg.jpg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 1,
          }}
        />

        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Client Testimonials</h2>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index} className="relative">
                <div className="flex items-center justify-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Testimonial image`}
                    width={400}
                    height={0}
                    layout="intrinsic"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </FadeInWhenVisible>
  )
}
