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
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-12 overflow-hidden text-xl md:text-2xl lg:text-3xl font-semibold text-center flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ 
            opacity: 0, 
            y: 30,
            rotateX: -90,
            filter: "blur(4px)"
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            filter: "blur(0px)"
          }}
          exit={{ 
            opacity: 0, 
            y: -30,
            rotateX: 90,
            filter: "blur(4px)"
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
            filter: { duration: 0.3 }
          }}
        >
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
            {words[index]}
          </span>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicateur de progression */}
      <motion.div 
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        key={index}
        transition={{ duration: 3, ease: "linear" }}
      />
    </div>
  )
}