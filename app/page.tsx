"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Hero = dynamic(() => import("@/components/hero"), { ssr: false })
const LinkCard = dynamic(() => import("@/components/link-card"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background overflow-hidden">
      <Suspense
        fallback={
          <div className="w-full h-screen bg-background flex items-center justify-center">
            <div className="text-primary text-2xl neon-glow">Loading experience...</div>
          </div>
        }
      >
        <Hero />
      </Suspense>

      <div className="relative z-10 px-4 py-20">
        <LinkCard />
      </div>

      <Footer />
    </main>
  )
}
