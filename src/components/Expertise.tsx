import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = {
  category: string;
  color: string;
  groups: { title: string; items: string[] }[];
};

const expertise: Item[] = [
  {
    category: "Banco de Dados ( Oracle e Microsoft SQL )",
    color: "from-primary to-primary-glow",
    groups: [
      {
        title: "Gestão & Performance",
        items: [
          "Reorg",
          "Tunning",
          "Updates",
          "Check Integridade",
          "Aferição",
          "Revisão dos Logs",
        ],
      },
      {
        title: "Alta Disponibilidade",
        items: [
          "Monitoramento",
          "Check Integridade",
          "Compressão de Objetos",
          "Manutenção de Tabelas e Índices",
          "Bancos de Dados em Cluster e HA",
        ],
      },
      {
        title: "Recuperação",
        items: [
          "Logs",
          "Disaster Recover",
          "Disaster Recover",
          "Site Recover",
          "Separação de Objetos para Redução de Fragmentação",
        ],
      },
    ],
  },
  {
    category: "Hardware e Equipamentos",
    color: "from-accent to-yellow-500",
    groups: [
      {
        title: "Configuração & Performace",
        items: [
          "Atualizações",
          "Redes e Periféricos",
          "Manutenção Preventiva",
          "Manutenção Corretiva",
        ],
      },
      {
        title: "Alta Disponibilidade",
        items: [
          "Sizing de Investimentos",
          "Desenvolvimento de Projetos",
          " Soluções de Cluster Linux ou Windows",
        ],
      },
      {
        title: "Monitoramento",
        items: [
          "Aferição de Logs",
          "Discos",
          "Ventiladores",
          "Baterias",
          "Fontes",
        ],
      },
    ],
  },
  {
    category: "Sistema Operacional ( Linux e Windows )",
    color: "from-primary-deep to-primary",
    groups: [
      {
        title: "Configuração & Gestão",
        items: [
          "Atualizações",
          "Higienização",
          "Updates",
          "Configuração aprimorada",
        ],
      },
      {
        title: "Manutenção",
        items: [
          "Manutenção preventiva",
          "Manutenção corretiva",
          "Aplicação de Patches",
          "Clusters",
        ],
      },
      {
        title: "Aferição de Recursos e Consumo",
        items: ["Processador", "Discos", "Rede", "Memória"],
      },
    ],
  },
  {
    category: "Backup",
    color: "from-primary-glow to-accent",
    groups: [
      {
        title: "Soluções",
        items: ["CA Arcserver", "SYMANTEC BackupExec", "VEEAM"],
      },
      { title: "Manutenção", items: ["Atualizações", "Aplicação de Patches"] },
    ],
  },
];

export const Expertise = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="expertise" className="py-24 bg-secondary/40">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-primary-deep text-sm font-semibold mb-4">
            ESPECIALIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-deep mb-4 text-balance">
            Especialidade Técnica Aprofundada
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissionais certificados com domínio das principais tecnologias do
            mercado corporativo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {expertise.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="bg-card rounded-2xl shadow-elegant overflow-hidden border border-border/50"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-base"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2 h-12 rounded-full bg-gradient-to-b ${item.color}`}
                    />
                    <h3 className="text-xl font-bold text-primary-deep">
                      {item.category}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-base ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 grid md:grid-cols-3 gap-6 animate-fade-in-up">
                    {item.groups.map((g, i) => (
                      <div key={i} className="bg-secondary/60 rounded-xl p-5">
                        <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">
                          {g.title}
                        </h4>
                        <ul className="space-y-2">
                          {g.items.map((it, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
