import { Calendar } from "lucide-react"

export function DateSection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/10">
          <Calendar className="w-8 h-8 text-primary" />
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-black text-balance">
            Save the Date!
          </h2>

          <div className="pt-4">
            <p className="text-7xl md:text-5xl font-light text-primary tracking-tight">
              09
            </p>
            <p className="text-3xl md:text-5xl font-light text-primary tracking-widest uppercase mt-4">
              Janeiro
            </p>
            <p className="text-5xl md:text-5xl font-light text-primary">
              2027
            </p>
          </div>
        </div>

        <p className="text-black font-light text-xl md:text-2xl">
          Sua presença tornará este momento ainda mais especial para nós.
        </p>
      </div>
    </section>
  )
}
