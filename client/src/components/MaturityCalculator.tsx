import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface MaturityDimension {
  id: string;
  label: string;
  weight: number;
  value: number;
  description: string;
}

export default function MaturityCalculator() {
  const [dimensions, setDimensions] = useState<MaturityDimension[]>([
    {
      id: 'processos',
      label: 'Maturidade de Processos',
      weight: 30,
      value: 45,
      description: 'Mapeamento e padronização'
    },
    {
      id: 'tecnologia',
      label: 'Infraestrutura Tecnológica',
      weight: 25,
      value: 60,
      description: 'Sistemas e infraestrutura digital'
    },
    {
      id: 'equipe',
      label: 'Capacitação da Equipe',
      weight: 25,
      value: 35,
      description: 'Conhecimento em automação'
    },
    {
      id: 'governanca',
      label: 'Governança Digital',
      weight: 20,
      value: 50,
      description: 'Transparência e políticas digitais'
    }
  ]);

  const [score, setScore] = useState(0);
  const [level, setLevel] = useState('');
  const [levelClass, setLevelClass] = useState('');
  const [economy, setEconomy] = useState(0);
  const [roadmap, setRoadmap] = useState<string[]>([]);

  const updateDimension = (id: string, value: number) => {
    setDimensions(prev => 
      prev.map(dim => 
        dim.id === id ? { ...dim, value } : dim
      )
    );
  };

  const calculateMaturity = () => {
    const calculatedScore = Math.round(
      dimensions.reduce((acc, dim) => acc + (dim.value * dim.weight / 100), 0)
    );
    
    setScore(calculatedScore);

    // Classification
    let newLevel = '';
    let newLevelClass = '';
    if (calculatedScore >= 75) {
      newLevel = 'Otimizado';
      newLevelClass = 'bg-green-100 text-green-800';
    } else if (calculatedScore >= 50) {
      newLevel = 'Avançado';
      newLevelClass = 'bg-blue-100 text-blue-800';
    } else if (calculatedScore >= 25) {
      newLevel = 'Intermediário';
      newLevelClass = 'bg-yellow-100 text-yellow-800';
    } else {
      newLevel = 'Inicial';
      newLevelClass = 'bg-red-100 text-red-800';
    }
    
    setLevel(newLevel);
    setLevelClass(newLevelClass);

    // Potential savings (based on research data)
    const calculatedEconomy = Math.round(calculatedScore * 5000);
    setEconomy(calculatedEconomy);

    // Generate roadmap
    generateRoadmap(newLevel);
  };

  const generateRoadmap = (currentLevel: string) => {
    let newRoadmap: string[] = [];
    
    switch (currentLevel) {
      case 'Inicial':
        newRoadmap = [
          'Mapear e documentar processos críticos',
          'Capacitar equipe básica em RPA',
          'Desenvolver políticas de governança digital'
        ];
        break;
      case 'Intermediário':
        newRoadmap = [
          'Implementar piloto de automação',
          'Estabelecer centro de excelência',
          'Desenvolver métricas de monitoramento'
        ];
        break;
      case 'Avançado':
        newRoadmap = [
          'Expandir automação para processos complexos',
          'Implementar metodologia BRIDGE',
          'Desenvolver capacidades de IA'
        ];
        break;
      default:
        newRoadmap = [
          'Otimizar processos automatizados existentes',
          'Implementar automação cognitiva avançada',
          'Liderar benchmarks do setor'
        ];
    }
    
    setRoadmap(newRoadmap);
  };

  useEffect(() => {
    calculateMaturity();
  }, [dimensions]);

  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (score / 100) * circumference;

  return (
    <section id="calculadora" className="py-20 bg-muted" data-testid="calculadora-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4" data-testid="calculadora-title">
            Calculadora de Maturidade Digital
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avalie a prontidão para RPA com metodologia científica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Controls */}
          <Card className="shadow-lg" data-testid="calculator-controls">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 font-serif">Dimensões de Avaliação</h3>
              
              {dimensions.map((dimension) => (
                <div key={dimension.id} className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-medium text-foreground">{dimension.label}</label>
                    <span className="text-primary font-semibold">{dimension.weight}%</span>
                  </div>
                  
                  <Slider
                    value={[dimension.value]}
                    onValueChange={(value) => updateDimension(dimension.id, value[0])}
                    max={100}
                    step={1}
                    className="w-full"
                    data-testid={`slider-${dimension.id}`}
                  />
                  
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>0%</span>
                    <span data-testid={`value-${dimension.id}`}>{dimension.value}%</span>
                    <span>100%</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2">{dimension.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Results Display */}
          <Card className="shadow-lg" data-testid="calculator-results">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 font-serif">Resultado da Avaliação</h3>
              
              {/* Maturity Gauge */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <svg width="200" height="200" className="transform -rotate-90">
                    <circle cx="100" cy="100" r="80" stroke="#f1f5f9" strokeWidth="12" fill="none"/>
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="80" 
                      stroke="#004085" 
                      strokeWidth="12" 
                      fill="none" 
                      strokeLinecap="round" 
                      className="gauge-fill transition-all duration-500 ease-in-out"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      data-testid="gauge-circle"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary" data-testid="score">{score}%</div>
                      <div className="text-sm text-muted-foreground">Maturidade</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level and Details */}
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Nível de Maturidade:</span>
                    <Badge className={levelClass} data-testid="nivel">{level}</Badge>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Economia Potencial/Ano:</span>
                    <span className="text-secondary font-bold" data-testid="economia">
                      R$ {economy.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="font-medium mb-2">Próximos Passos Recomendados:</div>
                  <div className="text-sm space-y-1" data-testid="roadmap">
                    {roadmap.map((step, index) => (
                      <div key={index}>• {step}</div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
