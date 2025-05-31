import { Star, Lightbulb, HeadphonesIcon } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Star,
      title: "Qualidade",
      description:
        "Priorizamos a qualidade em cada etapa, garantindo um produto final confiável, durável e com alto padrão de excelência.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description:
        "Estamos sempre atentos às tendências tecnológicas, criando soluções modernas e eficientes que antecipam as necessidades do mercado.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte",
      description:
        "Oferecemos suporte dedicado, rápido e personalizado, garantindo que você tenha a ajuda necessária em todos os momentos.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>

              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
