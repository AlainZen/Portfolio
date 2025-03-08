import { Briefcase, GraduationCap } from "lucide-react"

const timelineEvents = [
  {
    date: "2023 - Présent",
    title: "Bachelor en coding et digital innonvation",
    company: "IIM Digital School",
    description: "Développement d'applications web modernes utilisant React, Node.js et GraphQL.",
    icon: Briefcase,
  },
  {
    date: "2020 - 2022",
    title: "Baccalauréa spécialité mathématique et sciences economiques et sociales",
    company: "Lycée Polyvalent Evariste Gallois",
    description: "Spécialisation en développement web et intelligence artificielle.",
    icon: GraduationCap,
  },
  // Ajoutez d'autres événements ici
]

export default function Timeline() {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {timelineEvents.map((event, index) => (
        <li key={index} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{event.date}</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.company}</p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
        </li>
      ))}
    </ol>
  )
}

