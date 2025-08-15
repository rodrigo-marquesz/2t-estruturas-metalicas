import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface Project {
  title: string;
  image: string;
  fullSizeImage?: string;
}

interface GalleryProps {
  projects: Project[];
}

export function Gallery({ projects }: GalleryProps) {
  return (
    <section id="galeria" className="py-12 bg-[#0f103d]">
      <div className="container mx-auto px-4">
        {/* Cabeçalho com texto claro */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white font-montserrat">
            Nossos Projetos
          </h2>
        </div>

        {/* Carrossel com estilo dark */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              duration: 50,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {projects.map((project, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full overflow-hidden border border-gray-700 flex flex-col group bg-gray-800 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                        loading="lazy"
                      />
                    </div>
                    
                    <CardContent className="p-4 flex flex-col items-center">
                      <h3 className="font-medium text-white text-center font-montserrat">
                        {project.title}
                      </h3>
                      
                      <a 
                        href={project.fullSizeImage || project.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full mt-3"
                      >
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full bg-teal-500 border-none ho"
                        >
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Ver em tela cheia
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Rodapé com botão destacado */}
        <div className="text-center mt-8">
          <Button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-montserrat font-semibold shadow-lg hover:shadow-teal-500/20 transition-all"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}