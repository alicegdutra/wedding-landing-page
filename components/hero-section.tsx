export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/casalcapa.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl lg:text-6xl font-light tracking-wider text-balance">ALICE & GABRIEL</h1>
          <div className="w-24 h-px bg-primary-foreground/40 mx-auto" />
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase">"Sobretudo, revesti-vos do amor, que une a todos na perfeição. Colossenses 3:14."</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
