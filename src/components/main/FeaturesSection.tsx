import type React from "react"
import { Search, Chrome, FileText, Network,  Bot, BarChart } from "lucide-react"

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
      title: "AI Resume Generator",
      description:
        "Our AI analyzes job descriptions and automatically creates tailored resumes that highlight your most relevant skills and experiences for each specific position.",
      icon: <Bot className="text-primary" />,
    },
    {
      title: "Smart Job Matching",
      description:
        "JobAlchemy scans thousands of job listings across multiple platforms to find positions that best match your profile, preferences, and career goals.",
      icon: <Search className="text-primary" />,
    },
    {
      title: "One-Click Application",
      description:
        "Apply to multiple jobs with a single click through our browser extension, which automatically fills out application forms and submits your tailored resume.",
      icon: <Chrome className="text-primary" />,
    },
    {
      title: "ATS Optimization",
      description:
        "Every resume is optimized for Applicant Tracking Systems, incorporating relevant keywords and formatting to ensure your application passes automated filters.",
      icon: <FileText className="text-primary" />,
    },
    {
      title: "Application Dashboard",
      description:
        "Track all your job applications in one centralized dashboard with status updates, response tracking, and automatic follow-up scheduling.",
      icon: <BarChart className="text-primary" />,
    },
    {
      title: "Strategic Networking",
      description:
        "Identify and connect with relevant professionals at target companies through our integrated networking suggestions to boost your application visibility.",
      icon: <Network className="text-primary" />,
    },
  ]

  return (
    <section id="features" className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">Features</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Automate Your Way To Employment</h2>
          <p className="text-xl text-muted-foreground mb-8">
            JobAlchemy combines AI-powered resume creation with automated job applications 
            so you can apply to hundreds of perfectly-matched positions while you focus on 
            preparing for interviews.
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