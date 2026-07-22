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
  SiMysql,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiFigma,
  SiAdobexd,
  SiSketch,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

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
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#1572b6" },
      { name: "SASS", icon: SiSass, color: "#cd6799" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Symfony", icon: SiSymfony, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
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

const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
  <motion.div
    className="group relative"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.5, 
      delay: index * 0.1,
      type: "spring",
      stiffness: 200
    }}
    whileHover={{
      y: -4,
      transition: { type: "spring", stiffness: 400, damping: 20 }
    }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 group-hover:border-teal-500/50 group-hover:shadow-xl group-hover:shadow-teal-500/10">
      {/* Effet de lueur au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icône avec léger effet de flottement au hover */}
      <div
        className="relative z-10 flex items-center justify-center mb-4 transition-transform duration-300 ease-out group-hover:scale-110"
      >
        <skill.icon
          className="w-10 h-10 drop-shadow-lg transition-[filter] duration-300 group-hover:drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
          style={{ color: skill.color }}
        />
      </div>
      
      {/* Nom de la compétence */}
      <motion.h4
        className="relative z-10 text-center text-sm font-medium text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {skill.name}
      </motion.h4>
    </div>
  </motion.div>
)

const CategoryCard = ({ tech, categoryIndex }: { tech: any; categoryIndex: number }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
  >
    <div className="relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-5 sm:p-8 shadow-2xl">
      {/* Effet de lueur d'arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-500/5" />

      {/* Titre des categorie */}
      <motion.h3
        className="relative z-10 text-2xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: categoryIndex * 0.2 + 0.3 }}
      >
        {tech.category}
      </motion.h3>
      
      {/* Grilles de competence */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {tech.skills.map((skill, skillIndex) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={skillIndex} 
          />
        ))}
      </div>
      
      {/* Deco*/}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full" />
    </div>
  </motion.div>
)

export default function TechStack() {
  return (
    <div className="relative">
      {/* Floating effect pour les bacjgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        {technologies.map((tech, categoryIndex) => (
          <CategoryCard 
            key={tech.category} 
            tech={tech} 
            categoryIndex={categoryIndex} 
          />
        ))}
      </div>
      
      {/* Stat globales */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-8 px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-400">16+</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div className="w-px h-8 bg-slate-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">2+</div>
            <div className="text-sm text-slate-400">Années d'exp</div>
          </div>
          <div className="w-px h-8 bg-slate-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">15+</div>
            <div className="text-sm text-slate-400">Projets</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}