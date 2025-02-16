import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Superior Cloud Accounting",
  description: "CPA Precision in Every Number - Professional accounting services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[500px] rounded-[10px]">
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  )
}

