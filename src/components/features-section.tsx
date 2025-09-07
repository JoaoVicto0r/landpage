import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { ShoppingCart, BarChart3, Users, Package, CreditCard, FileText, Smartphone, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "PDV Completo",
    description:
      "Sistema de ponto de venda moderno e intuitivo para agilizar suas vendas e melhorar a experiência do cliente.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Avançados",
    description: "Dashboards e relatórios detalhados para acompanhar o desempenho do seu negócio em tempo real.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Cadastro completo de clientes com histórico de compras, preferências e programa de fidelidade.",
  },
  {
    icon: Package,
    title: "Controle de Estoque",
    description: "Gestão inteligente de estoque com alertas de baixa quantidade e controle de entrada e saída.",
  },
  {
    icon: CreditCard,
    title: "Múltiplas Formas de Pagamento",
    description: "Aceite dinheiro, cartão, PIX e outras formas de pagamento com integração completa.",
  },
  {
    icon: FileText,
    title: "Emissão de NFCe/NFe",
    description: "Emissão automática de notas fiscais eletrônicas em conformidade com a legislação.",
  },
  {
    icon: Smartphone,
    title: "Acesso Mobile",
    description: "Gerencie seu negócio de qualquer lugar com nosso app mobile completo.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Seus dados protegidos com criptografia avançada e backups automáticos.",
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Equipe de suporte especializada disponível 24 horas por dia, 7 dias por semana.",
  },
]

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Recursos que <span className="text-primary">Revolucionam</span> Sua Gestão
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Descubra como nosso sistema pode otimizar cada aspecto do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
