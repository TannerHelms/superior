import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  title: string
  image: string
  bio: string
  scale?: number
}

export default function TeamMember({ name, title, image, bio, scale = 1 }: TeamMemberProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 relative overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p className="mt-4 text-gray-600 text-center">{bio}</p>
      </div>
    </div>
  )
}

