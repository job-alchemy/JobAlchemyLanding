import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingFeature {
  text: string
}

interface PricingTier {
  name: string
  description: string
  price: number
  features: PricingFeature[]
  buttonText: string
  isPremium?: boolean
}

export default function PricingSection() {
  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      description: "Perfect for exploring JobAlchemy's basic capabilities",
      price: 0,
      features: [
        { text: "10 applications per month" },
        { text: "Basic resume parsing" },
        { text: "Simple job matching" },
        { text: "Email notifications" },
        { text: "Community support" },
      ],
      buttonText: "Start Free Trial",
    },
    {
      name: "Premium",
      description: "Ideal for active job seekers applying to multiple positions",
      price: 29,
      features: [
        { text: "100 applications per month" },
        { text: "AI resume optimization" },
        { text: "Custom cover letter generation" },
        { text: "Application tracking dashboard" },
        { text: "Priority support" },
      ],
      buttonText: "Get Started",
      isPremium: true,
    },
    {
      name: "Professional",
      description: "For career-focused individuals with high-volume applications",
      price: 59,
      features: [
        { text: "Unlimited applications" },
        { text: "Advanced keyword matching" },
        { text: "Interview preparation AI" },
        { text: "Career coaching session" },
        { text: "Phone & email support" },
      ],
      buttonText: "Contact Us",
    },
  ]

  return (
    <section id="pricing" className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">Pricing</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Application Power</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Select a plan that fits your job search needs. Apply smarter, not harder with JobAlchemy&apos;s automated solutions.
          </p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                tier.isPremium
                  ? "bg-card text-card-foreground shadow-sm drop-shadow-xl shadow-black/10 dark:shadow-white/10 border border-primary lg:scale-[1.1]"
                  : "border bg-card text-card-foreground shadow-sm"
              }`}
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight pb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground pb-4">{tier.description}</p>
                <div>
                  <span className="text-3xl font-bold">${tier.price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </div>
              <div className="p-6 pt-0 flex">
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{feature.text}</h3>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <Button
                  className={`btn-bezel ${
                    tier.isPremium
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  } w-full`}
                >
                  {tier.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
