import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative rounded-2xl border border-border/40 bg-card/50 backdrop-blur p-12 overflow-hidden">
            <div className="absolute inset-0 gradient-blur" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
                Ready to transform your sales process?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                {
                  "Join thousands of businesses that have already streamlined their sales with CRMFlow. Start your free trial today."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
                  Schedule Demo
                </Button>
              </div>
              <div className="mt-6 text-sm text-muted-foreground">
                {"No credit card required • 14-day free trial • Cancel anytime"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
