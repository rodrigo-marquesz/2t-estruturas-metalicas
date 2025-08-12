// components/Footer/Footer.tsx
import { Phone, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        {/* Conteúdo Principal */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img 
            src="/2T_logo.png" 
            alt="2T Estruturas" 
            className="h-12 mb-4"
          />
          
          {/* Contatos */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a 
              href="tel:+5511999999999" 
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <Phone className="h-5 w-5" />
              <span>(11) 99999-9999</span>
            </a>
            
            <a 
              href="mailto:contato@2testruturas.com" 
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span>contato@2testruturas.com</span>
            </a>
            
            <a 
              href="https://instagram.com/2testruturas" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <Instagram className="h-5 w-5" />
              <span>@2testruturas</span>
            </a>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 my-4"></div>

        {/* Direitos Autorais */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} 2T Estruturas Metálicas
        </p>
      </div>
    </footer>
  );
}