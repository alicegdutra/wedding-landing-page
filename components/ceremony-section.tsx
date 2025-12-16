import { Church, Clock, MapPin } from "lucide-react"

export function CeremonySection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Church className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-foreground text-balance">
            CERIMÔNIA
          </h2>
        </div>

        {/* CARD */}
        <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm space-y-8">

          {/* LOCAL */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-black font-light text-xl md:text-2xl">
                Santuário Nossa Senhora Aparecida
              </h3>
              <p className="text-black font-light text-xl md:text-2xl">
                R. Antônio Lopes de Azevedo, 74 – Vila Marcondes
                <br />
                Pres. Prudente – SP, 19030-120
              </p>
            </div>
          </div>

          {/* HORÁRIO */}
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-black font-light text-xl md:text-2xl">
              Às 16h30
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
