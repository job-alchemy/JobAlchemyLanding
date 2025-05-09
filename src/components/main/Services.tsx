import type React from "react"
import { Badge } from "@/components/ui/badge"

interface ServiceProps {
  title: string
  description: string
  isPro: boolean
}

const services: ServiceProps[] = [
  {
    title: "Voice-Interactive Onboarding",
    description: "Narrate your professional achievements naturally—JobAlchemy captures every detail authentically, crafting a comprehensive profile.",
    isPro: false,
  },
  {
    title: "Enhanced Job Matching",
    description: "Instant tailored recommendations that precisely align with your skills, experiences, and career aspirations.",
    isPro: false,
  },
  {
    title: "ATS-Compliant CVs",
    description: "Professionally structured resumes with optimal keywords, formatting, and readability for higher success rates.",
    isPro: false,
  },
  {
    title: "Automated Applications",
    description: "Chrome extension that enables optimized applications directly through platforms like LinkedIn with just a few clicks.",
    isPro: false,
  },
  {
    title: "Smart Referrals",
    description: "Identify key company contacts and craft personalized outreach messages in your own voice while browsing job posts.",
    isPro: true,
  },
  {
    title: "Event Recommendations",
    description: "Stay ahead with personalized recommendations for industry events to expand your network and discover opportunities.",
    isPro: true,
  },
]

const ServiceCard: React.FC<ServiceProps> = ({ title, description, isPro }) => {
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm bg-muted h-full relative">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Badge
        className="absolute -top-2 -right-3 data-[pro=false]:hidden"
        data-pro={isPro.toString()}
        variant="secondary"
      >
        PRO
      </Badge>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="features" className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">Features</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Land Your Dream Job Faster</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let our automation handle the tedious application process while you focus on preparing for interviews.
          </p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-screen-lg mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} isPro={service.isPro} />
          ))}
        </div>
      </div>
    </section>
  )
}
