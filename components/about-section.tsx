import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About ipixelzen
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At ipixelzen, we're passionate about transforming how businesses manage their customer relationships.
            Founded with the vision of making powerful CRM tools accessible to companies of all sizes, we combine
            cutting-edge technology with intuitive design to deliver solutions that actually work.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with intelligent CRM solutions that streamline operations, enhance customer
                experiences, and drive sustainable growth through data-driven insights.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading provider of innovative CRM technology that helps businesses build lasting
                relationships with their customers while achieving operational excellence.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More About Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
