import { Calendar } from "lucide-react"

export function DateSection() {
  return (
    <section className="relative py-32 md:py-40 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">

        {/* ÍCONE */}
        <div className="mx-auto inline-flex items-center justify-center w-20 h-20 rounded-full border border-primary/30 bg-primary/5 shadow-sm">
          <Calendar className="w-8 h-8 text-primary" />
        </div>

        {/* TÍTULO */}
        <h2 className="font-serif text-4xl md:text-5xl font-light text-primary tracking-[0.25em]">
          SAVE THE DATE
        </h2>

        {/* SEPARADOR */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-14 h-px bg-primary/30" />
          <span className="w-2 h-2 rounded-full bg-primary/40" />
          <span className="w-14 h-px bg-primary/30" />
        </div>

        {/* DATA */}
        <div className="pt-8 space-y-2">
          <p className="font-serif text-7xl md:text-8xl font-light text-black/90 leading-none">
            09
          </p>

          <p className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-black/70">
            Janeiro
          </p>

          <p className="font-serif text-4xl md:text-5xl font-light text-black/80">
            2027
          </p>
        </div>

        {/* TEXTO */}
        <p className="max-w-3xl mx-auto font-serif text-2xl md:text-3xl text-black/70 leading-relaxed pt-8">
          Sua presença tornará este momento ainda mais especial para nós.
        </p>

      </div>
    </section>
  )
}
