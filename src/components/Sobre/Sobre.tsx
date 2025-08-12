// components/Sobre/Sobre.tsx
import { Button } from "@/components/ui/button";
import { ChevronRight, MessageSquare, Mail } from "lucide-react";

interface SobreProps {
  imagem: string;
  titulo: string;
  texto: string[];
  ctaPrimario: string;
  ctaSecundario: string;
  whatsappNumber: string; // Adicione esta prop
}

export function Sobre({
  imagem,
  titulo,
  texto,
  ctaPrimario,
  ctaSecundario,
  whatsappNumber // Receba o número do WhatsApp
}: SobreProps) {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const scrollToContato = () => {
    const contatoSection = document.getElementById('contato');
    if (contatoSection) {
      // Rolamos até o formulário e depois um pouco mais para cima para melhor visualização
      contatoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-16 bg-gray-50 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Imagem - 50% (totalmente limpa) */}
          <div className="lg:w-1/2 w-full">
            <img
              src={imagem}
              alt={titulo}
              className="h-auto object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>

          {/* Conteúdo - 50% com card sutil */}
          <div className="lg:w-1/2 w-full">
            <div className="border border-teal-200 rounded-lg p-6 space-y-6 bg-white shadow-sm">
              <div className="space-y-2">
                <span className="text-teal-600 font-medium uppercase tracking-wider text-sm">
                  Conheça nossa história
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  {titulo}
                </h2>
              </div>

              {texto.map((paragrafo, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragrafo}
                </p>
              ))}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex-1"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {ctaPrimario}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button 
                  onClick={scrollToContato}
                  variant="outline" 
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {ctaSecundario}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}