"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimateInViewProps {
  children: ReactNode
  delay?: number
}

export default function AnimateInView({ children, delay = 0 }: AnimateInViewProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

