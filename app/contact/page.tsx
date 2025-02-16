import { Mail, Phone, MapPin } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactPage() {
  return (
    <div className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-sm text-gray-600 mb-2">Contact Us</h1>
          <h2 className="text-3xl md:text-4xl font-bold">Schedule a consultation today</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-4">
                <a href="tel:+12086080931" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Phone className="h-4 w-4" />
                  (208) 608-0931
                </a>
                <a
                  href="mailto:superior.cloud.accounting@gmail.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  superior.cloud.accounting@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Location</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>We are a virtual company located in Eagle, Idaho 83616.</p>
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46289.97883359767!2d-116.37775755!3d43.69559175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54af9a9e4b3e7b27%3A0x8721e1a605ae0a91!2sEagle%2C%20ID%2083616!5e0!3m2!1sen!2sus!4v1706380000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing our location in Eagle, Idaho"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

