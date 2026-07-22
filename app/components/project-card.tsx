import { CardContent, CardFooter } from "@/components/ui/card"
import { Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import {
  FaReact, FaPython, FaPhp, FaSass, FaNodeJs,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava, FaSymfony, FaLaravel, FaVuejs
} from "react-icons/fa"
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma,
  SiMysql, SiSwagger
} from "react-icons/si"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  tags: string[]
  onClick?: () => void
}

const tagIcons: Record<string, JSX.Element> = {
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  React: <FaReact className="text-cyan-400" />,
  NextJS: <SiNextdotjs className="text-white" />,
  TailwindCSS: <SiTailwindcss className="text-teal-300" />,
  SASS: <FaSass className="text-pink-400" />,
  Python: <FaPython className="text-yellow-300" />,
  PHP: <FaPhp className="text-indigo-300" />,
  NodeJS: <FaNodeJs className="text-green-400" />,
  HTML: <FaHtml5 className="text-orange-400" />,
  CSS: <FaCss3Alt className="text-blue-300" />,
  Prisma: <SiPrisma className="text-violet-400" />,
  Git: <FaGitAlt className="text-orange-500" />,
  Java: <FaJava className="text-red-600" />,
  "Spring Boot": <FaJava className="text-green-400" />,
  Symfony: <FaSymfony className="text-gray-300" />,
  MySQL: <SiMysql className="text-blue-500" />,
  Swagger: <SiSwagger className="text-green-500" />,
  H2: <span className="text-sky-400 font-bold">H2</span>,
  twig: <span className="text-orange-300 font-bold">Twig</span>,
  Laravel: <FaLaravel className="text-red-500" />,
  Vue: <FaVuejs className="text-emerald-400" />,
}

const slugify = (title: string) =>
  title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export default function ProjectCard({
  title,
  description,
  link,
  tags,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-[#0b0b0d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_0_25px_-8px_rgba(20,184,166,0.35)]"
    >
      {/* Numéro décoratif en fond */}
      <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-mono text-[6rem] font-bold leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-teal-500/[0.06]">
        {"</>"}
      </span>

      {/* Barre façon terminal */}
      <div className="relative flex items-center gap-1.5 border-b border-neutral-800 bg-neutral-900/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 truncate font-mono text-xs text-neutral-500">
          ~/projects/{slugify(title)}
        </span>
      </div>

      <CardContent className="relative p-5">
        <h3 className="mb-2 font-mono text-lg font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-white ring-1 ring-neutral-700 transition-colors duration-200 group-hover:ring-teal-700/50"
            >
              {tagIcons[tag] ?? null}
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="relative p-4 pt-0">
        <Link
          href={link}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm text-cyan-400 transition-colors hover:text-teal-300 hover:underline"
        >
          <Github className="h-4 w-4" />
          Voir sur GitHub
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </CardFooter>
    </div>
  )
}
