"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Harry Potter TCG",
    description: "Site pour collectionner et échanger des cartes Harry Potter, développé en première année.",
    image: "P_HPTCG.png",
    link: "https://github.com/AlainZen/Project_HarryPotterTCG",
    tags: ["JavaScript", "Prisma", "NodeJS"],
    category: "Vitrine"
  },
  {
    title: "Concept Site Animalier",
    description: "Concept pour un site animalier créé en utilisant SASS pour un design élégant et moderne.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/Projet_SCSS",
    tags: ["SASS", "JavaScript"],
    category: "SASS"
  },
  {
    title: "Led Connectée Harry Potter TCG",
    description: "Projet IoT Harry Potter avec LED interactive selon la maison choisie.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/IOT_HarryPotter",
    tags: ["Python", "NodeJS"],
    category: "Python"
  },
  {
    title: "To-Do list Typescript",
    description: "TodoList en TypeScript avec authentification et stockage en localStorage.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/To-Do-List-TypeScript",
    tags: ["Typescript"],
    category: "JavaScript"
  },
  {
    title: "Web Security PHP",
    description: "Clone simplifié de Twitter avec sécurité et admin intégré.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/Projet_WebSecure",
    tags: ["PHP"],
    category: "PHP"
  },
  {
    title: "PokéApi",
    description: "Mini Pokédex connectant à la PokéAPI pour récupérer les infos Pokémon.",
    image: "P_pokeAPI.png",
    link: "https://github.com/AlainZen/Pokemon_API",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript"
  },
  {
    title: "Pokémon Combat",
    description: "Simulation de combats Pokémon en PHP orienté objet avec gestion dynamique.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/Poke_PHPOOP",
    tags: ["PHP", "JavaScript"],
    category: "PHP"
  },
  {
    title: "Portfolio",
    description: "Portfolio en TypeScript avec NextJS, React et TailwindCSS.",
    image: "P_Portfolio.png",
    link: "https://github.com/AlainZen/Portfolio.git",
    tags: ["TypeScript", "NextJS", "React", "TailwindCSS"],
    category: "Vitrine"
  },
  {
    title: "Site Creativ Development",
    description: "Concept de site créatif, exprimer des émotions et des idées à travers le design.",
    image: "P_crea.png",
    link: "https://github.com/AlainZen/EmotionAnimation",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript"
  },
  {
    title: "Pong Raseberry",
    description: "Jeu de Pong en Python avec Raspberry Pi et écran LCD.",
    image: "P_Pong.png",
    link: "https://github.com/AlainZen/Pong_Pico.git",
    tags: ["Python"],
    category: "Python"
  },
  {
    title: "ERP-Symfony",
    description: "Application de gestion d'entreprise développée avec Symfony.",
    image: "P_ERP.png",
    link: "https://github.com/AlainZen/ERP-Symfony.git",
    tags: ["Symfony", "PHP", "MySQL", "twig", "TailwindCSS"],
    category: "Vitrine"
  },
  {
    title: "ERP-Okayo Test",
    description: "Application de gestion de factures développée avec Java Spring Boot.",
    image: "Placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/Okayo_ERP_Test.git",
    tags: ["Java", "Spring Boot", "Maven", "Swagger", "H2"],
    category: "Java"
  },
]

const allTags = ["Vitrine", "Tous", "SASS", "Python", "React", "JavaScript", "PHP"]

export default function ProjectList() {
  const [selectedTag, setSelectedTag] = useState<string>("Vitrine")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects =
    selectedTag === "Tous"
      ? projects
      : projects.filter(
          (project) =>
            project.category === selectedTag || project.tags.includes(selectedTag)
        )

  return (
    <div>
      {/* Filtres */}
      <div className="mb-6 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Liste des projets */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Dialog key={index} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
            <DialogTrigger asChild>
              <div onClick={() => setSelectedProject(project)}>
                <ProjectCard {...project} />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              {selectedProject && (
                <>
                  <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="mb-3 w-full rounded-xl object-cover"
                  />
                  <p className="text-sm text-zinc-700 mb-4">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, i) => (
                      <Badge key={i} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <Github className="w-4 h-4" /> Code source
                  </a>
                </>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}