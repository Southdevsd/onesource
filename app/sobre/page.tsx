import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Target, Award, Rocket } from "lucide-react"

export default function SobrePage() {
  const stats = [
    { number: "50+", label: "Projetos Concluídos" },
    { number: "30+", label: "Clientes Satisfeitos" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "24/7", label: "Suporte Disponível" },
  ]

  const team = [
    {
      name: "João Silva",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Maria Santos",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Pedro Costa",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ana Oliveira",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Sobre <span className="text-purple-400">Nós</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Somos uma equipe apaixonada por tecnologia, dedicada a transformar ideias em soluções digitais inovadoras
              que impulsionam o sucesso dos nossos clientes.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <Target className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
              <p className="text-gray-400">
                Democratizar o acesso à tecnologia de ponta, oferecendo soluções personalizadas que atendam às
                necessidades específicas de cada cliente.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <Rocket className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
              <p className="text-gray-400">
                Ser reconhecida como a principal referência em desenvolvimento de software, inovação tecnológica e
                transformação digital.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <Award className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Nossos Valores</h3>
              <p className="text-gray-400">
                Excelência, inovação, transparência e compromisso com a satisfação do cliente são os pilares que guiam
                todas as nossas ações.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-400">Conheça os profissionais que fazem a diferença</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
