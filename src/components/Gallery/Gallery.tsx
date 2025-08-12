// components/Portfolio/Gallery.tsx
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  fullSizeImage?: string; // Opcional: para uma imagem em maior resolução
}

interface GalleryProps {
  projects: Project[];
}

export function Gallery({ projects }: GalleryProps) {
  return (
    <section id="galeria" className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">
            Nossos Projetos
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Qualidade em Estruturas Metálicas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira nossos trabalhos recentes e a excelência que aplicamos em cada projeto.
          </p>
        </div>

        {/* Carrossel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 flex flex-col">
                    {/* Container da imagem com proporção 16:9 */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 backdrop-blur-sm border-gray-200">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      </div>
                      
                      {/* Botão que abre em nova guia */}
                      <a 
                        href={project.fullSizeImage || project.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver detalhes
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900" />
              <CarouselNext className="static translate-y-0 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900" />
            </div>
          </Carousel>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-6">Gostou do que viu? Vamos conversar sobre seu projeto.</p>
          <Button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-600 hover:bg-teal-700"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}
