import type { Metadata } from "next"
import InteractiveCV from "../components/interactive-cv"

export const metadata: Metadata = {
  title: "CV Interactif | Sliman Alain",
  description: "CV interactif de Sliman Alain, développeur Full Stack",
}

export default function CVPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">CV Interactif</h1>
      <InteractiveCV />
    </div>
  )
}

