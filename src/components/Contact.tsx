import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <section
      id="contato"
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-dark text-sm font-bold mb-4">
            FALE CONOSCO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Pronto para elevar sua infraestrutura?
          </h2>
          <p className="text-lg text-white/80">
            Entre em contato com nossa equipe e descubra como podemos
            transformar a TI da sua empresa.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-base">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-dark" />
            </div>
            <p className="text-white/60 text-sm font-medium mb-1">E-mail</p>
            <p className="text-white font-bold text-lg">
              sentinela@grpgd.com.br
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-base">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-dark" />
            </div>
            <p className="text-white/60 text-sm font-medium mb-1">Celular</p>
            <p className="text-white font-bold text-lg">+55 11 9 9847-8411</p>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="accent"
            size="xl"
            className="cursor-pointer"
            onClick={() => {
              navigate("/proposta?assunto=proposta");
            }}
          >
            Solicitação de Proposta.
          </Button>
        </div>
      </div>
    </section>
  );
};
