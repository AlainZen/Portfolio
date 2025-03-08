import type { Metadata } from "next"
import ProjectList from "../components/project-list"

export const metadata: Metadata = {
  title: "Projets | Sliman Alain",
  description: "Découvrez mes projets de développement web et applications innovantes.",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>
      <ProjectList />
    </div>
  )
}

