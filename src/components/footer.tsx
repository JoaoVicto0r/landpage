"use client"

import { MessageCircle, Mail, Phone } from "lucide-react"

export function Footer() {
  const whatsappNumber = "5581998993138" 
  const whatsappMessage = "Olá! Gostaria de mais informações sobre a ALL STAR'S SISTEMAS."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold">ALL STAR'S</div>
              <div className="text-lg font-semibold">SISTEMAS</div>
            </div>
            <p className="text-sm opacity-90 text-pretty">
              Transformando a gestão empresarial com tecnologia de ponta e suporte especializado.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:opacity-75 transition-opacity">
                  Início
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:opacity-75 transition-opacity">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:opacity-75 transition-opacity">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:opacity-75 transition-opacity">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>PDV Completo</li>
              <li>Gestão de Estoque</li>
              <li>Relatórios Avançados</li>
              <li>Emissão de NFCe/NFe</li>
              <li>Suporte 24/7</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-sm hover:opacity-75 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </button>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                (11) 9999-9999
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                contato@allstarssistemas.com.br
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">© 2024 ALL STAR'S SISTEMAS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
