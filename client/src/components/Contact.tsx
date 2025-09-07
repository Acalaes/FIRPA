import { Mail, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contato" className="py-20 bg-background" data-testid="contato-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4" data-testid="contato-title">
          Transforme sua Organização
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Automação inteligente com metodologia validada
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            data-testid="button-contato-direto"
          >
            <a href="mailto:acalaes@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contato Direto
            </a>
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('calculadora')} 
            className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors"
            data-testid="button-nova-avaliacao"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Nova Avaliação
          </Button>
        </div>
      </div>
    </section>
  );
}
