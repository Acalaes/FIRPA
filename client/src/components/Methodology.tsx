import { ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Methodology() {
  const components = [
    {
      title: "RPA - Automação Robótica",
      description: "Automação de tarefas repetitivas baseadas em regras.",
      color: "bg-primary text-primary-foreground"
    },
    {
      title: "DMN - Decision Model Notation",
      description: "Regras de decisão transparentes e auditáveis.",
      color: "bg-secondary text-white"
    },
    {
      title: "AHP - Analytic Hierarchy Process",
      description: "Priorização multicritério de processos.",
      color: "bg-accent text-accent-foreground"
    },
    {
      title: "Ergonomia Cognitiva",
      description: "Redução da carga mental e melhoria do bem-estar laboral.",
      color: "bg-muted text-muted-foreground"
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-muted" data-testid="metodologia-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4" data-testid="metodologia-title">
            Metodologia BRIDGE
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Integração de RPA, DMN, AHP e Ergonomia Cognitiva
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="shadow-lg border border-border" data-testid="methodology-diagram">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6 font-serif">Arquitetura Conceitual</h3>
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
                    <div className="space-y-4">
                      {components.map((component, index) => (
                        <div key={index}>
                          <div className={`${component.color} p-3 rounded-lg text-center font-medium`}>
                            {component.title}
                          </div>
                          {index < components.length - 1 && (
                            <div className="flex justify-center py-2">
                              <ArrowDown className="text-primary h-5 w-5" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {components.map((component, index) => (
              <Card 
                key={index} 
                className="border border-border"
                data-testid={`methodology-card-${index}`}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 font-serif">
                    {component.title}
                  </h4>
                  <p className="text-muted-foreground">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
