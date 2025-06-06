import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  FaReact, FaPython, FaPhp, FaSass, FaNodeJs,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
} from "react-icons/fa"
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma
} from "react-icons/si"

interface ProjectCardProps {
  title: string
  description: string
  image: string
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
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  onClick,
}: ProjectCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer overflow-hidden bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-neutral-700 shadow-xl transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_20px_#14b8a6]"
    >
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-xl mb-2 text-white transition-colors duration-300">{title}</h3>
        <p className="text-sm text-zinc-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-white ring-1 ring-neutral-700"
            >
              {tagIcons[tag] || null}
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:underline"
        >
          <Github className="h-4 w-4" />
          Voir sur GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}
