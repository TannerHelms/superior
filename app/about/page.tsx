import TeamMember from "../components/TeamMember"
import Mission from "../components/Mission"
import Contact from "../components/Contact"
import Image from "next/image"
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "../components/Animations"

export default function AboutPage() {
  return (
    <>
      <FadeInWhenVisible>
        <div className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h1 className="text-sm text-gray-600 mb-2">About Us</h1>
              <h2 className="text-3xl md:text-4xl font-bold">Who are we?</h2>
            </div>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggerItem>
                <TeamMember
                  name="Stephanie Helms, CPA"
                  title="Co-Founder"
                  image="/stephanie.jpg"
                  bio="Stephanie Helms CPA, Co-Founder Superior Cloud Accounting. Graduated from Northern Illinois University with a Bachelors in Economics and Masters in Finance. She has worked 25 years in accounting and finance in both the private and public sectors."
                  scale={1.5}
                />
              </StaggerItem>
              <StaggerItem>
                <TeamMember
                  name="Gary Helms, MBA"
                  title="Co-Founder"
                  image="/gary.jpg"
                  bio="Gary Helms, MBA, Co-Founder Superior Cloud Accounting. Graduated from Northern Illinois University with a Masters degree in Business Administrations. He also holds Bachelors and Masters degrees from Utah State University. He has worked 20 years in finance and accounting."
                  scale={1.5}
                />
              </StaggerItem>
              <StaggerItem>
                <TeamMember
                  name="Sarah Aster"
                  title="Sr. Accountant"
                  image="/sarah.jpg"
                  bio="Sarah Astier joined Superior Cloud Accounting in 2022. She is a Senior Accountant holding a J.D from Golden Gate University and also a degree in International Trade Law from the University of Paris X - Nanterre. Before becoming an accountant, she practiced law."
                />
              </StaggerItem>
              <StaggerItem>
                <TeamMember
                  name="Hailey Bell"
                  title="QBO ProAdvisor"
                  image="/haileybell.jpg"
                  bio="Hailey Bell is certified as a QuickBooks Online ProAdvisor. She holds a Masters degree in Agriculture focusing on Business Management and Equine Reproduction from Texas A&M. Hailey loves her work at Superior Cloud, using her problem-solving skills to help clients succeed."
                  scale={1.3}
                />
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </FadeInWhenVisible>
      {/* Team Photo Section */}
      <FadeInWhenVisible>
        <section className="w-full overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/people.jpg-p0PYYBP6FgOEPqNYXKE3EdPQ8dd4L3.jpeg"
            alt="Our team collaborating"
            width={1920}
            height={400}
            className="w-full h-[300px] md:h-[400px] object-cover"
            priority
          />
        </section>
      </FadeInWhenVisible>
      <Mission />
      <Contact />
    </>
  )
}

