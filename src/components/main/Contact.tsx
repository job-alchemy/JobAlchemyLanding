"use client"

import type React from "react"

import { useState } from "react"
import { Building2, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Web Development",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    })
  }

  return (
    <section id="contact" className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Connect With Us access</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stay in touch with us for updates, support, and valuable insights. We&apos;re here to help you every step of the
            way!
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div>
            <div className="flex flex-col gap-6 *:rounded-lg *:p-6 *:border">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="size-5" />
                  <div className="font-bold">Location:</div>
                </div>
                <div className="text-muted-foreground">123 Maple Lane, Springfield, IL 62704</div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="size-5" />
                  <div className="font-bold">Call us:</div>
                </div>
                <div className="text-muted-foreground">+1 (555) 987-6543</div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="size-5" />
                  <div className="font-bold">Email us:</div>
                </div>
                <div className="text-muted-foreground">contact@ourcompany.com</div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="size-5" />
                  <div className="font-bold">Business Hours:</div>
                </div>
                <div className="text-muted-foreground">Tuesday to Saturday, 9 AM - 5 PM</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border text-card-foreground shadow-sm bg-muted">
            <div className="p-6 pt-6">
              <form className="grid w-full gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:!flex-row gap-6">
                  <div className="space-y-2 w-full">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Leopoldo"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Miranda"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="contact@bundui.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={formData.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                        <SelectItem value="Figma Design">Figma Design</SelectItem>
                        <SelectItem value="REST API">REST API</SelectItem>
                        <SelectItem value="FullStack Project">FullStack Project</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      className="resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button type="submit" className="mt-4 btn-bezel">
                  Send message
                </Button>
              </form>
            </div>
            <div className="flex items-center p-6 pt-0"></div>
          </div>
        </section>
      </div>
    </section>
  )
}
