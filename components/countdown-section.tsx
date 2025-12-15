"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })

  useEffect(() => {
    // 09 de janeiro de 2027 às 16:00 (horário local)
    const weddingDate = new Date(2027, 0, 9, 16, 0, 0).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance <= 0) {
        clearInterval(timer)
        setTimeLeft({
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        })
        return
      }

      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutos: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        segundos: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 md:py-32 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-secondary-foreground text-balance">
          CONTAGEM REGRESSIVA
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="text-center">
              <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
                <p className="text-5xl md:text-6xl lg:text-7xl font-light text-primary">
                  {value.toString().padStart(2, "0")}
                </p>
                <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground mt-4 font-light">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
