import { TrendingUp, Settings, GraduationCap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Diagnóstico de Maturidade",
      description: "Avaliação científica baseada no framework FIRPA com métricas objetivas e roadmap personalizado."
    },
    {
      icon: Settings,
      title: "Implementação BRIDGE",
      description: "Aplicação da metodologia integrada RPA+DMN+AHP com foco em ergonomia cognitiva."
    },
    {
      icon: GraduationCap,
      title: "Capacitação Especializada",
      description: "Treinamento baseado em pesquisa acadêmica para equipes técnicas e gestores públicos."
    },
    {
      icon: Shield,
      title: "Auditoria de Processos",
      description: "Validação científica de implementações com foco em conformidade e melhoria contínua."
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4" data-testid="services-title">
            Serviços Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Implementação científica de automação com foco em resultados mensuráveis 
            e sustentabilidade organizacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-lg border border-border hover:shadow-xl transition-shadow"
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-3 font-serif" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
