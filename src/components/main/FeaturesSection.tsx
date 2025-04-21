import type React from "react"
import { Mic, Search, Chrome, FileText, Network, Settings } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
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
      title: "Voice Interactive Onboarding",
      description:
        "Engage in a voice-guided session where you can articulate your work history and accomplishments in your own words, ensuring authentic capture of your professional achievements.",
      icon: <Mic className="text-primary" />,
    },
    {
      title: "Enhanced Role Recommendation",
      description:
        "Receive a curated list of roles that match your skills, experience, and career aspirations immediately after onboarding, showcasing opportunities available on platforms like LinkedIn.",
      icon: <Search className="text-primary" />,
    },
    {
      title: "JobAlchemy Chrome Extension",
      description:
        "Apply to jobs at scale with our Chrome extension that streamlines the application process while maintaining personalization for each opportunity.",
      icon: <Chrome className="text-primary" />,
    },
    {
      title: "Resume Optimization",
      description:
        "Automatically generate ATS-friendly resumes tailored to specific job descriptions, enhancing your chances with contextually relevant content.",
      icon: <FileText className="text-primary" />,
    },
    {
      title: "Efficient Application Process",
      description:
        "Save time and effort with auto-filling forms that streamline the application process, allowing you to apply to more positions with less manual work.",
      icon: <Settings className="text-primary" />,
    },
    {
      title: "Strategic Networking",
      description:
        "Connect with potential employers using our advanced algorithm that identifies and suggests contacts within companies posting relevant job openings.",
      icon: <Network className="text-primary" />,
    },
  ]

  return (
    <section id="features" className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">Features</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Job Search</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how JobAlchemy&apos;s innovative features can streamline your job application process, 
            maximize your opportunities, and help you land your dream role faster than ever before.
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