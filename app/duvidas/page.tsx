import Header from "@/components/header"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"

export default function DuvidasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Dúvidas <span className="text-purple-400">Frequentes</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços e processos.
            </p>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
