import { Sparkles, Zap, Cog } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="text-purple-400">OneSource</span>, a<br />
            solução pro
            <br />
            seu <span className="text-purple-400">projeto!</span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            Fazendo o seu projeto se tornar #1 por meio da tecnologia e inovação, nossa equipe experiente está pronta
            para impulsionar sua ideia e garantir seu sucesso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Começar Projeto
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative">
            {/* Central orb */}
            <div className="w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center relative">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>

              {/* Orbital rings */}
              <div
                className="absolute inset-0 border-2 border-dashed border-purple-400/30 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute inset-[-20px] border border-dashed border-purple-400/20 rounded-full animate-spin"
                style={{ animationDuration: "30s", animationDirection: "reverse" }}
              ></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center animate-bounce">
              <Sparkles className="w-4 h-4 text-white" />
            </div>

            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center animate-pulse">
              <Zap className="w-5 h-5 text-white" />
            </div>

            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-purple-400 rounded-full animate-ping"></div>

            {/* Gear elements */}
            <div
              className="absolute -bottom-12 right-8 w-12 h-12 text-purple-400/60 animate-spin"
              style={{ animationDuration: "15s" }}
            >
              <Cog className="w-full h-full" />
            </div>

            <div
              className="absolute -top-8 left-4 w-8 h-8 text-blue-400/60 animate-spin"
              style={{ animationDuration: "10s", animationDirection: "reverse" }}
            >
              <Cog className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
