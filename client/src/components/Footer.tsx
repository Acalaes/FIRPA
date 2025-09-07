import { Linkedin, Users, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold font-serif mb-4" data-testid="footer-logo">FIRPA</div>
          <p className="text-sm opacity-90 mb-4">
            © 2024 FIRPA - Baseado em pesquisa apresentada no EnANPAD 2025
          </p>
          <p className="text-sm opacity-75" data-testid="footer-author">
            Desenvolvido por <strong>Alexandre Calaes</strong> | 
            Mestrado Profissional em Administração - UDESC/ESAG | 
            <a href="mailto:acalaes@gmail.com" className="hover:underline">acalaes@gmail.com</a>
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="opacity-75 hover:opacity-100 transition-opacity" data-testid="footer-linkedin">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="opacity-75 hover:opacity-100 transition-opacity" data-testid="footer-researchgate">
              <Users className="h-5 w-5" />
            </a>
            <a href="#" className="opacity-75 hover:opacity-100 transition-opacity" data-testid="footer-academic">
              <GraduationCap className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
