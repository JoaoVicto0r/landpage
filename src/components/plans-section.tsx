"use client"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Check, MessageCircle } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "R$ 89",
    period: "/mês",
    description: "Ideal para pequenos negócios que estão começando",
    popular: false,
    features: [
      "PDV para 1 terminal",
      "Cadastro de até 1.000 produtos",
      "Relatórios básicos",
      "Suporte por email",
      "Backup diário",
      "Emissão de NFCe",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 149",
    period: "/mês",
    description: "Para empresas em crescimento que precisam de mais recursos",
    popular: true,
    features: [
      "PDV para até 3 terminais",
      "Produtos ilimitados",
      "Relatórios avançados",
      "Suporte prioritário",
      "Backup em tempo real",
      "Emissão de NFCe/NFe",
      "App mobile",
      "Gestão de clientes",
      "Controle de estoque",
    ],
  },
  {
    name: "Enterprise",
    price: "R$ 249",
    period: "/mês",
    description: "Solução completa para grandes empresas",
    popular: false,
    features: [
      "PDV ilimitado",
      "Produtos ilimitados",
      "Relatórios personalizados",
      "Suporte 24/7",
      "Backup redundante",
      "Todas as funcionalidades",
      "Integração com ERP",
      "Treinamento incluso",
      "Gerente de conta dedicado",
      "Customizações",
    ],
  },
]

export function PlansSection() {
  const whatsappNumber = "5581998993138" 

  const handlePlanClick = (planName: string, planPrice: string) => {
    const message = `Olá! Tenho interesse no plano ${planName} (${planPrice}/mês) da ALL STAR'S SISTEMAS. Gostaria de mais informações e uma demonstração.`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="planos" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Escolha o <span className="text-primary">Plano Ideal</span> para Seu Negócio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Planos flexíveis que crescem junto com sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Mais Popular</Badge>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-sm text-pretty">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full flex items-center gap-2"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handlePlanClick(plan.name, plan.price)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Todos os planos incluem 30 dias de teste grátis • Sem taxa de instalação • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  )
}
