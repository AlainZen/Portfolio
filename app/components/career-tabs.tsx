"use client"

import { useState } from "react"
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Palette, 
  ShoppingBag, 
  Star,
  Calendar,
  MapPin
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

type Event = {
  date: string
  title: string
  company: string
  description: string
  icon: JSX.Element
  type: 'education' | 'work' | 'project' | 'experience'
  location?: string
}

const proTimeline: Event[] = [
  {
    date: "2023 - Aujourd'hui",
    title: "Bachelor Coding & Digital Innovation",
    company: "IIM Digital School",
    description: "Développement web fullstack avec React, Node.js, et projets IoT/DevOps.",
    icon: <GraduationCap className="w-5 h-5" />,
    type: 'education',
    location: "Paris"
  },
  {
    date: "Septembre 2025 - Alternance (à venir)",
    title: "Développeur Fullstack / DevOps",
    company: "Entreprise en cours de sélection",
    description: "Missions prévues : développement d'apps React/.NET ou Python, CI/CD, sécurité.",
    icon: <Briefcase className="w-5 h-5" />,
    type: 'work',
    location: "Paris"
  },
  {
    date: "Avril 2025 - Juin 2025",
    title: "Stage Assistant Chef de Projet",
    company: "StrateGeek",
    description: "Création de sites web pour clients avec WordPress, gestion de base de données, reporting et suivi analytique.",
    icon: <Code className="w-5 h-5" />,
    type: 'work',
  },
]

const persoTimeline: Event[] = [
  {
    date: "2021 - Présent",
    title: "Développeur passionné",
    company: "Projets persos sur GitHub",
    description: "Création de jeux, applis web, bots, systèmes IoT et plus encore.",
    icon: <Code className="w-5 h-5" />,
    type: 'project',
  },
  {
    date: "Stage - 1 mois",
    title: "Designer Graphique",
    company: "Agence créative",
    description: "Création de supports visuels, identités de marque et designs web.",
    icon: <Palette className="w-5 h-5" />,
    type: 'experience',
  },
  {
    date: "6 mois",
    title: "Vendeur",
    company: "News Mod",
    description: "Conseil client, gestion des stocks et développement de compétences commerciales.",
    icon: <ShoppingBag className="w-5 h-5" />,
    type: 'experience',
  },
  {
    date: "4 mois",
    title: "Cast Member",
    company: "Disneyland Paris",
    description: "Accueil des visiteurs, animation et création d'expériences magiques.",
    icon: <Star className="w-5 h-5" />,
    type: 'experience',
    location: "Marne-la-Vallée"
  },
]

const getTypeColor = (type: Event['type']) => {
  switch (type) {
    case 'education':
      return 'from-blue-500 to-indigo-600'
    case 'work':
      return 'from-green-500 to-emerald-600'
    case 'project':
      return 'from-purple-500 to-pink-600'
    case 'experience':
      return 'from-orange-500 to-red-600'
    default:
      return 'from-gray-500 to-gray-600'
  }
}

const getTypeBorderColor = (type: Event['type']) => {
  switch (type) {
    case 'education':
      return 'border-l-blue-500'
    case 'work':
      return 'border-l-green-500'
    case 'project':
      return 'border-l-purple-500'
    case 'experience':
      return 'border-l-orange-500'
    default:
      return 'border-l-gray-500'
  }
}

export default function CareerTabs() {
  const [activeTab, setActiveTab] = useState<"pro" | "perso">("pro")
  const timeline = activeTab === "pro" ? proTimeline : persoTimeline

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Onglets stylés */}
      <div className="relative flex p-1 bg-muted/50 rounded-xl mb-8 backdrop-blur-sm border border-border/50">
        <motion.div
          className="absolute top-1 bottom-1 bg-background rounded-lg shadow-lg border border-border/50"
          layoutId="activeTab"
          initial={false}
          animate={{
            left: activeTab === "pro" ? "4px" : "50%",
            width: "calc(50% - 4px)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        <button
          className={cn(
            "relative z-10 flex-1 px-6 py-3 font-medium text-sm rounded-lg transition-colors duration-200 flex items-center justify-center gap-2",
            activeTab === "pro"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setActiveTab("pro")}
        >
          <Briefcase className="w-4 h-4" />
          Parcours Pro
        </button>
        
        <button
          className={cn(
            "relative z-10 flex-1 px-6 py-3 font-medium text-sm rounded-lg transition-colors duration-200 flex items-center justify-center gap-2",
            activeTab === "perso"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setActiveTab("perso")}
        >
          <GraduationCap className="w-4 h-4" />
          Parcours Perso
        </button>
      </div>

      {/* Timeline */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >

          
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex gap-6 group"
              >
                {/* Icône avec animation */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-xl border-2 flex items-center justify-center text-white relative overflow-hidden bg-background shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-90",
                      getTypeColor(event.type)
                    )} />
                    <div className="relative z-10">
                      {event.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <motion.div
                    className={cn(
                      "bg-card/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-y border-r border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-l-4",
                      getTypeBorderColor(event.type)
                    )}
                    whileHover={{ y: -2 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{event.date}</span>
                        {event.location && (
                          <>
                            <span className="text-border">•</span>
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Titre */}
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    {/* Entreprise */}
                    <p className="text-sm font-medium text-primary mb-3">
                      {event.company}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}