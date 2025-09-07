import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, ChevronRight, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Criterion {
  id: string;
  name: string;
  description: string;
  weight?: number;
}

interface Process {
  id: string;
  name: string;
  description: string;
  scores?: { [criterionId: string]: number };
  finalScore?: number;
  priority?: string;
}

interface Comparison {
  criterion1: string;
  criterion2: string;
  value: number;
}

export default function AHPTool() {
  const [step, setStep] = useState(1);
  const [comparisons, setComparisons] = useState<Comparison[]>([]);
  const [processScores, setProcessScores] = useState<{ [key: string]: { [key: string]: number } }>({});

  const criteria: Criterion[] = [
    {
      id: "volume",
      name: "Volume de Execução",
      description: "Frequência de execução"
    },
    {
      id: "tempo",
      name: "Tempo de Processamento",
      description: "Duração média do processo"
    },
    {
      id: "complexidade",
      name: "Complexidade Técnica",
      description: "Padronização e regras claras"
    },
    {
      id: "erro",
      name: "Taxa de Erro",
      description: "Frequência de erros e retrabalho"
    },
    {
      id: "impacto",
      name: "Impacto Organizacional",
      description: "Importância estratégica"
    }
  ];

  const processes: Process[] = [
    {
      id: "matricula",
      name: "Processamento de Matrículas",
      description: "Validação e registro de matrículas de alunos"
    },
    {
      id: "selecao",
      name: "Seleção de Pós-Graduação",
      description: "Avaliação de candidatos e documentação"
    },
    {
      id: "relatorios",
      name: "Geração de Relatórios",
      description: "Compilação de dados e geração de relatórios gerenciais"
    },
    {
      id: "certificados",
      name: "Emissão de Certificados",
      description: "Geração e validação de certificados acadêmicos"
    }
  ];

  const getComparisonLabel = (value: number): string => {
    const labels = [
      "Extremamente menos importante",
      "Muito menos importante",
      "Menos importante",
      "Moderadamente menos importante",
      "Levemente menos importante",
      "Igual importância",
      "Levemente mais importante",
      "Moderadamente mais importante",
      "Mais importante",
      "Muito mais importante",
      "Extremamente mais importante"
    ];
    return labels[value];
  };

  const handleComparisonChange = (criterion1: string, criterion2: string, value: number) => {
    setComparisons(prev => {
      const filtered = prev.filter(c => !(c.criterion1 === criterion1 && c.criterion2 === criterion2));
      return [...filtered, { criterion1, criterion2, value }];
    });
  };

  const handleProcessScore = (processId: string, criterionId: string, value: number) => {
    setProcessScores(prev => ({
      ...prev,
      [processId]: {
        ...prev[processId],
        [criterionId]: value
      }
    }));
  };

  const calculateAHP = () => {
    // Simplified AHP calculation for demonstration
    const n = criteria.length;
    const matrix = Array(n).fill(null).map(() => Array(n).fill(1));
    
    // Build comparison matrix
    comparisons.forEach(comp => {
      const i = criteria.findIndex(c => c.id === comp.criterion1);
      const j = criteria.findIndex(c => c.id === comp.criterion2);
      const ahpValue = comp.value - 5; // Convert to AHP scale (-5 to 5)
      const ratio = ahpValue === 0 ? 1 : (ahpValue > 0 ? ahpValue + 1 : 1 / (Math.abs(ahpValue) + 1));
      matrix[i][j] = ratio;
      matrix[j][i] = 1 / ratio;
    });

    // Calculate weights (simplified eigenvector method)
    const weights = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      let rowSum = 0;
      for (let j = 0; j < n; j++) {
        rowSum += matrix[i][j];
      }
      weights[i] = rowSum;
    }
    
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    const normalizedWeights = weights.map(w => w / totalWeight);

    // Apply weights to criteria
    criteria.forEach((criterion, index) => {
      criterion.weight = Math.round(normalizedWeights[index] * 100);
    });

    // Calculate final scores for processes
    processes.forEach(process => {
      const scores = processScores[process.id] || {};
      let finalScore = 0;
      
      criteria.forEach(criterion => {
        const score = scores[criterion.id] || 50;
        finalScore += (score / 100) * (criterion.weight || 0);
      });
      
      process.finalScore = Math.round(finalScore);
      
      if (finalScore >= 75) process.priority = "Alta";
      else if (finalScore >= 50) process.priority = "Média";
      else process.priority = "Baixa";
    });

    setStep(4);
  };

  return (
    <section id="ahp-tool" className="py-20 bg-background" data-testid="ahp-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4" data-testid="ahp-title">
            Ferramenta AHP para Priorização de Processos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Use AHP para priorizar processos para automação
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex items-center ${s < 4 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Criteria Comparison */}
          {step === 1 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Passo 1: Comparação de Critérios</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-5 w-5 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Compare pares de critérios para definir pesos</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  Compare a importância relativa dos critérios
                </p>
                
                {criteria.slice(0, -1).map((criterion1, i) => 
                  criteria.slice(i + 1).map((criterion2) => {
                    const comparison = comparisons.find(
                      c => c.criterion1 === criterion1.id && c.criterion2 === criterion2.id
                    );
                    const value = comparison?.value || 5;
                    
                    return (
                      <div key={`${criterion1.id}-${criterion2.id}`} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{criterion1.name}</span>
                          <span className="text-muted-foreground">vs</span>
                          <span className="font-medium">{criterion2.name}</span>
                        </div>
                        <Slider
                          value={[value]}
                          onValueChange={(v) => handleComparisonChange(criterion1.id, criterion2.id, v[0])}
                          min={0}
                          max={10}
                          step={1}
                          className="w-full"
                          data-testid={`comparison-${criterion1.id}-${criterion2.id}`}
                        />
                        <div className="text-center text-xs text-muted-foreground">
                          {getComparisonLabel(value)}
                        </div>
                      </div>
                    );
                  })
                )}
                
                <Button 
                  onClick={() => setStep(2)} 
                  className="w-full"
                  data-testid="next-step-1"
                >
                  Próximo: Avaliar Processos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Process Evaluation */}
          {step === 2 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Passo 2: Avaliação de Processos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  Avalie cada processo em relação aos critérios definidos (0-100)
                </p>
                
                {processes.map((process) => (
                  <div key={process.id} className="border rounded-lg p-4 space-y-4">
                    <div>
                      <h4 className="font-semibold">{process.name}</h4>
                      <p className="text-sm text-muted-foreground">{process.description}</p>
                    </div>
                    
                    {criteria.map((criterion) => {
                      const score = processScores[process.id]?.[criterion.id] || 50;
                      
                      return (
                        <div key={criterion.id} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{criterion.name}</span>
                            <span className="font-medium text-primary">{score}</span>
                          </div>
                          <Slider
                            value={[score]}
                            onValueChange={(v) => handleProcessScore(process.id, criterion.id, v[0])}
                            min={0}
                            max={100}
                            step={5}
                            className="w-full"
                            data-testid={`process-${process.id}-${criterion.id}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Voltar
                  </Button>
                  <Button 
                    onClick={() => setStep(3)}
                    className="flex-1"
                    data-testid="next-step-2"
                  >
                    Próximo: Revisar
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Passo 3: Revisão e Cálculo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Resumo da Avaliação</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Revise as configurações antes de calcular a priorização final
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Critérios Comparados</h5>
                      <div className="text-sm text-muted-foreground">
                        {comparisons.length} comparações realizadas
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Processos Avaliados</h5>
                      <div className="text-sm text-muted-foreground">
                        {Object.keys(processScores).length} de {processes.length} processos
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(2)}
                    className="flex-1"
                  >
                    Voltar
                  </Button>
                  <Button 
                    onClick={calculateAHP}
                    className="flex-1 bg-primary"
                    data-testid="calculate-ahp"
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Calcular Priorização
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Results */}
          {step === 4 && (
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Resultado da Priorização AHP</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Criteria Weights */}
                    <div>
                      <h4 className="font-semibold mb-3">Pesos dos Critérios</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {criteria.map((criterion) => (
                          <div key={criterion.id} className="bg-muted p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">{criterion.name}</span>
                              <Badge variant="secondary">{criterion.weight}%</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process Ranking */}
                    <div>
                      <h4 className="font-semibold mb-3">Ranking de Processos para Automação</h4>
                      <div className="space-y-3">
                        {processes
                          .sort((a, b) => (b.finalScore || 0) - (a.finalScore || 0))
                          .map((process, index) => (
                            <div 
                              key={process.id} 
                              className="flex items-center justify-between p-4 border rounded-lg"
                              data-testid={`result-${process.id}`}
                            >
                              <div className="flex items-center gap-4">
                                <div className="text-2xl font-bold text-primary">
                                  {index + 1}º
                                </div>
                                <div>
                                  <div className="font-semibold">{process.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {process.description}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="text-right">
                                  <div className="text-xl font-bold">{process.finalScore}%</div>
                                  <Badge 
                                    className={
                                      process.priority === "Alta" 
                                        ? "bg-green-100 text-green-800" 
                                        : process.priority === "Média"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                    }
                                  >
                                    Prioridade {process.priority}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>Recomendação:</strong> Inicie pelos processos com maior pontuação.
                      </p>
                    </div>

                    <Button 
                      onClick={() => {
                        setStep(1);
                        setComparisons([]);
                        setProcessScores({});
                      }}
                      variant="outline"
                      className="w-full"
                      data-testid="restart-ahp"
                    >
                      Nova Análise
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}