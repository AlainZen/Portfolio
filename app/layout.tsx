import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: "Sliman Alain - Full Stack Developer",
    template: "%s | Sliman Alain",
  },
  description:
    "Portfolio de Sliman Alain, développeur Full Stack spécialisé en React, Node.js et technologies web modernes.",
  keywords: [
    "Full Stack", 
    "Developer", 
    "React", 
    "Node.js", 
    "JavaScript", 
    "TypeScript",
    "Portfolio",
    "Web Development"
  ],
  authors: [{ name: "Sliman Alain" }],
  creator: "Sliman Alain",
  metadataBase: new URL("https://sliman.dev"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sliman.dev",
    title: "Sliman Alain - Full Stack Developer",
    description: "Portfolio de Sliman Alain, développeur Full Stack spécialisé en React, Node.js et technologies web modernes.",
    siteName: "Sliman Alain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sliman Alain - Full Stack Developer",
    description: "Portfolio de Sliman Alain, développeur Full Stack spécialisé en React, Node.js et technologies web modernes.",
    creator: "@alain_sliman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="fr" 
      className={cn(inter.variable)} 
      suppressHydrationWarning
    >
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}