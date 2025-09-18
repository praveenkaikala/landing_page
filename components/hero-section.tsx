import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 gradient-blur" />

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          {/* Tagline */}
          <span className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Powering Modern Businesses
          </span>

          {/* Hero Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            The complete platform to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              accelerate growth
            </span>
          </h1>

          {/* Sub Text */}
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Streamline operations, empower teams, and scale effortlessly with our all-in-one business solution. 
            Built for companies that want to focus on what matters most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8 shadow-lg hover:scale-105 transition">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 bg-transparent hover:bg-primary/10 transition"
            >
              <Play className="mr-2 h-4 w-4" />
              Book a Demo
            </Button>
          </div>

          {/* Extra info */}
          <div className="mt-12 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 mx-auto max-w-6xl">
          <div className="relative rounded-xl border border-border/40 bg-card/50 p-2 backdrop-blur">
            <div className="rounded-lg bg-background/80 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150%</div>
                  <div className="text-sm text-muted-foreground">Average ROI Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
