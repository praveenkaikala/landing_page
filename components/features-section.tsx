import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Zap, BarChart3, MessageSquare, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Lead Management",
    description:
      "Capture, track, and nurture leads from multiple sources with intelligent lead scoring and automated follow-ups.",
  },
  {
    icon: TrendingUp,
    title: "Sales Pipeline",
    description: "Visualize your sales process with customizable pipelines, deal tracking, and revenue forecasting.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks, email sequences, and follow-ups to focus on closing deals.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your sales performance with real-time dashboards and custom reports.",
  },
  {
    icon: MessageSquare,
    title: "Team Collaboration",
    description: "Keep your team aligned with shared notes, task assignments, and real-time communication.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, data encryption, and role-based access controls.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
            Everything you need to close more deals
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {"Powerful features designed to streamline your sales process and grow your business faster."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/40 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
