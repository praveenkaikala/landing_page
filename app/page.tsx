import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { DemoSection } from "@/components/demo-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header/> */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <DemoSection />
        <IntegrationsSection />
        <PricingSection />
        <AboutSection />
        <CTASection />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
