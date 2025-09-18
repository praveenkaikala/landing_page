import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to set up CRMFlow?",
    answer:
      "Most teams are up and running within 5 minutes. Our onboarding process is designed to be simple and intuitive, with guided setup steps and data import tools.",
  },
  {
    question: "Can I import my existing customer data?",
    answer:
      "Yes! CRMFlow supports importing data from CSV files, Excel spreadsheets, and most popular CRM platforms including Salesforce, HubSpot, and Pipedrive.",
  },
  {
    question: "Is my data secure with CRMFlow?",
    answer:
      "Absolutely. We use bank-level encryption, are SOC 2 compliant, and store all data in secure, redundant data centers. Your data is backed up daily and we never share it with third parties.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 email support for all plans, with priority support for Pro and Enterprise customers. Enterprise customers also get dedicated account management and phone support.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your data will remain accessible for 30 days after cancellation, giving you time to export if needed.",
  },
  {
    question: "Do you offer custom integrations?",
    answer:
      "Yes! Enterprise customers can request custom integrations. We also have a robust API that allows you to build your own integrations or work with our partner developers.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-card/20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {
              "Have questions? We have answers. If you can't find what you're looking for, feel free to contact our support team."
            }
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
