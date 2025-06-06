"use client"

import { useState } from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

type Event = {
  date: string
  title: string
  company: string
  description: string
  icon: JSX.Element
}

const proTimeline: Event[] = [
  {
    date: "2023 - Aujourd’hui",
    title: "Bachelor Coding & Digital Innovation",
    company: "IIM Digital School",
    description: "Développement web fullstack avec React, Node.js, et projets IoT/DevOps.",
    icon: <Briefcase className="w-4 h-4 mr-2" />,
  },
  {
    date: "Avril 2025 - Alternance (à venir)",
    title: "Développeur Fullstack / DevOps",
    company: "Entreprise en cours de sélection",
    description: "Missions prévues : développement d'apps React/.NET ou Python, CI/CD, sécurité.",
    icon: <Briefcase className="w-4 h-4 mr-2" />,
  },
]

const persoTimeline: Event[] = [
  {
    date: "2021 - Présent",
    title: "Développeur passionné",
    company: "Projets persos sur GitHub",
    description: "Création de jeux, applis web, bots, systèmes IoT et plus encore.",
    icon: <GraduationCap className="w-4 h-4 mr-2" />,
  },
  {
    date: "2024",
    title: "Création de GameList & site vitrine",
    company: "Freelance",
    description: "WordPress avancé, design responsive, gestion des utilisateurs et intégration API.",
    icon: <GraduationCap className="w-4 h-4 mr-2" />,
  },
]

export default function CareerTabs() {
  const [activeTab, setActiveTab] = useState<"pro" | "perso">("pro")
  const timeline = activeTab === "pro" ? proTimeline : persoTimeline

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Onglets */}
      <div className="flex border-b border-gray-700 mb-6">
        <button
          className={cn(
            "px-4 py-2 font-medium text-sm",
            activeTab === "pro"
              ? "border-b-2 border-blue-500 text-white"
              : "text-gray-400 hover:text-white"
          )}
          onClick={() => setActiveTab("pro")}
        >
          Parcours pro
        </button>
        <button
          className={cn(
            "px-4 py-2 font-medium text-sm",
            activeTab === "perso"
              ? "border-b-2 border-blue-500 text-white"
              : "text-gray-400 hover:text-white"
          )}
          onClick={() => setActiveTab("perso")}
        >
          Parcours perso
        </button>
      </div>

      {/* Contenu du bloc */}
      <ol className="relative border-l border-gray-700">
        {timeline.map((event, index) => (
          <li key={index} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm text-gray-400">{event.date}</time>
            <h3 className="text-lg font-semibold text-white flex items-center">
              {event.icon}
              {event.title}
            </h3>
            <p className="text-sm text-gray-400">{event.company}</p>
            <p className="text-sm text-gray-500">{event.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
