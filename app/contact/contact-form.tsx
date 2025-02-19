"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { sendEmail } from "./send-email"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export type EmailContent = {
  name: string
  email: string
  phone: string
  preferredContact: string
  taxFiling: string
  revenue: string
  quickbooks: string
  service: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add form submission logic here
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const name = data.name.toString()
    const email = data.email.toString()
    const phone = data.phone.toString()
    const preferredContact = data["preferred-contact"].toString()
    const taxFiling = data["tax-filing"].toString()
    const revenue = data.revenue.toString();
    const quickbooks = data["quickbooks"].toString()
    const service = data.service.toString();

    const resp = await sendEmail({
      name,
      email,
      phone,
      preferredContact,
      taxFiling,
      revenue,
      quickbooks,
      service,
    })
    if (resp === "error") {
      toast({
        variant: "destructive",
        title: "Error!",
        description: "An error occurred while submitting your request.",
        className: "bg-red-500 text-white"
      })
      setIsSubmitting(false);
      return;
    } else if (resp === "success") {
      toast({
        variant: "default",
        title: "Success!",
        description: "Your form has been submitted to Superior Cloud Accounting.",
        className: "bg-green-500 text-white"
      })
    }
    setIsSubmitting(false);
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone #</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferred-contact">Preferred Contact</Label>
              <Select name="preferred-contact">
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred contact" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem className="hover:cursor-pointer" value="email">Email</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="phone">Phone</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="tax-filing">Tax Filing Type</Label>
              <Select name="tax-filing">
                <SelectTrigger>
                  <SelectValue placeholder="Select tax filing type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem className="hover:cursor-pointer" value="schedule-c">Schedule C</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="s-corporation">S Corporation</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="c-corporation">C Corporation</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="partnership">Partnership</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="revenue">Annual Revenue</Label>
              <Input id="revenue" name="revenue" type="text" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Do you currently use Quickbooks Online?</Label>
            <RadioGroup defaultValue="no" className="flex gap-4" name="quickbooks">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service</Label>
            <Select name="service">
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem className="hover:cursor-pointer" value="cleanup">Cleanup</SelectItem>
                <SelectItem className="hover:cursor-pointer" value="monthly">Monthly Accounting</SelectItem>
                <SelectItem className="hover:cursor-pointer" value="training">QuickBooks Training</SelectItem>
                <SelectItem className="hover:cursor-pointer" value="advisory">Financial Advisory</SelectItem>
                <SelectItem className="hover:cursor-pointer" value="tax">Tax Preparation</SelectItem>
                <SelectItem className="hover:cursor-pointer" value="multilingual">Multi-lingual Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

