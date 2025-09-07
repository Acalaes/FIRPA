import { Building, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudy() {
  const metrics = [
    { value: "83%", label: "Redução Esperada", detail: "6 meses → 30 dias" },
    { value: "85%", label: "Automação Prevista", detail: "Baixa complexidade" },
    { value: "R$ 2,4M", label: "Economia Projetada", detail: "Custos operacionais" },
    { value: "40%", label: "Melhoria Estimada", detail: "Ergonomia cognitiva" }
  ];

  const achievements = [
    "Expectativa: 40% menos tempo em matrículas",
    "Expectativa: 85% dos processos automatizados",
    "Expectativa: R$ 2,4 milhões de economia anual"
  ];

  const scientificBasis = [
    "Design Science Research: Metodologia de desenvolvimento validada",
    "Protocolo PRISMA-CIMO: Revisão sistemática da literatura",
    "Paradigma Cognitivista: Explicabilidade e auditabilidade",
    "Validação Empírica: Resultados mensuráveis e replicáveis"
  ];

  return (
    <section id="casos" className="py-20 bg-background" data-testid="casos-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4" data-testid="casos-title">
            Caso UDESC/ESAG - Resultados Esperados
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Projeção de implementação em processos seletivos de pós-graduação
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Nota:</strong> Resultados baseados em projeções científicas e análise comparativa com implementações similares.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Results metrics */}
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <Card 
                key={index} 
                className="shadow-lg text-center border border-border"
                data-testid={`metric-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2" data-testid={`metric-value-${index}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case study details */}
          <div className="space-y-6">
            <Card className="border border-border" data-testid="case-study-details">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 font-serif flex items-center">
                  <Building className="text-primary mr-2 h-5 w-5" />
                  Universidade do Estado de Santa Catarina
                </h4>
                <p className="text-muted-foreground mb-4">
                  Estudo de viabilidade para o Programa de Pós-Graduação em Administração (ESAG).
                </p>
                <div className="space-y-2 text-sm">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border" data-testid="scientific-basis">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 font-serif">Fundamentação Científica</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {scientificBasis.map((basis, index) => (
                    <div key={index}>• <strong>{basis.split(':')[0]}:</strong> {basis.split(':')[1]}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
