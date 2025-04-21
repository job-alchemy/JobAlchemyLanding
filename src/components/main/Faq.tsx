import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqItems = [
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
      question: "Is customer support available 24/7?",
      answer:
        "Yes, our customer support team is available 24/7 to help you with any questions or issues you may have. You can reach us via email, live chat, or phone.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take data security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security measures and regularly undergo security audits to ensure your data remains protected.",
    },
    {
      question: "Do you offer custom plans for businesses?",
      answer:
        "Yes, we offer custom enterprise plans for businesses with specific needs. Contact our sales team to discuss your requirements and get a tailored solution for your organization.",
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
