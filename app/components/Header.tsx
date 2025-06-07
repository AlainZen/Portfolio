"use client"

import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { href: "#about", label: "À propos" },
  { href: "#timeline", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#contact", label: "Contact" }
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button 
            onClick={() => scrollToSection("#about")}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            SA
          </motion.button>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
                whileHover="hover"
                initial="rest"
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  variants={{ 
                    rest: { width: 0 }, 
                    hover: { width: "100%" } 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Menu Mobile */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Ouvrir le menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}