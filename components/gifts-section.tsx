import { Gift, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GiftsSection() {
  const giftsListUrl = "https://exemplo.com/lista-de-presentes"

  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
          <Gift className="w-8 h-8 text-primary" />
        </div>

        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">Lista de Presentes</h2>

        <p className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
          Sua presença é o nosso maior presente. Mas se desejar nos presentear, preparamos uma lista especial com
          carinho.
        </p>

        <Button asChild size="lg" className="gap-2 text-base md:text-lg px-8 py-6">
          <a href={giftsListUrl} target="_blank" rel="noopener noreferrer">
            Ver Lista de Presentes
            <ExternalLink className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}
