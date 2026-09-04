import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Datacenter } from "@/components/Datacenter";
import { Services } from "@/components/Services";
import { Expertise } from "@/components/Expertise";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <h1 className="sr-only">GD Tecnologia da Informação - Datacenter Tier-3, Hospedagem e Serviços Gerenciados</h1>
        <Hero />
        <About />
        <Datacenter />
        <Services />
        <Expertise />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
