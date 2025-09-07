import { Calculator, Book, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-background to-muted py-20" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            <GraduationCap className="mr-2 h-4 w-4" />
            Pesquisa EnANPAD 2025 • UDESC/ESAG
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-serif mb-6" data-testid="hero-title">
            FIRPA - Framework Inteligente de 
            <span className="text-primary"> RPA para Administração Pública</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="hero-description">
            Metodologia científica para avaliar e implementar RPA no setor público.
            Foco em transparência, auditabilidade e bem-estar laboral.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('calculadora')} 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              data-testid="button-avaliar-maturidade"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Avaliar Maturidade Digital
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('framework')} 
              className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors"
              data-testid="button-conhecer-framework"
            >
              <Book className="mr-2 h-5 w-5" />
              Conhecer Framework
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
