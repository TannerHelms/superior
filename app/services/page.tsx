import Image from "next/image"
import Contact from "../components/Contact"
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "../components/Animations"

interface Service {
  title: string
  icon: string
  description: string
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Cleanup",
      icon: "/cleanup.png",
      description:
        "We specialize in providing efficient catch-up and clean-up bookkeeping services tailored to your business needs. Our U.S.-based bookkeepers are well-versed in various industries and can help you get your financial records organized. We ensure transparency and clarity in our process, giving you peace of mind as we bring your online quickbooks up to date.",
    },
    {
      title: "Monthly Accounting",
      icon: "/monthly-accounting.png",
      description:
        "Bookkeeping is a vital element for the success and sustainability of any business. Maintaining precise monthly financial records enables you to make data-driven decisions, manage cash flow effectively, and prepare for tax obligations without stress, reducing risk of errors and potential fines from tax authorities. Our proactive approach provides a dedicated bookkeeper that enables your business to benefit from accounting services tailored to your specific needs.",
    },
    {
      title: "Online Quickbooks Training",
      icon: "/training.png",
      description:
        "We are Fast, Experienced Professionals with a wide range of experience in multiple industries to assist you in learning to maintain your own QuickBooks. We help small business owners build confidence with comprehensive training and live help tailored to meet your needs.",
    },
    {
      title: "Financial Advisory",
      icon: "/advising.png",
      description:
        "When there are difficult tasks to be performed, our advisors provide deep expertise and a quick turnaround to review your company's books, inspect your financial health, and resolve quickbooks issues you cannot do on your own nor have time to accomplish.",
    },
    {
      title: "Tax Preparation",
      icon: "/taxprep.png",
      description:
        "Proper tax preparation can be a game-changer. Our objective is to provide you with tax ready books at all times, ensuring compliance with tax laws and proactively minimizing your tax liability.",
    },
    {
      title: "Multi-lingual Services",
      icon: "/services.png",
      description:
        "We provide real-time live services to effectively communicate with our clients. Languages include English, French, Spanish, and Mandarin Chinese.",
    },
  ]

  return (
    <>
      <FadeInWhenVisible>
        <div className="py-24 px-8 bg-gray-50 mt-[30px]">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h1 className="text-sm text-gray-600 mb-2">Our Services</h1>
              <h2 className="text-3xl md:text-4xl font-bold">What we provide</h2>
            </div>

            <StaggerChildren className="space-y-16">
              {services.map((service, index) => (
                <StaggerItem key={index} className="flex flex-col items-center text-center max-w-3xl mx-auto">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={`${service.title} icon`}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full bg-[#E8F5E9] mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </FadeInWhenVisible>
      <Contact />
    </>
  )
}
