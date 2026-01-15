"use client"

import React, { MouseEvent } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Import des composantes
import ContactForm from "./components/contact-form"
import TechStack from "./components/tech-stack"
import AnimateInView from "./components/animate-in-view"
import RotatingText from "./components/RotatingText"
import CareerTabs from "./components/career-tabs"
import ProjectList from "./components/project-list"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"

// Types
interface SocialButtonProps {
  href?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  icon: React.ElementType
  label: string
}

// Components
const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(" ")
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }
  
  const childVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  return (
    <motion.p 
      className="max-w-2xl text-muted-foreground text-lg sm:text-xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={childVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, onClick, icon: Icon, label }) => {
  const motionProps = {
    whileHover: { y: -3 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }

  const buttonContent = (
    <Button
      variant="outline"
      size="icon"
      className="relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14"
      onClick={onClick}
    >
      <span className="sr-only">{label}</span>
      <Icon className="h-5 w-5 sm:h-6 sm:w-6 z-10 relative group-hover:text-white transition-colors duration-300" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Button>
  )

  if (href) {
    return (
      <motion.a {...motionProps} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.div {...motionProps}>
      {buttonContent}
    </motion.div>
  )
}

// Components principaux
export default function Page() {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Hero */}
        <section id="about" className="flex items-center justify-center min-h-screen pt-24 pb-12">
          <div className="flex flex-col items-center justify-center space-y-8 text-center w-full max-w-4xl">
            <AnimateInView className="space-y-6">
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Sliman Alain
              </motion.h1>
              
              <div className="h-12 sm:h-14 md:h-16">
                <RotatingText />
              </div>
              
              <AnimatedText text="Je transforme des idées en solutions innovantes. Toujours à l'affût des dernières technologies pour créer des expériences web exceptionnelles." />
            </AnimateInView>
            
            <motion.div 
              className="flex gap-4 flex-wrap justify-center"
              variants={{ 
                visible: { 
                  transition: { 
                    staggerChildren: 0.1, 
                    delayChildren: 0.6 
                  } 
                } 
              }}
              initial="hidden"
              animate="visible"
            >
              <SocialButton 
                href="https://github.com/AlainZen" 
                icon={Github} 
                label="GitHub" 
              />
              <SocialButton 
                href="https://www.linkedin.com/in/alain-sliman-b81b8230b/" 
                icon={Linkedin} 
                label="LinkedIn" 
              />
              <SocialButton 
                href="https://x.com/alain_sliman" 
                icon={Twitter} 
                label="Twitter" 
              />
              <SocialButton 
                onClick={handleContactClick} 
                icon={Mail} 
                label="Contact" 
              />
            </motion.div>
          </div>
        </section>

        {/* Section Parcours */}
        <section id="timeline" className="py-16 sm:py-24 lg:py-32">
          <AnimateInView>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">
              Mon parcours
            </h2>
            <CareerTabs />
          </AnimateInView>
        </section>

        {/* Section Projets */}
        <section id="projects" className="py-16 sm:py-24 lg:py-32">
          <AnimateInView>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">
              Projets
            </h2>
            <ProjectList />
          </AnimateInView>
        </section>

        {/* Section Tech Stack */}
        <section id="tech-stack" className="py-16 sm:py-24 lg:py-32">
          <AnimateInView>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">
              Tech Stack
            </h2>
            <TechStack />
          </AnimateInView>
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-2xl">
            <AnimateInView>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">
                Me contacter
              </h2>
              <ContactForm />
            </AnimateInView>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  )
}