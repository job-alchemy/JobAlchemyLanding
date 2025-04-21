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
      className="rounded-lg text-card-foreground group/number lg:sticky shadow-none border bg-white dark:bg-black"
      style={{ top: stickyPosition }}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex justify-between">
          {icon}
          <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
            {number < 10 ? `0${number}` : number}
          </span>
        </div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-[#1f1f1f] dark:text-white">{title}</h3>
      </div>
      <div className="p-6 pt-0 text-gray-800 dark:text-gray-300">{description}</div>
    </div>
  )
}

export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <Blocks
          className="lucide lucide-blocks mb-6 text-[#266968] bg-[#9addd4]/20 p-2 rounded-full ring-8 ring-[#9addd4]/10"
          width={40}
          height={40}
        />
      ),
      title: "AI Resume Optimization",
      description: "Our AI analyzes each job posting and automatically tailors your resume to highlight relevant skills and experience, increasing your match score with ATS systems.",
      stickyPosition: "22rem",
    },
    {
      icon: (
        <ChartLine
          className="lucide lucide-chart-line mb-6 text-[#266968] bg-[#9addd4]/20 p-2 rounded-full ring-8 ring-[#9addd4]/10"
          width={40}
          height={40}
        />
      ),
      title: "Bulk Application Automation",
      description: "Apply to hundreds of matched positions across LinkedIn, Indeed, and other job boards with a single click, saving you 20+ hours per week of manual application work.",
      stickyPosition: "23rem",
    },
    {
      icon: (
        <Wallet
          className="lucide lucide-wallet mb-6 text-[#266968] bg-[#9addd4]/20 p-2 rounded-full ring-8 ring-[#9addd4]/10"
          width={40}
          height={40}
        />
      ),
      title: "Smart Application Tracking",
      description: "Monitor all your applications in one dashboard with real-time status updates, response rates, and automatic follow-up scheduling to maximize interview opportunities.",
      stickyPosition: "24rem",
    },
    {
      icon: (
        <Sparkle
          className="lucide lucide-sparkle mb-6 text-[#266968] bg-[#9addd4]/20 p-2 rounded-full ring-8 ring-[#9addd4]/10"
          width={40}
          height={40}
        />
      ),
      title: "Browser Extension Integration",
      description: "Our powerful extension works silently in the background to identify job opportunities as you browse and can instantly apply with your optimized profile with a single click.",
      stickyPosition: "25rem",
    },
  ]

  return (
    <section id="benefits" className="pb-20 sm:pb-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-24">
          <div>
            <header className="mb-6 lg:mb-12 mx-auto sticky lg:top-[22rem] text-center lg:text-start max-w-full">
              <div className="text-lg text-[#266968] mb-2 tracking-wider">Benefits</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f1f1f] dark:text-white">Job Applications on Autopilot</h2>
              <p className="text-xl text-gray-800 dark:text-gray-300 mb-8">
                JobAlchemy revolutionizes your job search by automating resume customization and job applications across all major platforms. Our AI ensures each application is perfectly tailored while our extension applies to jobs with a single click.
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