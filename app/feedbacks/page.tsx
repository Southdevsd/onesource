import Header from "@/components/header"
import Footer from "@/components/footer"
import TestimonialsSection from "@/components/testimonials-section"
import FeedbackForm from "@/components/feedback-form"

export default function FeedbacksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              <span className="text-purple-400">Feedbacks</span> dos Clientes
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Veja o que nossos clientes dizem sobre nossos serviços e deixe seu feedback.
            </p>
          </div>
        </section>
        <TestimonialsSection />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  )
}
