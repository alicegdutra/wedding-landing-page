import { HeroSection } from "@/components/hero-section"
import { DateSection } from "@/components/date-section"
import { CountdownSection } from "@/components/countdown-section"
import { CeremonySection } from "@/components/ceremony-section"
import { ReceptionSection } from "@/components/reception-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { GiftsSection } from "@/components/gifts-section"
import { RsvpSection } from "@/components/rsvp-section"
import { Footer } from "@/components/footer"

export default function WeddingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DateSection />
      <CountdownSection />
      <PhotoGallery position="first" />
      <CeremonySection />
      <ReceptionSection />
      <PhotoGallery position="second" />
      <GiftsSection />
      <RsvpSection />
      <Footer />
    </main>
  )
}
