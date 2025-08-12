import { Header } from "./components/Header/Header";
import { Sobre } from "./components/Sobre/Sobre";
import { Gallery } from "./components/Gallery/Gallery";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "./index.css";
import { sobreContent } from "./data/landingContent";
import { portfolioContent } from "./data/portfolioContent";

export default function App() {
  return (
    <>
      <Header />
      <Sobre {...sobreContent} />
      <Gallery projects={portfolioContent.projects} />
      <Contact />
      <Footer />
    </>
  );
}
