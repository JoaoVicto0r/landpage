import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { FeaturesSection } from "../components/features-section"
import { PlansSection } from "../components/plans-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlansSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
