import { TrendingUp, Settings, GraduationCap, Shield, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Diagnóstico de Maturidade",
      description: "Avaliação FIRPA com métricas e roadmap."
    },
    {
      icon: Settings,
      title: "Implementação BRIDGE",
      description: "Metodologia RPA+DMN+AHP com ergonomia cognitiva."
    },
    {
      icon: GraduationCap,
      title: "Capacitação Especializada",
      description: "Treinamento para equipes e gestores públicos."
    },
    {
      icon: Shield,
      title: "Auditoria de Processos",
      description: "Validação com foco em conformidade."
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
            Soluções científicas com resultados mensuráveis
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
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => {
              const element = document.getElementById('ahp-tool');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-secondary text-white hover:bg-secondary/90 px-8 py-4"
            data-testid="button-ahp-tool"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Acessar Ferramenta AHP para Priorização de Processos
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Identifique processos prioritários para automação
          </p>
        </div>
      </div>
    </section>
  );
}
