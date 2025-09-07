"use client"

import { Button } from "../components/ui/button"
import { MessageCircle, Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const whatsappNumber = "5581998993138" 
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os sistemas da ALL STAR'S SISTEMAS."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-white/10">
      <div className="container flex h-16 items-center px-4 relative">
        <div className="flex items-center">
          <Image
            src="/logo-allstars.png"
            alt="ALL STAR'S SISTEMAS"
            width={160}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
          <a
            href="#inicio"
            className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Início
          </a>
          <a
            href="#recursos"
            className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Recursos
          </a>
          <a
            href="#planos"
            className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Planos
          </a>
          <a
            href="#contato"
            className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <Button
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </Button>

          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden glass-effect border-t border-white/10">
          <nav className="container py-4 flex flex-col space-y-4">
            <a
              href="#inicio"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#recursos"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a
              href="#planos"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </a>
            <a
              href="#contato"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
