import type React from "react"
import { Badge } from "@/components/ui/badge"

interface ServiceProps {
  title: string
  description: string
  isPro: boolean
}

const services: ServiceProps[] = [
  {
    title: "Smart Resume Builder",
    description: "AI-powered tool that tailors your resume for each job application to increase interview chances.",
    isPro: false,
  },
  {
    title: "Auto Job Application",
    description: "Automated system that submits applications to matching positions across multiple job platforms.",
    isPro: false,
  },
  {
    title: "Job Board Integrations",
    description: "Connect with popular job sites like LinkedIn, Indeed, and ZipRecruiter to maximize your reach.",
    isPro: false,
  },
  {
    title: "Interview Preparation",
    description: "AI-driven interview coaching with industry-specific question preparation and feedback.",
    isPro: true,
  },
  {
    title: "Application Analytics",
    description: "Track application status, success rates, and optimization suggestions to improve outcomes.",
    isPro: true,
  },
  {
    title: "Premium Support",
    description: "Priority customer support and personalized guidance from career experts for your job search.",
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
