"use client"

import { motion } from "framer-motion"
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSymfony,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiFigma,
  SiAdobexd,
  SiSketch,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Langages de programmation",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "PHP", icon: SiPhp, color: "#8892be" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#1572b6" },
      { name: "SASS", icon: SiSass, color: "#cd6799" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Symfony", icon: SiSymfony, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    ],
  },
  {
    category: "Outils / Design",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
      { name: "Adobe XD", icon: SiAdobexd, color: "#ff61f6" },
      { name: "Sketch", icon: SiSketch, color: "#f7b500" },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.category}
          className="p-6 rounded-xl shadow-md bg-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-3">
            {tech.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted shadow hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon
                  className="w-5 h-5"
                  style={{ color: skill.color }}
                />
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
