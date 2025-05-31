"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer:
        "O tempo varia conforme a complexidade do projeto. Sites simples podem levar de 2-4 semanas, enquanto sistemas mais complexos podem levar de 2-6 meses. Sempre fornecemos um cronograma detalhado após a análise inicial.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Sim! Oferecemos suporte técnico por 3 meses após a entrega, incluindo correções de bugs e pequenos ajustes. Também temos planos de manutenção contínua para atualizações e melhorias.",
    },
    {
      question: "Qual é o processo de desenvolvimento?",
      answer:
        "Nosso processo inclui: 1) Análise e planejamento, 2) Design e prototipação, 3) Desenvolvimento, 4) Testes e validação, 5) Entrega e treinamento. Mantemos comunicação constante durante todo o processo.",
    },
    {
      question: "Vocês trabalham com quais tecnologias?",
      answer:
        "Trabalhamos com tecnologias modernas como React, Next.js, Node.js, Python, React Native, Flutter, e diversas outras. Escolhemos a melhor stack para cada projeto específico.",
    },
    {
      question: "Como é feito o orçamento?",
      answer:
        "O orçamento é personalizado baseado no escopo do projeto. Após uma reunião inicial para entender suas necessidades, fornecemos uma proposta detalhada com valores e prazos.",
    },
    {
      question: "Vocês fazem projetos para outros países?",
      answer:
        "Sim! Atendemos clientes no Brasil e exterior. Temos experiência com projetos internacionais e nos adaptamos a diferentes fusos horários e culturas de trabalho.",
    },
  ]

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-purple-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-purple-400" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
