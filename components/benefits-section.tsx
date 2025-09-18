import { CheckCircle, Clock, Palette, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: CheckCircle,
    title: "Easy to Use",
    description: "Intuitive interface that your team will love from day one",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Tailor every aspect to match your unique business needs",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Grows with your business from startup to enterprise",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate routine tasks and focus on what matters most",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">Why choose CRMFlow?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {"Join thousands of businesses that trust CRMFlow to manage their customer relationships."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
