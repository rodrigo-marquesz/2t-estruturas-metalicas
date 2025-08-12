// components/Header/Header.tsx
import { useState } from 'react';
import { Menu, X, Home, Images, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo com texto sempre visível */}
          <div className="flex items-center space-x-3">
            <img 
              src="/2T_logo.png" 
              alt="2T Estruturas" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-montserrat font-semibold text-lg">
              2T Estruturas
            </span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollTo('sobre')}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group py-2"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollTo('galeria')}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group py-2"
            >
              Galeria
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollTo('contato')}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group py-2"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Menu Mobile Compacto */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            {/* Menu Dropdown Compacto */}
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 w-full bg-gray-900 border-t border-gray-700 shadow-xl z-50">
                <div className="flex flex-col py-2">
                  <button 
                    onClick={() => scrollTo('sobre')}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <Home className="h-5 w-5" />
                    <span>Sobre</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollTo('galeria')}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <Images className="h-5 w-5" />
                    <span>Galeria</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollTo('contato')}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Contato</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}