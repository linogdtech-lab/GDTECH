import { Server, Shield, Activity, Database, Zap, HardDrive, Cpu, Network, FileText, LifeBuoy, Power, Layers } from "lucide-react";

const features = [
  { icon: Shield, title: "Tier-3 Certificado", desc: "Datacenter TR3 com infraestrutura redundante e alta confiabilidade." },
  { icon: Network, title: "Links Redundantes", desc: "Conectividade com os melhores provedores ISP e baixa latência." },
  { icon: Power, title: "Geradores e Nobreaks", desc: "Energia redundante com geradores e nobreaks em alta disponibilidade." },
  { icon: Zap, title: "Proteção Elétrica", desc: "Fornecimento elétrico em dois canais nos racks com sistemas antissurto." },
  { icon: HardDrive, title: "Discos de Alto Desempenho", desc: "Velocidades de 100MB/s a 7000MB/s para cada necessidade." },
  { icon: Cpu, title: "Processadores Top", desc: "Hardware de última geração para cargas críticas." },
  { icon: Layers, title: "VMs Linux & Windows", desc: "Ambientes virtualizados em múltiplas plataformas." },
  { icon: Database, title: "Bancos de Dados", desc: "Oracle, SQL Server, PostgreSQL e MySQL gerenciados." },
  { icon: Activity, title: "Monitoramento 24/7", desc: "Acompanhamento contínuo da saúde da infraestrutura." },
  { icon: LifeBuoy, title: "Suporte Especializado", desc: "Equipe técnica pronta para atender a qualquer momento." },
  { icon: FileText, title: "Relatórios Diários", desc: "Status detalhado da operação enviado todos os dias." },
  { icon: Server, title: "Infraestrutura Robusta", desc: "Arquitetura preparada para missão crítica." },
];

export const Datacenter = () => {
  return (
    <section id="datacenter" className="py-24 bg-secondary/40">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-primary-deep text-sm font-semibold mb-4">
            INFRAESTRUTURA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-deep mb-4 text-balance">
            Nosso Datacenter de Alta Performance
          </h2>
          <p className="text-lg text-muted-foreground">
            Infraestrutura certificada e preparada para suportar as operações mais exigentes do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-gradient-card rounded-xl p-6 shadow-elegant hover:shadow-premium transition-base border border-border/50 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-base">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-primary-deep mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
