import { ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-datacenter.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Datacenter Tier-3 GD Tecnologia"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          {/* 🚀 LOGO AUMENTADA SEM ALTERAR OS TEXTOS ABAIXO */}
          <div className="inline-block w-32 md:w-48 mb-2">
            <img
              src="/logo.png"
              alt="GD Tecnologia"
              className="w-full h-auto object-contain"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance">
            Infraestrutura{" "}
            <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              crítica
            </span>{" "}
            para o seu negócio.
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Suporte, tunning, manutenção preventiva, Cloud e Vms conforme a sua
            necessidade. Teste de restauração de backups, apoio na sustentação
            da operação, plataformas Linux e Windows, Oracle, SQL Server ,
            Postgres, ArcServer VEEAM, BackupExec.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="accent" size="xl">
              <a href="#servicos">
                Conheça nossos serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline-light"
              size="xl"
              className="cursor-pointer"
              onClick={() => navigate("/proposta?assunto=especialista")}
            >
              Fale com Especialista
            </Button>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl">
            {[
              { value: "Tier-3", label: "Certificação" },
              { value: "24/7", label: "Monitoramento" },
              { value: "100%", label: "Redundância" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-accent">
                  {s.value}
                </p>
                <p className="text-sm text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
