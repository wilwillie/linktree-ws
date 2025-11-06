"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Users, MessageCircle, Instagram, Gamepad2, ChevronDown } from "lucide-react"

interface Link {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  url?: string
  groups?: { name: string; url: string }[]
}

const links: Link[] = [
  {
    id: "1",
    title: "Admin Rekber",
    subtitle: "Layanan Rekber",
    icon: <Zap className="w-6 h-6" />,
    url: "https://wa.me/6285297976565?text=Mau+rekber+min",
  },
  {
    id: "2",
    title: "Admin Post",
    subtitle: "Posting & Promosi",
    icon: <MessageCircle className="w-6 h-6" />,
    url: "https://wa.me/6289630503634?text=Mau+post+min",
  },
  {
    id: "3",
    title: "Top Up",
    subtitle: "Top Up Game",
    icon: <Zap className="w-6 h-6" />,
    url: "https://wensteintopup.com",
  },
  {
    id: "4",
    title: "Saluran",
    subtitle: "Grup Informasi",
    icon: <Users className="w-6 h-6" />,
    url: "https://whatsapp.com/channel/0029Vb3UNRP3gvWejdAJpT0X",
  },
  {
    id: "5",
    title: "Grup Jual Beli",
    subtitle: "Patuhi peraturan grup!",
    icon: <Users className="w-6 h-6" />,
    groups: [
      { name: "Grup 1", url: "https://chat.whatsapp.com/Jntb2GBhrQHAMi5wzVOXKo" },
      { name: "Grup 2", url: "https://chat.whatsapp.com/GLmFqGqAeS7Djlrhx1SzZy" },
      { name: "Grup 3", url: "https://chat.whatsapp.com/F88jtkDXiBWHGJUIw8ATdP" },
      { name: "Grup 4", url: "https://chat.whatsapp.com/F2MMp9C6WiLCvXxgQ5PEhb" },
      { name: "Grup 5", url: "https://chat.whatsapp.com/JmVrNjNy1W11bXR6rT2LX0" },
      { name: "Grup 6", url: "https://chat.whatsapp.com/IpZ5vqxRilE3tZFpSbflSu" },
    ],
  },
  {
    id: "6",
    title: "Grup Mabar",
    subtitle: "Mabar by Wenstein",
    icon: <Gamepad2 className="w-6 h-6" />,
    url: "https://chat.whatsapp.com/F6ZzS8JvqAJE4AY5TgKJvh",
  },
  {
    id: "7",
    title: "Instagram",
    subtitle: "Selain @wensteinstore = FAKE!",
    icon: <Instagram className="w-6 h-6" />,
    url: "https://instagram.com/wensteinstore",
  },
]

export default function LinkCardComponent() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {links.map((link, index) => {
          const isExpanded = expandedId === link.id
          const hasGroups = link.groups && link.groups.length > 0
          const isInstagram = link.id === "7"

          return (
            <div key={link.id} className="flex flex-col">
              {hasGroups ? (
                <motion.button
                  onClick={() => setExpandedId(isExpanded ? null : link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative text-left w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="relative neon-border gaming-gradient rounded-lg p-6 overflow-hidden transition-all duration-300 hover:neon-border-hover cursor-pointer">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-primary group-hover:text-white transition-colors duration-300">
                          {link.icon}
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-primary opacity-30 group-hover:opacity-100 transition-opacity"
                        >
                          <ChevronDown className="w-6 h-6" />
                        </motion.div>
                      </div>

                      <h3 className="text-lg font-black font-mono text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {link.title}
                      </h3>

                      <p className="text-sm text-white/90 font-mono font-thin">{link.subtitle}</p>

                      <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Click to expand</span>
                        <span className="text-lg">↓</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ) : (
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div
                    className={`relative ${isInstagram ? "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500" : "neon-border gaming-gradient"} rounded-3xl p-6 overflow-hidden transition-all duration-300 ${isInstagram ? "hover:shadow-2xl hover:shadow-pink-500/50" : "hover:neon-border-hover"} cursor-pointer border-2 ${isInstagram ? "border-pink-500" : "border-primary"}`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 ${isInstagram ? "bg-white/20" : "bg-primary/10"} rounded-full blur-2xl animate-pulse`}
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`${isInstagram ? "text-white" : "text-primary"} group-hover:text-white transition-colors duration-300`}
                        >
                          {link.icon}
                        </div>
                        <div
                          className={`text-2xl ${isInstagram ? "text-white" : "text-primary"} opacity-30 group-hover:opacity-100 transition-opacity`}
                        >
                          {isInstagram ? "📸" : "⚡"}
                        </div>
                      </div>

                      <h3
                        className={`text-lg font-black font-mono ${isInstagram ? "text-white" : "text-foreground"} mb-1 group-hover:${isInstagram ? "text-white" : "text-primary"} transition-colors duration-300`}
                      >
                        {link.title}
                      </h3>

                      <p
                        className={`text-sm font-mono text-foreground font-thin ${isInstagram ? "text-white/95" : "text-white/90"}`}
                      >
                        {link.subtitle}
                      </p>

                      <div
                        className={`mt-4 flex items-center gap-2 text-xs font-mono ${isInstagram ? "text-white" : "text-primary"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        <span>Click to follow</span>
                        <span className="text-lg">→</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )}

              <AnimatePresence>
                {isExpanded && hasGroups && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-2 mt-2"
                  >
                    {link.groups.map((group) => (
                      <motion.a
                        key={group.name}
                        href={group.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="group/item relative"
                      >
                        <div className="relative neon-border gaming-gradient rounded-lg p-4 overflow-hidden transition-all duration-300 hover:neon-border-hover cursor-pointer border-primary/50">
                          <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                          </div>

                          <div className="relative z-10 flex items-center justify-between">
                            <span className="text-sm font-mono text-white/90 font-semibold group-hover/item:text-primary transition-colors duration-300">
                              {group.name}
                            </span>
                            <span className="text-primary opacity-0 group-hover/item:opacity-100 transition-opacity text-lg">
                              →
                            </span>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
