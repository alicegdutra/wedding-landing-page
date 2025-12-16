import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-primary fill-primary" />
        </div>

        <p className="text-2xl md:text-3xl font-serif text-balance">ALICE & GABRIEL</p>

        <p className="text-2xl text-muted-foreground font-serif">09 de Janeiro de 2027</p>
      </div>
    </footer>
  )
}
