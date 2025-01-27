import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  image: string
}

export default function TeamMember({ name, title, bio, image }: TeamMemberProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={128} height={128} className="object-cover" />
        </div>
        <CardTitle className="text-xl text-center">{name}</CardTitle>
        <CardDescription className="text-center">{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="link" className="text-[#2B579A]">
          View →
        </Button>
      </CardFooter>
    </Card>
  )
}

