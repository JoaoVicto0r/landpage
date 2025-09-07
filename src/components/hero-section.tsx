"use client"

import { Button } from "../components/ui/button"
import { MessageCircle, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"

export function HeroSection() {
  const whatsappNumber = "5581998993138" 
  const whatsappMessage =
    "Olá! Quero conhecer o sistema de gestão da ALL STAR'S SISTEMAS e como pode ajudar meu negócio."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <section id="inicio" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

      {/* Partículas animadas flutuantes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div
          className="absolute top-32 right-20 w-1 h-1 bg-secondary/40 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-64 left-1/4 w-1 h-1 bg-secondary/30 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-32 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-ping"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-48 right-1/4 w-1 h-1 bg-secondary/35 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Formas geométricas animadas */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/15 to-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-secondary/15 to-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>

      {/* Grid pattern animado */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Elementos tech flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-24 left-1/4 w-8 h-8 border border-primary/20 rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-32 right-1/4 w-6 h-6 border border-secondary/25 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-4 h-4 bg-primary/10 transform rotate-45 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-16 w-10 h-1 bg-gradient-to-r from-primary/20 to-transparent animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-7xl text-center px-4">
          <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-foreground text-base font-medium">
            <Zap className="h-5 w-5 text-primary" />
            Sistema Líder em Gestão Empresarial
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-balance sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-8">
            <span className="text-gradient">TRANSFORME</span> A FORMA
            <br />
            COMO VOCÊ <span className="text-gradient">ADMINISTRA</span>
            <br />
            SEU NEGÓCIO!
          </h1>

          <p className="mt-10 text-2xl leading-relaxed text-muted-foreground text-pretty max-w-5xl mx-auto">
            Simplifique sua gestão e <strong className="text-foreground">aumente seus lucros</strong> com nosso sistema
            completo de PDV e gestão comercial. Controle total do seu negócio em uma única plataforma inteligente.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 text-xl px-12 py-8 rounded-xl"
            >
              <MessageCircle className="h-7 w-7" />
              Comece Agora - WhatsApp
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("recursos")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-3 text-xl px-12 py-8 rounded-xl border-2 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              Conhecer Recursos
              <ArrowRight className="h-7 w-7" />
            </Button>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="glass-effect rounded-2xl p-10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-3">500+</div>
              <div className="text-muted-foreground font-medium text-lg">Empresas Atendidas</div>
            </div>

            <div className="glass-effect rounded-2xl p-10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-3">99.9%</div>
              <div className="text-muted-foreground font-medium text-lg">Uptime Garantido</div>
            </div>

            <div className="glass-effect rounded-2xl p-10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 mx-auto">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-3">24/7</div>
              <div className="text-muted-foreground font-medium text-lg">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
