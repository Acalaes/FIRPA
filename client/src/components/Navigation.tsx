import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-primary font-serif" data-testid="logo">FIRPA</div>
            <div className="hidden md:block text-sm text-muted-foreground">Framework Inteligente de RPA</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('framework')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-framework"
            >
              Framework
            </button>
            <button 
              onClick={() => scrollToSection('calculadora')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-calculadora"
            >
              Avaliação
            </button>
            <button 
              onClick={() => scrollToSection('metodologia')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-metodologia"
            >
              Metodologia
            </button>
            <button 
              onClick={() => scrollToSection('casos')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-casos"
            >
              Casos
            </button>
            <button 
              onClick={() => scrollToSection('ahp-tool')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-ahp"
            >
              AHP
            </button>
            <Button 
              onClick={() => scrollToSection('contato')} 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="nav-contato"
            >
              Contato
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="text-foreground" /> : <Menu className="text-foreground" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('framework')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-framework"
              >
                Framework
              </button>
              <button 
                onClick={() => scrollToSection('calculadora')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-calculadora"
              >
                Avaliação
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-metodologia"
              >
                Metodologia
              </button>
              <button 
                onClick={() => scrollToSection('casos')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-casos"
              >
                Casos
              </button>
              <button 
                onClick={() => scrollToSection('ahp-tool')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-ahp"
              >
                Ferramenta AHP
              </button>
              <Button 
                onClick={() => scrollToSection('contato')} 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
                data-testid="mobile-nav-contato"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
