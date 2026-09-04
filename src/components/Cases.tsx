import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import caseLogistica from "../assets/case-logistica.jpg";
import caseEletronica from "../assets/case-eletronica.jpg";
import caseMidia from "../assets/case-midia.jpg";
import caseTelecom from "../assets/case-telecom.jpg";
import caseAutopecas from "../assets/case-autopecas.jpg";
import caseAlimentos from "../assets/case-alimentos.jpg";
import caseVarejo from "../assets/case-varejo.jpg";
import caseDistribuicao from "../assets/case-distribuicao.jpg";
import caseClimatizacao from "../assets/case-climatizacao.jpg";
import caseQuimica from "../assets/case-quimica.jpg";
import caseMotopecas from "../assets/case-motopecas.jpg";
import caseEmbalagens from "../assets/case-embalagens.jpg";

const cases = [
  { img: caseLogistica, label: "Transporte & Logística" },
  { img: caseEletronica, label: "Indústria Eletrônica" },
  { img: caseMidia, label: "Mídia & Radiodifusão" },
  { img: caseTelecom, label: "Telecom & Datacenter" },
  { img: caseAutopecas, label: "Peças Automotivas & Diesel" },
  { img: caseAlimentos, label: "Indústria Alimentícia" },
  { img: caseVarejo, label: "Varejo" },
  { img: caseDistribuicao, label: "Distribuição & Atacado" },
  { img: caseClimatizacao, label: "Climatização" },
  { img: caseQuimica, label: "Indústria Química" },
  { img: caseMotopecas, label: "Moto Peças" },
  { img: caseEmbalagens, label: "Embalagens Plásticas" },
];


export const Cases = () => {
  const navigate = useNavigate();
  return (

    <section id="cases" className="py-24 bg-dark">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-5 text-balance">
            NOSSOS <span className="text-accent">CLIENTES</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-base text-dark-foreground/70 leading-relaxed">
            Impulsionando a inovação tecnológica em diversos setores da
            indústria e serviços com soluções de infraestrutura robustas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3]"
            >
              <img
                src={c.img}
                alt={`Cliente do setor de ${c.label}`}
                width={800}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-white/90">
                {c.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-foreground mb-4 text-balance">
            Pronto para ser o próximo caso de{" "}
            <span className="text-accent">sucesso?</span>
          </h3>
          <p className="text-dark-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Nossa equipe de especialistas está preparada para desenhar a
            arquitetura ideal para o desafio tecnológico da sua empresa.
          </p>
          <Button
            variant="accent"
            size="lg"
            className="cursor-pointer"
            onClick={() => {
              navigate("/proposta?assunto=consultoria");
            }}

          >
            Consultoria Técnica
          </Button>
        </div>
      </div>
    </section>
  );
};
