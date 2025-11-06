"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative w-full py-8 px-4 border-t border-border/30 backdrop-blur-sm mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm md:text-base font-mono text-muted">
            © 2025 Wenstein Store
          </p>

          <div className="flex items-center gap-2 text-xs text-primary/70">
            
            
            
          </div>

          
        </div>
      </motion.div>
    </footer>
  )
}
