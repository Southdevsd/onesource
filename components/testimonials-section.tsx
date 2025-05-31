import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CEO, TechStart",
      content:
        "A OneSource transformou nossa ideia em uma plataforma incrível. O resultado superou todas as expectativas!",
      rating: 5,
    },
    {
      name: "Fernanda Lima",
      role: "Diretora, Fashion Store",
      content: "Profissionais excepcionais! Entregaram nosso e-commerce no prazo e com qualidade impecável.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      role: "Fundador, EduTech",
      content: "Suporte fantástico e soluções inovadoras. Recomendo a OneSource para qualquer projeto digital.",
      rating: 5,
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          O que nossos <span className="text-purple-400">clientes</span> dizem
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">Depoimentos reais de quem confia no nosso trabalho</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Quote className="w-8 h-8 text-purple-400 mb-4" />

              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
