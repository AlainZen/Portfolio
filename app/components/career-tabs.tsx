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
    date: "Septembre 2025 - Aujourd'hui",
    title: "Webmaster Intranet (Alternance)",
    company: "DGFIP",
    description: "Développement, intégration et mise en production de fonctionnalités sur l'intranet sous Drupal : modules personnalisés, intégration de thèmes, configuration du CMS et des droits utilisateurs. Optimisation des performances et de la sécurité, audit de code, analyse et résolution d'anomalies.",
    icon: <Briefcase className="w-5 h-5" />,
    type: 'work',
    location: "Paris"
  },
  {
    date: "Mars 2025 - Juillet 2025",
    title: "Développeur Back-end",
    company: "BRED Banque Populaire",
    description: "Développement d'API backend pour des services internes, gestion des bases de données relationnelles et suivi des performances via outils d'analyse.",
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

const getTypeAccent = (type: Event['type']) => {
  switch (type) {
    case 'education':
      return { text: 'text-sky-400', bg: 'bg-sky-500/10', bar: 'bg-sky-500' }
    case 'work':
      return { text: 'text-teal-400', bg: 'bg-teal-500/10', bar: 'bg-teal-500' }
    case 'project':
      return { text: 'text-violet-400', bg: 'bg-violet-500/10', bar: 'bg-violet-500' }
    case 'experience':
      return { text: 'text-amber-400', bg: 'bg-amber-500/10', bar: 'bg-amber-500' }
    default:
      return { text: 'text-muted-foreground', bg: 'bg-muted', bar: 'bg-muted-foreground' }
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

          
          <div className="relative space-y-6 sm:space-y-8">
            {/* Ligne verticale continue */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]" />

            {timeline.map((event, index) => {
              const accent = getTypeAccent(event.type)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex gap-4 sm:gap-6 group"
                >
                  {/* Point de la timeline */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background ring-4 ring-background transition-transform duration-300 group-hover:scale-105">
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full",
                          accent.bg
                        )}
                      />
                      <div className={cn("relative", accent.text)}>
                        {event.icon}
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 min-w-0 pb-1">
                    <motion.div
                      className="relative overflow-hidden rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 hover:border-border hover:bg-card/70"
                      whileHover={{ y: -2 }}
                    >
                      {/* Rideau d'accent qui découle de l'icône au survol */}
                      <span
                        className={cn(
                          "absolute left-0 top-0 h-full w-1 origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100",
                          accent.bar
                        )}
                      />

                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="font-medium">{event.date}</span>
                        {event.location && (
                          <>
                            <span className="text-border">•</span>
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{event.location}</span>
                          </>
                        )}
                      </div>

                      {/* Titre */}
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                        {event.title}
                      </h3>

                      {/* Entreprise */}
                      <p className={cn("text-sm font-medium mb-2 sm:mb-3", accent.text)}>
                        {event.company}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}