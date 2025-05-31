import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android com excelente UX.",
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Lojas virtuais completas com integração de pagamentos e gestão.",
    },
    {
      icon: Database,
      title: "Sistemas Personalizados",
      description: "Soluções sob medida para automatizar processos do seu negócio.",
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Implementação de medidas de segurança e proteção de dados.",
    },
    {
      icon: Zap,
      title: "Consultoria Tech",
      description: "Orientação estratégica para transformação digital da sua empresa.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Nossos <span className="text-purple-400">Serviços</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Oferecemos soluções completas em tecnologia para impulsionar seu negócio
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
