"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Harry Potter TCG",
    description: "Site pour collectionner et échanger des cartes Harry Potter, développé en première année.",
    link: "https://github.com/AlainZen/Project_HarryPotterTCG",
    tags: ["JavaScript", "Prisma", "NodeJS"],
    category: "Vitrine"
  },
  {
    title: "Concept Site Animalier",
    description: "Concept pour un site animalier créé en utilisant SASS pour un design élégant et moderne.",
    link: "https://github.com/AlainZen/Projet_SCSS",
    tags: ["SASS", "JavaScript"],
    category: "SASS"
  },
  {
    title: "Led Connectée Harry Potter TCG",
    description: "Projet IoT Harry Potter avec LED interactive selon la maison choisie.",
    link: "https://github.com/AlainZen/IOT_HarryPotter",
    tags: ["Python", "NodeJS"],
    category: "Python"
  },
  {
    title: "To-Do list Typescript",
    description: "TodoList en TypeScript avec authentification et stockage en localStorage.",
    link: "https://github.com/AlainZen/To-Do-List-TypeScript",
    tags: ["TypeScript"],
    category: "JavaScript"
  },
  {
    title: "Web Security PHP",
    description: "Clone simplifié de Twitter avec sécurité et admin intégré.",
    link: "https://github.com/AlainZen/Projet_WebSecure",
    tags: ["PHP"],
    category: "PHP"
  },
  {
    title: "PokéApi",
    description: "Mini Pokédex connectant à la PokéAPI pour récupérer les infos Pokémon.",
    link: "https://github.com/AlainZen/Pokemon_API",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript"
  },
  {
    title: "Pokémon Combat",
    description: "Simulation de combats Pokémon en PHP orienté objet avec gestion dynamique.",
    link: "https://github.com/AlainZen/Poke_PHPOOP",
    tags: ["PHP", "JavaScript"],
    category: "PHP"
  },
  {
    title: "Portfolio",
    description: "Portfolio en TypeScript avec NextJS, React et TailwindCSS.",
    link: "https://github.com/AlainZen/Portfolio.git",
    tags: ["TypeScript", "NextJS", "React", "TailwindCSS"],
    category: "Vitrine"
  },
  {
    title: "Site Creativ Development",
    description: "Concept de site créatif, exprimer des émotions et des idées à travers le design.",
    link: "https://github.com/AlainZen/EmotionAnimation",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript"
  },
  {
    title: "Pong Raseberry",
    description: "Jeu de Pong en Python avec Raspberry Pi et écran LCD.",
    link: "https://github.com/AlainZen/Pong_Pico.git",
    tags: ["Python"],
    category: "Python"
  },
  {
    title: "ERP-Symfony",
    description: "Application de gestion d'entreprise développée avec Symfony.",
    link: "https://github.com/AlainZen/ERP-Symfony.git",
    tags: ["Symfony", "PHP", "MySQL", "twig", "TailwindCSS"],
    category: "Vitrine"
  },
  {
    title: "ERP-Okayo Test",
    description: "Application de gestion de factures développée avec Java Spring Boot.",
    link: "https://github.com/AlainZen/Okayo_ERP_Test.git",
    tags: ["Java", "Spring Boot", "Maven", "Swagger", "H2"],
    category: "Java"
  },
  {
    title: "Zenify",
    description: "Copie de Spotify permettant de créer des playlists, mettre des likes, partager des playlists, poster des sons et les écouter.",
    link: "https://github.com/AlainZen/Zenify",
    tags: ["Laravel", "Vue"],
    category: "Vitrine"
  },
  {
    title: "Kendrick Lamar Site",
    description: "Site vitrine pour Kendrick Lamar très stylé.",
    link: "https://github.com/AlainZen/Echoes_KendrickLamar",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Vitrine"
  },
]

const allTags = ["Vitrine", "Tous", "Laravel", "Vue", "SASS", "Python", "React", "JavaScript", "PHP", "Java", "Symfony"]

export default function ProjectList() {
  const [selectedTag, setSelectedTag] = useState<string>("Vitrine")

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
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
