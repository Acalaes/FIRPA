import { Shield, Users, Lock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FrameworkOverview() {
  const dimensions = [
    {
      icon: Shield,
      title: "Governança de TI",
      features: [
        "Transparência decisória",
        "Auditabilidade de processos",
        "Conformidade regulatória",
        "Gestão de riscos"
      ]
    },
    {
      icon: Users,
      title: "Cultura Organizacional",
      features: [
        "Aceitação tecnológica",
        "Capacitação contínua",
        "Gestão de mudanças",
        "Bem-estar laboral"
      ]
    },
    {
      icon: Lock,
      title: "Segurança Cibernética",
      features: [
        "Proteção de dados",
        "Controles de acesso",
        "Monitoramento contínuo",
        "Recuperação de falhas"
      ]
    }
  ];

  return (
    <section id="framework" className="py-20 bg-background" data-testid="framework-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4" data-testid="framework-title">
            Framework Tridimensional FIRPA
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Metodologia científica desenvolvida com base em revisão sistemática da literatura 
            usando protocolo PRISMA-CIMO para implementação eficaz de RPA no setor público
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dimensions.map((dimension, index) => {
            const IconComponent = dimension.icon;
            return (
              <Card 
                key={index} 
                className="shadow-lg border border-border hover:shadow-xl transition-shadow"
                data-testid={`framework-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-2xl text-primary h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold font-serif" data-testid={`framework-title-${index}`}>
                      {dimension.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {dimension.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
