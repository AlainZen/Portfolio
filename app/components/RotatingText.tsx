"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const words = [
  "Développeur ambitieux",
  "Codeur passionné",
  "Créateur de solutions",
  "Explorateur de technologies",
  "Contributeur Open Source",
]

export default function RotatingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000) // Changement toutes les 3 secondes
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-10 overflow-hidden text-2xl md:text-3xl lg:text-4xl font-semibold text-primary relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
