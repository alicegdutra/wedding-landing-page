import { MessageCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RsvpSection() {
  const whatsappNumber = "5518997382850"
  const message = encodeURIComponent("Olá! Gostaria de confirmar minha presença no casamento de ALice & Gabriel.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <section className="py-24 md:py-32 px-4 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-8">
          <Check className="w-8 h-8 text-primary-foreground" />
        </div>

        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">CONFIRME SUA PRESENÇA</h2>

        <p className="text-2xl md:text-3xl font-serif mb-12 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
          Será uma alegria contar com você neste dia especial. Por favor, confirme sua presença até o dia .
        </p>

        <Button asChild size="lg" variant="secondary" className="gap-2 text-base md:text-lg px-8 py-6">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Confirmar via WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
