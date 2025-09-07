"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { useToast } from "../hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const { toast } = useToast()

  const whatsappNumber = "5511999999999" // Substitua pelo número real

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Criar mensagem para WhatsApp com os dados do formulário
    const message = `Olá! Meu nome é ${formData.name} e gostaria de mais informações sobre a ALL STAR'S SISTEMAS.

📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}
🏢 Empresa: ${formData.company}

Mensagem: ${formData.message}`

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp com suas informações preenchidas.",
    })
  }

  const handleDirectWhatsApp = () => {
    const message = "Olá! Gostaria de tirar algumas dúvidas sobre os sistemas da ALL STAR'S SISTEMAS."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Pronto para <span className="text-primary">Transformar</span> Seu Negócio?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Deixe suas informações</CardTitle>
              <CardDescription>Preencha o formulário e entraremos em contato via WhatsApp</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre seu negócio e suas necessidades..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Fale Conosco Agora</CardTitle>
                <CardDescription>Nossa equipe está pronta para atender você</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button
                  onClick={handleDirectWhatsApp}
                  className="w-full flex items-center gap-2 text-lg py-6"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Conversar no WhatsApp
                </Button>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Telefone</div>
                      <div className="text-sm text-muted-foreground">(11) 9999-9999</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">contato@allstarssistemas.com.br</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Endereço</div>
                      <div className="text-sm text-muted-foreground">São Paulo, SP</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Demonstração Gratuita</h3>
                <p className="text-sm opacity-90 mb-4">
                  Agende uma demonstração personalizada e veja como nosso sistema pode revolucionar seu negócio.
                </p>
                <div className="text-sm font-medium">
                  ✓ Sem compromisso
                  <br />✓ Consultoria gratuita
                  <br />✓ Suporte especializado
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
