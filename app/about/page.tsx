import type { Metadata } from "next"
import Timeline from "../components/timeline"

export const metadata: Metadata = {
  title: "À propos | Sliman Alain",
  description: "Découvrez mon parcours professionnel en tant que développeur Full Stack.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-100">À propos de moi</h1>
      <section className="mb-12">
        <p className="text-lg mb-6 text-gray-300">
          Étudiant enthousiaste en développement Full Stack, je suis passionné par la création de solutions innovantes
          et l'apprentissage continu des nouvelles technologies. Mon parcours académique et mes projets personnels m'ont
          permis de développer une solide base technique et une grande adaptabilité. Je suis toujours à la recherche de
          nouveaux défis pour élargir mes compétences et contribuer à des projets stimulants.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Mon parcours</h2>
        <Timeline />
      </section>
    </div>
  )
}

