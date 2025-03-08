import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AnimatedButton from "@/components/animated-button"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sliman Alain - Full Stack Developer",
    template: "%s | Sliman Alain",
  },
  description:
    "Portfolio de Sliman Alain, développeur Full Stack spécialisé en React, Node.js et technologies web modernes.",
  keywords: ["Full Stack", "Developer", "React", "Node.js", "JavaScript", "TypeScript"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn("min-h-screen font-sans antialiased bg-gradient-dark bg-grid-pattern bg-fixed", inter.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
            <div className="container flex h-14 items-center">
              <AnimatedButton href="/">
                <span className="font-bold">Sliman.dev</span>
              </AnimatedButton>
              <nav className="ml-auto flex items-center space-x-4">
                <AnimatedButton href="/about">À propos</AnimatedButton>
                <AnimatedButton href="/projects">Projets</AnimatedButton>
                <AnimatedButton href="/#contact">Contact</AnimatedButton>
                <AnimatedButton href="/cv">CV Interactif</AnimatedButton>
              </nav>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">{children}</main>
          <footer className="border-t border-gray-700 bg-gray-900/95">
            <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
              <p className="text-xs text-gray-400">© 2024 Sliman.dev. Tous droits réservés.</p>
              <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                  Mentions légales
                </a>
                <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                  Politique de confidentialité
                </a>
              </nav>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

