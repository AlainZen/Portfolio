import { Card } from "@/components/ui/card"
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
import { FaJava, FaCode } from "react-icons/fa"

const technologies = [
  {
    category: "Langages de programmation",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "SASS", icon: SiSass },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Symfony", icon: SiSymfony },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Outils",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: FaCode },
      { name: "Postman", icon: FaCode },
      { name: "GitHub", icon: FaCode },
      { name: "Vercel", icon: FaCode },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Web Design", icon: FaCode },
      { name: "Mobile Design", icon: FaCode },
      { name: "UI/UX", icon: FaCode },
      { name: "Wireframing", icon: FaCode },
      { name: "Prototyping", icon: FaCode },
      { name: "Design System", icon: FaCode },
      { name: "Figma", icon: SiFigma },
      { name: "Adobe XD", icon: SiAdobexd },
      { name: "Sketch", icon: SiSketch },
    ],
  },
  {
    category: "Soft-skills",
    skills: [
      { name: "Design thinking", icon: FaCode },
      { name: "Gestion de projet", icon: FaCode },
      { name: "Agile", icon: FaCode },
      { name: "Communication", icon: FaCode },
      { name: "Travail d'équipe", icon: FaCode },
      { name: "Résolution de problèmes", icon: FaCode },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                <skill.icon className="mr-1 h-4 w-4" />
                {skill.name}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

