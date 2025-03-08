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
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "PHP", icon: SiPhp },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Symfony", icon: SiSymfony },
  { name: "MongoDB", icon: SiMongodb },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "SASS", icon: SiSass },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
]

export default function SkillsDetail() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square"
        >
          <skill.icon className="text-4xl mb-2 text-primary" />
          <span className="text-sm text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  )
}

