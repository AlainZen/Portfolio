"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, PenToolIcon as Tool, HeartHandshake } from "lucide-react"

const experiences = [
  {
    title: "CHEF DE PROJET - BOURSE AU PROJET",
    company: "Mairie de Bois-Colombes",
    period: "Janvier 2025 - Actuel",
    description: [
      "Gestion et coordination d'une équipe pluridisciplinaire pour garantir la bonne exécution des livrables.",
      "Pilotage d'un projet transversal avec une dimension technologique, en lien avec la transition écologique de la commune.",
      "Organisation des ateliers et des réunions, assurant une communication fluide entre les acteurs techniques et les parties prenantes.",
      "Collaboration étroite avec la mairie de Bois-Colombes pour aligner le projet avec les objectifs municipaux.",
    ],
  },
  {
    title: "DÉVELOPPEUR BACK-END - MUSEÉ DU JOUET POISSY",
    company: "Musée du Jouet Poissy",
    period: "Octobre 2024 - Décembre 2024",
    description: [
      "Conception et développement de solutions back-end pour un site de personnalisation de voitures.",
      "Mise en place de l'infrastructure back-end permettant la gestion des options de personnalisation et des images.",
      "Collaboration avec l'équipe front-end pour assurer une intégration harmonieuse des fonctionnalités.",
    ],
  },
  {
    title: "LEAD DÉVELOPPEUR - PROJET TRANSVERSAL IIM",
    company: "IIM",
    period: "Février 2024 - Mars 2024",
    description: [
      "Lead développement pour un projet des JO de Paris 2024, avec l'objectif de créer un site esthétique et fonctionnel.",
      "Implémentation et gestion d'une API pour la diffusion d'articles en temps réel.",
      "Conception et intégration des fonctionnalités back-end pour assurer une navigation fluide et réactive.",
    ],
  },
]

const education = [
  {
    degree: "Bachelor en coding et digital innovation",
    school: "IIM Digital School",
    period: "2023 - Présent",
    description: "Spécialisation en développement web et technologies émergentes.",
  },
  {
    title: "Baccalauréat spécialité mathématique et sciences économiques et sociales",
    school: "Lycée Polyvalent Evariste Gallois",
    period: "2020 - 2022",
    description: "Formation générale avec un focus sur les mathématiques et l'économie.",
  },
]

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "PHP",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Symfony",
  "MongoDB",
  "HTML5",
  "CSS3",
  "SASS",
  "Git",
  "Web Design",
  "Mobile Design",
  "UI/UX",
  "Wireframing",
  "Prototyping",
  "Design System",
]

const softSkills = [
  "Leadership",
  "Gestion de projet",
  "Communication",
  "Travail d'équipe",
  "Résolution de problèmes",
  "Adaptabilité",
  "Créativité",
  "Pensée critique",
  "Gestion du temps",
  "Empathie",
  "Négociation",
  "Prise de décision",
]

export default function InteractiveCV() {
  const [activeTab, setActiveTab] = useState("experience")

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="experience">Expérience</TabsTrigger>
        <TabsTrigger value="education">Formation</TabsTrigger>
        <TabsTrigger value="skills">Compétences</TabsTrigger>
        <TabsTrigger value="softskills">Soft Skills</TabsTrigger>
      </TabsList>

      <TabsContent value="experience">
        <motion.div {...fadeInUp}>
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" />
                  {exp.title}
                </CardTitle>
                <CardDescription>
                  {exp.company} | {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </TabsContent>

      <TabsContent value="education">
        <motion.div {...fadeInUp}>
          {education.map((edu, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2" />
                  {edu.degree || edu.title}
                </CardTitle>
                <CardDescription>
                  {edu.school} | {edu.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </TabsContent>

      <TabsContent value="skills">
        <motion.div {...fadeInUp}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tool className="mr-2" />
                Compétences techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </TabsContent>

      <TabsContent value="softskills">
        <motion.div {...fadeInUp}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HeartHandshake className="mr-2" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}

