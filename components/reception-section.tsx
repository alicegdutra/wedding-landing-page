import { PartyPopper, Clock, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReceptionSection() {
  const mapsUrl = "https://maps.app.goo.gl/qvJomWubJkyjURMS6"

  return (
    <section className="py-24 md:py-32 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <PartyPopper className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-secondary-foreground text-balance">RECEPÇÃO</h2>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm space-y-8">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-black font-light text-xl md:text-2xl">Chácara Felicidade</h3>
              <p className="text-black font-light text-xl md:text-2xl">
                WHWF+W6 - Álvares Machado, SP, 19160-000
                <br />
                Presidente Prudente, São Paulo - SP
              </p>
              <Button
               asChild
               variant="outline"
               size="default"
               className="gap-2 nbg-transparent text-lg font-medium">
               <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5" />Abrir no Google Maps
                <ExternalLink className="w-5 h-5" />
              </a>
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
