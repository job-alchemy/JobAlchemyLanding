import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqItems = [
    {
      question: "How does JobAlchemy personalize my job search?",
      answer:
        "From voice-driven onboarding to intelligent matching, we use your unique profile—skills, experience, and preferences—to surface roles you'll truly love.",
    },
    {
      question: "How does JobAlchemy make my applications stand out?",
      answer:
        "We transform your spoken stories into ATS-compliant CVs and craft tailored messages for each opportunity, so every application highlights your strengths and voice.",
    },
    {
      question: "Which platforms can I apply through?",
      answer:
        "Our Chrome extension auto-fills your profile info and JD-specific details on LinkedIn, Workday, and Greenhouse—and we're continuously adding more platforms.",
    },
    {
      question: "How do Smart Referrals work?",
      answer:
        "While you browse, we pinpoint key contacts—management, HR, and peers—and auto-generate personalized outreach messages in your tone to boost networking.",
    },
    {
      question: "What events will I see?",
      answer:
        "Get handpicked online and offline events—webinars, workshops, conferences—relevant to your field, helping you grow your network and skills.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Your information is encrypted and stored securely. We never share your data without permission, and you control what stays private.",
    },
    {
      question: "How can I track my applications?",
      answer:
        "Your dashboard logs every job you applied to and shows which CV version was used—so you always know what's been sent and with which profile.",
    },
    {
      question: "Are there any limits during the beta?",
      answer:
        "Nope. Enjoy unlimited applications, referrals, and event recommendations, while you help us refine JobAlchemy for all users.",
    },
    {
      question: "How can I share feedback or report issues?",
      answer:
        "You're at the heart of our beta—submit feedback directly in the app or email feedback@jobalchemy.ai to tell us what's working and what needs improvement.",
    },
    {
      question: "Can I export or download my CV?",
      answer:
        "Absolutely. Download your ATS‑ready CV as a PDF anytime to keep for your records or share it outside JobAlchemy.",
    },
  ]

  return (
    <section className="pb-20 sm:pb-32" id="faq" >
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
