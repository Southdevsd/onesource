import Link from "next/link"
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                <span className="text-purple-400">one</span>source
              </span>
            </div>
            <p className="text-gray-400">
              Transformando ideias em soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="block text-gray-400 hover:text-white transition-colors">
                Sobre Nós
              </Link>
              <Link href="/duvidas" className="block text-gray-400 hover:text-white transition-colors">
                Dúvidas
              </Link>
              <Link href="/feedbacks" className="block text-gray-400 hover:text-white transition-colors">
                Feedbacks
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Desenvolvimento Web</p>
              <p className="text-gray-400">Apps Mobile</p>
              <p className="text-gray-400">E-commerce</p>
              <p className="text-gray-400">Sistemas Personalizados</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">contato@onesource.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 OneSource. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
