import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/projects"

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: "Projet non trouvé" }

  return {
    title: `${project.title} | Sliman Alain`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) notFound()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p>{project.description}</p>
      {/* Ajouter plus de détails sur le projet ici */}
    </div>
  )
}

