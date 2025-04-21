import type React from "react"
import { Badge } from "@/components/ui/badge"

interface ServiceProps {
  title: string
  description: string
  isPro: boolean
}

const services: ServiceProps[] = [
  {
    title: "Consultation Services",
    description: "Expert guidance tailored to identify opportunities and strategize effectively.",
    isPro: false,
  },
  {
    title: "Custom Domain Integration",
    description: "Seamless integration of your unique domain for a professional online presence.",
    isPro: false,
  },
  {
    title: "Social Media Integrations",
    description: "Connect with popular platforms to enhance your online engagement and reach.",
    isPro: false,
  },
  {
    title: "Email Marketing Integrations",
    description: "Effortlessly connect email marketing tools to streamline your campaigns.",
    isPro: true,
  },
  {
    title: "SEO Optimization",
    description: "Improve your search engine visibility with tailored optimization strategies.",
    isPro: true,
  },
  {
    title: "Ongoing Support",
    description: "24/7 customer support to ensure smooth operations and address any issues.",
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
    <section id="solutions" className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">Services</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Business</h2>
          <p className="text-xl text-muted-foreground mb-8">
            From marketing and sales to operations and strategy, we have the expertise to help you achieve your goals.
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
