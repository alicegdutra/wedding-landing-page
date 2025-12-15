interface PhotoGalleryProps {
  position: "first" | "second"
}

export function PhotoGallery({ position }: PhotoGalleryProps) {
  const images =
    position === "first"
      ? ["/casal2.jpg", "/casal3.jpg"]
      : ["/casal4.jpg", "/casal5.jpg"]

  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={image}
                alt={`Foto do casal ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
