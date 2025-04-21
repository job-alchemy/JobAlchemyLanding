import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqItems = [
    {
      question: "Is using an AI-copilot tool like JobAlchemy considered cheating when applying for jobs?",
      answer:
        "No, it's not cheating. JobAlchemy doesn't create content for you out of nowhere. It helps you organize and present the information you've already provided—whether it's your work experience, education, or projects. The platform saves you time by handling tasks like formatting your CV for ATS and optimizing it for job descriptions. We also show you relevant roles that match your skillset and goals, even ones you might not have thought of. Ultimately, we help you focus on what matters—getting your foot in the door for interviews, not making false promises about landing the job.",
    },
    {
      question: "What if the platform detects bot-like activity when JobAlchemy applies on my behalf?",
      answer:
        "When JobAlchemy applies for you, we make sure to mimic human behavior. That means taking pauses between answers, scrolling, and introducing a time lag to make the application look natural. We're automating tasks, not trying to fool anyone. The goal is to make the process as smooth and human-like as possible without raising any flags.",
    },
    {
      question: "Can I update my profile or CV once I've started using JobAlchemy?",
      answer:
        "Absolutely! You can update your profile anytime with new skills, experiences, or goals. We'll use this updated info to adjust your CV, show you new roles, and ensure everything stays current. The more accurate and up-to-date your profile is, the better your chances of landing the right roles.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial gives you full access to all features for 14 days with no credit card required. After the trial period ends, you can choose to subscribe to one of our plans or your account will automatically switch to the free tier with limited features.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take effect immediately, and we'll prorate any payments accordingly.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take data security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security measures and regularly undergo security audits to ensure your data remains protected.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoicing options.",
    },
  ]

  return (
    <section className="pb-20 sm:pb-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-screen-md mx-auto">
          <div className="text-lg text-primary mb-2 tracking-wider">FAQS</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
        </header>
        <div className="max-w-screen-md mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
