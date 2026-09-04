import {
  Server,
  ShieldCheck,
  Database,
  GitBranch,
  Activity,
  LifeBuoy,
  Cloud,
  Package,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import drCloudDiagram from "../assets/DRCLOUD.jpeg";
// Importação das novas imagens
import dr1Diagram from "../assets/Dr1.png";
import dr2Diagram from "../assets/Dr2.png";

const services = [
  {
    icon: Database,
    title: "Tunning e Suporte em Três Camadas",
    desc: "Sistema operacional, Banco de Dados e Infra estrutura.",
  },
  {
    icon: ShieldCheck,
    title: "Site Recover",
    desc: "Soluções completas para garantir a continuidade do seu negócio.",
  },
  {
    icon: Cloud,
    title: "Provedor de VMs",
    desc: "Infraestrutura virtualizada escalável e sob medida para sua operação.",
  },
  {
    icon: Activity,
    title: "Projetos SIZING",
    desc: "Dimensionamento técnico preciso para sua infraestrutura.",
  },
  {
    icon: GitBranch,
    title: "Alta Disponibilidade",
    desc: "Arquiteturas HA com cluster, mirror, Always On e LogShipping.",
  },
  {
    icon: Server,
    title: "Disaster Recovery (DR)",
    desc: "Planejamento e implantação de recuperação de desastres.",
  },
  {
    icon: LifeBuoy,
    title: "Manutenção & Patches",
    desc: "Manutenção preventiva, corretiva, atualizações e aplicação de patches.",
  },
  {
    icon: Package,
    title: "Venda de Aplicativos",
    desc: "Microsoft, Oracle, CA, VEEAM e SYMANTEC com suporte completo.",
  },
];

export const Services = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    if (lightbox) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox]);

  return (
    <>
      {/* Seção Principal de Serviços */}
      <section id="servicos" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-primary-deep text-sm font-semibold mb-4">
              SERVIÇOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-deep mb-4 text-balance">
              Soluções Completas em TI
            </h2>
            <p className="text-lg text-muted-foreground">
              Do dimensionamento à operação contínua, entregamos serviços que
              sustentam o seu negócio, com foco principal no suporte e tuning de
              bancos de dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-gradient-dark rounded-2xl p-8 hover:shadow-premium transition-smooth"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary-glow/10 group-hover:bg-accent/10 transition-smooth" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-base">
                    <s.icon className="w-7 h-7 text-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-dark-foreground/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Diagramas Técnicos Adicionais */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <button
              type="button"
              onClick={() => setLightbox(dr1Diagram)}
              className="text-left block w-full border border-muted rounded-2xl overflow-hidden bg-gradient-dark p-4 cursor-pointer hover:shadow-premium transition-base"
            >
              <img
                src={dr1Diagram}
                alt="Diagrama Técnico DR 1"
                className="w-full h-auto"
              />
            </button>
            <button
              type="button"
              onClick={() => setLightbox(dr2Diagram)}
              className="text-left block w-full border border-muted rounded-2xl overflow-hidden bg-gradient-dark p-4 cursor-pointer hover:shadow-premium transition-base"
            >
              <img
                src={dr2Diagram}
                alt="Diagrama Técnico DR 2"
                className="w-full h-auto"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Bloco DR CLOUD DC */}
      <section className="pb-24 bg-background">
        <div className="container">
          <div className="border border-muted rounded-2xl overflow-hidden bg-gradient-dark shadow-sm">
            <div className="relative flex items-center justify-center bg-slate-950/40 border-b border-muted/30">
              <img
                src={drCloudDiagram}
                alt="DR Cloud DC - Disaster Recovery na Nuvem"
                className="w-full object-cover drop-shadow-md"
                loading="lazy"
              />
            </div>

            <div className="p-8 lg:p-12">
              <div className="w-full">
                <h3 className="font-mono text-2xl md:text-3xl tracking-wider text-sky-400 mb-4 font-bold">
                  DR CLOUD DC
                </h3>
                <p className="text-base text-dark-foreground/80 leading-relaxed mb-4">
                  <strong className="text-dark-foreground font-semibold">
                    "DR Cloud DC"
                  </strong>{" "}
                  refere-se a{" "}
                  <strong className="text-sky-400 font-semibold">
                    Disaster Recovery (DR) in the Cloud
                  </strong>{" "}
                  — Recuperação de Desastres na Nuvem para um Data Center (DC)
                  físico ou local.
                </p>
                <p className="text-base text-dark-foreground/70 leading-relaxed mb-8">
                  É uma estratégia de segurança e continuidade de negócios que
                  usa a computação em nuvem para proteger dados e aplicativos
                  contra falhas e ataques cibernéticos.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="w-3 h-[2px] bg-sky-400 mt-2.5 shrink-0" />
                    <p className="text-sm text-dark-foreground/80 leading-relaxed">
                      <strong className="text-dark-foreground font-medium">
                        DC (Data Center):
                      </strong>{" "}
                      Estrutura física local onde a empresa mantém seus
                      servidores originais.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-3 h-[2px] bg-sky-400 mt-2.5 shrink-0" />
                    <p className="text-sm text-dark-foreground/80 leading-relaxed">
                      <strong className="text-dark-foreground font-medium">
                        Cloud (Nuvem):
                      </strong>{" "}
                      Ambiente escalável remoto que assume a operação em
                      contingência.
                    </p>
                  </div>
                </div>

                <h4 className="font-mono text-xs tracking-wider text-sky-400 mb-3 uppercase font-bold">
                  Principais Benefícios
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <p className="text-sm text-dark-foreground/70">
                    <strong className="text-dark-foreground font-medium">
                      Custo-benefício:
                    </strong>{" "}
                    Reduz gastos com infraestruturas físicas sobressalentes
                    ociosas.
                  </p>
                  <p className="text-sm text-dark-foreground/70">
                    <strong className="text-dark-foreground font-medium">
                      Rápida Recuperação:
                    </strong>{" "}
                    Retorno operacional rápido minimizando impactos financeiros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-base"
            aria-label="Fechar imagem"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt="Diagrama ampliado"
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
