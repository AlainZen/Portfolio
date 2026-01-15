"use client"

import React from "react"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  {
    href: "https://github.com/AlainZen",
    icon: Github,
    label: "GitHub",
    color: "hover:text-gray-900"
  },
  {
    href: "https://www.linkedin.com/in/alain-sliman-b81b8230b/",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-600"
  },
  {
    href: "https://x.com/alain_sliman",
    icon: Twitter,
    label: "Twitter",
    color: "hover:text-blue-400"
  },
  {
    href: "mailto:contact@slimanalain.com",
    icon: Mail,
    label: "Email",
    color: "hover:text-red-500"
  }
]

const quickLinks = [
  { href: "#about", label: "À propos" },
  { href: "#timeline", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" }
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Section À propos */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Sliman Alain
            </motion.h3>
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Développeur Full-Stack passionné par l'innovation et les nouvelles technologies. 
              Toujours prêt à relever de nouveaux défis !
            </motion.p>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <motion.h4 
              className="text-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Navigation
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {quickLinks.map((link, index) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <motion.h4 
              className="text-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Me suivre
            </motion.h4>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-accent text-muted-foreground hover:text-foreground transition-all duration-300 ${social.color}`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Séparateur */}
        <motion.div 
          className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span>© {currentYear} Sliman Alain. Tous droits réservés.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Fait avec</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>et beaucoup de café ☕</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}