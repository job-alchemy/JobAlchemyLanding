import type { ReactNode } from "react"
import { TabletSmartphone, BadgeCheck, Goal, PictureInPicture, MousePointerClick, Lock } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="rounded-lg text-card-foreground h-full bg-background border-0 shadow-none text-center">
      <div className="flex-col space-y-1.5 p-6 flex justify-center items-center">
        <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
      </div>
      <div className="p-6 pt-0 text-muted-foreground">{description}</div>
    </div>
  )
}

export default function FeaturesSection() {
  const features: FeatureCardProps[] = [
    {
      title: "AI-Powered Task Management",
      description:
        "Utilize machine learning algorithms to prioritize tasks, ensuring your team focuses on what matters most.",
      icon: <TabletSmartphone className="text-primary" />,
    },
    {
      title: "Predictive Analytics",
      description:
        "Leverage historical data to forecast trends and make proactive decisions, minimizing risks and maximizing opportunities.",
      icon: <BadgeCheck className="text-primary" />,
    },
    {
      title: "Custom Workflow Automation",
      description:
        "Design automated workflows tailored to your processes, integrating multiple tools to streamline operations seamlessly.",
      icon: <Goal className="text-primary" />,
    },
    {
      title: "Robust API Integrations",
      description:
        "Easily connect our platform with your existing software solutions, enabling data synchronization and enhancing functionality.",
      icon: <PictureInPicture className="text-primary" />,
    },
    {
      title: "Interactive Dashboards",
      description:
        "Visualize key performance indicators (KPIs) and metrics in real-time with customizable dashboards that provide actionable insights.",
      icon: <MousePointerClick className="text-primary" />,
    },
    {
      title: "Privacy and Compliance",
      description:
        "Ensure your data is protected with end-to-end encryption and compliance with regulations such as GDPR and CCPA.",
      icon: <Lock className="text-primary" />,
    },
  ]

  return (
    <section id="features" className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">Features</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unleash the power of our innovative features designed to streamline your workflow, enhance decision-making,
            and drive business growth.
          </p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
