export interface Project {
  id: number
  title: string
  slug: string
  description: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    slug: "e-commerce-platform",
    description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
  },
  {
    id: 2,
    title: "Task Management App",
    slug: "task-management-app",
    description: "A real-time task management application with team collaboration features.",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

