import React from "react";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h2>Especialistas em Calhas e Materiais de Construção</h2>
        <p>Qualidade, durabilidade e atendimento rápido para sua obra.</p>
        <button onClick={() => window.location.href = "#contact"}>
          Solicitar Orçamento
        </button>
      </div>
    </section>
  );
}
