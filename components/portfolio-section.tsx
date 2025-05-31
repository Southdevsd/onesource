import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Fashion",
      description: "Loja virtual completa com sistema de pagamentos e gestão de estoque.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "App Delivery",
      description: "Aplicativo de delivery com rastreamento em tempo real e pagamentos.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Firebase", "Stripe"],
    },
    {
      title: "Sistema ERP",
      description: "Sistema de gestão empresarial com módulos financeiro e RH.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "Plataforma Educacional",
      description: "LMS completo com videoaulas, exercícios e certificados.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Nosso <span className="text-purple-400">Portfólio</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Conheça alguns dos projetos que desenvolvemos com excelência
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
