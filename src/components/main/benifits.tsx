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
      title: "AI-Powered Automation",
      description: "Save time and increase your efficiency by automating your routine business processes.",
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
      title: "Real Time Data Analytics",
      description: "We help you make more informed and strategic decisions by instantly analyzing your data.",
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
      title: "Personalized Experience",
      description:
        "It offers flexible solutions with its adaptable structure according to the specific needs of your business.",
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
      title: "Scalable Structure",
      description:
        "Move forward into the future with confidence, with an infrastructure that can expand as your business grows.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f1f1f] dark:text-white">What Do We Bring to You?</h2>
              <p className="text-xl text-gray-800 dark:text-gray-300 mb-8">
                All the innovative solutions you need to grow your business are here! We add value to your business with
                our features that simplify your workflow, increase efficiency and strengthen your decisions.
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