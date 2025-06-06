"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import TechStack from "./components/tech-stack"
import AnimateInView from "./components/animate-in-view"
import RotatingText from "./components/RotatingText"
import CareerTabs from "./components/career-tabs"
import ProjectList from "./components/project-list"
import { motion } from "framer-motion"

const AnimatedText = ({ text }: { text: string }) => {
  const lines = text.split(". ")
  return (
    <div className="relative">
      {lines.map((line, index) => (
        <motion.p
          key={index}
          className="relative overflow-hidden mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.5, duration: 0.5 }}
        >
          {line}.
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ delay: index * 0.5, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.p>
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 md:px-6">
        {/* Header + Social */}
        <AnimateInView>
          <section id="about" className="py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sliman Alain
                </h1>
                <RotatingText />
                <AnimateInView delay={0.2}>
                  <p className="max-w-xl text-lg text-muted-foreground">
                    Je transforme des idées en solutions innovantes. Toujours à l'affût des dernières technologies pour créer des expériences web exceptionnelles.
                  </p>
                </AnimateInView>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/AlainZen" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/alain-sliman-b81b8230b/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="#contact" scroll={false}>
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Contact</span>
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </AnimateInView>

        {/* Timeline */}
        <AnimateInView delay={0.1}>
          <section id="timeline" className="py-12 md:py-24 lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 text-gray-100">
              Mon parcours
            </h2>
          <CareerTabs />
          </section>
        </AnimateInView>

        {/* Projets */}
        <AnimateInView delay={0.2}>
          <section id="projects" className="py-12 md:py-24 lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-12 text-center">
              Projets
            </h2>
            <ProjectList />
          </section>
        </AnimateInView>

        {/* Stack */}
        <AnimateInView delay={0.4}>
          <section className="py-12 md:py-24 lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </section>
        </AnimateInView>

        {/* Contact */}
        <AnimateInView delay={0.6}>
          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-12 text-center">
                Me contacter
              </h2>
              <ContactForm />
            </div>
          </section>
        </AnimateInView>
      </main>
    </div>
  )
}
