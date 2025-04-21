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
      description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
      price: 0,
      features: [
        { text: "1 team member" },
        { text: "1 GB storage" },
        { text: "Upto 2 pages" },
        { text: "Community support" },
        { text: "AI assistance" },
      ],
      buttonText: "Start Free Trial",
    },
    {
      name: "Premium",
      description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
      price: 49,
      features: [
        { text: "4 team member" },
        { text: "8 GB storage" },
        { text: "Upto 6 pages" },
        { text: "Priority support" },
        { text: "AI assistance" },
      ],
      buttonText: "Get starterd",
      isPremium: true,
    },
    {
      name: "Enterprise",
      description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
      price: 139,
      features: [
        { text: "10 team member" },
        { text: "20 GB storage" },
        { text: "Upto 10 pages" },
        { text: "Phone & email support" },
        { text: "AI assistance" },
      ],
      buttonText: "Contact US",
    },
  ]

  return (
    <section id="pricing" className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">Pricing</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get unlimitted access</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Enjoy unlimited access to all features and resources, empowering your business to grow without limits.
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
