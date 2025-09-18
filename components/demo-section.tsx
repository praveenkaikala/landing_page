import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function DemoSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">See CRMFlow in action</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {"Watch how leading sales teams use CRMFlow to streamline their processes and close more deals."}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative rounded-xl border border-border/40 bg-card/50 p-2 backdrop-blur overflow-hidden">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/modern-crm-dashboard.png')] bg-cover bg-center opacity-20" />
              <Button size="lg" className="relative z-10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">5 min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Integrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
