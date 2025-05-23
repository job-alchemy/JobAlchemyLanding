import type { ReactNode } from "react"
import { Blocks, LineChartIcon as ChartLine, Wallet, Sparkle } from "lucide-react"

interface BenefitCardProps {
  icon: ReactNode
  number: number
  title: string
  description: string
  stickyPosition: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, number, title, description, stickyPosition }) => {
  return (
    <div
      className="rounded-lg text-card-foreground group/number lg:sticky shadow-none border bg-white dark:bg-card dark:border-border/20"
      style={{ top: stickyPosition }}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex justify-between">
          {icon}
          <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
            {number < 10 ? `0${number}` : number}
          </span>
        </div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-foreground">{title}</h3>
      </div>
      <div className="p-6 pt-0 text-muted-foreground">{description}</div>
    </div>
  )
}

export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <Blocks
          className="lucide lucide-sparkle mb-6 text-primary bg-primary/10 p-2 rounded-full ring-8 ring-primary/5 dark:ring-primary/10"
          width={40}
          height={40}
        />
      ),
      title: "AI Resume Optimization",
      description: "Customize your resume with the right keywords and structure to ace every ATS scan.",
      stickyPosition: "22rem",
    },
    {
      icon: (
        <ChartLine
          className="lucide lucide-file-text mb-6 text-primary bg-primary/10 p-2 rounded-full ring-8 ring-primary/5 dark:ring-primary/10"
          width={40}
          height={40}
        />
      ),
      title: "Job Description Driven CV Generation",
      description: "Auto-generate a job-specific CV right in your browser as you browse openings.",
      stickyPosition: "23rem",
    },
    {
      icon: (
        <Wallet
          className="lucide lucide-users mb-6 text-primary bg-primary/10 p-2 rounded-full ring-8 ring-primary/5 dark:ring-primary/10"
          width={40}
          height={40}
        />
      ),
      title: "Smart Referrals",
      description: "Find management, HR, and peer contacts—and send outreach messages in your own voice.",
      stickyPosition: "24rem",
    },
    {
      icon: (
        <Sparkle
          className="lucide lucide-calendar-heart mb-6 text-primary bg-primary/10 p-2 rounded-full ring-8 ring-primary/5 dark:ring-primary/10"
          width={40}
          height={40}
        />
      ),
      title: "Event Recommendations",
      description: "Discover the best online and in-person career events to grow your network.",
      stickyPosition: "25rem",
    },
    {
      icon: (
        <Sparkle
          className="lucide lucide-folder-symlink  mb-6 text-primary bg-primary/10 p-2 rounded-full ring-8 ring-primary/5 dark:ring-primary/10"
          width={40}
          height={40}
        />
      ),
      title: "Application Tracking",
      description: "See every job you’ve sent and which CV version you used—updated in real time.",
      stickyPosition: "25rem",
    },
    {
      icon: (
        <Sparkle
          className="lucide lucide-blocks mb-6 text-primary bg-primary/10 p-2 rounded-full ring-8 ring-primary/5 dark:ring-primary/10"
          width={40}
          height={40}
        />
      ),
      title: "All-in-One Hub",
      description: "From discovery to application to follow-up, manage your entire job search in one place.",
      stickyPosition: "25rem",
    },
  ]

  return (
    <section id="benefits" className="pb-20 sm:pb-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-24">
          <div>
            <header className="mb-6 lg:mb-12 mx-auto sticky lg:top-[22rem] text-center lg:text-start max-w-full">
              <div className="text-lg text-primary mb-2 tracking-wider">Benefits</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">All-In-One Job Application Hub </h2>
              <p className="text-lg text-muted-foreground mb-8">
              JobAlchemy is your ultimate one-stop platform for job discovery, application, and networking. From initially finding roles to creating perfectly optimized applications and reaching out to potential referrals, JobAlchemy manages the entire application lifecycle so you can focus solely on sharing your best self.
              </p>
            </header>
          </div>
          <div className="flex flex-col gap-6 lg:gap-[14rem] w-full">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                number={index + 1}
                title={benefit.title}
                description={benefit.description}
                stickyPosition={benefit.stickyPosition}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}