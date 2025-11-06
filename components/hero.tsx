"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.6

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: Math.random() > 0.5 ? "#FFD300" : "#FFFFFF",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(15, 15, 15, 1)")
      gradient.addColorStop(0.5, "rgba(40, 40, 40, 0.9)")
      gradient.addColorStop(1, "rgba(15, 15, 15, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1

      // Draw central glow circle
      const glowGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        150,
      )
      glowGradient.addColorStop(0, "rgba(255, 211, 0, 0.2)")
      glowGradient.addColorStop(1, "rgba(255, 211, 0, 0)")
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.6
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-20 text-center px-4">
        <div className="mb-6 animate-pulse">
          <span className="text-sm md:text-base font-mono text-primary tracking-widest">SINCE 2020 </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 neon-glow floating font-mono">
          WENSTEIN STORE
        </h1>

        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

        <p className="text-lg md:text-2xl font-mono mb-8 text-primary leading-7 tracking-normal font-bold shadow-none">Rekber | Post | Top Up</p>

        <div className="inline-block px-6 py-2 border-2 border-primary rounded text-primary text-sm font-mono tracking-widest hover:shadow-[0_0_20px_rgba(255,211,0,0.8)] transition-all">
          Tempat jual beli akun mobile legends aman dan terpercaya!            
        </div>
      </div>
    </div>
  )
}
