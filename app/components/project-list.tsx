"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Harry Potter TCG",
    description: "Site pour collectionner et échanger des cartes Harry Potter, développé en première année.",
    image: "P_HPTCG.png",
    link: "https://github.com/AlainZen/Project_HarryPotterTCG",
    tags: ["JavaScript", "Prisma", "NodeJS"],
  },
  {
    title: "Concept Site Animalier",
    description: "Concept pour un site animalier créé en utilisant SASS pour un design élégant et moderne.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/Projet_SCSS",
    tags: ["SASS", "JavaScript"],
  },
  {
    title: "Led Connectée Harry Potter TCG",
    description: "Projet IoT Harry Potter avec LED interactive selon la maison choisie.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/IOT_HarryPotter",
    tags: ["Python", "NodeJS"],
  },
  {
    title: "To-Do list Typescript",
    description: "TodoList en TypeScript avec authentification et stockage en localStorage.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/To-Do-List-TypeScript",
    tags: ["Typescript"],
  },
  {
    title: "Web Security PHP",
    description: "Clone simplifié de Twitter avec sécurité et admin intégré.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/Projet_WebSecure",
    tags: ["PHP"],
  },
  {
    title: "PokéApi",
    description: "Mini Pokédex connectant à la PokéAPI pour récupérer les infos Pokémon.",
    image: "P_pokeAPI.png",
    link: "https://github.com/AlainZen/Pokemon_API",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Pokémon Combat",
    description: "Simulation de combats Pokémon en PHP orienté objet avec gestion dynamique.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/AlainZen/Poke_PHPOOP",
    tags: ["PHP", "JavaScript"],
  },
  {
    title: "Portfolio",
    description: "Portfolio en TypeScript avec NextJS, React et TailwindCSS.",
    image: "P_portfolio.png",
    link: "https://github.com/AlainZen/Portfolio.git",
    tags: ["TypeScript", "NextJS", "React", "TailwindCSS"],
  },
  {
    title: "Site Creativ Development",
    description: "Concept de site créatif, exprimer des émotions et des idées à travers le design.",
    image: "P_crea.png",
    link: "https://github.com/AlainZen/EmotionAnimation",
    tags: ["HTML", "CSS", "JavaScript"],
    },
]

const allTags = ["Tous", "SASS", "Python", "React", "JavaScript"]

export default function ProjectList() {
  const [selectedTag, setSelectedTag] = useState<string | null>("Tous")

  const filteredProjects =
    selectedTag === "Tous" ? projects : projects.filter((project) => project.tags.includes(selectedTag as string))

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Button key={tag} variant={selectedTag === tag ? "default" : "outline"} onClick={() => setSelectedTag(tag)}>
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

