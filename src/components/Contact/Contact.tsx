// components/Contact/Contact.tsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail,
  Instagram,
  MessageSquare,
  Send
} from "lucide-react";

export function Contact() {
  const contactInfo = {
    phone: "+5511999999999",
    whatsapp: "+5511999999999",
    email: "661ecfd69caaa0b97382b595e243a7c0",
    instagram: "https://instagram.com/2testruturas",
    workingHours: "Seg-Sex: 8h-18h | Sáb: 8h-12h"
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/" + contactInfo.email, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          _subject: "Novo contato - 2T Estruturas"
        })
      });
      
      if (response.ok) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Ocorreu um erro. Por favor, tente novamente ou nos chame no WhatsApp.');
    }
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">
            Contato
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Solicite um Orçamento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato para conversarmos sobre seu projeto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cards de Informações */}
          <div className="space-y-6">
            {/* Card de Telefone */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Telefone</h3>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-blue-600 hover:text-blue-700 text-lg"
                    >
                      {contactInfo.phone.replace('+55', '')}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card de WhatsApp */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">WhatsApp</h3>
                    <a 
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-lg"
                    >
                      Enviar mensagem
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card de Instagram */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">Instagram</h3>
                    <a 
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 text-lg"
                    >
                      @2testruturas
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <Card className="h-full border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <span>Formulário de Contato</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Detalhes do Projeto
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva seu projeto..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-700 mt-2"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}