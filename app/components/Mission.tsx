import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "./Animations"

export default function Mission() {
  const keyPoints = [
    "Make informed decisions",
    "Build stakeholder trust",
    "Maintain financial transparency",
    "Keep tax ready books",
  ]

  return (
    <FadeInWhenVisible>
      <section className="py-24 px-8 bg-[#EEEEEE]" id="mission">
        <div className="container mx-auto max-w-6xl">

          <div className="grid md:grid-cols-2 gap-12 items-start justify-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide a standardized framework that guides financial information recording, analysis, and
                communication to grow your potential and minimize your tax liability. By adhering to these principles,
                businesses can:
              </p>
            </div>
            <StaggerChildren className="space-y-4">
              {keyPoints.map((point, index) => (
                <StaggerItem key={index} className="text-xl md:text-2xl font-semibold text-[#2B579A]">
                  {point}
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  )
}

